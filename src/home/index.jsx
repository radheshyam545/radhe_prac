import React from 'react'
import LegacyComponent from '../components/LegacyComponent'
import { second_banner } from '../exportImages/export'
import ModernHome from '../components/ModernHome'
import CustomBox from '../components/CustomBox'
import TranscendCity from '../components/TranscendCity'
import CustomImageComponent from '../components/customImage/CustomImage'
import LuxuryLiving from '../components/LuxuryLiving'
import UncommonOpportunity from '../components/UncommonOpportunity'
import FooterSection from '../components/FooterSection/FooterSection'

const HomePage = () => {
  return (
    <div className=''>
      <LegacyComponent/>
      <ModernHome/>
      {/* <CustomBox/> */}
      <TranscendCity/>
      <CustomImageComponent/>
      <LuxuryLiving/>
      <UncommonOpportunity/>
      <FooterSection/>
    </div>
  )
}

export default HomePage
