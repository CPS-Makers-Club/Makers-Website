import NextLink from 'next/link'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount


    const isMobile = windowSize.width <= 907;

    return (
        <>
            <nav className='flex items-center flex-wrap bg-white p-3 sticky top-0 z-10'>
                <NextLink href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>

                        <Image
                            src='/rocket_twitter.svg'
                            alt='logo_twitter_rocket_small'
                            width={24}
                            height={24}
                        ></Image>

                        <span className="text-xl text-black font-bold uppercase tracking-wide pl-2">
                            CPS Makers
                        </span>
                    </a>
                </NextLink>

                {/* Mobile hamburger - hidden if width > 1024px */}
                <button className=' inline-flex p-3 hover:bg-red-500 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
                    onClick={handleClick}>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M4 6h16M4 12h16M4 18h16'
                        />
                    </svg>
                </button>

                {/* Desktop Menu + mobile hamburger open/close handling */}
                {/* TODO: Links need to be linked to pages/breakpoints */}
                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>

                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600' href="#about" onClick={(isMobile) ? handleClick : undefined}>
                                ABOUT
                            </a>
                        </Link>
                        <Link
                            activeClass="active"
                            to="resources"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>

                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600' href="#resources" onClick={(isMobile) ? handleClick : undefined}>
                                RESOURCES
                            </a>
                        </Link>
                        {/* <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600'>
                                TEAM
                            </a>
                        </Link> */}

                        <Link
                            activeClass="active"
                            to="info"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}>

                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600' href='#info' onClick={(isMobile) ? handleClick : undefined}>
                                ADDITIONAL INFO & CONTACT
                            </a>
                        </Link>
                    </div>
                </div>

            </nav>
        </>

    )
};