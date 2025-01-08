import { prolonged } from "@/components/Data/DataBase";
import { React, useState } from "react";
import ImageCarousel from "./../../../components/Carousel/Carousel";
import CountUp from "react-countup";
import { HiOutlinePlusSm } from "react-icons/hi";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { GiVillage } from "react-icons/gi";
import { FaDiagramProject } from "react-icons/fa6";
import { VscMilestone } from "react-icons/vsc";
import { RiGovernmentFill } from "react-icons/ri";
import { card_agriculture } from "../../../components/Data/Blogs_DataBase";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "https://img.playbook.com/ZylLzypy3kYeBNLYJKgiegb6mclXwq6zdiO1RYJBKFc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFjN2JkNmE4/LThhZmYtNDkzNy04/MTAwLWU2ZDA1Njdl/NDdmMg",
    alt: "image 0",
  },

  {
    src: "https://img.playbook.com/4lvA4SsWg2kSCJmNDNnI5VdcjaPUYVIpH2i6yl3vgfA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzdlZWVkNWQ3/LWZhOTAtNGY0ZS05/OGQ0LTFhZGI2N2U4/MTUxNg",
    alt: "image 1",
  },
  {
    src: "https://img.playbook.com/WHv-M-Gjs39Erx0THE0PsYvueKbP40p0-y5zRL4eqO4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzg0ZTUzNjU1/LTAxZjItNGUxNy1h/YTVlLWY1ZDE2ZDdj/NjZlZQ",
    alt: "image 2",
  },
  {
    src: "https://img.playbook.com/VQ4WftYMxvu1Q4c92ePw2MDW9CBHQrfpDzTioHDsTgY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MzYTZkMDc2/LWY3OWEtNDlhZS05/ZTE4LTIyOTFmNThm/ZjM5Mg",
    alt: "image 7",
  },
  {
    src: "https://img.playbook.com/olXyzdClU3OVowHB1UuebxMU305aWZUTovsgx4T8U8w/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM4MWU0ZTBk/LWRjMTUtNDM4NS1h/NDVhLTRkMmI1MzEy/NmNmZQ",
    alt: "image 5",
  },
  {
    src: "https://img.playbook.com/NCsHX-J9_v6m052E8Ch3U7B9ucgcR4begVwezcvGRlU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2RmNzA5YjZj/LTQ3MjYtNDk1Mi05/Nzk3LWQ3ZDgyNTEw/MTdiYQ",
    alt: "image 6",
  },
  {
    src: "https://img.playbook.com/kcMhF7NmZFpfIITXprWUgckWT0YgDkjbXavuLBzbcvg/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzM4YTc5NDQ5/LWEwZmUtNDUxNS1h/NjI4LTk2OGQ2ODQ4/ODI4YQ",
    alt: "image 3",
  },
  {
    src: "https://img.playbook.com/VvujrV9EuIdcfT7MML8BNcrR3kPRNDLaUn8RYdbf9aY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk2ZjMwM2Zh/LTBiMjYtNGU5MC05/NWMwLWIxMmFmOTc3/NGRkOQ",
    alt: "image 8",
  },
  {
    src: "https://img.playbook.com/jmLNMwvWPeLa6C3iETV8fmigb55QZmvyoqzQBFWYMOA/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzI1ODQ1MzY4/LTVlNGItNDgxMi04/OTMyLWFmNmFjYTUz/MWYzMQ",
    alt: "image 4",
  },

  {
    src: "https://img.playbook.com/0WiSDhDgtqXGASNt32bXMt1ToO6mF5KRV0uiqZI31iM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUyYTNjODk3/LWU2MjQtNDJmNS1i/ZjA4LTQyMjM4NzNi/ZDczNg",
    alt: "image 9",
  },
];

function Figures({ count, text }) {
  return (
    <div className="text-[white] xl:w-1/4 lg:w-1/4 flex flex-col items-center rounded-md bg-[black] mx-2">
      <div className="text-6xl flex">
        <CountUp end={count} duration={6} />{" "}
        <span className="flex items-start ">
          <HiOutlinePlusSm size={25} />
        </span>
      </div>
      <div className="xl:text-xl lg:text-xl md:text-lg sm:text-base">
        {text}
      </div>
    </div>
  );
}

