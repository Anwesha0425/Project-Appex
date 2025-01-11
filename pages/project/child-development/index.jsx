import React from 'react'
import ImageCarousel from '../../../components/Carousel/Carousel';
import Link from 'next/link';

const images = [
  {
    src: "https://img.playbook.com/ZylLzypy3kYeBNLYJKgiegb6mclXwq6zdiO1RYJBKFc/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzFjN2JkNmE4/LThhZmYtNDkzNy04/MTAwLWU2ZDA1Njdl/NDdmMg",
    alt: "image 0",
  },

  {
    src: "https://img.playbook.com/LK83UGFSNRwmu2Fr2rNylo_CrptC4tee0zqwUcj3wjM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk1MzA2MjQw/LTRmMGQtNGFjZi04/ZGQ0LTMzZGQ3ZWQx/YTdiYQ",
    alt: "image 1",
  },
  {
    src: "https://img.playbook.com/vNcOsBlfB96rW21-wElsX9uv5csgt7iFO4jmbG2auy4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2EwN2NiNjQ4/LWUxZWYtNGVlNC04/NDgwLWQzYWRlODc4/NzZlMg",
    alt: "image 2",
  },
  {
    src: "https://img.playbook.com/ssnMe7gANYHGjk4lmYekmglZXZy2LXTX-1nysVi9xYI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzQwMDhiOGYy/LTIxZmQtNDg0MS1h/YWJlLWRlMTllYWNh/YWJiZA",
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
];


const index = () => {
  return (
    <>
    <div><ImageCarousel images={images} text={"Child Development"} /></div>
    <div className="flex flex-row m-4 p-2 bg-[#eafcfa] items-center">
        {/* left */}
        <div className="m-4 p-4 size-[50%] justify-center">
          <div className="p-2 size-[52%]">
            <Link href={"/fundraising"}>
            <div className="text-2xl font-bold m-4 P-4 font-serif bg-[#A1D9D6] border-black border-2 rounded-md text-center">
              Donate For Children
            </div>
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="m-4 p-4 flex flex-col justify-start ">   
            <div className="text-4xl font-bold py-2 font-serif">
             FOR SUPPORT
            </div>
            <div className="text-xl">
              email-to
            </div>
            <div className="text-2xl font-bold font-serif">
            <a href="mailto:appexfcc@gmail.com" className="text-[#0e0e0e] hover:underline">
                  appexfcc@gmail.com
                </a>
            </div>
        </div>
      </div>
     </>
  );
};

export default index