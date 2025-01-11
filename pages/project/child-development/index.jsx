import React, { useState } from "react";
import ImageCarousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import Image from "next/image";
import { children } from "@/components/Data/DataBase";

const images = [
  {
    src: "https://img.playbook.com/LK83UGFSNRwmu2Fr2rNylo_CrptC4tee0zqwUcj3wjM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk1MzA2MjQw/LTRmMGQtNGFjZi04/ZGQ0LTMzZGQ3ZWQx/YTdiYQ",
    alt: "image 1",
  },
  {
    src: "https://img.playbook.com/vNcOsBlfB96rW21-wElsX9uv5csgt7iFO4jmbG2auy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EwN2NiNjQ4/LWUxZWYtNGVlNC04/NDgwLWQzYWRlODc4/NzZlMg",
    alt: "image 2",
  },
  {
    src: "https://img.playbook.com/7ZTc7Sy25KJEQc3qTAsxrVjJ6e4brC013alB1ZqS8W0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlkYjc1YzIz/LTVmMmMtNDViNi05/MTMyLWM1ODM3ZjM0/OGNlOQ",
    alt: "image 7",
  },
  {
    src: "https://img.playbook.com/4LUmdihx-s6JM6sYIMn3e6uu0-bm9Xdsc7VbYfiXJy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViYzM2NTJm/LWZmZDgtNGU5ZS05/NDMyLWQ3Zjg1NjQx/ZDQzNA",
    alt: "image 5",
  },
  {
    src: "https://img.playbook.com/hwuMpsEXHqnf4_yPEncXOL6XE4QNPfjuLXg2wqnJD6Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlhZTU2ZGI4/LWRmZmYtNGI2Mi1i/MTY5LTFiOTM0NmVh/ZTFmOA",
    alt: "image 6",
  },
];

