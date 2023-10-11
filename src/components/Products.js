import React from 'react'
import ProductsCard from './ProductsCard'


const Products = ({products}) => {

  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl bg-black text-white py-2 w-80 text-center'>Shopping everyday</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nullam in erat nec diam consequat porta. Sed nec dolor purus. 
                Praesent in elit a ligula elementum eleifend eget nec dolor. 
                Orci varius natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Nam ac erat vel metus suscipit feugiat non nec orci. 
                Nam vitae massa nec augue commodo auctor
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
           {products.map((item) =>(
              <ProductsCard key={item._id} product={item} />
           ))}
        </div>
    </div>
  )
}

export default Products