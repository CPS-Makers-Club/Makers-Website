import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import { Navbar } from '../components/Navbar'
import { About } from '../components/About';
import { Resources } from '../components/Resources';
import { Info } from '../components/Info';
import { FaGithub, FaInstagram, FaArrowDown } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiTailwindcss, SiVercel, SiCloudflare } from 'react-icons/si'
import { Link } from "react-scroll";

export default function Home() {
  const el = useRef(null)

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
    <div>
      <Head>
        <title>Home | CPS Makers</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navbar />
      <div className='flex flex-col h-screen'>
        <div className='bg-white text-black overflow-hidden items-center flex flex-grow'>

          <div className='flex flex-auto items-center justify-center flex-col'>

            <Image
              src='/rocket.svg'
              alt='logo'
              width={256}
              height={256}
              // todo: add animations
              className='animate-fade z-0'
            >
            </Image>


            <div className='text-center font-sans'>
              <h2 className={"animate-fade pt-4 " + (isMobile ? "text-6xl" : "text-7xl")}>CPS Makers</h2>
              {/* <span ref={el} className='text-4xl animate-fade'></span> */}
            </div>
            <a href='#about' className='pt-24 text-5xl animate-fade'>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className='pt-4 text-5xl animate-fade'
              ><FaArrowDown /></Link>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col overflow-hidden">
        <div id='about'>
          <About />
        </div>
        <div id='resources'>
          <Resources />
        </div>
        <div id='info'>
          <Info />
        </div>
      </div>

      <footer className='pt-[7rem] text-lg bg-footerBg'>
        <div className='text-center'>
          <p>
            © 2022 Julian Vuong, Jim Fang, CPS Makers' Club
          </p>
          {/* 🎯 https://www.athenian-robotics.org/ react x next >>> MkDocs */}
          <div className='flex justify-center'>
            <a href='https://github.com/CPSMakers/Makers-Website' target='_blank'><FaGithub className="text-2xl mr-2" /></a>
            <a href='https://www.instagram.com/xlabcreations/' target='_blank'><FaInstagram className="text-2xl" /></a>
          </div>
          <div className='flex justify-center'>
            <p className='mr-1'>Site Powered By</p>
            <SiReact className="text-2xl mr-2" title='React' />
            <SiTailwindcss className="text-2xl mr-2" title='Tailwind CSS' />
            <SiNextdotjs className="text-2xl mr-2" title='Next.js' />
            <SiVercel className="text-2xl mr-2" title='Vercel' />
            <SiCloudflare className="text-2xl" title='Cloudflare' />
          </div>
          <p className='pb-2'>
            Emergency Webmaster Contact: <a href="mailto:yfang@college-prep.org" className="underline decoration-dotted">yfang@college-prep.org</a>
          </p>
        </div>

      </footer>

    </div>

  )
}