// Card Component with "Read More" functionality
function Cards({ name }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    //
    <div
      className={`border border-gray-300 rounded-lg p-6 m-4 bg-white shadow-lg transition-all duration-300 transform hover:shadow-2xl flex flex-col items-center ${
        isExpanded ? "h-auto" : "h-[320px]"
      }`}
    >
      {/* Image Section */}
      <Image
        src={name.ImageURL}
        alt="Image Not Found!"
        height={2500}
        width={2500}
        data-aos="flip-left"
        data-aos-duration="3000"
        className="w-40 h-40 object-cover rounded-full border border-gray-200 mb-4"
      />
      {/* Title */}
      <div className="text-2xl font-semibold text-gray-800 mb-2">
        {name.name}
      </div>
      {/* Description */}
      <div
        className={`text-center text-gray-600 transition-all duration-300 ${
          isExpanded ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        {name.text}
      </div>
      {/* Read More Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-md transition-all duration-300 bg-[#A1D9D6] hover:bg-[#00796B] hover:text-white"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

const Index = () => {
  return (
    <>
      {/* Carousel */}
      <div>
        <ImageCarousel images={images} text={"Child Development"} />
      </div>
      <div className="bg-[#FFFFFF] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
          Why Child Development?
        </h1>
        <div className="text-lg m-2">
          Children are the foundation of a nation's future, and their well-being
          is vital for India’s progress. Despite advancements, many children in
          rural and marginalized communities face challenges such as poverty,
          lack of education, malnutrition, and limited access to healthcare. By
          prioritizing child development, we can ensure that every child gets
          the opportunity to grow in a nurturing environment. Our NGO is
          dedicated to empowering children through initiatives focused on
          education, healthcare, nutrition, and skill development. By fostering
          holistic growth and breaking the cycle of poverty, we aim to build a
          brighter future for the next generation and their communities.
        </div>
      </div>
      <div className="bg-[#eafcfa] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200 ">
          What we do{" "}
        </h1>
        <div className="flex flex-col m-2 p-2 ">
          <div className="text-lg m-2 p-2 justify-center">
            At our NGO, we are committed to eradicating child labor and
            promoting child development in India. Through our National Child
            Labour Program (NCLP), we provide specialized education and
            vocational training to children in need, especially those at risk of
            exploitation. We operate schools that focus on both academic and
            technical skills, such as soft toy making, tailoring, and coir
            craft, empowering children with the tools to secure a brighter
            future and improve their family's income. In addition to education,
            we run awareness campaigns to highlight the dangers of child labor
            and dropout rates, aiming to create a society where every child has
            access to education and opportunities for growth. Our efforts have
            reached thousands of children across districts like Gajapati and
            Ganjam, transforming lives and fostering long-term positive change
            in communities.
          </div>
          <div className="flex flex-row m-2 p-2 justify-center items-center">
            <Image
              src="https://img.playbook.com/GsThB309VcZpkeBBSzwkgoMDB7vXUnXFH70DorK-X7g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JkODM3ZDI0/LTk4YWYtNGJjYi1h/Mzg3LWIwNzM0ZTEw/ZGJiNw"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/VVvylf7Beo-L7hWQj8oM6mZb-Mo_Re_7Z4bRKmtkAOQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzYwZTNjMTQ0/LTc1NzctNGYzNC1h/ZGMwLWMyYWQ4ZDJl/NjBmMA"
              alt="Agriculture representation"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/vhzsb79faRCp0ji5vGobTE7scjK7pebols59UOv4TuM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QzMWM1OGNi/LTA5N2QtNDY1OS1h/OThkLTgxZWU2MjNi/OTY4Ng"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/QowTWrDENJ2WYeWOpGo2VyIR2mLKqlFZoHCVe5LwzQ0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVjYTkyOTZi/LTU0NTctNDNiNS05/OGFlLTIyODU4Y2Qx/MDE4ZQ"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <div className="text-2xl font-serif m-4 p-4 justify-center items-center">
              Education and skills shape a brighter future.
            </div>
          </div>
        </div>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-6 mx-auto">
        {children.map((child, index) => (
          <Cards key={index} name={child} />
        ))}
      </div>
      {/* our aim */}
      <div className="bg-[#eafcfa] p-4 m-4">
        <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
          Our Aim
        </h1>
        <div className="text-lg">
          <p>
            At the heart of our mission lies a commitment to transforming rural
            and tribal lives, while addressing critical issues like child labor
            eradication and socio-economic empowerment. Our goals include:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Empowering Farmers and Families</strong> – Equipping small
              and marginal farmers with sustainable methods to enhance incomes,
              reducing the economic necessity for child labor.
            </li>
            <li>
              <strong>Building Resilient Communities</strong> – Forming
              collaborative Farmers Interest Groups (FIGs) and integrating
              education and vocational programs for children in farming
              families.
            </li>
            <li>
              <strong>Reviving Nature’s Lifelines</strong> – Restoring water
              bodies while providing education and skills to vulnerable
              children, creating hope for families and communities.
            </li>
            <li>
              <strong>Sowing Seeds of Education and Innovation</strong> –
              Combining agricultural progress with education and training for
              children, including tailoring, soft toys, and coir craft skills.
            </li>
            <li>
              <strong>Harvesting Prosperity Through Agro-Farming</strong> –
              Boosting rural economies while supporting education and vocational
              training to eliminate generational cycles of child labor.
            </li>
          </ul>
          <p>
            Together, we are sowing the seeds of change for a thriving,
            sustainable future, free of child labor and filled with
            opportunities for every child to dream and thrive.
          </p>
        </div>
      </div>

      {/* another blog card section */}
      <div className=" bg-gray-800 pt-12 p-4">
        <div className="grid grid-cols-3 gap-14 md:grid-cols-3 md:gap-5">
          {/* Tree and Shrub Pruning */}
          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* <!-- Circle background with black border --> */}
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />

                {/* <!-- ClipPath for circular masking --> */}
                <defs>
                  <clipPath id="circle-clip">
                    <circle cx="12" cy="12" r="11" />
                  </clipPath>
                </defs>

                {/* <!-- Image clipped to the circle --> */}
                <image
                  href="https://img.playbook.com/Fb34qOB4x8k7j20c_kxGKg1ZWsoElzLeqRxe5Yc4dm0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzY5NDRmMGM5/LWIxNDMtNGRkMi1i/OTVjLTM3NmMzYTk5/Y2E3NA"
                  x="1"
                  y="1"
                  width="22"
                  height="22"
                  clip-path="url(#circle-clip)"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Educate. Empower. Evolve.
            </h1>
            <p className="px-4 text-gray-500">
            "Education is the most powerful tool we can use to break the cycle of poverty and create a brighter future for every child."
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* <!-- Circle background with black border --> */}
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />

                {/* <!-- ClipPath for circular masking --> */}
                <defs>
                  <clipPath id="circle-clip">
                    <circle cx="12" cy="12" r="11" />
                  </clipPath>
                </defs>

                {/* <!-- Image --> */}
                <image
                  href="https://img.playbook.com/P9bdSfZ6e_xwSzHN5s5K2p8uT6csA6lkzISSBf8rPZk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2Q2ZDkxNWI0/LWFkZjUtNDM2My1i/YzBhLWZkMWU3M2Nk/Y2M4NA"
                  x="2"
                  y="2"
                  width="22"
                  height="22"
                  clip-path="url(#circle-clip)"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            "Explore. Create. Grow."
            </h1>
            <p className="px-4 text-gray-500">
            "Extracurricular activities ignite creativity, build confidence, and nurture skills that shape a child's future."
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* <!-- Circle background with black border --> */}
                <circle
                  cx="12"
                  cy="12"
                  r="11"
                  stroke="black"
                  strokeWidth="1"
                  fill="none"
                />

                {/* <!-- ClipPath for circular masking --> */}
                <defs>
                  <clipPath id="circle-clip">
                    <circle cx="12" cy="12" r="11" />
                  </clipPath>
                </defs>

                {/* <!-- Image --> */}
                <image
                  href="https://img.playbook.com/0-yCtBkP1Cq0dlN_YiMzLgJPLgUe8BEkJsD-CsCUKvE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzU2NzQzM2I3/LWZjYTktNDAzNy05/ZGQxLTJiNjI5Yzc2/Mjk1OQ"
                  x="2"
                  y="2"
                  width="22"
                  height="22"
                  clip-path="url(#circle-clip)"
                />
              </svg>
            </div>
            <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            "Learn. Innovate. Lead."
            </h1>
            <p className="px-4 text-gray-500">
            "Skills and technology empower children to innovate, solve problems, and lead the future with confidence."
            </p>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <div className="flex flex-row m-4 p-2 bg-[#eafcfa] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-black border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
                Donate For Children
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
