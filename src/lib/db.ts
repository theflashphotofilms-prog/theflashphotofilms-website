import { Pool } from 'pg';

// Initialize PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

/**
 * Initialize the discount registrations table if it doesn't exist
 */
export async function initDiscountRegistrationTable() {
  try {
    // Check if table exists
    const checkTableQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'discount_registrations'
      );
    `;
    
    const tableExistsResult = await pool.query(checkTableQuery);
    const tableExists = tableExistsResult.rows[0].exists;
    
    if (!tableExists) {
      // Create the table
      const createTableQuery = `
        CREATE TABLE discount_registrations (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          mobile_number VARCHAR(20) NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      
      await pool.query(createTableQuery);
      console.log('Discount registrations table created successfully');
    } else {
      console.log('Discount registrations table already exists');
    }
  } catch (error) {
    console.error('Error initializing discount registration table:', error);
    throw error;
  }
}

/**
 * Initialize the discount coupons table if it doesn't exist
 */
export async function initDiscountCouponsTable() {
  try {
    // Check if table exists
    const checkTableQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'discount_coupons'
      );
    `;
    
    const tableExistsResult = await pool.query(checkTableQuery);
    const tableExists = tableExistsResult.rows[0].exists;
    
    if (!tableExists) {
      // Create the table
      const createTableQuery = `
        CREATE TABLE discount_coupons (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          mobile VARCHAR(20) NOT NULL UNIQUE,
          coupon_code VARCHAR(50) NOT NULL UNIQUE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          expires_at TIMESTAMP NOT NULL,
          used BOOLEAN DEFAULT FALSE
        );
      `;
      
      await pool.query(createTableQuery);
      console.log('Discount coupons table created successfully');
    } else {
      console.log('Discount coupons table already exists');
    }
  } catch (error) {
    console.error('Error initializing discount coupons table:', error);
    throw error;
  }
}

/**
 * Get the database pool instance
 */
export function getPool() {
  return pool;
}

// OLD FILE - DEPRECATED
// This file has been deprecated as the system now uses Google Sheets instead of PostgreSQL
// All database operations have been moved to Google Sheets via Google Apps Script

// This file is kept for reference only and should not be imported anywhere
// All discount coupon operations now happen through Google Sheets
