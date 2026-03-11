'use client'
 
import useSWR from 'swr'
 
export function Profile() {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  // The same SWR pattern you already know
  const { data, error } = useSWR('/api/user', fetcher)
 
  return '...'
}