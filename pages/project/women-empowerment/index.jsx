import React from "react";
import ImageCarousel from "./../../../components/Carousel/Carousel";
import Link from "next/link";
import Image from "next/image";
import { card_women } from "../../../components/Data/Blogs_DataBase";
import { TbGenderFemale } from "react-icons/tb";
import { FaPersonShelter } from "react-icons/fa6";
import { VscMilestone } from "react-icons/vsc";
import { RiGovernmentFill } from "react-icons/ri";

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
  {
    src: "https://img.playbook.com/9Lh6Bkjt0NYVPWOHPQnqkozXJOBDlA5IlTRC3iyV2Iw/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZiNGJlZjE4/LTllODEtNDMzOC05/YmEzLTk3Y2Q0M2E5/NTZhZQ",
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

const index = () => {
  return (
    <>
      <div>
        <ImageCarousel images={images} text={"Women Empowerment"} />
      </div>

      <div className="bg-[#FFFFFF] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-150">
          Why Women Empowerment?{" "}
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

      <div className="bg-[#eafcfa] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-150 ">
          What We Do{" "}
        </h1>
        <div className="text-lg m-2 p-2 justify-center">
          Our NGO is dedicated to fostering holistic development by addressing
          critical social issues such as child labor, women’s empowerment, and
          community upliftment. We provide education to underprivileged children
          and marginalized women, empowering them with knowledge and skills for
          a better future. Our vocational training programs equip women and
          youth with practical skills, enabling economic independence and
          sustainable livelihoods. Through family counseling, we help families
          resolve conflicts and rebuild stability, while income generation
          programs and Self-Help Groups promote entrepreneurship among women.
          Additionally, our "SWADHARA" shelter home offers safety and
          rehabilitation for women in distress. By conducting awareness
          campaigns on education, rights, and social issues, we aim to inspire
          lasting change and create a society where every individual can thrive
          with dignity and opportunity.
        </div>
        <div className="flex flex-col m-2 p-2 ">
          <div className="flex flex-row m-2 p-2 justify-center items-center">
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
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/z--WxU7p7wBMobHvjrWj1wRswHUXM7EgBucrjiiYjfU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzcxMjE4NjVm/LTRjNTYtNDc3Yi04/NWUwLTQ0MTA4Nzc2/YzJiNA"
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

      <div className="flex flex-col m-2 ">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-150">
          UN's Strategic Plan and Vision
        </h1>
        <Image
          src="https://img.playbook.com/Kx6cL3SNsVZaqc6nuOExaElfiKrJTdKnZHJm3dispgg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FmZTZjNjgx/LTNkYzUtNGY0NC04/NmEyLTJlYTQ2Yjc4/OWNlZA"
          alt="UN's Representation"
          height={500}
          width={1000}
          className="mx-auto p-2 rounded-md "
        />
      </div>

      <div className="bg-[#eafcfa] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-150">
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
              "SWADHARA," a shelter home for women in distress, to help them
              rebuild their lives with dignity and confidence.
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
      <div className="mx-auto grid grid-cols-3 m-2">
        {/* Card 1 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#e6fcd4] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Empower Women</h1>
            <p>
              Empower women to uplift families, communities, and the nation.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#ffd5e5] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Education</h1>
            <p>
              Education is the foundation of true women’s empowerment and
              progress.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#e0d4fe] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Strong Women</h1>
            <p>
              Strong, empowered women are the backbone of thriving societies.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#fbded2] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Support</h1>
            <p>Support women in need to rebuild lives and find strength.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#d4e9fc] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Vocational Training</h1>
            <p>
              Vocational training transforms women’s potential into real
              opportunities.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="relative mx-auto max-w-md rounded-lg bg-[#d8fee3] p-0.5 shadow-lg">
          <div className="bg-white p-7 rounded-md">
            <h1 className="font-bold text-xl mb-2">Shelter</h1>
            <p>Shelter gives women hope, dignity, and a second chance.</p>
          </div>
        </div>
      </div>

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
            {card_women
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

      <div className="flex flex-row m-2 justify-center items-center bg-[#eafcfa]">
        <div className="text-4xl font-bold m-4 P-4 font-serif">
          {/* reach and presence */}
          REACH AND PRESENCE
        </div>
        <div className="m-4 p-4 flex flex-row">
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

      <div className="flex m-auto p-4 justify-between">
        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6b m-2">
          <div class="flex justify-center mb-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-purple-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>

          <div class="flex justify-center mb-3">
            <h5 class="text-slate-800 text-2xl font-semibold">
              SHG FORMATION
            </h5>
          </div>
          <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              In Gajapati District, the organization has successfully mobilized
              the parents of child laborers to form Self-Help Groups (SHGs).
              These groups, supported by the organization's initiatives, are
              effectively managing internal lending with their existing funds.
              The SHG members are now looking to collaborate with neighboring
              groups to undertake large-scale business activities, paving the
              way for greater socio-economic empowerment and sustainable
              livelihoods.
            </p>{" "}
            <br />
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              In Ganjam District, the organization has formed 60 SHGs by the end
              of this year, enabling members to become skilled entrepreneurs.
              Through consistent efforts in income-generating activities, the
              organization has facilitated the formation of a federation among
              these groups. Plans are underway for the federation to launch
              business ventures, such as producing women’s clothing, especially
              dresses. To support this endeavor, the organization has consulted
              with cloth merchants and the traders' union in both Ganjam and
              Gajapati districts, ensuring a strong
            </p>
          </div>
        </div>

        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 m-2">
          <div class="flex justify-center mb-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-purple-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>

          <div class="flex justify-center mb-3">
            <h5 class="text-slate-800 text-2xl font-semibold">
              AWARENESS CAMPAIGN
            </h5>
          </div>
          <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              We firmly believe that people are the primary drivers of their own
              development, requiring only initial guidance and support to
              realize their potential. With this in mind, the proposed program
              holds immediate relevance and significant implications for
              fostering local self-reliance. At every stage, the organization
              actively involves and empowers women, inspiring them to organize
              for their betterment. Through personal persuasion and various
              motivational initiatives, we strive to encourage women to take
              charge of their progress.
            </p>{" "}
            <br />
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              As part of these efforts, the organization has conducted awareness
              camps across several blocks in Ganjam District, including
              locations such as Ramachandrapur Village in Kukudakhandi Block,
              the Training Hall of Appex Guide Line in Sidhartha Nagar-3rd Line,
              Berhampur, Sidheswar Village in Digapahandi Block, Ralaba Village
              in Rangeilunda Block, and Khanduru Village in Polasara Block.
              These camps, organized under the Family Counselling Centre (FCC)
              program sponsored by SSWB Bhubaneswar and supported by our own
              resources, addressed critical issues such as societal atrocities,
              women trafficking, legal rights, the importance of women’s
              education, family problems, and HIV/AIDS awareness. Each camp saw
              the participation of over 40 individuals, with FCC counselors
              providing valuable guidance on family issues and their resolution.
              Distinguished speakers also attended, further enriching these
              discussions and empowering the participants.
            </p>
          </div>
        </div>

        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 m-2">
          <div class="flex justify-center mb-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-purple-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>

          <div class="flex justify-center mb-3">
            <h5 class="text-slate-800 text-2xl font-semibold">
              VOCATIONAL TRAINING
            </h5>
          </div>
          <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              o empower women economically and boost their confidence, the
              organization has undertaken vocational training programs in areas
              such as dressmaking, appliqué work, paper bag production, and
              khali stitching. These initiatives provide women with practical
              skills and sustainable employment opportunities. After completing
              their training, many women are engaged at the organization’s NCLP
              vocational training centers, where they produce uniforms for NCLP
              school children and other dress materials for the public. The
              centers operate six days a week, from 10 AM to 4 PM, offering
              women wage-based work. Over the past 11 years, the organization
              has successfully managed two vocational training centers located
              at Goods Road, Gosaninuagaon, Berhampur, Ganjam, and Chandragiri
              in Gajapati. While male members also contribute, the true pride
              lies in the fact that all women workers employed in dress
              stitching are graduates of the organization’s training programs.
            </p>{" "}
            <br />
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              Recognizing the potential for further expansion, the organization
              has approached NABARD, Berhampur, for funding to promote
              enterprise development among women and youth. Additionally, plans
              are underway to launch vocational training courses in mobile
              repairing, automobile repairing, electrical and electronic skills,
              and computer training for unemployed youth. These new initiatives
              aim to be supported by the Directorate General of Employment and
              Training (DGET), Government of Odisha, Cuttack, broadening the
              scope of opportunities for skill development and self-reliance.
            </p>
          </div>
        </div>
      </div>

      <div className="flex m-auto p-4 justify-between">
        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6b m-2">
          <div class="flex justify-center mb-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-purple-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>

          <div class="flex justify-center mb-3">
            <h5 class="text-slate-800 text-2xl font-semibold">
              WOMEN EDUCATION
            </h5>
          </div>
          <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              Education has always symbolized light, dispelling the darkness of
              ignorance. It is the cornerstone of knowledge, enabling
              individuals to discern their realities, challenge forced
              servitude, and demand justice. Nowhere is this more critical than
              in women’s education, which plays a pivotal role in their
              empowerment and emancipation. Recognizing education as an
              essential economic output for human resource development, the
              organization has focused on addressing the illiteracy and lack of
              knowledge that perpetuate fear, indifference, and disempowerment
              among women. By prioritizing the education of tribal and
              underprivileged women, the organization has worked to foster
              functional literacy and build a foundation for their
              self-reliance.
            </p>{" "}
            <br />
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              Since 2009-10, with the support of the Central Social Welfare
              Board, New Delhi, the organization has been implementing the
              Condensed Course (Primary Level) to provide primary education to
              SC/ST and marginalized women. Each batch consists of 25 women,
              ensuring personalized attention and support. Alongside education,
              part-time skill development training in tailoring has been
              integrated to enhance their employability. The project, which
              began on March 21, 2006, has successfully enabled women to upgrade
              their skills and pursue better opportunities. This year, the
              organization has reapplied to continue the program, reaffirming
              its commitment to empowering women through education and
              vocational training.
            </p>
          </div>
        </div>

        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 m-2">
          <div class="flex justify-center mb-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-purple-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>

          <div class="flex justify-center mb-3">
            <h5 class="text-slate-800 text-2xl font-semibold">
              INCOME GENERATION PROGRAMME
            </h5>
          </div>
          <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              The organization, through an integrated approach, has created
              ongoing income-generating opportunities for both men and women
              trained in various skills, including stitching, appliqué work,
              paper thunga, and Khali stitching. The "Training cum Production
              Unit" located at Goods Road, Gosaninuagaon, Berhampur, Ganjam,
              employs 20 individuals (both male and female) on a daily wage
              basis, with earnings ranging from Rs. 200 to Rs. 300 per day. This
              initiative provides stable employment and fosters skill
              development.
            </p>{" "}
            <br />
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              To further enhance the training experience, the organization has
              partnered with the Directorate General of Employment & Training
              (DGET), Cuttack, to provide expertise in modern stitching
              techniques. With its growing production capacity and improved
              efficiency, the unit has been recognized as a small-scale industry
              since January 2001. It is officially registered under the District
              Industry Centre (DIC) of Ganjam, with registration number
              150603083, contributing significantly to the local economy and
              empowering workers through sustainable livelihoods.
            </p>
          </div>
        </div>

        <div class="relative w-96 bg-white shadow-sm border border-slate-200 rounded-lg p-3 pb-6 m-2">
          <div class="flex justify-center mb-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 text-purple-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </div>

          <div class="flex justify-center mb-3">
            <h5 class="text-slate-800 text-2xl font-semibold">
              SWADHARA –A Shelter Home
            </h5>
          </div>
          <div class="p-3 mt-5 border-t border-slate-100 text-center max-h-60 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100">
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              Women constitute half of the global population, yet they continue
              to face unequal treatment across various aspects of life. In
              India, despite the rich history of peace and non-violence, women
              are subjected to various forms of violence—domestic, public,
              physical, and emotional. This widespread violence is often rooted
              in the societal status of women, leading to their marginalization
              and vulnerability.
            </p>{" "}
            <br />
            <p class="block text-slate-600 leading-normal font-light mb-4 max-w-lg">
              To address this, the organization is dedicated to supporting women
              in difficult circumstances, helping them regain their confidence
              and reestablish themselves in society. In 2008-09, we launched the
              "SWADHARA" project, a shelter home located in Berhampur city,
              designed to offer flexibility and cater to the needs of women in
              distress. The shelter provides comprehensive rehabilitation
              services to women who have no social or economic support, with a
              capacity to accommodate 50 women. It serves women who are widows,
              destitute, deserted, ex-prisoners, victims of sexual abuse and
              crimes, as well as migrant women, refugees, and those rendered
              homeless due to natural disasters or trafficking. Through this
              initiative, the organization ensures that these women and their
              children receive shelter and meet their basic life needs, offering
              them a safe haven and a path to recovery.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row m-4 p-2 bg-[#eafcfa] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-black border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
                Donate For Women
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

export default index;
