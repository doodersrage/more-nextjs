import setupAnalyticsService from '../lib/my-analytics-service'
 
// 'NEXT_PUBLIC_ANALYTICS_ID' can be used here as it's prefixed by 'NEXT_PUBLIC_'.
// It will be transformed at build time to `setupAnalyticsService('abcdefghijk')`.
setupAnalyticsService(process.env.NEXT_PUBLIC_ANALYTICS_ID)
 
function HomePage() {
  return <h1>Hello World</h1>
}
 
export default HomePage