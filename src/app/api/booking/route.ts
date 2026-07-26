import { NextRequest } from 'next/server';
import { getPool, initDiscountCouponsTable } from '../../../lib/db';

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Helper function to validate mobile number format
function isValidMobile(mobile: string): boolean {
  const mobileRegex = /^[0-9+\-\s()]+$/;
  return mobileRegex.test(mobile) && mobile.length >= 10;
}

export async function POST(request: NextRequest) {
  try {
    // Initialize the discount coupons table if it doesn't exist
    await initDiscountCouponsTable();

    const {
      name,
      email,
      mobile,
      serviceType,
      date,
      message,
      couponCode
    } = await request.json();
    
    const pool = getPool();

    // Validate required fields
    if (!name || !email || !mobile || !serviceType) {
      return Response.json(
        { error: 'Name, email, mobile, and service type are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!isValidMobile(mobile)) {
      return Response.json(
        { error: 'Invalid mobile number format' },
        { status: 400 }
      );
    }

    let discountApplied = false;
    let discountPercentage = 0;

    // If coupon code is provided, verify and apply discount
    if (couponCode) {
      // Verify the coupon exists and is valid (not expired and not used)
      const couponQuery = `
        SELECT id, used, expires_at 
        FROM discount_coupons 
        WHERE coupon_code = $1
      `;
      const couponResult = await pool.query(couponQuery, [couponCode]);
      
      if (couponResult.rows.length === 0) {
        return Response.json(
          { error: 'Invalid coupon code' },
          { status: 404 }
        );
      }

      const coupon = couponResult.rows[0];
      
      if (coupon.used) {
        return Response.json(
          { error: 'Coupon already used' },
          { status: 409 }
        );
      }

      const now = new Date();
      const expiresAt = new Date(coupon.expires_at);
      if (now > expiresAt) {
        return Response.json(
          { error: 'Coupon expired' },
          { status: 410 }
        );
      }

      // If coupon is valid, apply discount and mark as used
      const updateCouponQuery = `
        UPDATE discount_coupons 
        SET used = true 
        WHERE coupon_code = $1
      `;
      await pool.query(updateCouponQuery, [couponCode]);
      
      discountApplied = true;
      discountPercentage = 10; // 10% discount
    }

    // Here we would normally save the booking to the database
    // For now, we'll just return a success response
    // In a real application, you would insert the booking into a bookings table
    
    return Response.json({
      message: 'Booking request submitted successfully',
      discountApplied,
      discountPercentage,
      ...(discountApplied && { couponCode })
    });
  } catch (error) {
    console.error('Error processing booking request:', error);
    return Response.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}