import React from 'react'
import { card_data } from './../../components/Data/DataBase';
import Link from 'next/link';


function Cards({ name, link, text, index }) {
  // console.log(name);
  return (
    <>
      <div className='border-black border-4 rounded-md h-[150px] w-[150px] p-10'>
        <div className=''>{name.text}</div>
        <Link href={name.link}>
          <div className='max-w-[100%] p-2 border-4 rounded-md'>Learn More</div>
        </Link>
      </div>
    </>
  )
}



export default function index() {
  return (
    <div className='grid grid-flow-col row-auto gap-4'>
      {card_data.map((name, link, text, index) => (
        <Cards key={index} name={name} link={link} text={text} />
      ))}
    </div>
  )
}
