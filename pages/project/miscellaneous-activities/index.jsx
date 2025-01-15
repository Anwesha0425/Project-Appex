import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaScroll,
  FaPeopleArrows,
  FaFlag,
  FaRoad,
} from "react-icons/fa";
import { Intervention } from "../../../components/Data/DataBase";
import ImageCarousel from "./../../../components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import { card_miscellaneous } from "../../../components/Data/Blogs_DataBase";

const images = [
  {
    src: "https://img.playbook.com/9QHFcVOz850-MaNNcRF1d0bC90MGAxlxm1VnYdYxf9Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQ1OTgxNGUx/LTkwYTMtNDM1ZC1h/YTEzLTcyODE5YWVh/ZDI2Nw",
    alt: "image 1",
  },
  {
    src: "https://img.playbook.com/-VGOt86FXLpk0F0HkO4Vxv5TJU-TWhaRX7TLqzGZLwM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UyZjZlYWRj/LTc5ODUtNGI4OS05/NmVmLTFkMTE4MDg4/ZTE4ZA",
    alt: "image 2",
  },
  {
    src: "https://img.playbook.com/ioRFMyWRqdVcwZgOow3X88DnN0P_zI6A_EIyxQk_t_U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNmOTBkZjNk/LWE5ZDUtNGVjYS04/ODQ4LTc5ZDlkODM0/MDNhMQ",
    alt: "image 7",
  },
  
  {
    src: "https://img.playbook.com/3fQ5LRJ1FXflhwDh-12-6F01swNwrYKjuLXKSMQAqPM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgwMDAzMDdl/LTI1NDgtNGMwYi04/MzJiLWZhZGE3YThi/Yzg5ZA",
    alt: "image 6",
  },
  {
    src: "https://img.playbook.com/9O7vJswtWyghuybiWk3FBu7SaS4E9NRz27kQrT7vd7A/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QwY2Y2OTJh/LTE0ZTctNDZmZS1h/ZGFmLTM2N2M1ZmZh/ZTg1YQ",
    alt: "image 3",
  },
  {
    src: "https://img.playbook.com/X_VmF4SwBbtGGIbnjxsYTcXVsR9wgYuduAnKT9Oihb0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NiMjZlNjEz/LTcyMjctNGExOS1h/MTZiLTllOTQzYjFi/NTZmMg",
    alt: "image 8",
  },
];

