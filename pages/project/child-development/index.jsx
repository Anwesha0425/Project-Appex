import React, { useState } from "react";
import ImageCarousel from "../../../components/Carousel/Carousel";
import Link from "next/link";
import Image from "next/image";
import { children } from "@/components/Data/DataBase";

const Images = [
  {
    src: "https://img.playbook.com/LK83UGFSNRwmu2Fr2rNylo_CrptC4tee0zqwUcj3wjM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk1MzA2MjQw/LTRmMGQtNGFjZi04/ZGQ0LTMzZGQ3ZWQx/YTdiYQ",
    alt: "Image 1",
  },
  {
    src: "https://img.playbook.com/vNcOsBlfB96rW21-wElsX9uv5csgt7iFO4jmbG2auy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EwN2NiNjQ4/LWUxZWYtNGVlNC04/NDgwLWQzYWRlODc4/NzZlMg",
    alt: "Image 2",
  },
  {
    src: "https://img.playbook.com/7ZTc7Sy25KJEQc3qTAsxrVjJ6e4brC013alB1ZqS8W0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlkYjc1YzIz/LTVmMmMtNDViNi05/MTMyLWM1ODM3ZjM0/OGNlOQ",
    alt: "Image 7",
  },
  {
    src: "https://img.playbook.com/4LUmdihx-s6JM6sYIMn3e6uu0-bm9Xdsc7VbYfiXJy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViYzM2NTJm/LWZmZDgtNGU5ZS05/NDMyLWQ3Zjg1NjQx/ZDQzNA",
    alt: "Image 5",
  },
  {
    src: "https://img.playbook.com/hwuMpsEXHqnf4_yPEncXOL6XE4QNPfjuLXg2wqnJD6Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlhZTU2ZGI4/LWRmZmYtNGI2Mi1i/MTY5LTFiOTM0NmVh/ZTFmOA",
    alt: "Image 6",
  },
];

// Card Component with "Read More" functionality
function Cards({ name }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    //
    <div
      className={`rounded-lg p-6 m-4 border-2 shadow-lg transition-all duration-300 transform hover:shadow-2xl flex flex-col items-center ${
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
        className="w-40 h-40 object-cover rounded-full mb-4"
      />
      {/* Title */}
      <div className="text-2xl font-semibold mb-2">
        {name.name}
      </div>
      {/* Description */}
      <div
        className={`text-center transition-all duration-300 ${
          isExpanded ? "line-clamp-none" : "line-clamp-3"
        }`}
      >
        {name.text}
      </div>
      {/* Read More Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 px-4 py-2 text-[black] font-bold rounded-md transition-all duration-300 bg-[#A1D9D6] hover:bg-[#00796B] "
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
}

const Index = () => {
  return (
    <>
    <main>
    <div class="relative h-screen overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/uKrEXrBZ9r5sJDxqMrpiQS1hwCFV_YSMFnPQTNi6pR8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzc0ZGY2MDVi/LTdhZTYtNDIxYi04/YmJiLTFlNGM0MDIx/NGQwNQ"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Child Development
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Educate a child today to break the chains of exploitation tomorrow.
          </p>
        </div>
      </div>

      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl text-center font-serif text-[#6f2c2c] font-bold">
          Why Child Development
        </h1>
        <div className="text-lg m-2">
          Children are the foundation of a nation&apos;s future, and their
          well-being is vital for India&apos;s progress. Despite advancements,
          many children in rural and marginalized communities face challenges
          such as poverty, lack of education, malnutrition, and limited access
          to healthcare. By prioritizing child development, we can ensure that
          every child gets the opportunity to grow in a nurturing environment.
          Our NGO is dedicated to empowering children through initiatives
          focused on education, healthcare, nutrition, and skill development. By
          fostering holistic growth and breaking the cycle of poverty, we aim to
          build a brighter future for the next generation and their communities.
        </div>
      </div>
      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl text-center font-serif text-[#2c743e] font-bold">
          What we do
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
            future and improve their family&apos;s income. In addition to
            education, we run awareness campaigns to highlight the dangers of
            child labor and dropout rates, aiming to create a society where
            every child has access to education and opportunities for growth.
            Our efforts have reached thousands of children across districts like
            Gajapati and Ganjam, transforming lives and fostering long-term
            positive change in communities.
          </div>
          <div className="flex sm:flex-col md:flex-col m-2 p-2 justify-center items-center">
            <Image
              src="https://img.playbook.com/GsThB309VcZpkeBBSzwkgoMDB7vXUnXFH70DorK-X7g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JkODM3ZDI0/LTk4YWYtNGJjYi1h/Mzg3LWIwNzM0ZTEw/ZGJiNw"
              alt="agriculture representation1"
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
              alt="agriculture representation2"
              height={150}
              width={150}
              className="border-black border-3 p-2 m-4 rounded-full shadow-md"
            />
            <Image
              src="https://img.playbook.com/QowTWrDENJ2WYeWOpGo2VyIR2mLKqlFZoHCVe5LwzQ0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVjYTkyOTZi/LTU0NTctNDNiNS05/OGFlLTIyODU4Y2Qx/MDE4ZQ"
              alt="agriculture representation3"
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
      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl text-center font-serif text-[#1d5391] font-bold border-teal-400 dark:text-gray-200">
          Their Stories
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-6 ">
          {children.map((child, index) => (
            <Cards key={index} name={child} />
          ))}
        </div>
      </div>

      {/* our aim */}
      <div className="w-[80%] p-4 mx-auto">
        <h1 className="text-4xl text-center font-serif text-[#5d1e91] font-bold border-teal-400 dark:text-gray-200">
          Our Aim
        </h1>
        <div className="text-lg">
          <div>
            Addressing child labor in India requires a comprehensive approach
            targeting socio-economic challenges and empowering the
            underprivileged. Our organization remains committed to this cause,
            with key initiatives:
          </div>
          <ul className="list-disc ml-6">
            <li>
              <strong>Awareness Programme on Child Labour</strong> – Conducting
              rallies and participatory discussions to spread awareness about
              the impact of child labor, engaging community members and
              officials.
            </li>
            <li>
              <strong>Supporting Child Education</strong> – Establishing special
              schools to educate child laborers and equip them to defend against
              exploitation and deprivation.
            </li>
            <li>
              <strong>Addressing Root Causes</strong> – Tackling poverty,
              illiteracy, and inadequate living conditions by offering
              socio-economic support and education to families.
            </li>
            <li>
              <strong>Recreation and Entertainment Activities</strong> –
              Boosting the morale of children through events like Saraswati
              Pooja, national day celebrations, and competitions, fostering a
              spirit of joy and competitiveness.
            </li>
            <li>
              <strong>Community Engagement through Sports</strong> – Organizing
              cricket tournaments and youth events, fostering unity and
              rewarding achievements to promote a spirit of healthy competition.
            </li>
          </ul>
          <div>
            Through awareness, education, and community engagement, we aim to
            break the cycles of child labor, empowering families and creating
            opportunities for children to thrive.
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex sm:flex-col md:flex-col mx-auto w-[80%] p-2 bg-[#f4fefd] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold text-[black] m-4 p-4 font-serif bg-[#A1D9D6] border-[#A1D9D6] border-2 rounded-md text-center hover:bg-[#00796B]">
                Donate For Children
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
              appexfcc@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <ImageCarousel images={Images} text={"Memories"} />
      </div>
    </main>
    </>
  );
};

export default Index;
