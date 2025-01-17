import Image from "next/image";
import React from "react";
import PdfViewer from "@/components/Pdfviewer";
import { pdfData } from "@/components/Data/DataBase";

export default function index() {
  return (
    <>
    <div class="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div class="absolute inset-0">
          <img
            width="auto"
            height="auto"
            src="https://img.playbook.com/kTYrNMZ0Jdw6blIE2rDtbSiOPvQBNwDsVMsxqJJrDGU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2JiMmNhNTZj/LWQ3MjMtNDQ5MS1h/OGQ4LWNkYTNkYzk4/MjFkNw"
            alt="Background Image"
            class="object-cover object-center w-full h-full opacity-70 opacity-bg-[black]"
          />
          <div class="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 class="text-5xl font-bold leading-tight mb-4">
          Empowering Communities for a Better Tomorrow
          </h1>
          {/* <p class="text-lg text-gray-300 mb-8">
            Inspiring hope, igniting change, and empowering dreams every step of
            the way.
          </p> */}
          {/* <a
            href="/"
            class="bg-[yellow] text-gray-900 hover:bg-[yellow] py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Get Started
          </a> */}
        </div>
      </div>
      
      <div className="bg-gray-50 min-h-screen p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-5xl font-bold text-gray-800 font-serif ">
              APPEX GUIDE LINE
            </h1>
            <p className="text-lg text-gray-600 mt-2">
            Build a Healthy and Favorable Socio Economic 
            and Cultural Environment for an Egalitarian Society.
            </p>
          </header>

          {/* Story Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 bg-[#ade6e1] text-center font-serif">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Founded with a profound commitment to fostering positive social
              change, APPEX GUIDE LINE has been steadfastly working towards the
              holistic development of children and creating awareness about
              women&apos;s empowerment and gender issues. Since its inception,
              the organization has embarked on a journey of transformation,
              focusing on building knowledge and promoting self-development for
              socially backward and weaker sections of society. Over the years,
              APPEX GUIDE LINE has stood as a beacon of hope for the
              underprivileged and distressed, enabling them to achieve
              self-reliance and participate actively in their own development
              through collective action.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center bg-[#adc8e6] font-serif">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to promote voluntary action in social development
              with a focus on essential and need-based programs. We aim to
              empower children by fostering their holistic development and to
              advocate for women&apos;s rights—political, social, and
              economic—by raising awareness about gender equality and
              women&apos;s empowerment. By addressing the needs of marginalized
              communities, we strive to create opportunities for
              self-dependence, knowledge building, and participation, ensuring
              sustained growth and development in the process.
            </p>
          </section>

          {/* Vision Section */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center bg-[#eabdbd] font-serif">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We envision a society where every individual, regardless of their
              social or economic background, has the opportunity to live with
              dignity, self-reliance, and equal rights. Our goal is to create a
              robust framework for empowering the most vulnerable and
              marginalized, thereby contributing to a stronger and more
              inclusive nation. Through persistent efforts, innovative programs,
              and collective action, APPEX GUIDE LINE aspires to inspire
              transformative change that uplifts communities and fosters a
              brighter, equitable future for all.
            </p>
          </section>
        </div>
      </div>

      <div className="bg-gray-50 p-4">
        <div className="max-w-5xl mx-auto">
          {/* Organization Profile Section */}
          <section className="mb-4 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 font-serif text-center bg-[#b7e6ad]">
              Organization Profile
            </h2>
            <ul className="text-gray-700 space-y-4">
              <li>
                <strong>Name of the Organization:</strong> “APPEX GUIDE LINE”
              </li>
              <li>
                <strong>Complete Address:</strong>
                <ul className="ml-4 list-disc">
                  <li>
                    <strong>Registered Office:</strong> At/Po: Jhariapadar, Via:
                    Padmanavpur, Dist: Ganjam, Pin: 761007, Odisha, India.
                  </li>
                  <li>
                    <strong>Head Office:</strong> Nilakantha Nagar-1, Bijipur,
                    Berhampur-3, Dist: Ganjam, Pin: 760003, Odisha, India.
                  </li>
                  <li>
                    <strong>Branch Office:</strong> At/Po: Chandragiri, Via:
                    Mohana, Dist: Gajapati, Pin: 761017, Odisha, India.
                  </li>
                  <li>
                    <strong>Family Counselling Centre:</strong> Gandhi Nagar-5th
                    Line (East), Berhampur-1, Dist: Ganjam, Pin: 760003, Odisha,
                    India.
                  </li>
                  <li>
                    <strong>
                      SWADHAR - A Shelter Home for Women in Difficult
                      Circumstances:
                    </strong>{" "}
                    At: Trinath Temple Road, Po: Gosaninagaon, Via: Berhampur,
                    Dist: Ganjam, Pin: 760003, Odisha, India.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Phone:</strong> +91 98610-86564, +91 80935-44944
              </li>
              <li>
                <strong>Fax:</strong> 0680-2220669, 2220794
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:appex29@yahoo.co.in"
                  className="text-blue-500 underline"
                >
                  appex29@yahoo.co.in
                </a>
              </li>
              <li>
                <strong>Date of Establishment:</strong> 1st April – 1991
              </li>
              <li>
                <strong>Legal Status:</strong>
                <ul className="ml-4 list-disc">
                  <li>
                    Registered under Indian Societies Registration Act XXI of
                    1860 at Ganjam, No. GJM. 3661 of 1994-95, Dt. 23rd November
                    1994.
                  </li>
                  <li>FCRA Act-1976 No. 104910089, dt. 14/01/2004.</li>
                </ul>
              </li>
              <li>
                <strong>Contact Person:</strong>
                <ul className="ml-4 list-disc">
                  <li>Simanchala Gouda (Secretary) - +91 94375 94131</li>
                  <li>Rajendra Prasad Gouda (Director) - +91 98610 86564</li>
                </ul>
              </li>
              <li>
                <strong>Main Area of Activity:</strong> Women Empowerment, Child
                Development, Agricultural Promotion, Health, Rural Development &
                Sanitation, Poverty Alleviation, Geriatric Care, Global Warming,
                etc.
              </li>
              <li>
                <strong>Main Funding Agencies:</strong>
                <ul className="ml-4 list-disc">
                  <li>
                    Ministry of Labour, Govt. of India (Through NCLP, Gajapati &
                    Ganjam)
                  </li>
                  <li>
                    Ministry of Women & Child Development, Govt. of India, New
                    Delhi
                  </li>
                  <li>Ministry of Tourism & Culture, Govt. of India</li>
                  <li>Central Social Welfare Board, New Delhi</li>
                  <li>State Social Welfare Board, Bhubaneswar</li>
                  <li>ATMA, Ganjam</li>
                  <li>Civil Donors of Beneficiary Areas</li>
                  <li>DWSM, Ganjam & Gajapati</li>
                  <li>Traders Group Ganjam & Gajapati</li>
                  <li>Department of the H&FW Govt. of Odisha</li>
                  <li>Dept. of Culture, Govt. of Odisha</li>
                  <li>CAPART, Odisha, Bhubaneswar</li>
                  <li>Dept. of Water Resources, Govt. of Odisha</li>
                  <li>Dept. of Panchayati Raj, Govt. of Odisha</li>
                  <li>Dept. of Agriculture, Govt. of Odisha</li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center font-serif bg-[#e6adb9]">
              Introduction
            </h2>
            <p className="text-gray-700">
              “APPEX GUIDE LINE” came into existence in 1991 as a village-level
              welfare organization born from the vision of prominent individuals
              renowned for their human values and experiences.
            </p>
            <p className="mt-4 text-gray-700">
              Since its inception, the organization has focused on alleviating
              poverty and fostering self-dependence among underprivileged
              communities. Over the years, it has worked to empower rural
              populations by revitalizing their economic lives and helping them
              realize their potential and capabilities.
            </p>
            <p className="mt-4 text-gray-700">
              With a multidisciplinary team and a commitment to innovation,
              APPEX GUIDE LINE has made significant strides in fulfilling its
              mission. The organization remains dedicated to exploring new
              approaches and strategies to foster sustainable development and
              community empowerment.
            </p>
          </section>

          {/* Operational Area */}
          <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center font-serif bg-[#caade6]">
              Operational Area & Target People
            </h2>
            <div className="overflow-auto">
              <table className="w-full table-auto border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">
                      District
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Block</th>
                    <th className="border border-gray-300 px-4 py-2">
                      G.P. (Nos)
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Villages (Nos)
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Target Groups
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Ganjam Section */}
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan="13"
                    >
                      Ganjam
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Digapahandi
                    </td>
                    <td className="border border-gray-300 px-4 py-2">7</td>
                    <td className="border border-gray-300 px-4 py-2">40</td>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan="13"
                    >
                      Small/Marginal Farmers, Women, Children, Youth,
                      Marginalized Poor, PRI Members
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Sanakhemundi
                    </td>
                    <td className="border border-gray-300 px-4 py-2">4</td>
                    <td className="border border-gray-300 px-4 py-2">12</td>
                  </tr>
                  {/* Add other rows for Ganjam */}
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Bellaguntha
                    </td>
                    <td className="border border-gray-300 px-4 py-2">15</td>
                    <td className="border border-gray-300 px-4 py-2">25</td>
                  </tr>

                  {/* Gajapati Section */}
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan="5"
                    >
                      Gajapati
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Mohona</td>
                    <td className="border border-gray-300 px-4 py-2">5</td>
                    <td className="border border-gray-300 px-4 py-2">20</td>
                    <td
                      className="border border-gray-300 px-4 py-2"
                      rowSpan="5"
                    >
                      Small/Marginal Farmers, Women, Children, Youth, &
                      Marginalized Poor
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      R.Udayagiri
                    </td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">15</td>
                  </tr>
                  {/* Add other rows for Gajapati */}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
      <main className="bg-gray-50 min-h-screen">
        <section className="py-10 px-6 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 text-center font-serif bg-[#ade6e1]">
              Future Aspirations
            </h2>
            <ul className="mt-4 space-y-3 text-gray-600 list-disc list-inside ">
              <li>
                Promotion of Agriculture by SRI method through Pani Panchayat.
              </li>
              <li>
                Providing basic primary education to more deprived children.
              </li>
              <li>Community-based rehabilitation of the differently abled.</li>
              <li>
                Capacity building and awareness programs for rural youth and
                women.
              </li>
              <li>
                Networking with forums focusing on women, children, and
                community development.
              </li>
              <li>
                Sustainable rural development through agriculture and allied
                activities.
              </li>
              <li>Establishment of craft centers in rural areas.</li>
              <li>Creation of old age homes in vulnerable areas.</li>
              <li>
                Social development training programs in remote tribal villages.
              </li>
              <li>
                Exploring collaborations with government and donor agencies.
              </li>
              <li>Establishment of Village Knowledge Centers.</li>
              <li>
                Synchronizing actions on social cohesion and national
                integration.
              </li>
              <li>
                Emphasis on tribal development, especially women-centered
                programs focusing on food security and livelihood promotion.
              </li>
              <li>
                Providing basic necessities and rehabilitation for women in
                distress.
              </li>
            </ul>
          </div>
        </section>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center font-serif bg-[#adc8e6]">
            Annual Reports
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hover:shadow-2xl ">
            {pdfData.map((pdf, index) => (
              <PdfViewer key={index} pdfUrl={pdf.fileUrl} title={pdf.title} />
            ))}
          </div>
        </div>
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center font-serif bg-[#eabdbd]">
              Acknowledgment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              This annual reports are summing up of the efforts made by the
              organization during the years. However, it recognizes the
              recording and transforming of its heartfelt gratitude to the
              following who deserve that at all costs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">1.</span>
                <p className="text-gray-700 leading-relaxed">
                  The donors who extended timely and required support both in
                  terms of funds and kind.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">2.</span>
                <p className="text-gray-700 leading-relaxed">
                  Members of focus groups (the beneficiaries) who regarded and
                  retained the spirit of accepting and recognizing the
                  beneficiary spirit of the organization towards them.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">3.</span>
                <p className="text-gray-700 leading-relaxed">
                  Those government departments and officials who extended
                  uninterrupted continuous support and relied upon our
                  solidarity in all aspects.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">4.</span>
                <p className="text-gray-700 leading-relaxed">
                  Those staff and ex-staff whose efforts fortified the attempts
                  of the organization to be perfect.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">5.</span>
                <p className="text-gray-700 leading-relaxed">
                  Those members of the Governing Body/Executive Body who
                  provided timely guidance and advice through corrective
                  suggestions.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
