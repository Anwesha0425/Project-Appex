import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { data } from './../components/Data/Blogs_DataBase';


export function Child_blog({ID, Title, ImageUrl, Author_name, Date_posted, Text }) {
  // console.log(ID.Title);
  // console.log(ID, Title, ImageUrl, Author_name, Date_posted, Text);
  return (
    <Link href={`/blogs/${ID.ID}`} className='mb-12' >
      <div className='flex'>
        <Image
          src={ID.ImageUrl}
          alt={'Image Not Found!'}
          height={2500}
          width={2500}
          data-aos="flip-left" data-aos-duration="3000"
          className='border-1 border-solid border-[black] flex justify-center items-center w-[35%] aspect-auto rounded-md'
        />
        <div className='p-2'>
          <div className='text-2xl font-bold'>{ID.Title}</div>
          <div className='text-[gray]'>{ID.Author_name} ● {ID.Date_posted}</div>
          <div >{ID.Text.substring(0, 100)}<span className='hover:font-semibold'>...Read more</span></div>
        </div>
      </div>
    </Link >
  )
}
export default function index() {
  return (
    <>
      {/* Blogs Component */}
      <div className='p-8'>

        <div className='flex items-center justify-between'>
          <h1 className='text-5xl font-bold' >Latest Stories</h1>
          <Link href={'/blogs'} className=''> <div className='transition-all border-solid border-[black] border-2 text-3xl p-2 px-10 rounded-full hover:bg-[#fafafa] hover:text-sky-200 hover:font-bold hover:tracking-normal'>
            Explore
          </div></Link>
        </div>

        <div className='flex justify-between'>
          {/* Left Div */}
          <div className='w-[50%] p-4'>
            <Link href={`/blogs/${data[0].ID}`} className='border-0'><div>
              <Image
                src={data[0].ImageUrl}
                alt={'Image Not Found!'}
                height={2500}
                width={2500}
                data-aos="flip-left" data-aos-duration="3000"
                className='border-1 border-solid border-[black] flex justify-center items-center w-[100%] aspect-auto rounded-xl'
              />
            </div>
              <div className='p-2'>
                <div className='text-2xl font-bold'>{data[0].Title}</div>
                <div className='text-[gray]'>{data[0].Author_name} ● {data[0].Date_posted}</div>
                <div >{data[0].Text.substring(0, 500)}<span className='hover:font-semibold'>...Read more</span></div>
              </div>
            </Link>
          </div>
          {/* Right Div */}
          <div className='flex flex-col w-[50%] p-4'>
            {data.slice(1,4).map((ID, Title, ImageUrl, Author_name, Date_posted, Text, i) => (
              <Child_blog key={i} ID={ID} Title={Title} ImageUrl={ImageUrl} Author_name={Author_name} Date_posted={Date_posted} Text={Text} />
            ))}
          </div>
        </div>

      </div>
    </>
  )
}



