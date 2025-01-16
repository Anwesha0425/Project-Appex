import React from "react";
import {
  FaChild,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaPaintBrush,
  FaFemale,
  FaSeedling,
  FaTractor,
  FaWater,
  FaRegChartBar,
  FaToilet,
  FaLeaf,
  FaShoppingCart,
  FaBook,
  FaScroll,
  FaHandshake,
  FaCalendarAlt,
} from "react-icons/fa";
import { RiSeedlingFill } from "react-icons/ri";
import { GiCow } from "react-icons/gi";
import ProjectCard from "@/components/Project_cad";
import Image from "next/image";
export default function index() {
  const projects = [
    {
      title: "Women Empowerment",
      description:
        "Empowering women is essential for achieving sustainable development and equality in society. Our organization has dedicated itself to uplifting women through education, skill development, and creating awareness about their rights and opportunities. By providing them with resources and support, we strive to help women become self-reliant and confident contributors to society.",
      flowSteps: [FaFemale, FaChalkboardTeacher, FaHandsHelping, FaPaintBrush],
      flowDescription: "Awareness → Skill Development → Support → Empowerment",
      titleColor: "text-purple-600",
    },
    {
      title: "Child Support",
      description:
        "With India lagging behind in efforts to abolish child labour, it is crucial to supplement eradication efforts with comprehensive socio-economic programmes and educational upliftment of underprivileged sections. Child Support services by our organization have been one of the most successful social initiatives, passionately focusing on the education and welfare of child labourers.",
      flowSteps: [FaChild, FaChalkboardTeacher, FaHandsHelping, FaPaintBrush],
      flowDescription:
        "Child Welfare → Awareness → Support → Skill Development → Empowerment",
      titleColor: "text-blue-600",
    },
    {
      title: "Agricultural Promotion",
      description:
        "Agriculture is the backbone of rural livelihoods, especially in tribal-dominated areas. With proper training in production processes, crop management, water management, and seed treatment, small and marginal farmers can achieve optimal production and increase their incomes. Our organization has been actively working to empower farmers through awareness programs, demonstrations, and technical support.",
      flowSteps: [
        FaSeedling,
        FaTractor,
        RiSeedlingFill,
        FaWater,
        FaRegChartBar,
      ],
      flowDescription:
        "Awareness → Demonstration → Seed Treatment → Water Management → Productivity",
      titleColor: "text-green-600",
    },
    {
      title: "Health Activities",
      description:
        "Ensuring a healthy body and mind requires a healthy environment. Our organization emphasizes community-based health management and focuses on child health, family welfare programs, immunization (Pulse Polio), and pre/postnatal care for women and children.",
      flowSteps: [FaToilet, FaLeaf, FaShoppingCart, GiCow],
      flowDescription:
        "Sanitation → Environment Protection → Consumer Awareness → Livestock Development",
      titleColor: "text-green-600",
    },
    {
      title: "Miscellaneous Works",
      description:
        "Our organization is dedicated to preserving cultural heritage, promoting social harmony, and fostering community development. These efforts are reflected through a variety of initiatives, including library services, manuscript preservation, social cohesion programs, and celebrations of cultural and national importance.",
      flowSteps: [FaBook, FaScroll, FaHandshake, FaCalendarAlt],
      flowDescription: "Library → Manuscripts → Social Cohesion → Celebrations",
      titleColor: "text-blue-600",
    },
  ];
  return (
    <>
      <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/iUqamV1mEwWdc1BINe3fI_-0EePPyqBEX76v2UJRxyU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZmODg2Mzg2/LTIwZjUtNGE1MS05/NTAxLWVkMzlmODdj/MGQ4Yw"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Welcome to APPEX GUIDE LINE
          </h1>
          <p class="text-lg text-gray-300 mb-8">
            Inspiring hope, igniting change, and empowering dreams every step of
            the way.
          </p>
          {/* <a
            href="/"
            class="bg-[yellow] text-gray-900 hover:bg-[yellow] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a> */}
        </div>
      </div>
      <div>
        <div className="text-3xl font-bold m-2 text-center">Projects</div>
        <div className="text-sm font-semibold text-center m-2">
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2">
            {projects.map((project, index) => (
              <div className="mb-2" key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  flowSteps={project.flowSteps}
                  flowDescription={project.flowDescription}
                  titleColor={project.titleColor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
