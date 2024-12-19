import React, { useState, useEffect } from 'react';
import LegacyComponent from '../components/LegacyComponent';
import ModernHome from '../components/ModernHome';
import TranscendCity from '../components/TranscendCity';
import CustomImageComponent from '../components/customImage/CustomImage';
import LuxuryLiving from '../components/LuxuryLiving';
import UncommonOpportunity from '../components/UncommonOpportunity';
import FooterSection from '../components/FooterSection/FooterSection';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null); // एक्टिव सेक्शन को ट्रैक करने के लिए

  useEffect(() => {
    const sectionColors = {
      LegacyComponent: '#e8e4df',
      ModernHome: '#e8e4df',
      TranscendCity: '#0F1C23',
      CustomImageComponent: '#e8e4df', 
      LuxuryLiving: '#e8e4df',
      UncommonOpportunity: '#f4f0eb',
      FooterSection: '#0A1A2B'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.disconnect());
    };
  }, []);

  // स्टाइल डायनेमिकली सेट करें
  const getBackgroundColor = (sectionId) => {
    const sectionColors = {
      LegacyComponent: '#e8e4df',
      ModernHome: '#e8e4df',
      TranscendCity: '#0F1C23',
      CustomImageComponent: '#e8e4df', 
      LuxuryLiving: '#e8e4df',
      UncommonOpportunity: '#f4f0eb',
      FooterSection: '#0A1A2B'
    };
    return sectionId === activeSection ? sectionColors[sectionId] : '#FFFFFF';
  };

  return (
    <div>
      <div id="LegacyComponent" className="section" style={{ backgroundColor: getBackgroundColor('LegacyComponent'), transition: 'background-color 1s ease' }}><LegacyComponent/></div>
      <div id="ModernHome" className="section" style={{ backgroundColor: getBackgroundColor('ModernHome'), transition: 'background-color 1s ease' }}><ModernHome/></div>
      <div id="TranscendCity" className="section" style={{ backgroundColor: getBackgroundColor('TranscendCity'), transition: 'background-color 1s ease' }}><TranscendCity/></div>
      <div id="CustomImageComponent" className="section" style={{ backgroundColor: getBackgroundColor('CustomImageComponent'), transition: 'background-color 1s ease' }}><CustomImageComponent/></div>
      <div id="LuxuryLiving" className="section" style={{ backgroundColor: getBackgroundColor('LuxuryLiving'), transition: 'background-color 1s ease' }}><LuxuryLiving/></div>
      <div id="UncommonOpportunity" className="section" style={{ backgroundColor: getBackgroundColor('UncommonOpportunity'), transition: 'background-color 1s ease' }}><UncommonOpportunity/></div>
      <div id="FooterSection" className="section" style={{ backgroundColor: getBackgroundColor('FooterSection'), transition: 'background-color 1s ease' }}><FooterSection/></div>
    </div>
  );
};

export default HomePage;
