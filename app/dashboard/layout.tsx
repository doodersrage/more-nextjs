import { AnalyticsTracker } from '@/app/ui/analytics-tracker'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AnalyticsTracker />
      {children}
    </div>
  )
}