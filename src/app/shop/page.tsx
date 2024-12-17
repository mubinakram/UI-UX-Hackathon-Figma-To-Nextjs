import DeliveryServices from '@/components/DeliveryServices'
import PageHero from '@/components/PageHero'
import AllProducts from '@/components/shop/AllProducts'
import ProductFilterBar from '@/components/shop/ProductFilterBar'
import React from 'react'

function ShopPage() {
  return (
    <div className='w-full'>
        <PageHero name="Shop" />
        <ProductFilterBar />
        <AllProducts />
        <DeliveryServices />
    </div>
  )
}

export default ShopPage