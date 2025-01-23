import React from "react";
import ImageCarousel from "../../../components/Carousel/Carousel";
import { card_health } from "../../../components/Data/Blogs_DataBase";
import Link from "next/link";
import Image from "next/image";
import { FaHeartbeat, FaUserMd, FaShieldVirus, FaBaby, FaPeopleArrows } from "react-icons/fa";

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
  const activities = [
    {
      title: "Health Camps",
      description:
        "We organize health camps in remote villages, providing medical care and promoting health and hygiene practices in underserved communities.",
      stats: "5 Camps | 500+ People Reached",
    },
    {
      title: "ASHA Training",
      description:
        "We conduct skill-based training for ASHA workers to enhance maternal and child healthcare, including pre and postnatal care and newborn management.",
      stats: "600+ ASHAs Trained | Improved IMR & MMR",
    },
    {
      title: "HIV/AIDS Awareness",
      description:
        "Our awareness campaigns educate communities about the prevention, myths, and safe practices related to HIV/AIDS, while promoting a stigma-free society.",
      stats: "4 Camps | 150+ People Educated",
    },
    {
      title: "Community-Based Health Management",
      description:
        "We promote family welfare programs, immunization drives, and healthcare awareness to improve community health standards.",
      stats: "Pulse Polio | 300+ Families Benefited",
    },
    {
      title: "ANM Training",
      description:
        "We provide training for Auxiliary Nurse Midwives (ANMs) to deliver home-based newborn and maternal care effectively.",
      stats: "90 ANMs Trained | 2 Batches Conducted",
    },
    {
      title: "Sanitation Awareness",
      description:
        "We motivate communities to adopt improved sanitation practices and construct Individual Household Latrines (IHL) to promote hygiene and public health.",
      stats: "8 Camps | 300+ Families Motivated",
    },
  ];

  const steps = [
    {
      description:
        "Providing medical care and promoting health and hygiene in remote villages.",
      icon: <FaUserMd className="text-teal-500 text-4xl" />,
    },
    {
      description:
        "Skill-based training for ASHA workers to enhance maternal and child healthcare.",
      icon: <FaBaby className="text-pink-500 text-4xl" />,
    },
    {
      description:
        "Educating on prevention, myths, and safe practices related to HIV/AIDS.",
      icon: <FaShieldVirus className="text-red-500 text-4xl" />,
    },
    {
      description:
        "Promoting family welfare, immunization drives, pre/postnatal care.",
      icon: <FaHeartbeat className="text-green-500 text-4xl" />,
    },
    {
      description:
        "Training Auxiliary Nurse Midwives for effective newborn and maternal care.",
      icon: <FaPeopleArrows className="text-purple-500 text-4xl" />,
    },
  ];

  return (
    <>
    <main className="bg-[#fff9e9]">
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/kifisEB1F58N2KHgkzs8DfamtCJ70HPhtwSe7pubn6U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FhYTAzNDll/LTA5NjktNDA4Yi1i/MTYyLTg1YzNjMzFk/NGFiNQ"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Health
          </h1>
          <p class="text-lg text-gray-300 mb-8">
          Promoting Health, Empowering Lives: Caring for Communities, Women, and Children.
          </p>
        </div>
        </div>

      <div className="bg-gray-50 py-10 px-4 w-[80%] mx-auto">
        {/* Why This Topic Section */}
        <section className="mb-4">
          <h2 className="text-4xl font-serif text-center mb-4 text-[#6b2929] font-bold border-teal-400 dark:text-gray-150">
            Why Health
          </h2>
          <p className="text-lg text-gray-700">
            Health is a cornerstone for a thriving community, yet many rural and
            underprivileged regions lack access to basic healthcare facilities.
            Our focus on health activities stems from the need to address these
            gaps, ensuring proper healthcare, sanitation, and awareness. From
            training healthcare workers to organizing health camps and promoting
            hygiene practices, we aim to foster healthier lives for individuals
            and communities alike.
          </p>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-serif text-center text-gray-800 mb-8 text-[#286b40]">
              What We Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:bg-[#9ad2ae] bg-[#f6f2f2]"
                >
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-[#286b40] mb-4">{activity.description}</p>
                  <p className="text-sm font-medium text-gray-500">
                    {activity.stats}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Aim Section */}
        <section>
          <h2 className="text-4xl font-serif text-center mb-4 text-[#28506b] font-bold border-teal-400 dark:text-gray-150">
            Our Aim
          </h2>
          <div className="text-lg text-gray-700">
            <p>
              Our mission is to foster health and well-being across communities
              by:
            </p>
            <ul className="list-disc ml-6">
              <li>
                <strong>Improving Healthcare Access:</strong> Bridging gaps in
                rural healthcare systems through training and resources.
              </li>
              <li>
                <strong>Empowering Healthcare Workers:</strong> Enhancing the
                skills of ASHA workers and ANMs to provide effective maternal
                and child health services.
              </li>
              <li>
                <strong>Raising Awareness:</strong> Educating communities on
                HIV/AIDS prevention, sanitation, and health practices.
              </li>
              <li>
                <strong>Reducing IMR & MMR:</strong> Supporting initiatives to
                improve maternal and child health outcomes in underprivileged
                areas.
              </li>
            </ul>
            <p className="mt-4">
              By working together, we aim to create a healthier, informed, and
              empowered society where every individual can thrive.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col mx-auto w-[80%]">
              <h1 className="text-4xl font-serif text-center mb-4 text-[#3f2663] font-bold border-teal-400 dark:text-gray-150">
                WHO&apos;s HIV indication for India
              </h1>
              <Image
                src="https://img.playbook.com/tMYbjKUf9LjHBoSrYJiUQwiS1DkFenKrZ81qeKuTurU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2UwODdlYTRk/LTI0YTUtNDhjOC05/MGZhLTk1NWI4MzJm/Mzk3YQ"
                alt="UN's Representation"
                height={500}
                width={1000}
                className="mx-auto p-2 rounded-md "
              />
            </div>

            <section className="py-16 bg-gray-50 w-[80%] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center font-serif text-[#712a53] text-gray-800 mb-12">
          Health Activities 
        </h2>
        <div className="flex items-center justify-center space-x-8 overflow-x-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center w-64"
            >
              {/* Icon with Animation */}
              <div className="hover:bg-[#d29aba] p-6 rounded-full shadow-md transition-transform transform group-hover:scale-110 bg-[#f9f9f9]">
                {step.icon}
              </div>

              <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors">
                {step.description}
              </p>

              {/* Line (except last step) */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block w-24 h-1 bg-gray-300 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* blogs */}
      <div>
        <div className="p-8 w-[80%] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-serif font-bold border-teal-400  dark:text-gray-200">Latest Stories</h1>
            <Link href={"/blogs"} className="">
              {" "}
              <div className="transition-all border-solid border-[#A0D9D6] border-2 text-3xl p-2 px-10 rounded-full hover:bg-[#A0D9D6] hover:text-sky-200 hover:font-bold hover:tracking-normal">
                Explore
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 w-[100%] p-4">
            {card_health
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

      <div className="flex flex-row mx-auto p-2 w-[80%] bg-[#f5f8f7] items-center">
        {/* Left Section */}
        <div className="m-4 p-4 flex-1 justify-center">
          <div className="p-2">
            <Link href="/fundraising">
              <div className="text-2xl font-bold m-4 p-4 font-serif bg-[#A1D9D6] border-[#A0D9D6] border-2 rounded-md text-center hover:bg-[#00796B] hover:text-white">
                Donate For Health
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
        <ImageCarousel images={images} text={"Health"} />
      </div>
      </main>
    </>
  );
};

export default index;
