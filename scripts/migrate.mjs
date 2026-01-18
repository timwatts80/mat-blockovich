import { sql } from '@vercel/postgres';
import fs from 'fs';
import path from 'path';

async function runMigration() {
  try {
    const sqlContent = fs.readFileSync(
      path.join(process.cwd(), 'sql/create_submissions_table.sql'),
      'utf8'
    );
    
    await sql.query(sqlContent);
    console.log('✅ Database table created successfully!');
  } catch (error) {
    console.error('❌ Error creating table:', error);
    process.exit(1);
  }
}

runMigration();
