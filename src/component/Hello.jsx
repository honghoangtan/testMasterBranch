
import { FiDownload } from "react-icons/fi";
import Social from "./Social";
import Photo from "./Photo";
import Stats from "./Stats";

function Hello() {
    return ( 
        <section className="h-full">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Development</span>

                        <h1 className="h1 mb-6">
                            Hello I'm <br /> <span className="text-accent">Hong Hoang Tan</span>
                        </h1>

                        <p className="max-w-[500px] mb-9 text-white/80">
                        My career goal is to become a professional Front End Developer, capable of working on complex projects. I look forward to growing
                        my career in technology and achieving ReactJs certification within 2 years.
                        </p>

                        {/* button and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <button className="outline px-3 rounded-lg uppercase flex items-center gap-2">
                                <span>Download CV </span>
                                <FiDownload className="text-xl" />
                            </button>

                            <div className="mb-8 xl:mb-0">
                                <Social 
                                    containerStyle='flex gap-6' 
                                    iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center
                                        text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                                />
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>

            <Stats />
        </section>
     );
}

export default Hello;