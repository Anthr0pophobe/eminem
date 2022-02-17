import React from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
  },
];

const videos =[
  {
    link: 'https://www.youtube.com/embed/gOMhN-hfMtY',
  },
  {
    link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
  },
  {
    link: 'https://www.youtube.com/embed/4haurn3S8z8',
  },
]

const articles =[
  {link : '/article/1'},
  {link : '/article/2'},
  {link : '/article/3'},
  {link : '/article/4'},
  {link : '/article/5'},
]

function Home() {
  return (
    <div className='w-128 '> 
    <Swiper
      className='pet-4'
      modules={[ Navigation ]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((elem) => {
        return(
          <SwiperSlide style={{justifyContent:'center', display:'flex'}}>
            <img
            src={images.original}
            height={'500px'}
            />
          </SwiperSlide>
        )
      })
      }
    </Swiper>
    <Swiper
      modules={[ Navigation ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {videos.map((elem) => {
        return(
          <SwiperSlide 
          className='pt-4'
          style={{justifyContent:'center', display:'flex'}}
          >
            <iframe
                width="950" 
                height="534" 
                src={videos.link} 
                title="YouTube video player" 
                frameborder="0"  
                allowfullscreen>
            </iframe>
           </SwiperSlide>
        )
      })
      }
    </Swiper>
    
    </div >
  )
}

export default Home;