function Child_blog({ ID, Title, ImageUrl, Author_name, Date_posted, Text }) {
  // console.log(ID.Title);
  // console.log(ID, Title, ImageUrl, Author_name, Date_posted, Text);
  return (
    <Link href={`/blogs/${ID.ID}`} className="mb-12">
      <div className="flex">
        <Image
          src={ID.ImageUrl}
          alt={"Image Not Found!"}
          height={2500}
          width={2500}
          data-aos="flip-left"
          data-aos-duration="3000"
          className="border-1 border-solid border-[black] flex justify-center items-center w-[35%] aspect-auto rounded-md"
        />
        <div className="p-2">
          <div className="text-2xl font-bold">{ID.Title}</div>
          <div className="text-[gray]">
            {ID.Author_name} ● {ID.Date_posted}
          </div>
          <div>
            {ID.Text.substring(0, 100)}
            <span className="hover:font-semibold">...Read more</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

const Index = () => {
  const option_css =
    "border-solid border-[1px] border-[gray] py-2 px-6 rounded-t-xl ";
  const [option, setOption] = useState(0);
  const [text, setText] = useState(Intervention[0].text);
  const [icon, setIcon] = useState(Intervention[0].icon);
  let red = " bg-[#ffd5e5]";
  let blue = " bg-[#d8fee3]";
  useEffect(() => {
    setText(Intervention[option].text);
    setIcon(Intervention[option].icon);
  }, [option]);

  function Icon() {
    if (option === 0) return <FaBook size={50} />;
    if (option === 1) return <FaScroll size={50} />;
    if (option === 2) return <FaPeopleArrows size={50} />;
    if (option === 3) return <FaFlag size={50} />;
    if (option === 4) return <FaRoad size={50} />;
  }

  return (
    <>
      <div>
        <ImageCarousel images={images} text={"Miscellaneous Activities"} />
      </div>

      <div className="bg-[#eafcfa] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
          What We Do
        </h1>
        <div className="text-lg m-2">
        Our organization is dedicated to fostering sustainable development and empowering communities by addressing critical social challenges. From providing healthcare through mobile units and telemedicine centers to preserving cultural heritage through manuscript conservation, we strive to create holistic solutions. We also focus on promoting education, enhancing social cohesion, and organizing community programs that inspire collective progress. Through these efforts, we aim to uplift underserved communities, ensuring access to essential resources and opportunities for a better tomorrow.

        </div>
      </div>

      <div>
        <div className="bg-[#fef9e7] p-4 m-4">
          <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-yellow-400 dark:text-gray-200">
            Our Aim
          </h1>
          <div className="text-lg m-2">
          Our organization is committed to fostering grassroots democracy and empowering rural communities. By promoting capacity building among Panchayati Raj Institution (PRI) members, we aim to achieve Gandhiji&apos;s vision of self-sustained villages and revitalized rural infrastructure. In addition, we focus on preserving cultural heritage through the conservation of rare manuscripts and traditional art forms, while also fostering social harmony through cultural programs and celebrations. With dedicated efforts in education, community cohesion, and sustainable development, our aim is to create a society rooted in equality, empowerment, and progress.

          </div>
        </div>
      </div>
      {/* Our Interventions */}
      <div className="flex justify-center items-end m-4">
        <div className="w-[80%]">
          {/* Up */}
          <div className="text-4xl font-bold text-left py-2">Focus Areas</div>
          {/* Down */}
          <div className="flex flex-col">
            {/* Options */}
            <div className="flex w-[60%] justify-between font-bold text-xl">
              <div
                className={option_css + (option == 0 ? red : blue)}
                onClick={() => setOption(0)}
              >
                library
              </div>
              <div
                className={option_css + (option == 1 ? red : blue)}
                onClick={() => setOption(1)}
              >
                manuscripts
              </div>
              <div
                className={option_css + (option == 2 ? red : blue)}
                onClick={() => setOption(2)}
              >
                social cohesion
              </div>
              <div
                className={option_css + (option == 3 ? red : blue)}
                onClick={() => setOption(3)}
              >
                celebrations
              </div>
              <div
                className={option_css + (option == 4 ? red : blue)}
                onClick={() => setOption(4)}
              >
                road safety
              </div>
            </div>
            {/* Textbox */}
            <div className="border-solid border-[1px] border-[#131313] p-4 rounded-b-xl bg-[#ffd5e5] flex items-center justify-around">
              <div className="mx-2">
                <Icon />
              </div>
              <div>{text}</div>
            </div>
          </div>
        </div>
      </div>

      {/* card */}

      {/* blog section */}
      <div>
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
              Latest Stories
            </h1>
            <Link href={"/blogs"} className="">
              {" "}
              <div className="transition-all border-solid border-[black] border-2 text-3xl p-2 px-10 rounded-full hover:bg-[#A0D9D6] hover:text-sky-200 hover:font-bold hover:tracking-normal">
                Explore
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 w-[100%] p-4">
            {card_miscellaneous
              .slice(0, 4)
              .map((ID, Title, ImageUrl, Author_name, Date_posted, Text, i) => (
                <Child_blog
                  key={i}
                  ID={ID}
                  Title={Title}
                  ImageUrl={ImageUrl}
                  Author_name={Author_name}
                  Date_posted={Date_posted}
                  Text={Text}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row m-4 p-2 bg-[#eafcfa] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-black border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
                Donate Funds
              </div>
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="m-4 p-4 flex flex-col justify-start flex-1">
          <div className="text-4xl font-bold py-2 font-serif">FOR SUPPORT</div>
          <div className="text-xl">email-to</div>
          <div className="text-2xl font-bold font-serif">
            <a
              href="mailto:appexfcc@gmail.com"
              className="text-[#0e0e0e] hover:underline"
            >
              appexfcc@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
