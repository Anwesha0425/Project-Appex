import React from "react";
import {FaHandshake,FaUsers,FaHeartbeat,FaBalanceScale,FaGraduationCap,FaChartLine,} from "react-icons/fa";
import ProjectCard from "@/components/Project_cad";
import DynamicCard from "@/components/Background_card";
import Image from "next/image";

const fetchData = async () => {
  return [
    {
      id: 1,
      title: "",
      description:
        "",
      imageUrl:
        "https://img.playbook.com/B66XReFTfAFF2O7MS935k559xPFRdc3l1Jn_H4CXlyA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2M1ZjNhYTA3/LTI0YzUtNDRmZS1h/NWNmLWQxNzdmMmQ3/NjkyYg",
    },
    {
      id: 10,
      title: "Women Trafficking Prevention",
      description:
        "Our NGO is committed to preventing women trafficking by raising awareness, providing rehabilitation support, and empowering survivors through education and vocational training. Together, we aim to create a safer, dignified, and equitable future for women.",
      imageUrl:
        "",
    },
    {
      id: 2,
      title: "",
      description:
        "",
      imageUrl:
        "https://img.playbook.com/LK83UGFSNRwmu2Fr2rNylo_CrptC4tee0zqwUcj3wjM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk1MzA2MjQw/LTRmMGQtNGFjZi04/ZGQ0LTMzZGQ3ZWQx/YTdiYQ",
    },
    {
      id: 20,
      title: "Child Labour Prevention",
      description:
        "Our NGO works to eliminate child labor by promoting education, providing vocational training, and supporting vulnerable families. We strive to create a future where every child enjoys their right to learn, play, and thrive.",
      imageUrl:
        "",
    },
    {
      id: 3,
      title: "",
      description:
        "",
      imageUrl:
        "https://img.playbook.com/58G4X3jjhesL_JlC48NaDirjHUuAAsevkUGIE2Weet8/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzlkMjg1YjRh/LWU0MjUtNDJlZS05/YjRiLWU3NDM4M2Zi/MzMwZQ",
    },
    {
      id: 30,
      title: "Labour Education",
      description:
        "Our NGO empowers laborers through education, equipping them with knowledge of their rights, workplace safety, and skill development. We aim to create a workforce that is informed, skilled, and capable of building a better future.",
      imageUrl:
        "",
    },
    {
    id: 40,
      title: "Entrepreneurship Programme",
      description:
        "Our NGO fosters entrepreneurship by providing training, resources, and mentorship to aspiring individuals. We empower communities to create sustainable businesses, generate employment, and drive economic growth, paving the way for self-reliance and innovation.",
      imageUrl:
        "",
    },
    {
      id: 4,
      title: "",
      description:
        "",
      imageUrl:
        "https://img.playbook.com/xDZgHaKgQbOS6bFXyVl1yQyC2DQ9oxiOCa5Fs2R1ogo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg3YzY4ODg2/LWRhNDctNDA3MS1h/OGYyLTYyNzcxMzVi/YjhjYQ",
    },
    {
      id: 50,
      title: "Check Distribution",
      description:
        "Our NGO supports farmers by facilitating check distribution programs for agricultural development. These initiatives provide financial assistance, enabling farmers to invest in modern techniques, quality seeds, and equipment, ensuring improved productivity and sustainable livelihoods.",
      imageUrl:
        "",
    },
    {
      id: 5,
      title: "",
      description:
        "",
      imageUrl:
        "https://img.playbook.com/Lwqw8anTljM6Rrl3KQteJMfvQMsY6sxDhcazbM5xqAA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JkZTM5YzRm/LTIyNzItNDE3NC04/ODQ3LTNiYjI3YjEz/M2U3Mg",
    },
    {
      id: 60,
      title: "Teaching Farmers",
      description:
        "Our NGO empowers farmers through educational programs on modern farming techniques, sustainable practices, and resource management. By enhancing their knowledge and skills, we aim to improve agricultural productivity, promote eco-friendly methods, and ensure better livelihoods for farming communities.",
      imageUrl:
        "",
    },
    {
      id: 6,
      title: "",
      description:
        "",
      imageUrl:
        "https://img.playbook.com/xoAnhGniMWUMlgc_i75G-cDzEutB3RE5d0iD1b-jv1k/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgzYWY5NGMz/LTlkNGEtNGU3MS1h/MzZmLTk2NjlhYTQy/NjllMA",
    },
  ];
};
const projects = [
  {
    title: "Women Empowerment",
    description:
      "Empowering women is essential for achieving sustainable development and equality in society. Our organization has dedicated itself to uplifting women through education, skill development, and creating awareness about their rights and opportunities. By providing them with resources and support, we strive to help women become self-reliant and confident contributors to society.",
    flowDescription: "Awareness → Skill Development → Support → Empowerment",
    titleColor: "text-[purple]",
  },
  {
    title: "Child Support",
    description:
      "With India lagging behind in efforts to abolish child labour, it is crucial to supplement eradication efforts with comprehensive socio-economic programmes and educational upliftment of underprivileged sections. Child Support services have been one of the most successful social initiatives, passionately focusing on the education and welfare of child labourers.",
    flowDescription:
      "Child Welfare → Awareness → Support → Skill Development → Empowerment",
    titleColor: "text-[maroon]",
  },
  {
    title: "Agricultural Promotion",
    description:
      "Agriculture is the backbone of rural livelihoods, especially in tribal-dominated areas. With proper training in production processes, crop management, water management, and seed treatment, small and marginal farmers can achieve optimal production and increase their incomes. Our organization has been actively working to empower farmers through awareness programs, demonstrations, and technical support.",
    flowDescription:
      "Awareness → Demonstration → Seed Treatment → Water Management",
    titleColor: "text-[navy]",
  },
  {
    title: "Health Activities",
    description:
      "Ensuring a healthy body and mind requires a healthy environment. Our organization emphasizes community-based health management and focuses on child health, family welfare programs, immunization (Pulse Polio), and pre/postnatal care for women and children. We also promote health awareness through workshops, camps, and initiatives aimed at fostering long-term well-being in underserved communities.",
    flowDescription:
      "Sanitation → Environment Protection → Consumer Awareness → Livestock Development",
    titleColor: "text-[#8c2e6b]",
  },
  {
    title: "Miscellaneous Works",
    description:
      "Our organization is dedicated to preserving cultural heritage, promoting social harmony, and fostering community development. These efforts are reflected through a variety of initiatives, including library services, manuscript preservation, social cohesion programs, and celebrations of cultural and national importance.",
    flowDescription: "Library → Manuscripts → Social Cohesion → Celebrations",
    titleColor: "text-[#5e2e6c]",
  },
  {
    title: "Community Empowerment",
    description:
      "We focus on driving impactful change in rural and underprivileged communities by addressing critical challenges and promoting holistic development through various initiatives. These include improving sanitation, protecting the environment, empowering consumers, promoting livelihoods, and uplifting families.",
    flowDescription: "Sanitation → Environment → Empowerment → Livelihood ",
    titleColor: "text-[green]",
  },
];
export default function Index({theme}) {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    loadData();
  }, []);
  return (
    <>
    <main>
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/iUqamV1mEwWdc1BINe3fI_-0EePPyqBEX76v2UJRxyU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZmODg2Mzg2/LTIwZjUtNGE1MS05/NTAxLWVkMzlmODdj/MGQ4Yw"
            alt="Background Image"
            className="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to APPEX GUIDE LINE
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Inspiring hope, igniting change, and empowering dreams every step of
            the way.
          </p>
        </div>
      </div>
      <div>

      <section className={"py-12 px-6 lg:px-20 w-[80%] mx-auto " + `${theme ? " bg-[#fff9e9] text-[black]" : " bg-[#000000] text-[white]"}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold  font-serif text-green-600 mb-6 text-[#ad9c3a]">About</h1>
        <p className="text-lg text-gray-700 leading-7 mb-6">
          “Appex Guide Line” has been a cornerstone of rural development since its inception in 1991. Founded by
          visionaries known for their human values and experience, the organization focuses on poverty alleviation and
          fostering self-reliance among underprivileged communities. Through participatory approaches, we revive faith
          in the inherent potential of rural masses, empowering them to transform their economic and social lives.
        </p>
        <p className="text-lg text-gray-700 leading-7 mb-6">
          With a multidisciplinary team, we aim to build a sustainable future by continuously learning and innovating
          while staying true to our mission of creating a healthier and more egalitarian society.
        </p>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-6 mt-12 ">
        <div className={"shadow-md rounded-lg p-6 text-center " + `${theme ? " bg-[#faf9f8] text-[black]" : " bg-[#ad9c3a] text-[white]"}`}>
          <h2 className={"text-xl font-semibold mb-4 " + `${theme ? " text-[#ad9c3a]" : " text-[black]"}`}>Our Vision</h2>
          <p className="text-gray-700">
            To build a healthy and favorable socio-economic and cultural environment for an egalitarian society.
          </p>
        </div>
        <div className={"shadow-md rounded-lg p-6 text-center " + `${theme ? " bg-[#faf9f8] text-[black]" : " bg-[#ad9c3a] text-[white]"}`}>
          <h2 className={"text-xl font-semibold mb-4 " + `${theme ? " text-[#ad9c3a]" : " text-[black]"}`}>Our Mission</h2>
          <p className="text-gray-700">
            To bring qualitative change in rural and tribal communities by disseminating knowledge and promoting
            sustainable development.
          </p>
        </div>
        <div className={"shadow-md rounded-lg p-6 text-center " + `${theme ? " bg-[#faf9f8] text-[black]" : " bg-[#ad9c3a] text-[white]"}`}>
          <h2 className={"text-xl font-semibold mb-4 " + `${theme ? " text-[#ad9c3a]" : " text-[black]"}`}>Our Strategy</h2>
          <p className="text-gray-700">
            We follow participatory approaches like PRA and PLA, involving beneficiaries in planning and monitoring to
            ensure sustainable impact.
          </p>
        </div>
      </div>
    </section>
        
        <section className="mb-8">
        <div className="text-5xl font-serif text-[#b83460] font-bold m-4 mx-auto text-center w-[80%]">
          Awards
        </div>
        <div className="text-xl text-center font-semibold font-mono leading-7 w-[80%] mx-auto mb-6">At Appex Guide Line, we turn challenges into opportunities, fostering hope and change for a brighter, sustainable future. Together, we celebrate every step toward empowering communities.</div>
        <div className="mx-auto p-4 w-[80%] flex justify-between">
          {/* left */}
          <div className="m-auto size-[50%] sm:size-[90%]">
            <Image
              width="1200"
              height="1200"
              src="https://img.playbook.com/nT4Cbo75KENYiha1lvCquQQEo3NWNAAv2puwYDNWp7E/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2FjZDRkYTgw/LWM3MjMtNDU2NC05/NTJlLWQ2YzI5Mzlh/YzNiYg"
              alt="award"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* right */}
          <div className="m-2 size-[50%] text-center justify-center ">
          <div className="text-lg sm:text-sm justify-center font-semibold font-mono leading-7 mt-[25%] items-center ">&quot;Every small step towards change creates ripples of transformation.&quot;</div>
          </div>
        </div>
        <div className="mx-auto p-4 w-[80%] flex justify-between">
          {/* left */}
          <div className="m-2 size-[50%]">
          <div className="text-lg sm:text-sm justify-center font-semibold font-mono leading-7 mt-[25%] items-center ">&quot;Building stronger communities today for a resilient tomorrow.&quot;</div>
          </div>
          {/* right */}
          <div className="m-auto size-[50%] sm:size-[90%] items-center justify-center">
            <Image
              width="1200"
              height="1200"
              src="https://img.playbook.com/317K62BxbMEsYWnm1WCHs32P9KZ4I5bnUENbhb40Q7U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2QyYWViYjU4/LTExNGQtNGVlNC04/OTFmLWI4ZGJjN2Ex/OTVkZA"
              alt="award2"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        </section>

        <div className="text-5xl font-serif text-[#39955a] my-4 font-bold mx-auto text-center w-[80%]">
          Projects
        </div>
        <div className="text-sm font-semibold text-center w-[80%] m-auto ">
          <div className="grid grid-cols-2 sm:grid-cols-1 md:gris-cols-1 items-center gap-4 justify-center overflow-hidden p-2 ">
            {projects.map((project, index) => (
              <div className="mb-2" key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  flowDescription={project.flowDescription}
                  titleColor={project.titleColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
      {/* Hero Section */}
      <section className="text-center py-10 text-[black]">
        <h1 className="text-4xl font-serif font-bold text-[#1a898f]">Towards Achieving</h1>
        <h2 className="text-3xl font-serif text-[#1a898f] font-extrabold mt-2">Sustainable Development Goals</h2>
        <div className="grid grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-8 px-10">
          {[
            { icon: FaHeartbeat, label: "Good Health & Well Being", color: "bg-[#E9D8FD]", number: 3 },
            { icon: FaBalanceScale, label: "Gender Equality", color: "bg-[#FBB6CE]", number: 5 },
            { icon: FaGraduationCap, label: "Quality Education", color: "bg-[#FEFCBF]", number: 4 },
            { icon: FaChartLine, label: "Decent Work & Economic Growth", color: "bg-[#C6F6D5]", number: 8 },
            { icon: FaUsers, label: "Reduced Inequalities", color: "bg-[#BEE3F8]", number: 10 },
            { icon: FaHandshake, label: "Partnerships for the Goals", color: "bg-[#FFF5F5]", number: 17 },
          ].map(({ icon: Icon, label, color, number }, idx) => (
            <div key={idx} className={`rounded-full p-4 ${color} flex flex-col border-2 items-center shadow-md`}>
              <Icon className="text-4xl mb-2 " />
              <p className="text-lg font-semibold ">{label}</p>
              <p className="text-sm font-bold ">#{number}</p>
            </div>
          ))}
        </div>
      </section>
      </div>

      <div className="justify-between items-center w-[80%] px-auto m-auto">
        <div className="text-5xl font-bold font-serif text-[#294072] m-4 text-center">
          Activities
        </div>
        <div className="relative m-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-[#4b6db6] ">
            {data.map((item) => (
              <DynamicCard
                key={item.id}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
