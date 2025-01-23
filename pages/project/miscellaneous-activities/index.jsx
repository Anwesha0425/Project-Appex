import React, { useState, useEffect } from "react";
import {
  FaBook,
  FaScroll,
  FaPeopleArrows,
  FaFlag,
  FaRoad,
} from "react-icons/fa";
import { FaHandHoldingWater, FaToilet, FaLeaf,  FaRecycle, FaWater } from "react-icons/fa";
import { Intervention } from "../../../components/Data/DataBase";
import ImageCarousel from "./../../../components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";
import { card_miscellaneous } from "../../../components/Data/Blogs_DataBase";
import InfoCard from "@/components/SanitationCard";

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

const cards = [
  {
    icon: <FaHandHoldingWater />,
    title: "Awareness Programs",
    description: "Conducting sanitation and hygiene awareness campaigns in rural and tribal areas.",
  },
  {
    icon: <FaToilet />,
    title: "IHHL Construction",
    description: "Motivating and assisting communities to build and use Individual Household Latrines (IHHLs).",
  },
  {
    icon: <FaLeaf />,
    title: "Hygiene Campaigns",
    description: "Promoting cleanliness and hygiene practices to improve overall community health.",
  },
  {
    icon: <FaPeopleArrows />,
    title: "Community Engagement",
    description: "Collaborating with local communities to ensure sustainable sanitation practices.",
  },
  {
    icon: <FaRecycle />,
    title: "Environmental Awareness",
    description: "Spreading awareness about environmental protection alongside sanitation initiatives.",
  },
  {
    icon: <FaWater />,
    title: "Clean Water Access",
    description: "Ensuring access to clean drinking water by supporting rural communities with water sanitation projects.",
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
    "border-solid border-[1px] border-[black] py-2 px-6 ";
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
    <main className='bg-[#fff9e9]'>
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/3fQ5LRJ1FXflhwDh-12-6F01swNwrYKjuLXKSMQAqPM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgwMDAzMDdl/LTI1NDgtNGMwYi04/MzJiLWZhZGE3YThi/Yzg5ZA"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Sanitation and Environment
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Building Healthier Futures: Promoting Sanitation and Clean Living
            Practices.
          </p>
        </div>
      </div>

      <section className="w-[80%] p-4 mx-auto">
        <h2 className="text-4xl font-serif text-center text-[#742b2b] font-bold border-teal-400 dark:text-gray-150">
          Why Rural Sanitation
        </h2>
        <p className="text-lg text-gray-700">
          Sanitation is the foundation of a healthy and dignified life, yet many
          rural and tribal areas continue to struggle with inadequate
          facilities. Our focus on rural sanitation arises from the urgent need
          to address these challenges by creating awareness, motivating
          communities, and implementing sustainable solutions. Through the
          construction of Individual Household Latrines (IHHLs), awareness
          camps, and collaboration with government initiatives like the Swachh
          Bharat Mission, we aim to transform lives and foster a cleaner,
          healthier environment for future generations.
        </p>
      </section>

      <div className="w-[80%] mx-auto p-4">
      <h1 className="text-4xl text-center font-serif text-[#266937] font-bold border-teal-400 dark:text-gray-200 mb-6">
        What We Do
      </h1>
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <InfoCard key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
    </div>

      <div>
        <div className="w-[80%] p-4 mx-auto">
          <h1 className="text-4xl font-serif text-center text-[#282b6f] font-bold border-yellow-400 dark:text-gray-200">
            Our Aim
          </h1>
          <div className="text-lg m-2">
            Our organization is committed to fostering grassroots democracy and
            empowering rural communities. By promoting capacity building among
            Panchayati Raj Institution (PRI) members, we aim to achieve
            Gandhiji&apos;s vision of self-sustained villages and revitalized
            rural infrastructure. In addition, we focus on preserving cultural
            heritage through the conservation of rare manuscripts and
            traditional art forms, while also fostering social harmony through
            cultural programs and celebrations. With dedicated efforts in
            education, community cohesion, and sustainable development, our aim
            is to create a society rooted in equality, empowerment, and
            progress.
          </div>
        </div>
      </div>
      {/* Our Interventions */}
      <div className="flex justify-center items-end m-4">
        <div className="w-[80%]">
          {/* Up */}
          <div className="text-4xl font-bold text-center text-[#256838] font-serif py-2 m-auto">
            Focus Areas
          </div>
          {/* Down */}
          <div className="flex flex-col m-4">
            {/* Options */}
            <div className="flex w-[60%] justify-between font-bold text-lg">
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
            <div className="border-solid border-[1px] border-[black] p-4 bg-[#ffd5e5] flex items-center justify-around">
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
        <div className="p-8 w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-serif font-bold border-teal-400 dark:text-gray-200">
              Latest Stories
            </h1>
            <Link href={"/blogs"} className="">
              {" "}
              <div className="transition-all border-solid border-[#A0D9D6] border-2 text-3xl p-2 px-10 rounded-full hover:bg-[#A0D9D6] hover:text-sky-200 hover:font-bold hover:tracking-normal">
                Explore
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 p-4">
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

      <div className="flex flex-row p-2 bg-[#ececec] items-center w-[80%] mx-auto">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-[#A1D9D6] border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
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
              appex29@yahoo.co.in
            </a>
          </div>
        </div>
      </div>
      <div>
        <ImageCarousel images={images} text={"Memories"} />
      </div>
    </main>
    </>
  );
};

export default Index;
