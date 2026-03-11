import { NextRequest, NextResponse } from 'next/server'
import redirects from '@/app/redirects/redirects.json'
 
type RedirectEntry = {
  destination: string
  permanent: boolean
}
 
export function GET(request: NextRequest) {
  const pathname = request.nextUrl.searchParams.get('pathname')
  if (!pathname) {
    return new Response('Bad Request', { status: 400 })
  }
 
  // Get the redirect entry from the redirects.json file
  const redirect = (redirects as Record<string, RedirectEntry>)[pathname]
 
  // Account for bloom filter false positives
  if (!redirect) {
    return new Response('No redirect', { status: 400 })
  }
 
  // Return the redirect entry
  return NextResponse.json(redirect)
}