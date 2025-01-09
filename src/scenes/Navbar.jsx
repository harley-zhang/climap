import logo from "../assets/logo-shadow-notext.png";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
    return (
        <nav className="bg-white z-40 w-full fixed top-0 py-2">
            <div className="flex items-center justify-between mx-auto px-5 sm:px-10 md:px-5 md:w-[1088px]">
                <a href="/" className="flex items-center space-x-2 no-select">
                    <img src={logo} alt="climap-logo" className="h-8 sm:h-10 z-50 pr-1 no-select" />
                    <span className="font-product-sans-medium-regular text-xl xs:text-2xl text-dark-grey hidden sm:block no-select">CliMap</span>
                </a>
                <div className="flex items-center space-x-3 xs:space-x-5">
                    <a
                        href="/app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-product-sans-light-regular text-sm tracking-wide flex items-center bg-blue hover:opacity-90 transition-all duration-300 text-white px-3 sm:px-4 py-2 rounded-full"
                    >
                        Launch app
                        <GoArrowUpRight className="ml-1" />
                    </a>
                    <a href="/getting-started" className="font-product-sans-light-regular tracking-wide text-sm">
                        Getting started
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
