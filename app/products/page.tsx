import { Suspense } from 'react'
import db from '@/db'
import { List, Promotion, PromotionSkeleton } from '@/app/products/ui'
import { getPromotion } from '@/app/products/data'
 
function Header() {}
 
async function ProductList() {}
 
// Dynamic component (streamed)
async function PromotionContent() {
  const promotion = await getPromotion()
  return <Promotion data={promotion} />
}
 
export default async function Page() {
  return (
    <>
      <Suspense fallback={<PromotionSkeleton />}>
        <PromotionContent />
      </Suspense>
      <Header />
      <ProductList />
    </>
  )
}