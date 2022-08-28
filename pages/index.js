import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { Navbar } from '../components/Navbar'
import { About } from '../components/About';
import { Resources } from '../components/Resources';
import { Info } from '../components/Info';
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { SiReact, SiNextdotjs, SiTailwindcss, SiVercel } from 'react-icons/si'

export default function Home() {
  const el = useRef(null)

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
              <h2 className='text-7xl animate-fade pt-4'>CPS Makers</h2>
              {/* <span ref={el} className='text-4xl animate-fade'></span> */}
            </div>

          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col overflow-hidden">
        <About />
        <Resources />
        <Info />
      </div>

      <footer className='pt-[7rem] text-lg'>
        <div className='text-center'>
          <p>
            © 2022 Julian Vuong, Jim Fang, CPS Makers' Club
          </p>
          <div className='flex justify-center'>
            <FaGithub className="text-2xl mr-2" />
            <FaInstagram className="text-2xl" />
          </div>
          <div className='flex justify-center'>
            <p className='mr-1'>Site Powered By</p>
            <SiReact className="text-2xl mr-2" title='React' />
            <SiNextdotjs className="text-2xl mr-2" title='Next.js' />
            <SiTailwindcss className="text-2xl mr-2" title='Tailwind CSS' />
            <SiVercel className="text-2xl" title='Vercel' />
          </div>
          <p>
            Emergency Webmaster Contact: <a href="mailto:yfang@college-prep.org" className="underline decoration-dotted">yfang@college-prep.org</a>
          </p>
        </div>

      </footer>

    </div>

  )
}
