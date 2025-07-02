import React from 'react'
import SearchFooter from './SearchFooter'
import BannerSlideshow from './BannerSlideshow'
import FeaturedProducts from './FeaturedProducts'
import DiscountProducts from './DiscountProducts'
import FlashSale from './FlashSale'
import { allProducts } from "../../utils/cartProducts";
const HomeScreen = () => {
  return (
    <div className='text-black'>
      <div className="item-center">

      <BannerSlideshow/>
      </div>
       <FlashSale products={allProducts} />
      <FeaturedProducts products={allProducts} />
      <DiscountProducts products={allProducts} />
      {/* <CategoryList/> */}
      {/* <BrandList/> */}
      <SearchFooter/>
    </div>
  )
}

export default HomeScreen