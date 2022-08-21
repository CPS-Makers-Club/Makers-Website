import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from "react";
import { Navbar } from '../components/Navbar'
import { About } from '../components/About';
import { Resources } from '../components/Resources';

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

      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='bg-white text-black overflow-hidden items-center flex flex-grow'>

          <div className='flex flex-auto items-center justify-center flex-col'>

            <Image
              src='/rocket.svg'
              alt='logo'
              width={255}
              height={256}
              // todo: add animations
              className='animate-fade'
            >
            </Image>


            <div className='text-center font-sans'>
              <h2 className='text-7xl animate-fade pt-4'>CPS Makers</h2>
              {/* <span ref={el} className='text-4xl animate-fade'></span> */}
            </div>

          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col">
        <About />
        <Resources />
      </div>

    </div>

  )
}
