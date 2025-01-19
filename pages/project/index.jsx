import React from 'react'
import { card_data } from './../../components/Data/DataBase';
import Image from 'next/image';
import Link from 'next/link';


function Cards({ name, link, text, ImageURL }) {
  // console.log(name);
  return (
    <>
      <div className='border-[#A0D9D6] border-4 rounded-md p-4 aspect-video m-4 flex flex-col items-center shadow-2xl'>
        <Image
                  src={name.ImageURL}
                  alt={'Image Not Found!'}
                  height={2500}
                  width={2500}
                  data-aos="flip-left" data-aos-duration="3000"
                  className='border-1 border-solid border-[#A0D9D6] flex justify-center items-center w-[90%] aspect-auto rounded-md'
                />
        <div className='text-2xl font-bold'>{name.name}</div>
        <div className=''>{name.text}</div>
        <Link href={name.link}>
          <div className='max-w-[100%] p-2 border-[#A0D9D6] hover:border-[#00796B] border-4 rounded-md bg-[#A0D9D6] hover:bg-[#00796B]'>Learn More</div>
        </Link>
      </div>
    </>
  )
}



export default function index() {
  return (
    <div className='grid grid-cols-2 w-[80%] mx-auto'>
      {card_data.map((name, link,ImageURL, text, index) => (
        <Cards key={index} name={name} link={link} ImageURL={ImageURL} text={text} />
      ))}
    </div>
  )
}
