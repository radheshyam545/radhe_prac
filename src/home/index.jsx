import React, { useState, useEffect } from 'react';
import LegacyComponent from '../components/LegacyComponent';
import ModernHome from '../components/ModernHome';
import TranscendCity from '../components/TranscendCity';
import CustomImageComponent from '../components/customImage/CustomImage';
import LuxuryLiving from '../components/LuxuryLiving';
import UncommonOpportunity from '../components/UncommonOpportunity';
import FooterSection from '../components/FooterSection';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState(null); // Active section track karna
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Background color state

  const sectionColors = {
    LegacyComponent: '#e8e4df',
    ModernHome: '#e8e4df',
    TranscendCity: '#0F1C23',
    CustomImageComponent: '#e8e4df',
    LuxuryLiving: '#e8e4df',
    UncommonOpportunity: '#f4f0eb',
    // FooterSection: '#0A1A2B',
    FooterSection: '#0F1C23',
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    if (activeSection) {
      const newColor = sectionColors[activeSection];
      setBackgroundColor(newColor);
    }
  }, [activeSection]);

  return (
    <div style={{ backgroundColor: backgroundColor, transition: 'background-color 1.5s ease' }}>
      <div id="LegacyComponent" className="section" >
        <LegacyComponent />
      </div>
      <div id="ModernHome" className="section" >
        <ModernHome />
      </div>
      <div id="TranscendCity" className="section" >
        <TranscendCity />
      </div>
      <div id="CustomImageComponent" className="section" >
        <CustomImageComponent />
      </div>
      <div id="LuxuryLiving" className="section" >
        <LuxuryLiving />
      </div>
      <div id="UncommonOpportunity" className="section">
        <UncommonOpportunity />
      </div>
      <div id="FooterSection" className="section" >
        <FooterSection />
      </div>
    </div>
  );
};

export default HomePage;
