import { sql } from './db'
 
export async function getUser(slug: string) {
  const [rows] = await sql`SELECT * FROM user WHERE slug = ${slug}`
  const user = rows[0]
 
  // Return only the public fields
  return {
    name: user.name,
  }
}