'use client'
 
import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics'
 
export function AnalyticsTracker() {
  useEffect(() => {
    trackPageView()
  }, [])
 
  return null
}