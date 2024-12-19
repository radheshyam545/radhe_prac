import React, { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('section1');
  const sections = {
    section1: 'blue',
    section2: 'red',
    section3: 'green',
    section4: 'purple'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    Object.keys(sections).forEach(section => {
      observer.observe(document.getElementById(section));
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: sections[activeSection], transition: 'background-color 0.5s ease' }}>
      {Object.keys(sections).map(section => (
        <div id={section} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h1>{section}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
