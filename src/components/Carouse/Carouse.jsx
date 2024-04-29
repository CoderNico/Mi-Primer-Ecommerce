import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { useState } from "react"; 

const slides = [
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/nike_phantom_barna24.webp'
},
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/dia_padre24_ES.webp'
},
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/adidas_copa_federations24_ok.webp'
},
{
  url: 'https://www.futbolemotion.com/imagesbanners/xxl/puma_rush24.webp'
},
];

export const Carousel =() =>{
  const [currentIndex, setCurrentIndex] = (useState)(0)
  const prevSlide = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () =>{
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return(
    <>
      <div className='w-full 2xl:w-full sm:h-[196px] md:h-[265px] lg:h-[328px] xl:h-[395px] 2xl:h-[550px] h-[112px] min-[430px]:h-[160px] relative'>
        <div style={{backgroundImage: `url(${slides[currentIndex].url}`}} className="min-w-full min-h-full bg-no-repeat bg-contain">
          <div className='justify-between items-center flex p-4 h-full w-full absolute max-w-[2146px]'>
            <BsChevronCompactLeft onClick={prevSlide} size={25} className=' bg-opacity-40 bg-slate-300 rounded-full'/>
            <BsChevronCompactRight onClick={nextSlide} size={25} className='bg-opacity-40 bg-slate-300 rounded-full'/>
          </div>
        </div>
      </div>
    </>
  )
}

