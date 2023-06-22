import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/Component/HomePage/Hero'
import Devider from '@/Component/HomePage/Devider'
import BreakingNews from '@/Component/HomePage/BreakingNews'
import NewsSection from '@/Component/HomePage/NewsSection'
import Magazine from '@/Component/HomePage/MagazineSection'
import Herov2 from '@/Component/HomePage/Herov2'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Herov2 />
     {/* <Hero /> */}
     <Devider />
     <BreakingNews />
     <NewsSection />
     <Magazine />
    </>
  )
}
