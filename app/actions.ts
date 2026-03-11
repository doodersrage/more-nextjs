'use server'
 
import { revalidateTag } from 'next/cache'
 
export async function createPost() {
  // Invalidate all data tagged with 'posts'
  revalidateTag('posts')
}