import React from "react";
import ImageCarousel from "./../../../components/Carousel/Carousel";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../../components/Data/Blogs_DataBase";
import { TbGenderFemale } from "react-icons/tb";
import { FaPersonShelter } from "react-icons/fa6";
import { VscMilestone } from "react-icons/vsc";
import { RiGovernmentFill } from "react-icons/ri";
import InfoCard from "./../../../components/Info_card";
import { scrollcard } from "../../../components/Data/DataBase";
import { scrollcard2 } from "../../../components/Data/DataBase";

const images = [
  {
    src: "https://img.playbook.com/DSGBsy9jY3dS0r5EEmcNxZ10VB7F5zltc9aPprqDkEY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2U2ZjU5ZWRl/LWYxMzMtNDkxNC05/MWQ4LWM2Yjk2ZGJk/NDgxZQ",
    alt: "image 0",
  },
  {
    src: "https://img.playbook.com/L_5NKK2rCsA1tASl63zZ9XGDdRHnpGGWex3ah2EAtH0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzJhNDlhNzIy/LTViMzItNDlkNi1h/YTRiLTU1YjYxMWY3/NWVjOQ",
    alt: "image 1",
  },
  {
    src: "https://img.playbook.com/G4807tr4no_Fq3BOSAU7RBViwLcOCvXXiv7lqsYnzUU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRmZDg4Yzg5/LWJmM2EtNGJlNy1i/ZWYyLTIxNjI2ZDc4/ZDg2OA",
    alt: "image 2",
  },
  {
    src: "https://img.playbook.com/ioRFMyWRqdVcwZgOow3X88DnN0P_zI6A_EIyxQk_t_U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNmOTBkZjNk/LWE5ZDUtNGVjYS04/ODQ4LTc5ZDlkODM0/MDNhMQ",
    alt: "image 7",
  },
  {
    src: "https://img.playbook.com/UNqBOOVtQOyfobkg_DCBup7ITHfQT4pCrMCexMT0MtM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFkZGExNjVk/LWViNmMtNGU1Yy05/MjdhLTRhZGNkZGRm/OWE1Yw",
    alt: "image 5",
  },
  {
    src: "https://img.playbook.com/J2u5ZYkYWp_e_2wmkC6DAPzlRoB5p3xUtz71ZoXs8Mo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk1OGRjNmFj/LTc4NzYtNDU3Zi1h/ODJlLTY2NTg3ZWNm/ZjJlMw",
    alt: "image 6",
  },
  {
    src: "https://img.playbook.com/0XwM9zxuWanOA_Csn0H85agKW3ckqvCywWNIU7l68Z0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RjMzU4Y2Yw/LWY1MmEtNDk2OS05/MThkLTY3MWMyNWQz/YjRlMw",
    alt: "image 3",
  },
];

