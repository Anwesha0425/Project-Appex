import React, {useState} from 'react'
import Image from 'next/image';
import { FaCirclePlus } from "react-icons/fa6";

function Column_card() {
  const ImageUrl= 'https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const [isOpen, setisOpen] = useState(false);
  return (
    <> 
   <div className='rounded-xl shadow-2xl flex flex-col justify-center items-center m-4 p-2'>
        <Image
          src={ImageUrl}
          alt={'Image Not Found!'}
          height={500}
          width={500}
          data-aos="flip-left" data-aos-duration="3000"
          className='border-1 border-solid border-[black] flex justify-center items-center w-[33%] aspect-square rounded-full mb-8'
        />
        <div className='font-bold text-2xl'>
          Anwesha Rani Gouda
        </div>
        <div className='p-2 text-center mb-2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dolorem neque voluptates repellendus magnam voluptatibus cum nobis ipsa unde pariatur reiciendis eum debitis accusamus obcaecati consequatur, quod officia soluta minus facilis nihil error est ut. Quidem nulla distinctio sapiente incidunt adipisci, nisi praesentium corrupti necessitatibus, tempora animi suscipit fugiat fugit.
        </div>
        <div className='transition-all duration-300'>
        <FaCirclePlus color='green' size={20}/>  
        </div>
   </div>
    </>
  )
}

export default Column_card