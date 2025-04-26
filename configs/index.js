

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from '../configs/schema.js'
// const sql = neon('postgresql://neondb_owner:npg_zGu0Dtq1dcwi@ep-little-darkness-a4rb64jf-pooler.us-east-1.aws.neon.tech/Motocar?sslmode=require');
const sql =neon(import.meta.env.VITE_DRIZZLE_DATABASE_URL)
 export const db = drizzle(sql, {schema} );
