import React, { useEffect, useState } from 'react'
import logoECI from '../assets/clients/eci.png'
import logoKinyara from '../assets/Kinyara Sugar.png'
import logoHoima from '../assets/Hoima sugar.jpg'
import logoASVT from '../assets/Asvt_Logo.png'
import logoIITD from '../assets/IIT Dehli.png'
import logoASI from '../assets/Archaeological_Survey_of_India.png'
import logoUltimate from '../assets/ultimate clean energies.jpeg'
import logoMRF from '../assets/MRF-Logo.png'
import logoNoida from '../assets/Noida Special Economic Zone.jpg'
import logoSTPI from '../assets/Software_Technology_Parks_of_India_logo (1).jpg'
import logoCalderys from '../assets/Calderys.png'
import heroBg from '../assets/hero-bg-main.jpeg'

const ClientCard = ({ logo, name }) => (
  <div className="client-card">
    {logo ? <img src={logo} alt={name} className="client-logo" /> : <div className="client-placeholder">🏢</div>}
    <span className="client-name">{name}</span>
  </div>
)

const Clientele = () => {
  const [activeTab, setActiveTab] = useState('Gov');

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="clientele-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.85)), url(${heroBg})` }}>
        <div className="container">
          <h1>Our <span className="highlight">Clientele</span></h1>
          <p>Trusted by governments, global corporations, and industrial leaders.</p>
        </div>
      </section>

      {/* Clientele Section */}
      <section id="clients" className="section-padding clients-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Strategic Partners</h2>
            <p className="section-subtitle center">Our multi-region experience allows us to serve diverse client needs with precision.</p>
          </div>
          
          <div className="tabs reveal">
            <button className={activeTab === 'Gov' ? 'active' : ''} onClick={() => setActiveTab('Gov')}>Government</button>
            <button className={activeTab === 'Corp' ? 'active' : ''} onClick={() => setActiveTab('Corp')}>Industrial</button>
            <button className={activeTab === 'Int' ? 'active' : ''} onClick={() => setActiveTab('Int')}>International</button>
          </div>

          <div className="tab-content reveal">
            <div className="client-grid">
              {activeTab === 'Gov' && <>
                <ClientCard logo={logoECI} name="Election Commission of India" />
                <ClientCard logo={logoSTPI} name="Software Technology Parks of India" />
                <ClientCard logo={logoIITD} name="IIT Delhi" />
                <ClientCard logo={logoNoida} name="Noida Special Economic Zone" />
                <ClientCard logo={logoASI} name="Archaeological Survey of India" />
              </>}
              {activeTab === 'Corp' && <>
                <ClientCard logo={logoMRF} name="MRF" />
                <ClientCard logo={logoCalderys} name="Calderys" />
                <ClientCard logo={logoASVT} name="ASWT Industries" />
              </>}
              {activeTab === 'Int' && <>
                <ClientCard logo={logoKinyara} name="Kinyara Sugar Limited" />
                <ClientCard logo={logoHoima} name="Hoima Sugar Limited" />
                <ClientCard logo={logoUltimate} name="Ultimate Clean Energies Ltd" />
              </>}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clientele