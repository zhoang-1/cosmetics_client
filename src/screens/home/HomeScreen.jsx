import React from 'react'
import SearchFooter from './SearchFooter'
import BannerSlideshow from './BannerSlideshow'
import Featured_products from './Featured_products'
const HomeScreen = () => {
  return (
    <div className='text-black'>
      <div className="item-center">

      <BannerSlideshow/>
      </div>
      {/* blog */}
      <Featured_products />
      {/* <CategoryList/> */}
      {/* <BrandList/> */}
      <SearchFooter/>
    </div>
  )
}

export default HomeScreen