import { useState, useEffect } from "react"

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
    return (
        <div className="flex items-center justify-center flex-col mt-[5.5rem]">
            <h1 className="text-5xl rounded text-black font-bold uppercase mb-2">resources</h1>
            <div className="flex flex-row justify-center mb-3 flex-wrap">
                <div className={"border-slate-400 border-2 bg-slate-200  w-[320px] h-[300px] rounded p-3 " + (!isMobile ? "mr-10" : "mb-3")}>
                    <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Events</h1>
                    <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Mailing List</h1>
                </div>
                <div className={"border-slate-400 border-2 bg-slate-200  w-[320px] h-[300px] rounded p-3 " + (!isMobile ? "ml-10" : "")}>
                    <h1 className="text-4xl font-bold flex inline-flex flex-wrap pb-3">Guides</h1>
                </div>
            </div>
        </div >
    )
};