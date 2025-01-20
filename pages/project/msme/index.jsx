import React from "react";
import ImageCarousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import { MdFamilyRestroom } from "react-icons/md";
import { GiPlantSeed } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { activities } from "@/components/Data/DataBase";

const images = [
  {
    src: "https://img.playbook.com/-3Ql0OkRnXkmVbNPbiRSSPLufAbEs3UnjoMBhciIoYk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgzNGQzZWEx/LTA1NzMtNGMxOS04/OTgwLWNlZGQ5MWRi/NWYwNw",
    alt: "image 1",
  },
  {
    src: "https://img.playbook.com/oohntAKgBXSrfA1dJg8_CYFZMl7PE-vgKu_fnhgYP2o/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QwMWE0NGNi/LTkwZDMtNDgyNy05/ZGQ4LWVhNTZiYzMz/NzE5Zg",
    alt: "image 2",
  },
  {
    src: "https://img.playbook.com/G1FsHZxerqslp4yz1GFGGS_3KqyTSdoXUvBON_q37e0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U2YzU1ZDI0/LTU1ZGUtNGI1OS1i/NmYzLTdlOGI2MDhh/ODY2Ng",
    alt: "image 7",
  },
  {
    src: "https://img.playbook.com/BPCwcYuXcsEsfb2oXUWNdnj6yB7c-_vlhF3Pyf27_Ag/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc1ZjEwMmU3/LTQ5OTMtNDM3Yy05/MmFiLTM5YTMyYTg5/NDk4YQ",
    alt: "image 5",
  },
  {
    src: "https://img.playbook.com/IIf8VNldYX3R9NSFpXCq600NEiK3d8edAZHL2joW9_0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2NlZjAxOGY5/LTgwM2UtNDc0Mi1h/Nzk4LTM1NDRhZDll/YjRkOQ",
    alt: "image 6",
  },
];

const index = () => {
  return (
    <>
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/3cQqsYML-8WunJi_TeHUGEr0lP-h05xc7yZRAlnxxTs/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzliMzBkNzg5/LWI3ZWUtNDhjNC1i/MGU1LTc0OGU4OGJh/ZjE4Zg"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
           MSME
          </h1>
          <p class="text-lg text-gray-300 mb-8">
          Empowering rural communities through MSMEs for self-reliance and sustainability.
          </p>
        </div>
        </div>

      <div className="p-4 mx-auto w-[80%]">
        <h1 className="text-4xl font-serif bg-[#a0ddb4] text-center font-bold border-teal-400  dark:text-gray-200">
          Why MSME
        </h1>
        <div className="text-lg m-2">
          Micro, Small, and Medium Enterprises (MSMEs) are the backbone of
          sustainable development in rural areas. Our NGO has actively embraced
          MSME initiatives to address pressing challenges like unemployment,
          poverty, and lack of basic amenities, while fostering self-reliance
          among communities.Through MSME-focused activities, we aim to empower
          communities by promoting income-generating opportunities,
          self-reliance, and sustainable development. With continued support, we
          can expand these efforts to bring even greater impact.
        </div>
      </div>
      <section className="py-8 bg-gray-100 w-[80%] mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold font-serif bg-[#a0b1dd] text-center text-gray-800 mb-8">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:bg-[#a0b1dd]"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-700 mb-4">{activity.description}</p>
                <p className="text-sm font-medium text-gray-500">
                  {activity.stats}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex flex-row mx-auto w-[80%] justify-center items-center bg-[#ececec]">
        <div className="text-4xl font-bold m-4 P-4 font-serif">
          {/* reach and presence */}
          REACH AND PRESENCE
        </div>
        <div className="m-4 p-4 flex flex-row">
          {/* symbolic representation */}
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <MdFamilyRestroom size={80} />
            </div>
            <div className="font-bold m-2">300+ families</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <GiPlantSeed size={80} />
            </div>
            <div className="font-bold m-2">2000+ planted</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <FaPeopleGroup size={80} />
            </div>
            <div className="font-bold m-2">100+ Benifited</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <MdOutlineWorkOutline size={80} />{" "}
            </div>
            <div className="font-bold m-2">400+ employed</div>
          </div>
        </div>
      </div>
       {/* our aim */}
      <div className="p-4 mx-auto w-[80%]">
        <h1 className="text-4xl font-serif text-center bg-[#dda0c7] font-bold border-teal-400 dark:text-gray-150">
          Our Aim
        </h1>
        <div className="text-lg">
          <p>
            Our aim is to drive impactful and sustainable change in rural and
            underprivileged communities by addressing critical challenges and
            promoting holistic development. We focus on creating opportunities
            and improving lives through the following initiatives:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Improving Sanitation and Hygiene</strong> – Conducting
              awareness campaigns and motivating communities to build Individual
              Household Latrines (IHL), ensuring better health and living
              conditions.
            </li>
            <li>
              <strong>Protecting the Environment</strong> – Promoting tree
              plantation drives, soil conservation, and forest protection
              initiatives, fostering ecological balance and environmental
              sustainability.
            </li>
            <li>
              <strong>Empowering Consumers</strong> – Educating individuals
              about consumer rights, grievance redressal mechanisms, and best
              practices for making informed decisions.
            </li>
            <li>
              <strong>Promoting Livelihood Opportunities</strong> – Encouraging
              income-generating activities like livestock development,
              vocational training, and entrepreneurship programs to ensure
              self-reliance and economic independence.
            </li>
            <li>
              <strong>Uplifting Families and Communities</strong> – Providing
              educational opportunities, skill development programs, and support
              systems to create a society where every individual can thrive with
              dignity and opportunity.
            </li>
          </ul>
          <p>
            Through these efforts, we strive to build a future where every
            community is empowered, every individual has access to basic rights,
            and development is inclusive and sustainable.
          </p>
        </div>
      </div>

      <div className="flex flex-row mx-auto p-2 bg-[#ececec] w-[80%] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-[#A1D9D6] border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
                Donate For MSME
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
    </>
  );
};

export default index;
