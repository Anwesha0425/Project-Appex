import React from "react";
import {
  FaChild,
  FaChalkboardTeacher,
  FaHandsHelping,
  FaPaintBrush,
  FaVolleyballBall,
  FaFemale,
  FaSeedling,
  FaTractor,
  FaWater,
  FaRegChartBar,
  FaHeartbeat,
  FaEye,
  FaRibbon,
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

export default function index() {
  return (
    <>
    <div>
       <div className="text-4xl font-semibold text-center m-2">Projects</div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Parent Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">
            Women Empowerment
          </h1>
          <p className="text-gray-700 text-justify mb-6">
            Empowering women is essential for achieving sustainable development
            and equality in society. Our organization has dedicated itself to
            uplifting women through education, skill development, and creating
            awareness about their rights and opportunities. By providing them
            with resources and support, we strive to help women become
            self-reliant and confident contributors to society.
          </p>

          {/* Subcards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Awareness Program */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-center">
              <FaChalkboardTeacher className="text-purple-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-purple-600">
                  Awareness Program
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted awareness sessions on women&apos;s rights, gender
                  equality, and health to educate and empower women in rural and
                  urban areas.
                </p>
              </div>
            </div>

            {/* Skill Development */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 flex items-center">
              <FaPaintBrush className="text-pink-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-pink-600">
                  Skill Development
                </h2>
                <p className="text-gray-600 text-sm">
                  Taught women technical and vocational skills such as
                  tailoring, soft toy making, and coir craft to help them
                  achieve financial independence.
                </p>
              </div>
            </div>

            {/* Support Groups */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
              <FaHandsHelping className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Support Groups
                </h2>
                <p className="text-gray-600 text-sm">
                  Established women’s self-help groups to foster community
                  support, provide microfinance opportunities, and encourage
                  entrepreneurship.
                </p>
              </div>
            </div>

            {/* Recreation and Motivation */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
              <FaVolleyballBall className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-600">
                  Recreation and Motivation
                </h2>
                <p className="text-gray-600 text-sm">
                  Organized motivational events, cultural programs, and
                  recreational activities to boost morale and create a sense of
                  empowerment among women.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Flow Diagram
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaFemale className="text-purple-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaChalkboardTeacher className="text-pink-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaHandsHelping className="text-blue-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaPaintBrush className="text-yellow-500 text-3xl" />
            </div>

            <p className="text-gray-600 text-center mt-4">
              Awareness → Skill Development → Support → Empowerment
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Parent Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Child Support
          </h1>
          <p className="text-gray-700 text-justify mb-6">
            With India lagging behind in efforts to abolish child labour, it is
            crucial to supplement eradication efforts with comprehensive
            socio-economic programmes and educational upliftment of
            underprivileged sections. Child Support services by our organization
            have been one of the most successful social initiatives,
            passionately focusing on the education and welfare of child
            labourers.
          </p>

          {/* Subcards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Awareness Programme */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
              <FaChalkboardTeacher className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Awareness Programme on Child Labour
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted awareness programs and rallies to educate society on
                  the importance of eradicating child labour and its adverse
                  effects.
                </p>
              </div>
            </div>

            {/* Recreation and Entertainment */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
              <FaVolleyballBall className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-600">
                  Recreation / Entertainment Activities
                </h2>
                <p className="text-gray-600 text-sm">
                  Organized events such as festivals, national days, drawing
                  competitions, and outdoor games to uplift the morale of
                  children.
                </p>
              </div>
            </div>

            {/* NCLP Management */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
              <FaHandsHelping className="text-green-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-green-600">
                  Management of NCLP
                </h2>
                <p className="text-gray-600 text-sm">
                  Managed special schools for child labourers, providing them
                  with academic and technical skills to empower and rehabilitate
                  them.
                </p>
              </div>
            </div>

            {/* Skill Development */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 flex items-center">
              <FaPaintBrush className="text-pink-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-pink-600">
                  Skill Development
                </h2>
                <p className="text-gray-600 text-sm">
                  Taught children technical skills like tailoring, soft toy
                  making, and card manufacturing to supplement their family
                  income and build confidence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Flow Diagram
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaChild className="text-blue-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaChalkboardTeacher className="text-yellow-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaHandsHelping className="text-green-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaPaintBrush className="text-pink-500 text-3xl" />
            </div>

            <p className="text-gray-600 text-center mt-4">
              Child Welfare → Awareness → Support → Skill Development →
              Empowerment
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Parent Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
            Agricultural Promotion
          </h1>
          <p className="text-gray-700 text-justify mb-6">
            Agriculture is the backbone of rural livelihoods, especially in
            tribal-dominated areas. With proper training in production
            processes, crop management, water management, and seed treatment,
            small and marginal farmers can achieve optimal production and
            increase their incomes. Our organization has been actively working
            to empower farmers through awareness programs, demonstrations, and
            technical support.
          </p>

          {/* Subcards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Awareness Camps */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
              <FaSeedling className="text-green-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-green-600">
                  Awareness Camps
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted awareness programs in tribal and rural areas to
                  educate farmers on modern farming techniques and crop
                  management practices.
                </p>
              </div>
            </div>

            {/* Demonstrations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
              <FaTractor className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Demonstrations
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted demonstrations on rice line transplanting, maize,
                  pulses, and sunflower cultivation to showcase advanced farming
                  techniques.
                </p>
              </div>
            </div>

            {/* Seed Treatment */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
              <RiSeedlingFill className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-600">
                  Seed Treatment Campaign
                </h2>
                <p className="text-gray-600 text-sm">
                  Promoted seed treatment techniques to protect crops from pests
                  and diseases, ensuring higher productivity with minimal
                  environmental impact.
                </p>
              </div>
            </div>

            {/* Water Body Restoration */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 flex items-center">
              <FaWater className="text-pink-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-pink-600">
                  Water Body Restoration
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted surveys and capacity-building activities to restore
                  water bodies, ensuring better irrigation and agricultural
                  sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Flow Diagram
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaSeedling className="text-green-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaTractor className="text-blue-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <RiSeedlingFill className="text-yellow-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaWater className="text-pink-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaRegChartBar className="text-purple-500 text-3xl" />
            </div>

            <p className="text-gray-600 text-center mt-4">
              Awareness → Demonstration → Seed Treatment → Water Management →
              Productivity
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Parent Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center text-green-600 mb-4">
            Health Activities
          </h1>
          <p className="text-gray-700 text-justify mb-6">
            Ensuring a healthy body and mind requires a healthy environment. Our
            organization emphasizes community-based health management and
            focuses on child health, family welfare programs, immunization
            (Pulse Polio), and pre/postnatal care for women and children.
          </p>

          {/* Subcards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Health Camps */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
              <FaHeartbeat className="text-green-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-green-600">
                  Health Camps
                </h2>
                <p className="text-gray-600 text-sm">
                  Organized 5 health camps in Ranigaon, Srirampalli, Anangapur,
                  Bananai, and Binjigiri with SHG members, local youth, and PHC
                  staff, distributing IEC items on health and hygiene.
                </p>
              </div>
            </div>

            {/* Eye Check-up Camp */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
              <FaEye className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Eye Check-up Camp
                </h2>
                <p className="text-gray-600 text-sm">
                  Held an eye check-up camp at Kolathia, Chikiti Block, attended
                  by 130+ people. Dr. R.K. Sahu shared insights on elderly care
                  and child health.
                </p>
              </div>
            </div>

            {/* ASHA Module Training */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
              <FaChalkboardTeacher className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-600">
                  ASHA Module 6 & 7 Training
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted training for 512 ASHAs on maternal and newborn
                  health, child health, nutrition, and practical skills like
                  pregnancy detection, newborn care, and record maintenance.
                </p>
              </div>
            </div>

            {/* HIV/AIDS Awareness */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 flex items-center">
              <FaRibbon className="text-pink-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-pink-600">
                  HIV/AIDS Awareness
                </h2>
                <p className="text-gray-600 text-sm">
                  Held 4 camps in villages like Kuananda and B. Kotibadi to
                  spread awareness on AIDS, myths, safe sexual practices, and
                  precautions. Over 150 attendees were educated by social
                  activists and doctors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Flow Diagram
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaHeartbeat className="text-green-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaEye className="text-blue-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaChalkboardTeacher className="text-yellow-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaRibbon className="text-pink-500 text-3xl" />
            </div>
            <p className="text-gray-600 text-center mt-4">
              Health Camps → Eye Care → ASHA Training → HIV/AIDS Awareness
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Parent Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            MSME Activities
          </h1>
          <p className="text-gray-700 text-justify mb-6">
            Our organization works to promote sanitation, environment
            protection, consumer awareness, and livestock development. By
            focusing on these areas, we aim to improve quality of life, create
            awareness, and generate sustainable livelihoods in the community.
          </p>

          {/* Subcards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sanitation */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
              <FaToilet className="text-green-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-green-600">
                  Sanitation
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducted 8 environment and sanitation awareness camps in
                  Ganjam district under the District Water & Sanitation Mission
                  (DWSM), motivating 300+ people to construct Individual
                  Household Latrines (IHL).
                </p>
              </div>
            </div>

            {/* Environment Protection */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
              <FaLeaf className="text-blue-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  Environment Protection
                </h2>
                <p className="text-gray-600 text-sm">
                  Organized 4 awareness camps in Digapahandi and Chatrapur
                  blocks focusing on plantation, soil conservation, and forest
                  protection. Distributed 2,000 saplings and facilitated
                  plantation drives with local youth.
                </p>
              </div>
            </div>

            {/* Consumer Awareness */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
              <FaShoppingCart className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-600">
                  Consumer Awareness Programme
                </h2>
                <p className="text-gray-600 text-sm">
                  Held 3 consumer awareness camps to educate the public on
                  consumer rights, precautions while purchasing goods, and
                  grievance redressal mechanisms. Organized on Consumer Rights
                  Day and National Consumer Day.
                </p>
              </div>
            </div>

            {/* Livestock Development */}
            <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 flex items-center">
              <GiCow className="text-pink-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-pink-600">
                  Livestock Development
                </h2>
                <p className="text-gray-600 text-sm">
                  Promoted livestock activities as a sustainable income source.
                  Established dairy units with 60% income benefits and plans to
                  expand with the &quot;Goshala&quot; concept for employment and
                  bio-manure production.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Flow Diagram
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaToilet className="text-green-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaLeaf className="text-blue-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaShoppingCart className="text-yellow-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <GiCow className="text-pink-500 text-3xl" />
            </div>
            <p className="text-gray-600 text-center mt-4">
              Sanitation → Environment Protection → Consumer Awareness →
              Livestock Development
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        {/* Parent Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
            Miscellaneous Works
          </h1>
          <p className="text-gray-700 text-justify mb-6">
            Our organization is dedicated to preserving cultural heritage,
            promoting social harmony, and fostering community development. These
            efforts are reflected through a variety of initiatives, including
            library services, manuscript preservation, social cohesion programs,
            and celebrations of cultural and national importance.
          </p>

          {/* Subcards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Library */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex items-center">
              <FaBook className="text-purple-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-purple-600">
                  Library Services
                </h2>
                <p className="text-gray-600 text-sm">
                  Maintains two libraries at Jharipadar and Bijipur with over
                  10,000 books. Open to the public, these libraries provide
                  access to periodicals, journals, and newspapers, supported by
                  professional staff.
                </p>
              </div>
            </div>

            {/* Preservation of Manuscripts */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-center">
              <FaScroll className="text-orange-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-orange-600">
                  Preservation of Manuscripts
                </h2>
                <p className="text-gray-600 text-sm">
                  Focuses on preserving rare manuscripts. Translated two tribal
                  dialect manuscripts this year. Plans to construct an
                  independent library hall for better preservation and public
                  access.
                </p>
              </div>
            </div>

            {/* Social Cohesion & Community Spirit */}
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-center">
              <FaHandshake className="text-teal-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-teal-600">
                  Social Cohesion & Community Spirit
                </h2>
                <p className="text-gray-600 text-sm">
                  Conducts cultural programs to foster goodwill and harmony
                  among diverse groups. Organized events for social celebrations
                  like Holi, Rakshya Bandhan, Eid, and Christmas, supported by
                  the State Cultural Department.
                </p>
              </div>
            </div>

            {/* Celebrations & Observations */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
              <FaCalendarAlt className="text-yellow-500 text-4xl mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-600">
                  Celebrations & Observations
                </h2>
                <p className="text-gray-600 text-sm">
                  Observes events of social and national importance to promote
                  moral and social development. These celebrations create
                  positive societal impacts and foster a sense of unity and
                  purpose.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Flow Diagram
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <FaBook className="text-purple-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaScroll className="text-orange-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaHandshake className="text-teal-500 text-3xl" />
              <div className="h-1 w-12 bg-gray-300 mx-2"></div>
              <FaCalendarAlt className="text-yellow-500 text-3xl" />
            </div>
            <p className="text-gray-600 text-center mt-4">
              Library → Manuscripts → Social Cohesion → Celebrations
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
