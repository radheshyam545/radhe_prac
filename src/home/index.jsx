import React, { useState, useEffect } from 'react'
import LegacyComponent from '../components/LegacyComponent'
import ModernHome from '../components/ModernHome'
import TranscendCity from '../components/TranscendCity'
import CustomImageComponent from '../components/customImage/CustomImage'
import LuxuryLiving from '../components/LuxuryLiving'
import UncommonOpportunity from '../components/UncommonOpportunity'
import FooterSection from '../components/FooterSection/FooterSection'

const HomePage = () => {
  const [activeColor, setActiveColor] = useState('white'); // डिफ़ॉल्ट बैकग्राउंड कलर

  useEffect(() => {
    const sectionColors = {
      LegacyComponent: '#e8e4df',
      ModernHome: '#e8e4df',
      TranscendCity: '#0F1C23',
      // CustomImageComponent: 'purple',
      LuxuryLiving: '#e8e4df',
      UncommonOpportunity: '#f4f0eb',
      FooterSection: '#0A1A2B'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveColor(sectionColors[entry.target.getAttribute('id')]);
        }
      });
    }, { threshold: 0.3 });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.disconnect());
    }
  }, []);

  return (
    <div style={{ backgroundColor: activeColor, transition: 'background-color 0.5s ease' }}>
      <div id="LegacyComponent" className="section"><LegacyComponent/></div>
      <div id="ModernHome" className="section"><ModernHome/></div>
      <div id="TranscendCity" className="section"><TranscendCity/></div>
      <div id="CustomImageComponent" className="section"><CustomImageComponent/></div>
      <div id="LuxuryLiving" className="section"><LuxuryLiving/></div>
      <div id="UncommonOpportunity" className="section"><UncommonOpportunity/></div>
      <div id="FooterSection" className="section"><FooterSection/></div>
    </div>
  )
}

export default HomePage;
