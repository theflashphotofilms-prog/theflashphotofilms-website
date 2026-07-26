import { NextRequest } from 'next/server';
import { getPool, initDiscountCouponsTable } from '../../../lib/db';

// Helper function to generate a cryptographically secure random coupon code
function generateCouponCode(): string {
  // Generate a random number securely
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randomNumbers = (array[0] % 9000) + 1000; // Generate 4 random digits
  return `FLASH10-${randomNumbers}`;
}

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

    const { name, email, mobile, action } = await request.json();
    const pool = getPool();

    if (action === 'create') {
      // Validate inputs
      if (!name || !email || !mobile) {
        return Response.json(
          { error: 'Name, email, and mobile number are required' },
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

      // Check if email or mobile already exists in the database
      const checkExistingQuery = `
        SELECT id FROM discount_coupons 
        WHERE email = $1 OR mobile = $2
      `;
      const existingResult = await pool.query(checkExistingQuery, [email, mobile]);

      if (existingResult.rows.length > 0) {
        return Response.json(
          { error: 'A coupon has already been issued for this email or mobile number' },
          { status: 409 }
        );
      }

      // Create new coupon
      const couponCode = generateCouponCode();
      const now = new Date();
      const expiresAt = new Date(now);
      expiresAt.setDate(expiresAt.getDate() + 90); // 90 days from now

      const insertQuery = `
        INSERT INTO discount_coupons (name, email, mobile, coupon_code, expires_at, used)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING id
      `;
      
      const result = await pool.query(insertQuery, [name, email, mobile, couponCode, expiresAt, false]);

      return Response.json({ 
        message: 'Coupon created successfully', 
        couponCode: couponCode,
        expiresAt: expiresAt.toISOString()
      });
    } else if (action === 'validate') {
      const { couponCode } = await request.json();

      if (!couponCode) {
        return Response.json(
          { error: 'Coupon code is required' },
          { status: 400 }
        );
      }

      // Query the database for the coupon
      const query = `
        SELECT id, name, email, mobile, coupon_code, created_at, expires_at, used 
        FROM discount_coupons 
        WHERE coupon_code = $1
      `;
      const result = await pool.query(query, [couponCode]);
      
      if (result.rows.length === 0) {
        return Response.json(
          { error: 'Invalid coupon code' },
          { status: 404 }
        );
      }

      const coupon = result.rows[0];
      
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

      return Response.json({
        valid: true,
        discount: 10, // 10% discount
        couponCode: coupon.coupon_code,
        expiresAt: coupon.expires_at
      });
    } else {
      return Response.json(
        { error: 'Invalid action' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing coupon request:', error);
    return Response.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Initialize the discount coupons table if it doesn't exist
    await initDiscountCouponsTable();
    
    const pool = getPool();
    
    // Return a list of all coupons (for admin purposes only in a real app)
    // In a production app, this should be protected with authentication
    const query = 'SELECT id, name, email, mobile, coupon_code, created_at, expires_at, used FROM discount_coupons ORDER BY created_at DESC LIMIT 100';
    const result = await pool.query(query);
    
    return Response.json({ coupons: result.rows });
  } catch (error) {
    console.error('Error fetching coupons:', error);
    return Response.json(
      { error: 'Failed to fetch coupons' },
      { status: 500 }
    );
  }
}