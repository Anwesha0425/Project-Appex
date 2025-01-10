import React, { useState, useEffect } from 'react'
import * as AntDesign from "react-icons/ai";
import { AiFillCar, AiFillAmazonCircle } from "react-icons/ai";
import { Intervention } from './../../../components/Data/DataBase';
import { IconContext } from "react-icons";
import Column_card from './../../../components/Column_card/index';


const index = () => {
  const option_css = "border-solid border-[1px] border-[gray] py-2 px-6 rounded-t-xl ";
  const [option, setOption] = useState(0);
  const [text, setText] = useState(Intervention[0].text);
  const [icon, setIcon] = useState(Intervention[0].icon);
  let red = " bg-[red]";
  let blue = " bg-[blue]";
  useEffect(() => {
    setText(Intervention[option].text);
    setIcon(Intervention[option].icon);
  }, [option])
  function Icon() {
    if (option === 0) return <AiFillCar size={50} />;
    if (option === 1) return <AiFillAmazonCircle size={50} />;
    if (option === 2) return <AiFillCar size={50} />;
    if (option === 3) return <AiFillAmazonCircle size={50} />;
    if (option === 4) return <AiFillCar size={50} />;
  }
  return (
    <>
      <div className='bg-[green]'>hello</div>
      {/* Our Interventions */}
      <div className='flex justify-center items-end'>
        <div className='w-[80%]'>
          {/* Up */}
          <div className='text-4xl font-bold text-left py-2'>OUR INTERVENTIONS</div>
          {/* Down */}
          <div className='flex flex-col'>
            {/* Options */}
            <div className='flex w-[60%] justify-between font-bold text-xl'>
              <div className={option_css + (option == 0 ? red : blue)} onClick={() => setOption(0)}>Option 1</div>
              <div className={option_css + (option == 1 ? red : blue)} onClick={() => setOption(1)}>Option 2</div>
              <div className={option_css + (option == 2 ? red : blue)} onClick={() => setOption(2)}>Option 3</div>
              <div className={option_css + (option == 3 ? red : blue)} onClick={() => setOption(3)}>Option 4</div>
              <div className={option_css + (option == 4 ? red : blue)} onClick={() => setOption(4)}>Option 5</div>
            </div>
            {/* Textbox */}
            <div className='border-solid border-[1px] border-[gray] p-4 rounded-b-xl bg-main flex items-center justify-around'>
              <div className='mx-2'>
                {/* <IconContext.Provider
                  value={{ size: '50px' }}
                >
                  {React.createElement(AntDesign[`${icon}`])}
                </IconContext.Provider> */}
                <Icon />
              </div>
              <div>{text}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[green]'>hello</div>

      <div className='flex justify-center'>
        <div className='w-[75%] flex'>
          <Column_card />
          <Column_card />
          <Column_card />
        </div>
      </div>
    </>
  )
}

export default index