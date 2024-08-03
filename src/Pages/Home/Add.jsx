import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

// in this componts use swiper js 
const adsElements = [
  {
    imageUrl: 'https://images6.alphacoders.com/134/1348908.jpeg',
  },
  {
    imageUrl: 'https://images6.alphacoders.com/134/1348908.jpeg',
  },
  {
    imageUrl: 'https://images6.alphacoders.com/134/1348908.jpeg',
  },
  {
    imageUrl: 'https://images6.alphacoders.com/134/1348908.jpeg',
  },
];

const Add = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      className='rounded-lg overflow-hidden'> {/*swiper desighns  */}

       {adsElements.map(({imageUrl},index)=>
       <SwiperSlide key={index}>  {/*wrap it by using swiperslide to ensure that it automatically swipe in the screen */}
          <AddUnit   imageUrl={imageUrl} id={index}/>
      </SwiperSlide>)}
       
    </Swiper>
  );
};

export default Add;

const AddUnit = ({ imageUrl, id }) => (
  
    <img
      src={imageUrl}
      alt={`ad${id}`}
      className='w-full object-contain rounded-lg'
    />
  
);