function Child_blog({ ID, Title, ImageUrl, Author_name, Date_posted, Text }) {
  // console.log(ID.Title);
  // console.log(ID, Title, ImageUrl, Author_name, Date_posted, Text);
  return (
    <Link href={`/blogs/${ID.ID}`} className="mb-12">
      <div className="flex sm:flex-col md:flex-col">
        <Image
          src={ID.ImageUrl}
          alt={"Image Not Found!"}
          height={2500}
          width={2500}
          data-aos="flip-left"
          data-aos-duration="3000"
          className="border-1 border-solid border-[black] flex justify-center items-center sm:w-[100%] md:w-[100%] w-[35%] aspect-auto rounded-md"
        />
        <div className="p-2">
          <div className="text-2xl font-bold">{ID.Title}</div>
          <div className="text-[gray]">
            {ID.Author_name} ● {ID.Date_posted}
          </div>
          <div>
            {ID.Text.substring(0, 100)}
            <span className="hover:font-bold text-[blue]">...Read more</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

const index = () => {
  return (
    <>
     <main >
     <div class="relative h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/d2hhk5xfCsyoKrW7AL20RikUiheyip5wN0cYELWPRA8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzI3Y2I3MmMx/LWMzMjgtNDBiNS04/NzkxLTAyZWRkYjYy/ODI3YQ"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Women Empowerment
          </h1>
          <p class="text-lg mb-8">
            Strengthen a woman, and you build the foundation of progress.
          </p>
        </div>
      </div>

      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl font-serif font-bold text-center text-[#893434]">
          Why Women Empowerment
        </h1>
        <div className="text-lg m-2">
          Empowering women and addressing their challenges is essential for
          creating an equitable and progressive society. Our NGO is deeply
          committed to fostering positive change by focusing on critical areas
          such as education, skill development, family counseling, vocational
          training, income generation, and shelter for women in distress. These
          initiatives are vital to addressing the historical marginalization of
          women and helping them regain their rightful place in society. By
          highlighting these topics, we aim to raise awareness about the
          struggles women face, showcase the impact of our work, and inspire
          collective action towards their upliftment. This section of our
          website serves as a testament to our dedication and a call to action
          for individuals and organizations to join hands in building a more
          inclusive and empowered future.
        </div>
      </div>

      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl font-serif text-center text-[#327485] font-bold">
          What We Do
        </h1>
        <div className="text-lg m-2 p-2 justify-center">
          Our NGO is dedicated to fostering holistic development by addressing
          critical social issues such as child labor, women&apos;s empowerment,
          and community upliftment. We provide education to underprivileged
          children and marginalized women, empowering them with knowledge and
          skills for a better future. Our vocational training programs equip
          women and youth with practical skills, enabling economic independence
          and sustainable livelihoods. Through family counseling, we help
          families resolve conflicts and rebuild stability, while income
          generation programs and Self-Help Groups promote entrepreneurship
          among women. Additionally, our &quot;SWADHARA&quot; shelter home
          offers safety and rehabilitation for women in distress. By conducting
          awareness campaigns on education, rights, and social issues, we aim to
          inspire lasting change and create a society where every individual can
          thrive with dignity and opportunity.
        </div>
        <div className="flex flex-col m-2 p-2 ">
          <div className="flex sm:flex-col md:flex-col m-2 p-2 justify-center items-center">
            <Image
              src="https://img.playbook.com/YFqY86_Qw6uUcxlUpev-MsiFomWYYa_WhTMtCVKH8ps/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUwMTk0MTZi/LWE2OWMtNDQzYS05/ODM5LWYzMGY5ZmE5/ZjA3ZQ"
              alt="Agriculture representation"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/_L2ZSWl_a0xBu1_Yhc76lZzo3tzLLCoHEC4ekEbr4pg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzRiMDU5Y2Vi/LWJjNWMtNGY2MS04/YzlhLWNhMGJkMTIx/ZDkzNg"
              alt="Agriculture representation"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/7nukJ45MMv9jXeOi3Ym9rh1K26HwHMFcrwm1j1si9y0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFjNTgzNWY2/LTYzNGYtNDExZS1h/NzUyLTAxYjkzNzY3/YjNmNA"
              alt="x"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/z--WxU7p7wBMobHvjrWj1wRswHUXM7EgBucrjiiYjfU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcxMjE4NjVm/LTRjNTYtNDc3Yi04/NWUwLTQ0MTA4Nzc2/YzJiNA"
              alt="y"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <div className="text-2xl font-serif m-4 p-4 justify-center items-center">
              Empowered women uplift communities, shape futures, and inspire
              change.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto w-[80%]">
        <h1 className="text-4xl font-serif text-center text-[#2f8044] font-bold">
          UN&apos;s Strategic Plan and Vision
        </h1>
        <Image
          src="https://img.playbook.com/Kx6cL3SNsVZaqc6nuOExaElfiKrJTdKnZHJm3dispgg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FmZTZjNjgx/LTNkYzUtNGY0NC04/NmEyLTJlYTQ2Yjc4/OWNlZA"
          alt="UN's Representation"
          height={500}
          width={1000}
          className="mx-auto p-2 rounded-md "
        />
      </div>

      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl font-serif text-center text-[#412d77] font-bold">
          Our Aim
        </h1>
        <div className="text-lg">
          <p>
            At the heart of our mission lies a commitment to eradicating child
            labor, empowering women, and uplifting underprivileged communities.
            We aim to create lasting change by:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Empowering Through Education</strong> – Providing quality
              education to children and women, especially from tribal and
              marginalized communities, to break the cycle of poverty and open
              doors to opportunities.
            </li>
            <li>
              <strong>Skill Development for Independence</strong> – Equipping
              women and youth with vocational training and practical skills to
              ensure economic self-reliance and sustainable livelihoods.
            </li>
            <li>
              <strong>Strengthening Families</strong> – Offering counseling
              services to resolve conflicts, rebuild harmony, and promote
              healthy family dynamics.
            </li>
            <li>
              <strong>Fostering Entrepreneurship</strong> – Supporting income
              generation programs and Self-Help Groups (SHGs) to empower women
              as entrepreneurs and contributors to community growth.
            </li>
            <li>
              <strong>Providing Shelter and Support</strong> – Operating
              &quot;SWADHARA,&quot; a shelter home for women in distress, to
              help them rebuild their lives with dignity and confidence.
            </li>
          </ul>
          <p>
            Together, we are working to create a society where every child is
            educated, every woman is empowered, and every community thrives with
            hope and opportunity.
          </p>
        </div>
      </div>

      {/* hover card */}
      <div className="mx-auto grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 w-[80%] gap-2">
        {/* Card 1 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#e0fbe7] border-[#497327] border-2 text-[#497327] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Empower Women</h1>
            <p>
              Empower women to uplift families, communities, and the nation.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative mx-auto max-w-md rounded-lg border-2 bg-[#f9e0e0] border-[#7a2c4a] text-[#7a2c4a] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Education</h1>
            <p>
              Education is the foundation of true women’s empowerment and
              progress.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative mx-auto max-w-md rounded-lg border-2 bg-[#e0e9f9] border-[#453079] text-[#453079] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Strong Women</h1>
            <p>
              Strong, empowered women are the backbone of thriving societies.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#f9e0e0] text-[#76432d] border-2 border-[#76432d] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Support</h1>
            <p>Support women in need to rebuild lives and find strength.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative mx-auto max-w-md rounded-lg border-2 bg-[#e0e9f9] border-[#2d5377] text-[#2d5377] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Vocational Training</h1>
            <p>
              Vocational training transforms women&apos;s potential into real
              opportunities.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="relative mx-auto max-w-md rounded-lg border-2 bg-[#e0fbe7] border-[#296f3d] text-[#296f3d] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Shelter</h1>
            <p>Shelter gives women hope, dignity, and a second chance.</p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-8 w-[80%] mx-auto">
          <div className="flex sm:flex-col md:flex-col items-center justify-between">
            <h1 className="text-4xl font-serif font-bold border-teal-400  dark:text-gray-200">
              Latest Stories
            </h1>
            <Link href={"/blogs"} className="">
              {" "}
              <div className="transition-all border-solid border-[#A0D9D6] border-2 text-3xl p-2 px-10 rounded-full hover:bg-[#A0D9D6] hover:text-sky-200 hover:font-bold hover:tracking-normal">
                Explore
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 w-[100%] p-4">
            {data
              .slice(4, 8)
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

      <div className="flex flex-row sm:flex-col md:flex-col mx-auto w-[80%] justify-center items-center text-[black] bg-[#ececec]">
        <div className="text-4xl font-bold m-4 P-4 font-serif">
          {/* reach and presence */}
          REACH AND PRESENCE
        </div>
        <div className="m-4 p-4 flex flex-row sm:flex-col md:flex-col">
          {/* symbolic representation */}
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <TbGenderFemale size={80} />
            </div>
            <div className="font-bold m-2">1000+ Women</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <FaPersonShelter size={80} />
            </div>
            <div className="font-bold m-2">100+ shelters</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <VscMilestone size={80} />
            </div>
            <div className="font-bold m-2">5000+ cases</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <RiGovernmentFill size={80} />{" "}
            </div>
            <div className="font-bold m-2">150+ officers</div>
          </div>
        </div>
      </div>

      <div className="relative flex sm:flex-col md:flex-col w-[80%] p-4 mx-auto max-w-md text-[black]">
        {scrollcard.map((data, index) => (
          <InfoCard
            key={index}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>

      <div className="relative flex sm:flex-col md:flex-col w-[80%] p-4 mx-auto max-w-md text-[black]">
        {scrollcard2.map((data, index) => (
          <InfoCard
            key={index}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>

      <div className="flex sm:flex-col md:flex-col mx-auto w-[80%] p-2 bg-[#ececec] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-[#A1D9D6] border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
                Donate For Women
              </div>
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="m-4 p-4 flex flex-col justify-start flex-1 text-[black]">
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

export default index;
