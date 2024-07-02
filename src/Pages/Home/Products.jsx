import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';

const productArr=[{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},
{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe',
},]

const Products = ({title,rowsCount,slidesPerView}) => {
  return (
    <section>
     <h1>{title}</h1>
     <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows:Number(rowsCount),
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        
      >
        {productArr.map(({imageUrl,price,productTitle},index)=>
        <SwiperSlide key={index}>
          <ProductUnit imageUrl={imageUrl} price={price} productTitle={productTitle}id={index}/>
        </SwiperSlide>)}
        
      </Swiper>
    </section>
  )
}

export default Products;

const ProductUnit=({imageUrl,price,productTitle,id})=>
    <div className=' w-full'>
        <img src={imageUrl} alt={`product_unit_${id}`}
        className=' w-full object-contain'/>
        <h3>{productTitle}</h3>
        <h3>LKR. {price}/-</h3>
    </div>