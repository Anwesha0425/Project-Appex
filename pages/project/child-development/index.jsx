// import React, { useState } from "react";
// import ImageCarousel from "../../../components/Carousel/Carousel";
// import Link from "next/link";
// import Image from "next/image";
// import { children } from "@/components/Data/DataBase";

// const Images = [
//   {
//     src: "https://img.playbook.com/LK83UGFSNRwmu2Fr2rNylo_CrptC4tee0zqwUcj3wjM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk1MzA2MjQw/LTRmMGQtNGFjZi04/ZGQ0LTMzZGQ3ZWQx/YTdiYQ",
//     alt: "Image 1",
//   },
//   {
//     src: "https://img.playbook.com/vNcOsBlfB96rW21-wElsX9uv5csgt7iFO4jmbG2auy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EwN2NiNjQ4/LWUxZWYtNGVlNC04/NDgwLWQzYWRlODc4/NzZlMg",
//     alt: "Image 2",
//   },
//   {
//     src: "https://img.playbook.com/7ZTc7Sy25KJEQc3qTAsxrVjJ6e4brC013alB1ZqS8W0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlkYjc1YzIz/LTVmMmMtNDViNi05/MTMyLWM1ODM3ZjM0/OGNlOQ",
//     alt: "Image 7",
//   },
//   {
//     src: "https://img.playbook.com/4LUmdihx-s6JM6sYIMn3e6uu0-bm9Xdsc7VbYfiXJy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzViYzM2NTJm/LWZmZDgtNGU5ZS05/NDMyLWQ3Zjg1NjQx/ZDQzNA",
//     alt: "Image 5",
//   },
//   {
//     src: "https://img.playbook.com/hwuMpsEXHqnf4_yPEncXOL6XE4QNPfjuLXg2wqnJD6Q/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlhZTU2ZGI4/LWRmZmYtNGI2Mi1i/MTY5LTFiOTM0NmVh/ZTFmOA",
//     alt: "Image 6",
//   },
// ];

