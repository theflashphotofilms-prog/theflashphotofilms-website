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
 * Get the database pool instance
 */
export function getPool() {
  return pool;
}

// OLD FILE - DEPRECATED
// This file has been deprecated as the system now uses Google Sheets instead of PostgreSQL
// All database operations have been moved to Google Sheets via Google Apps Script

export {};
