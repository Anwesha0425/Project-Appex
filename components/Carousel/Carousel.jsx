import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function ImageCarousel({ images, text }) {
    return (
        <div>
            <div className="flex w-full relative">
                <Marquee
                    pauseOnHover={true}
                    pauseOnClick={true}
                    loop={0}
                    speed={30}
                    gradient={false}
                    className={'bg-[black] border-x-2 border-b-2 border-main'}
                >
                    {images.map((image) => (
                        <div key={image.alt} className="">
                            <Image
                                src={image.src}
                                alt={image.alt}
                                className="w-[30vw] h-full object-cover border-x-2 border-main"
                                height={2500}
                                width={2500}
                            />
                        </div>
                    ))}
                </Marquee>
                <div className="xl:text-6xl lg:text-5xl md:text-2xl sm:text-md z-10 text-center absolute inset-0 flex justify-center items-center text-[white] font-bold bg-[black] opacity-50">
                    {text}
                </div>
            </div>
        </div>
    );
}