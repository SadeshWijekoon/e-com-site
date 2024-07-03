import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Mousewheel, Pagination } from 'swiper/modules';
import { IconButton, Rating } from '@mui/material';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './Style.css'

const productArr=[{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe Xl',
},
{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe Large',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe Medium',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe Small',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe Regular',
},{
    imageUrl:'https://images6.alphacoders.com/134/1348908.jpeg',
    price:'100',
    productTitle:'Coffe Starbuck',
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
    <section style={{
      boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    }} 
     className=' w-full mt-6  p-2'>
     <h1 className='text-lg font-semibold mb-3 ml-2 mt-2'>{title}</h1>
     <Swiper
        slidesPerView={Number(slidesPerView)}
        grid={{
          rows:Number(rowsCount),
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        modules={[Grid, Pagination,Mousewheel]}
        
      >
        {productArr.map(({imageUrl,price,productTitle},index)=>
        <SwiperSlide key={index}>
          <ProductUnit 
          imageUrl={imageUrl} 
          price={price} 
          productTitle={productTitle}
          id={index}/>
        </SwiperSlide>)}
        
      </Swiper>
    </section>
  )
}

export default Products;

const ProductUnit=({imageUrl,price,productTitle,id})=>
    <IconButton sx={{
        padding:'4px',
        borderRadius:'5px',
        color:'red',
        margin:'3px',
        marginBottom:'30px'
        
     }}>
    <div className=' w-full '>
     
       <img 
          src={imageUrl} 
          alt={`product_unit_${id}`}
          className=' w-full object-contain'/>
        <h3 className='text-sm font-semibold text-[black]'>{productTitle}
        </h3>
      <Rating 
       name={imageUrl}
       value={3.5}
       precision={0.1}
       size="small"
       readOnly
      />
        <h3 className='text-stone-950 text-lg font-bold'>LKR. {price}/-</h3>
    </div>
      
     </IconButton> 
       
    