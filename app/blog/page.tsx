import BlogPost, { metadata } from '@/content/blog-post.mdx'
 
export default function Page() {
  console.log('metadata: ', metadata)
  //=> { author: 'John Doe' }
  return <BlogPost />
}