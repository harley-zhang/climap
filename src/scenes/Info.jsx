import useMediaQuery from "../hooks/useMediaQuery";
import meetCliMap from "../assets/Home/satellite.png";
import { HiChevronRight } from "react-icons/hi2";

const Info = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

    return (
        <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px] pb-10">
            <>
                {/*** DESKTOP VIEW ***/}

                {/* Meet CliMap */}
                <div className="flex items-center my-24 h-0 pb-10 md:h-[544px] relative">
                    <div className="absolute inset-0 flex w-full h-full">
                        <div className="w-1/2 overflow-hidden">
                            <img src={meetCliMap} alt="Satellite view" className="w-full h-full object-cover rounded-l-lg" />
                        </div>
                        <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-r-lg h-full flex flex-col justify-center">
                            <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Meet CliMap</h3>
                            <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                This online app, features publicly available data that models how climate change affects dryland plant communities. This app visualizes that data for farmers and land managers to understand how climate change under different projected scenarios will affect plants.
                            </p>
                            <div className="flex space-x-6 text-sm font-product-sans-light-regular tracking-wide">
                                <a href="/overview" className="flex items-center relative group">
                                    Getting started <HiChevronRight size={14} className="ml-1" />
                                    <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </a>
                                <a href="https://data.usgs.gov/datacatalog/data/USGS:60cb9171d34e86b938a3a962" className="flex items-center relative group">
                                    Data source <HiChevronRight size={14} className="ml-1" />
                                    <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </>

        </div >
    );
};

export default Info;
