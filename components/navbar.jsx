import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className='flex items-center flex-wrap bg-white p-3 sticky top-0'>
                {/* Left hand :rocket: + logo text */}
                {/* Notes: remove prior to prod: https://dev.to/andrewespejo/how-to-design-a-simple-and-beautiful-navbar-using-nextjs-and-tailwindcss-26p1 */}
                {/* TODO: 
                    - Replace logo image
                    - Confirm logo text font
                    - change bar bg color to same as page bg color
                */}
                <Link href='/'>
                    <a className='inline-flex items-center p-2 mr-4 '>

                        {/* <svg
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                            className='fill-current text-white h-8 w-8 mr-2'
                        >
                            <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
                        </svg> */}

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="24.000000pt" height="24.000000pt" viewBox="0 0 200.000000 200.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                                fill="#000000" stroke="none">
                                <path d="M1767 1944 c-310 -48 -528 -155 -722 -355 -210 -217 -675 -783 -675
-822 0 -116 281 -397 397 -397 25 0 54 21 338 254 358 294 558 479 632 587
113 163 202 432 219 663 l7 86 -54 -1 c-30 -1 -94 -7 -142 -15z m142 -38 c15
-18 -8 -179 -44 -316 -29 -108 -102 -267 -166 -361 -74 -110 -259 -279 -699
-639 -219 -179 -226 -184 -272 -168 -106 36 -317 264 -318 345 0 11 219 286
389 488 141 167 290 331 349 382 156 136 390 234 641 268 53 7 99 13 102 14 4
1 12 -5 18 -13z"/>
                                <path d="M1285 1541 c-72 -33 -125 -111 -125 -183 1 -69 69 -163 137 -189 31
-12 95 -12 126 0 40 16 99 73 118 116 24 51 23 99 0 150 -48 104 -160 150
-256 106z m138 -35 c103 -43 128 -177 48 -257 -65 -65 -157 -65 -222 0 -124
123 13 325 174 257z"/>
                                <path d="M230 1068 c-60 -72 -110 -139 -110 -149 0 -24 16 -33 95 -54 39 -10
75 -20 81 -22 5 -2 41 36 80 84 38 48 104 130 146 181 l78 92 -130 0 -129 0
-111 -132z m264 84 c5 -9 -177 -242 -200 -255 -18 -10 -104 12 -111 29 -6 16
3 28 100 143 l77 91 65 0 c35 0 66 -4 69 -8z"/>
                                <path d="M296 616 c-31 -58 -1 -120 111 -227 107 -103 152 -123 209 -93 19 10
34 21 34 24 0 3 -19 16 -42 29 -59 34 -207 179 -248 245 -19 30 -37 55 -40 56
-3 0 -14 -15 -24 -34z m169 -205 c74 -69 72 -84 -3 -18 -54 47 -112 114 -112
129 0 5 11 -4 25 -20 13 -16 54 -57 90 -91z"/>
                                <path d="M1185 590 c-3 -6 -77 -67 -163 -137 -86 -69 -162 -131 -169 -137 -10
-9 -7 -29 10 -91 26 -93 32 -105 55 -105 9 0 77 50 150 111 l132 111 0 129 c0
71 -2 129 -4 129 -3 0 -8 -5 -11 -10z m-25 -157 c0 -64 -1 -67 -38 -102 -79
-75 -182 -153 -196 -148 -17 7 -39 93 -29 112 9 16 245 205 256 205 4 0 7 -30
7 -67z"/>
                                <path d="M170 421 c-133 -75 -160 -129 -160 -318 l0 -95 118 4 c93 4 128 9
169 27 63 28 81 47 133 141 l41 75 -28 22 c-15 13 -31 23 -35 23 -4 0 -23 -31
-42 -69 -53 -105 -92 -128 -238 -145 l-46 -5 5 62 c11 134 23 153 137 216 42
23 76 45 76 49 0 4 -10 19 -23 34 l-22 27 -85 -48z m-120 -325 c0 -8 12 -24
27 -35 31 -25 27 -32 -18 -34 -36 -2 -46 14 -35 59 7 26 26 33 26 10z"/>
                            </g>
                        </svg>


                        <span className='text-xl text-black font-bold uppercase tracking-wide pl-2'>
                            CPS Makers
                        </span>
                    </a>
                </Link>

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
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600'>
                                ABOUT
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600'>
                                RESOURCES
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600'>
                                TEAM
                            </a>
                        </Link>
                        <Link href='/'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:text-red-600'>
                                ADDITIONAL INFO & CONTACT
                            </a>
                        </Link>
                    </div>
                </div>

            </nav>
        </>

    )
};