function Dropdown(props) {
  console.log(props.title.color);
  let total =
    "flex flex-row items-center rounded-md" + ` bg-[${props.title.color}]`;
  console.log(total);
  const [isOpen, setIsopen] = useState(false);
  return (
    <div
      className="flex flex-col m-2 p-2 transition-all duration-1000"
      onClick={() => setIsopen(!isOpen)}
    >
      <div className={"flex flex-row items-center rounded-md p-2 bg-main"}>
        <div className="mr-2">
          <MdOutlineArrowDropDownCircle />
        </div>
        <div className="text-2xl font-bold mr-2 ">{props.title.title}</div>
      </div>
      {isOpen && (
        <div className={"flex flex-col p-4"}>
          {props.title.methods.map((element) => (
            <div>● {element}</div>
          ))}
        </div>
      )}
    </div>
  );
}
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
      <ImageCarousel images={images} text={"Agriculture"} />
      <div className="bg-[#FFFFFF] p-4 m-4">
        <h1 className="font-bold text-4xl mb-2">Why Agriculture? </h1>
        <div className="text-lg m-2">
          Agriculture is the backbone of India, employing nearly half of the
          country's population and serving as a vital source of livelihood for
          millions of rural families. With its rich history and diverse
          landscapes, India has immense potential to be a global leader in
          sustainable farming practices. However, many smallholder farmers face
          challenges such as limited access to modern technology, financial
          resources, and climate-resilient practices. By supporting agriculture,
          we can empower these farmers, enhance food security, and promote rural
          development. Our NGO is committed to transforming lives through
          initiatives that foster innovation, education, and sustainable growth
          in the agricultural sector, ensuring a brighter future for India’s
          farmers and their communities.
        </div>
      </div>
      <div className="bg-[#A1D9D6] p-4 m-4">
        <h1 className="font-bold text-4xl mb-2 ">What we do </h1>
        <div className="flex flex-col m-2 p-2">
        <div className="flex flex-row m-2 p-2 justify-center items-center">
          <Image
          src="https://img.playbook.com/MDKHQXYyS37wex2UtLsVvmtnS_CelJKkgixuFGNmtCk/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzUyYTQyNzAy/LTIzYWEtNGJjMC04/YmUwLTZlOTYwNjAx/NTc1NA"
          alt="Agriculture representation"
          height={200}
          width={200}
          className="border-black border-3 p-2 m-4 rounded-full shadow-md"
          />
          <Image
          src="https://img.playbook.com/e3g4H0MeLwQLP-Sh4EWAcPUc-4AM7h-f6uo1PQXQQWo/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZlOTMyNjQw/LWMxODctNGVmZi04/ZjRhLWZiNGY3ZmEz/YjIwMQ"
          alt="Agriculture representation"
          height={200}
          width={200}
          className="border-black border-3 p-2 m-4 rounded-full shadow-md"
          />
          <Image
          src="https://img.playbook.com/ZC9VcwIu-GZKqv6AHnZanttEY93louc9wzyx_65olLM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA1YmJiMmY0/LWYwNWQtNGE0Zi1i/MjViLTdlYjIzYTM1/N2QzZA"
          alt="Agriculture representation"
          height={200}
          width={200}
          className="border-black border-3 p-2 m-4 rounded-full shadow-md"
          />
          <div className="text-2xl font-serif m-4 p-4 justify-center items-center">Save plants save lives.</div>
        </div>
        <div className="text-lg m-2 p-2 justify-center">
          Our organization is deeply committed to enhancing rural livelihoods by
          promoting sustainable agriculture, community development, and resource
          management. We work closely with farmers in tribal-dominated and rural
          areas, equipping them with essential training on crop management,
          water management, seed treatment, and modern farming techniques to
          maximize production and income for small and marginal farmers. Over
          the years, we have conducted awareness camps in Ganjam and Gajapati
          districts, motivating farmers to form Farmers Interest Groups (FIGs)
          and adopt diverse crops such as paddy, maize, vegetables, and
          mushrooms. We actively collaborate with agencies like ATMA
          (Agricultural Technology Management Agency) to provide technological
          support and demonstrations, such as Rice Line Transplanting and
          improved maize cultivation techniques. To promote community
          self-reliance, we have developed agro farms near Berhampur city,
          facilitating the cultivation of fruit-bearing plants and other
          agricultural products in partnership with the horticulture department.
          Our efforts extend to water resource management under the "National
          Programme for Repair, Restoration & Renovation of Water Bodies"
          initiated by the Department of Water Resources. Through baseline
          surveys and capacity-building activities in Ganjam, Gajapati, and
          Rayagada districts, we assess the pre-renovation status of water
          bodies, agricultural productivity, irrigation intensity, and community
          institutions. By restoring water bodies and empowering communities, we
          aim to strengthen rural resilience and ensure sustainable agricultural
          practices for generations to come.
        </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] p-4 m-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 ">Our Aim </h1>
        <div className="text-lg">
        <p>
      At the heart of our mission lies a commitment to transforming rural and tribal lives through sustainable agriculture and empowered communities. We aim to bring lasting change by:
    </p>
    <ul className="list-disc ml-6">
      <li><strong>Empowering Farmers, Transforming Lives</strong> – We equip small and marginal farmers with modern techniques, crop management skills, and innovative solutions to maximize productivity and unlock new income opportunities.</li>
      <li><strong>Building Resilient Communities</strong> – Collaboration is the key to success. Through Farmers Interest Groups (FIGs) and community-driven initiatives, we foster unity, self-reliance, and collective growth.</li>
      <li><strong>Reviving Nature’s Lifelines</strong> – Restoring water bodies and improving irrigation systems isn’t just about farming—it’s about reviving hope, securing livelihoods, and nurturing future generations.</li>
      <li><strong>Sowing Seeds of Innovation</strong> – By integrating cutting-edge technology and expert guidance, we pave the way for smarter, more sustainable agricultural practices.</li>
      <li><strong>Harvesting Prosperity Through Agro-Farming</strong> – Our agro-farming initiatives and horticulture projects ensure food security while boosting rural economies and empowering communities to dream big.</li>
    </ul>
    <p>
      We are not just about farming; we’re about transforming possibilities into realities. Together, we’re sowing the seeds of change for a thriving and sustainable future.
    </p>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[url('https://img.playbook.com/47bzRCD1Uklj6Y36l4T3QA4zl0oSqPGywH1nfBVVJiE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzgxODdiODk0/LWZmZWItNDFkNy04/ZmE5LTg0OGVmOTZj/YTQ1OQ')] opacity-70 p-8">
        <Figures count={500} text={"Villages covered"} />
        <Figures count={100} text={"Projects completed"} />
        <Figures count={5000} text={"Number of farmers impacted"} />
        <Figures count={50} text={"Government officers involved"} />
      </div>
      {/* prolonged approach */}
      <div>
        <div className="flex flex-col m-2">
          {/* title */}
          <div className="text-4xl font-bold m-2">Prolonged approach</div>
          {/* grid */}
          <div className="m-2 grid grid-cols-2">
            {prolonged.map((title, methods, color, index) => (
              <Dropdown
                key={index}
                title={title}
                methods={methods}
                color={color}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row m-2 justify-center items-center">
        <div className="text-4xl font-bold m-4 P-4 font-serif">
          {/* reach and presence */}
          REACH AND PRESENCE
        </div>
        <div className="m-4 p-4 flex flex-row">
          {/* symbolic representation */}
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <GiVillage size={80} />
            </div>
            <div className="font-bold m-2">500+ Villages</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <FaDiagramProject size={80} />
            </div>
            <div className="font-bold m-2">100+ projects</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <VscMilestone size={80} />
            </div>
            <div className="font-bold m-2">5000+ farmers</div>
          </div>
          <div className="flex flex-col m-2 p-2">
            <div className="border-black rounded-full border-4 p-4">
              {" "}
              <RiGovernmentFill size={80} />{" "}
            </div>
            <div className="font-bold m-2">50+ officers</div>
          </div>
        </div>
      </div>

      {/* Blogs */}
      <div>
        <div className="p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold">Latest Stories</h1>
            <Link href={"/blogs"} className="">
              {" "}
              <div className="transition-all border-solid border-[black] border-2 text-3xl p-2 px-10 rounded-full hover:bg-[#fafafa] hover:text-sky-200 hover:font-bold hover:tracking-normal">
                Explore
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 w-[100%] p-4">
            {card_agriculture
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
    </>
  );
};

export default index;
