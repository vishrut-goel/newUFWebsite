import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutCompany } from './components/AboutCompany';
import { Capabilities } from './components/Capabilities';
import { WhyUs } from './components/WhyUs';
import { Sustainability } from './components/Sustainability';
import { DroneTour } from './components/DroneTour';
import { MaterialMatrix } from './components/MaterialMatrix';
import { Portfolio } from './components/Portfolio';
import { QualityLab } from './components/QualityLab';
import { RfqEngine } from './components/RfqEngine';
import { ContentChecklistModal } from './components/ContentChecklistModal';
import { Footer } from './components/Footer';

export function App() {
  const [isRfqModalOpen, setIsRfqModalOpen] = useState(false);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);
  const [selectedRfqGrade, setSelectedRfqGrade] = useState('');
  const [selectedRfqComponent, setSelectedRfqComponent] = useState('');

  const handleOpenRfq = (grade = '', component = '') => {
    setSelectedRfqGrade(grade);
    setSelectedRfqComponent(component);
    setIsRfqModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation Header */}
      <Header 
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero & Value Prop + Core Metrics */}
        <Hero 
          onOpenRfq={() => handleOpenRfq()}
        />

        {/* Section 2: Authentic 1964 History & Core Management */}
        <AboutCompany />

        {/* Section 3: Foundry & CNC Machinery Floor */}
        <Capabilities />

        {/* Section 4: Why Us, client logos & certification */}
        <WhyUs />

        {/* Section 5: Sustainability & Responsibility */}
        <Sustainability />

        {/* Section 6: Virtual Aerial Drone Plant Tour */}
        <DroneTour />

        {/* Section 7: Material Grades Matrix (IS / ASTM / EN Lookup) */}
        <MaterialMatrix 
          onSelectGradeForRfq={(grade) => handleOpenRfq(grade)}
        />

        {/* Section 8: Component Gallery & OEM Portfolio */}
        <Portfolio 
          onSelectComponentForRfq={(compName, mat) => handleOpenRfq(mat, compName)}
        />

        {/* Section 9: Quality Assurance & Metrology Lab */}
        <QualityLab />

        {/* Section 10: Dedicated Inline RFQ Engine */}
        <RfqEngine 
          initialGrade={selectedRfqGrade}
          initialComponent={selectedRfqComponent}
        />
      </main>

      {/* Footer & B2B Plant Info */}
      <Footer 
        onOpenRfq={() => handleOpenRfq()}
      />

      {/* Modal: Standalone RFQ Trigger */}
      {isRfqModalOpen && (
        <RfqEngine 
          isOpenModal={true}
          onCloseModal={() => setIsRfqModalOpen(false)}
          initialGrade={selectedRfqGrade}
          initialComponent={selectedRfqComponent}
        />
      )}

      {/* Modal: Client Content Production Checklist Helper */}
      <ContentChecklistModal 
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
      />

    </div>
  );
}

export default App;

