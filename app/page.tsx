// page that fetches data
import { draftMode } from 'next/headers'
 
async function getData() {
  const { isEnabled } = await draftMode()
 
  const url = isEnabled
    ? 'https://draft.example.com'
    : 'https://production.example.com'
 
  const res = await fetch(url)
 
  return res.json()
}
 
export default async function Page() {
  const { title, desc } = await getData()
 
  return (
    <main>
      <h1>{title}</h1>
      <p>{desc}</p>
    </main>
  )
}