// // Card Component with "Read More" functionality
// function Cards({ name }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     //
//     <div
//       className={`border border-gray-300 rounded-lg p-6 m-4 bg-white shadow-lg transition-all duration-300 transform hover:shadow-2xl flex flex-col items-center ${
//         isExpanded ? "h-auto" : "h-[320px]"
//       }`}
//     >
//       {/* Image Section */}
//       <Image
//         src={name.ImageURL}
//         alt="Image Not Found!"
//         height={2500}
//         width={2500}
//         data-aos="flip-left"
//         data-aos-duration="3000"
//         className="w-40 h-40 object-cover rounded-full border border-gray-200 mb-4"
//       />
//       {/* Title */}
//       <div className="text-2xl font-semibold text-gray-800 mb-2">
//         {name.name}
//       </div>
//       {/* Description */}
//       <div
//         className={`text-center text-gray-600 transition-all duration-300 ${
//           isExpanded ? "line-clamp-none" : "line-clamp-3"
//         }`}
//       >
//         {name.text}
//       </div>
//       {/* Read More Button */}
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 font-bold rounded-md transition-all duration-300 bg-[#A1D9D6] hover:bg-[#00796B] hover:text-white"
//       >
//         {isExpanded ? "Show Less" : "Read More"}
//       </button>
//     </div>
//   );
// }

// const Index = () => {
//   return (
//     <>
//       {/* Carousel */}
//       <div>
//         <ImageCarousel images={Images} text={"Child Development"} />
//       </div>
//       <div className="bg-[#FFFFFF] p-4 m-4">
//         <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200">
//           Why Child Development?
//         </h1>
//         <div className="text-lg m-2">
//         Children are the foundation of a nation&apos;s future, and their well-being is vital for India&apos;s progress. Despite advancements, many children in rural and marginalized communities face challenges such as poverty, lack of education, malnutrition, and limited access to healthcare. By prioritizing child development, we can ensure that every child gets the opportunity to grow in a nurturing environment. Our NGO is dedicated to empowering children through initiatives focused on education, healthcare, nutrition, and skill development. By fostering holistic growth and breaking the cycle of poverty, we aim to build a brighter future for the next generation and their communities.

//         </div>
//       </div>
//       <div className="bg-[#eafcfa] p-4 m-4">
//         <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-200 ">
//           What we do{" "}
//         </h1>
//         <div className="flex flex-col m-2 p-2 ">
//           <div className="text-lg m-2 p-2 justify-center">
//           At our NGO, we are committed to eradicating child labor and promoting child development in India. Through our National Child Labour Program (NCLP), we provide specialized education and vocational training to children in need, especially those at risk of exploitation. We operate schools that focus on both academic and technical skills, such as soft toy making, tailoring, and coir craft, empowering children with the tools to secure a brighter future and improve their family&apos;s income. In addition to education, we run awareness campaigns to highlight the dangers of child labor and dropout rates, aiming to create a society where every child has access to education and opportunities for growth. Our efforts have reached thousands of children across districts like Gajapati and Ganjam, transforming lives and fostering long-term positive change in communities.

//           </div>
//           <div className="flex flex-row m-2 p-2 justify-center items-center">
//             <Image
//               src="https://img.playbook.com/GsThB309VcZpkeBBSzwkgoMDB7vXUnXFH70DorK-X7g/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JkODM3ZDI0/LTk4YWYtNGJjYi1h/Mzg3LWIwNzM0ZTEw/ZGJiNw"
//               alt="agriculture representation1"
//               height={150}
//               width={150}
//               className="border-black border-3 p-2 m-4 rounded-full shadow-md"
//             />
//             <Image
//               src="https://img.playbook.com/VVvylf7Beo-L7hWQj8oM6mZb-Mo_Re_7Z4bRKmtkAOQ/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzYwZTNjMTQ0/LTc1NzctNGYzNC1h/ZGMwLWMyYWQ4ZDJl/NjBmMA"
//               alt="Agriculture representation"
//               height={150}
//               width={150}
//               className="border-black border-3 p-2 m-4 rounded-full shadow-md"
//             />
//             <Image
//               src="https://img.playbook.com/vhzsb79faRCp0ji5vGobTE7scjK7pebols59UOv4TuM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QzMWM1OGNi/LTA5N2QtNDY1OS1h/OThkLTgxZWU2MjNi/OTY4Ng"
//               alt="agriculture representation2"
//               height={150}
//               width={150}
//               className="border-black border-3 p-2 m-4 rounded-full shadow-md"
//             />
//             <Image
//               src="https://img.playbook.com/QowTWrDENJ2WYeWOpGo2VyIR2mLKqlFZoHCVe5LwzQ0/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzVjYTkyOTZi/LTU0NTctNDNiNS05/OGFlLTIyODU4Y2Qx/MDE4ZQ"
//               alt="agriculture representation3"
//               height={150}
//               width={150}
//               className="border-black border-3 p-2 m-4 rounded-full shadow-md"
//             />
//             <div className="text-2xl font-serif m-4 p-4 justify-center items-center">
//               Education and skills shape a brighter future.
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Cards Section */}
//       <div className="grid grid-cols-2 gap-6 mx-auto">
//         {children.map((child, index) => (
//           <Cards key={index} name={child} />
//         ))}
//       </div>
//       {/* our aim */}
//       <div className="bg-[#eafcfa] p-4 m-4">
//         <h1 className="text-4xl md:text-3xl pl-2 my-2 border-l-4 font-sans font-bold border-teal-400 dark:text-gray-200">
//           Our Aim
//         </h1>
//         <div className="text-lg">
//           <div>
//             At the heart of our mission lies a commitment to transforming rural
//             and tribal lives, while addressing critical issues like child labor
//             eradication and socio-economic empowerment. Our goals include:
//           </div>
//           <ul className="list-disc ml-6">
//             <li>
//               <strong>Empowering Farmers and Families</strong> – Equipping small
//               and marginal farmers with sustainable methods to enhance incomes,
//               reducing the economic necessity for child labor.
//             </li>
//             <li>
//               <strong>Building Resilient Communities</strong> – Forming
//               collaborative Farmers Interest Groups (FIGs) and integrating
//               education and vocational programs for children in farming
//               families.
//             </li>
//             <li>
//               <strong>Reviving Nature&apos;s Lifelines</strong> – Restoring water
//               bodies while providing education and skills to vulnerable
//               children, creating hope for families and communities.
//             </li>
//             <li>
//               <strong>Sowing Seeds of Education and Innovation</strong> –
//               Combining agricultural progress with education and training for
//               children, including tailoring, soft toys, and coir craft skills.
//             </li>
//             <li>
//               <strong>Harvesting Prosperity Through Agro-Farming</strong> –
//               Boosting rural economies while supporting education and vocational
//               training to eliminate generational cycles of child labor.
//             </li>
//           </ul>
//           <div>
//             Together, we are sowing the seeds of change for a thriving,
//             sustainable future, free of child labor and filled with
//             opportunities for every child to dream and thrive.
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="flex flex-row m-4 p-2 bg-[#eafcfa] items-center">
//         {/* Left Section */}
//         <div className="m-4 p-4 flex-1 justify-center">
//           <div className="p-2">
//             <Link href="/fundraising">
//               <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-black border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
//                 Donate For Children
//               </div>
//             </Link>
//           </div>
//         </div>
//         {/* Right Section */}
//         <div className="m-4 p-4 flex flex-col justify-start flex-1">
//           <div className="text-4xl font-bold py-2 font-serif">FOR SUPPORT</div>
//           <div className="text-xl">email-to</div>
//           <div className="text-2xl font-bold font-serif">
//             <a
//               href="mailto:appexfcc@gmail.com"
//               className="text-[#0e0e0e] hover:underline"
//             >
//               appexfcc@gmail.com
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Index;
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
