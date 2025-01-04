import React from 'react'
// import ImageCarousel from './../../../components/Carousel/Carousel';
import CountUp from 'react-countup';
import { HiOutlinePlusSm } from "react-icons/hi";

const images = [
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1674826123/Screenshot_2022-09-03_102413_szfbn5.png",
    alt: "image 0",
  },

  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/279881209_801798817465669_8315301464742405531_n_fi9jvr.jpg",
    alt: "image 1",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/312212713_845444913535864_2965981991429716530_n_glljkz.jpg",
    alt: "image 2",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679241238/IMG_20220725_191111_cyhcd7.jpg",
    alt: "image 7",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/283119318_1176580216437313_7004400500214089155_n_vgmitz.jpg",
    alt: "image 5",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/293066269_735263811101629_4917450492142136042_n_wh136u.jpg",
    alt: "image 6",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/307752438_415835390664637_3534036197302672937_n_wfr6fi.jpg",
    alt: "image 3",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1683541169/1_lkvwbh.png",
    alt: "image 8",
  },
  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1679239990/302443510_822286705609631_3473952214574021331_n_epcmhf.jpg",
    alt: "image 4",
  },

  {
    src: "https://res.cloudinary.com/dk8ign4oc/image/upload/v1683541167/2_rdqypy.png",
    alt: "image 9",
  },
];

function Figures({ count, text }) {
  return (
    <div className='text-[white] xl:w-1/4 lg:w-1/4 flex flex-col items-center rounded-md bg-[black] mx-2'>
      <div className='text-6xl flex'>
        <CountUp end={count} duration={6} /> <span className='flex items-start '><HiOutlinePlusSm size={25} /></span>
      </div>
      <div className='xl:text-xl lg:text-xl md:text-lg sm:text-base'>
        {text}
      </div>
    </div>
  );
}

const index = () => {
  return (
    <>
      <div >
        <span className='text-5xl font-bold drop-shadow-2xl '> EDUCATION IS EMPOWERMENT</span>
      </div>
      {/* <ImageCarousel images={images} /> */}
      <div className='bg-[#FFFFFF] p-4'>
        <h1 className='font-bold text-4xl mb-2 '>Why Agriculture? </h1>
        <div className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et soluta nihil illo a iure asperiores quos modi quam suscipit perspiciatis numquam quaerat doloribus, libero reprehenderit aspernatur molestias ipsam hic labore nulla esse dicta exercitationem dignissimos? Dolores, cupiditate, adipisci assumenda aut aperiam ea magnam nostrum ut porro a veritatis non vel.
        </div>
      </div>
      <div className='bg-[#A1D9D6] p-4'>
        <h1 className='font-bold text-4xl mb-2 '>Why Agriculture? </h1>
        <div className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et soluta nihil illo a iure asperiores quos modi quam suscipit perspiciatis numquam quaerat doloribus, libero reprehenderit aspernatur molestias ipsam hic labore nulla esse dicta exercitationem dignissimos? Dolores, cupiditate, adipisci assumenda aut aperiam ea magnam nostrum ut porro a veritatis non vel.
        </div>
      </div>
      <div className='bg-[#FFFFFF] p-4'>
        <h1 className='font-bold text-4xl mb-2 '>Why Agriculture? </h1>
        <div className='text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et soluta nihil illo a iure asperiores quos modi quam suscipit perspiciatis numquam quaerat doloribus, libero reprehenderit aspernatur molestias ipsam hic labore nulla esse dicta exercitationem dignissimos? Dolores, cupiditate, adipisci assumenda aut aperiam ea magnam nostrum ut porro a veritatis non vel.
        </div>
      </div>
      <div className='flex justify-center items-center bg-[#A1D9D6] p-8'>
          <Figures count={55000} text={'Number of women impacted'} />
          <Figures count={60} text={'Orders and Market connects created'} />
          <Figures count={1514} text={'Exhibitions organised'} />
          <Figures count={270} text={'Number of clients'} />
      </div>
    </>
  )
}

export default index