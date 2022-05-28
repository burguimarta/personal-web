import Head from 'next/head'
import { useState } from 'react'

import PersonalData from '../components/PersonalData'
import Porfolio from '../components/Portfolio'

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
