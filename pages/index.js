import React from 'react';
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
  },
  {
    original: 'https://cdn.radiofrance.fr/s3/cruiser-production/2020/04/51007fde-7a76-4d02-bbf5-5097f91ba9c2/801x410_801x410_eminem.jpg',
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
  {
    link: 'https://www.youtube.com/embed/gOMhN-hfMtY',
  },
  {
    link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
  },
  {
    link: 'https://www.youtube.com/embed/4haurn3S8z8',
  },
  {
    link: 'https://www.youtube.com/embed/gOMhN-hfMtY',
  },
  {
    link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
  },
  {
    link: 'https://www.youtube.com/embed/4haurn3S8z8',
  },
  {
    link: 'https://www.youtube.com/embed/gOMhN-hfMtY',
  },
  {
    link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
  },
  {
    link: 'https://www.youtube.com/embed/4haurn3S8z8',
  },
  {
    link: 'https://www.youtube.com/embed/gOMhN-hfMtY',
  },
  {
    link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
  },
  {
    link: 'https://www.youtube.com/embed/4haurn3S8z8',
  },
  {
    link: 'https://www.youtube.com/embed/gOMhN-hfMtY',
  },
  {
    link: 'https://www.youtube.com/embed/_Yhyp-_hX2s',
  },
  {
    link: 'https://www.youtube.com/embed/4haurn3S8z8',
  },
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


function Home() {
  return (
    <div className='w-128 '> 
    <Swiper
      className='pet-4'
      modules={[ Navigation ]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      {images.map((elem) => {
        return(
          <SwiperSlide style={{justifyContent:'center', display:'flex'}}>
            <img
            src={elem.original}
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
              src={elem.link}
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
            >

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

