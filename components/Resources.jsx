import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { FaArrowDown } from 'react-icons/fa'

export const Resources = () => {
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
    // https://calendar.google.com/calendar/u/0/embed?src=c_osk658485b1icalcjkq1c6tar0@group.calendar.google.com&ctz=America/Los_Angeles
    return (
        <div className="flex items-center justify-center flex-col py-[5.5rem] bg-abtBg w-screen">
            <h1 className="text-5xl rounded text-black font-bold uppercase mb-6">resources</h1>
            <div className="flex flex-row justify-center mb-3 flex-wrap">
                <div className={"border-slate-400 border border-[.125] bg-white rounded p-3 " + (!isMobile ? "w-[500px] h-[412px] mr-10" : "w-[300px] mb-3")}>
                    <div className="mb-3">
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Events & Prints</h1>
                        <p className="mb-4">See our past & upcoming meetings and print jobs.</p>
                        <a href="https://calendar.google.com/calendar/u/0/embed?src=c_osk658485b1icalcjkq1c6tar0@group.calendar.google.com&ctz=America/Los_Angeles" className="py-1.5 px-3 bg-btnRed rounded-lg text-white" target="_blank">GCal</a>
                    </div>
                    <div className='mb-3'>
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Common Classroom</h1>
                        <p className='mb-4'>Signup for Makers' Common Classroom Events!</p>
                        <a href="https://www.cc-collegeprep.school/" className="py-1.5 px-3 bg-btnRed rounded-lg text-white" target="_blank">Signup</a>

                    </div>
                    <div className='mb-3'>
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Mailing List</h1>
                        <p className='mb-4'>Subscribe for announcements and upcoming events.</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSedUKdfh9EZoxOIucM7oaQbJ0Rt-qcboXqBp82FX9AFLEQcew/viewform" className="py-1.5 px-3 bg-btnRed rounded-lg text-white" target="_blank">Subscribe</a>
                    </div>
                </div>
                <div className={"border-slate-400 border border-[.125] bg-white w-[500px] h-[300px] rounded p-3 " + (!isMobile ? "w-[500px] h-[412px] ml-10" : "w-[300px]")}>
                    <div>
                        <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Guides & Forms</h1>
                        <p className='mb-4'>Check our Notion page for 3D printing guides & print scheduling</p>
                        <div className='flex flex-col'>
                            <a href="https://cpsmakers.notion.site/Makers-Club-Knowledge-Base-72dd62eef3f24ce593beccb472fd584a" className="py-1.5 px-3 mb-2 bg-btnRed rounded-lg text-white align-items justify-center w-[151px]" target="_blank">Guide Homepage</a>
                            <a href="https://cpsmakers.notion.site/3D-Printing-Guide-5fbfce8c4b7443c0b3064a3c499a0e78" className="py-1.5 px-3 mb-2 bg-btnRed rounded-lg text-white align-itmes justify-center w-[152px]" target="_blank">3D Printing Guide</a>
                            <a href="https://forms.gle/wdAAtvRkAGT1ptqs5" className="py-1.5 px-3 mb-2 bg-btnRed rounded-lg text-white justify-center w-[164px]" target="_blank">Print Request Form</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href='#info' className='pt-10 text-5xl animate-fade'>
                    <Link
                        activeClass="active"
                        to="info"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        className='text-5xl'
                    ><FaArrowDown /></Link>
                </a>
        </div>
    )
};