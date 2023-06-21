import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '@/Component/HomePage/Hero'
import Devider from '@/Component/HomePage/Devider'
import BreakingNews from '@/Component/HomePage/BreakingNews'
import NewsSection from '@/Component/HomePage/NewsSection'
import Magazine from '@/Component/HomePage/MagazineSection'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Hero />
     <Devider />
     <BreakingNews />
     <NewsSection />
     <Magazine />
    </>
  )
}
