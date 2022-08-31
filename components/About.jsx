import Image from "next/image";
import { useState, useEffect } from "react"
import { Link } from "react-scroll";
import { FaArrowDown } from 'react-icons/fa'

export const About = () => {
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
        <div className="flex items-center justify-center flex-col my-[5.5rem]">
            <h1 className="text-5xl rounded text-black font-bold uppercase mb-6">about us</h1>
            <p className="text-xl pb-5 text-center px-20">Makers' Club is a gathering of people who like to build! No experience is necessary—we hope to create a space where everyone can use the xLab for both individual projects and a large club project. We are currently building <a href="https://en.wikipedia.org/wiki/RepRap_project" target="_blank" className='underline decoration-dotted'>RepRap (<b>Rep</b>licating <b>Rap</b>id Protoyper)</a> 3D printer out of 3D printed parts.</p>
            <div className="flex justify-center mb-3 flex-wrap">
                <div className={"flex grid-col-2 gap-2"}>
                    {/* + (!isMobile ? "mr-10" : "mb-3") */}
                    <div className='w-1/2'>
                        <div className='flex justify-center'>
                            <Image
                                src='/instructor.svg'
                                alt='instructor'
                                width={127}
                                height={127}
                                className='animate-fade'
                            >
                            </Image>
                        </div>
                        <h4 className="my-[15px] flex justify-center font-bold text-2xl">
                            Education
                        </h4>
                        <p className='text-center mx-10'>
                            We host 3D printer, laser cutting certifications (coming soon) and Ultimaker Cura information sessions.
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <div className='flex justify-center'>
                            <Image
                                src='/printer 1.svg'
                                alt='instructor'
                                width={127}
                                height={127}
                                className='animate-fade'
                            >
                            </Image>
                        </div>
                        <h4 className="my-[15px] flex justify-center font-bold text-2xl">
                            Experience
                        </h4>
                        <p className="text-center mx-10">
                            We sharpen our skills through 3D additive manufacturing, laser cutting, metal-work & computer engineering projects in the xLab.
                        </p>
                    </div>
                </div>
                <a href='#resources' className='pt-10 text-5xl animate-fade'>
                    <Link
                        activeClass="active"
                        to="resources"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        className='text-5xl'
                    ><FaArrowDown /></Link>
                </a>
            </div>
        </div >
    )
};