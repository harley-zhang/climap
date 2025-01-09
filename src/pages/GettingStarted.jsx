import { Helmet } from "react-helmet-async";
import Navbar from "../scenes/Navbar";
import PlantFunctional from "../assets/GettingStarted/plant-functional.png";
import TimePeriod from "../assets/GettingStarted/time-period.png";
import GrazingWildfire from "../assets/GettingStarted/grazing-wildfire.png";
import DrawShape from "../assets/GettingStarted/draw-shape.png";
import Rectangle from "../assets/GettingStarted/rectangle.png";
import Download from "../assets/GettingStarted/download.png";
import DataViewer from "../assets/GettingStarted/data-viewer.png";
import Manager from "../assets/GettingStarted/manager.png";
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const GettingStarted = () => {
    return (
        <>
            <Helmet>
                <title>Getting Started | CliMap</title>
            </Helmet>
            <Navbar />
            <div className="mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px] mb-10">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl mt-28 xs:mt-32 sm:mt-40 font-product-sans-regular mb-4 text-center">Getting started</h1>

                <div className="flex justify-center mt-8">
                    <a
                        href="/app"
                        className="font-product-sans-light-regular text-[.85rem] sm:text-sm tracking-wide flex items-center bg-blue hover:opacity-90 transition-all duration-300 text-white px-5 py-2 rounded-full mr-5"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Start now
                        <GoArrowUpRight size={15} className="ml-1" />
                    </a>
                </div>
                    <>
                        {/* LAYER OPTIONS */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Layer options</h1>
                        {/* Time period and scenario */}
                        <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                            <div className="absolute inset-0 flex w-full h-full">
                                <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                    <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Time period and scenario</h3>
                                    <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                    Choose from big sagebrush, perennial C3 grasses, perennial C4 grasses, perennial grasses, annual C3 grasses, and forbs. Choose from current (1981-2010), mid-century (2031-2060), and end-century (2071-2100) time periods and two climate change scenarios: RCP4.5 (less severe) and RCP8.5 (more extreme). Then specify if the area encounters grazing or wildfires.
                                    </p>
                                    <div className="flex text-sm font-product-sans-light-regular tracking-wide">
                                        <a
                                            href="https://cal-adapt.org/help/faqs/which-rcp-scenarios-should-i-use-in-my-analysis/"
                                            className="flex items-center relative group"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Read more about RCPs <GoArrowUpRight size={15} className="ml-1" />
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={TimePeriod} alt="Time period and scenario" className="w-full h-full object-cover rounded-r-lg" />
                                </div>
                            </div>
                        </div>
                        <p className="font-product-sans-light-regular text-base xs:text-lg sm:text-xl text-center">Note that not all combinations of selected layers exist.
                        </p>

                        {/* AREA OF INTEREST */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Area of interest</h1>
                        {/* Draw a shape */}
                        <div className="flex items-center mb-24 mt-12 h-0 pb-[50%] md:h-[544px] relative">
                            <div className="absolute inset-0 flex w-full h-full">
                                <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                    <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Draw a shape</h3>
                                    <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                        Press Draw and use the cursor to click points encircling your area of interest. Once finished, click the first point again to complete the selection.
                                    </p>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={DrawShape} alt="Draw a shape" className="w-full h-full object-cover rounded-r-lg" />
                                </div>
                            </div>
                        </div>
                        {/* Produce a rectangle */}
                        <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                            <div className="absolute inset-0 flex w-full h-full">
                                <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                    <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Produce a rectangle</h3>
                                    <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                        Enter the latitude and longitude coordinates of the North-East (top right) and south west (bottom left) vertices of a rectangular area of interest.
                                    </p>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={Rectangle} alt="Produce a rectangle" className="w-full h-full object-cover rounded-r-lg" />
                                </div>
                            </div>
                        </div>

                        {/* DOWNLOADING DATA */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Downloading data</h1>
                        {/* Generate a download link */}
                        <div className="flex items-center my-12 h-0 pb-[50%] md:h-[544px] relative">
                            <div className="absolute inset-0 flex w-full h-full">
                                <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                    <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Get download link</h3>
                                    <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                        Press Download to generate a download link. The link contains a compressed ZIP file containing TIF rasters of all the selected layers within the area(s) of interest. If no area(s) of interest were selected, the images will cover the entire layer.
                                    </p>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={Download} alt="Generate a download link" className="w-full h-full object-cover rounded-r-lg" />
                                </div>
                            </div>
                        </div>
                        <p className="font-product-sans-light-regular text-base xs:text-lg sm:text-xl text-center">Due to the size of images, certain downloads are not possible.
                        </p>

                        {/* FEATURES */}
                        <h1 className="text-3xl xs:text-4xl sm:text-5xl mt-24 xs:mt-28 sm:mt-32 font-product-sans-regular text-center">Features</h1>
                        {/* Data viewer */}
                        <div className="flex items-center mb-24 mt-12 h-0 pb-[50%] md:h-[544px] relative">
                            <div className="absolute inset-0 flex w-full h-full">
                                <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                    <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Data viewer</h3>
                                    <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                        Use the data viewer to either click a data point on the map or enter the coordinates of a point to see the data for all selected layers. Use the&nbsp;<FaArrowUpRightFromSquare size={17} className="inline-block pb-[3px]" />&nbsp;button to view the full size chart or download it as a CSV, SVG, or PNG.
                                    </p>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={DataViewer} alt="Data viewer" className="w-full h-full object-cover rounded-r-lg" />
                                </div>
                            </div>
                        </div>
                        {/* Geometry and layers managers */}
                        <div className="flex items-center my-24 h-0 pb-[50%] md:h-[544px] relative">
                            <div className="absolute inset-0 flex w-full h-full">
                                <div className="w-1/2 bg-light-grey p-[5vw] md:p-16 rounded-l-lg h-full flex flex-col justify-center">
                                    <h3 className="text-base md:text-xl font-product-sans-regular mb-4 md:mb-8 text-grey">Geometry imports and layers managers</h3>
                                    <p className="text-base md:text-xl tracking-wide font-product-sans-light-regular mb-4 md:mb-8">
                                        Use the geometry imports and layers managers to hide or show shapes or data layers. Unchecking a layer does not delete it, only hides it from view.
                                    </p>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={Manager} alt="Geometry and layers managers" className="w-full h-full object-cover rounded-r-lg" />
                                </div>
                            </div>
                        </div>
                        <div className="h-10">
                        </div>
                    </>
            </div>

        </>
    );
};

export default GettingStarted;
