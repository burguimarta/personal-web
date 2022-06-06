import Head from 'next/head'
<<<<<<< Updated upstream
import { useState } from 'react'

import PersonalData from '../components/PersonalData'
import Porfolio from '../components/Portfolio'
=======
import Bio from '../components/Bio'

export default function Home() {
  return (
    <div className="container">
      
      <Bio></Bio>
      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
>>>>>>> Stashed changes

import PortfolioItems from '../data/portfolio.json'

export default function Home() {
  const [items, SetItems] = useState(PortfolioItems.items);

  return (
    <div className="container">
      
      <PersonalData></PersonalData>
      <Porfolio items={items}></Porfolio>
      

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  )
}
