import React, { useEffect } from 'react'
import projSolar from '../assets/project-solar.png'
import projTransformer from '../assets/project-transformer.png'
import projLines from '../assets/project-lines.png'
import itSolutions from '../assets/it-solutions.png'
import hardwareSupply from '../assets/hardware-supply.png'
import heroBg from '../assets/hero-composite.png'

const ServiceCard = ({ title, desc, link }) => (
  <a href={link} className="service-card reveal">
    <h3>{title}</h3>
    <p>{desc}</p>
    <span className="learn-more">Learn Details →</span>
  </a>
)

const Business = () => {
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
    <div className="business-page">
      {/* Page Header */}
      <section className="page-header" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${heroBg})` }}>
        <div className="container reveal">
          <h1>Business <span className="highlight">Units</span></h1>
          <p>Comprehensive EPC solutions across power, infrastructure, and technology.</p>
        </div>
      </section>

      {/* Business Units Overview */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Overview</h2>
            <p className="section-subtitle center">Triyambake operates through four strategic business verticals.</p>
          </div>
          <div className="services-grid">
            <ServiceCard
              title="Power Transmission & Distribution (T&D) EPC"
              desc="Comprehensive solutions covering the full project lifecycle from feasibility to commissioning."
              link="#power-epc"
            />
            <ServiceCard
              title="Solar EPC Projects (Renewable Energy)"
              desc="Turnkey Solar EPC solutions, delivering projects from concept to commissioning and long-term operation."
              link="#solar-epc"
            />
            <ServiceCard
              title="Operation & Maintenance (O&M) Services"
              desc="Comprehensive O&M services to ensure safe, reliable, and continuous power delivery."
              link="#om-services"
            />
            <ServiceCard
              title="Manufacturer & Exporter"
              desc="T&D Line, Hardware Fittings & Accessories ensuring quality supply chain integration."
              link="#hardware-supply"
            />
          </div>
        </div>
      </section>

      {/* Solar EPC Projects */}
      <section id="solar-epc" className="section-padding solar-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Renewable Energy</span>
              <h2 className="section-title">SOLAR EPC PROJECTS</h2>
              <p>Triyambake provides complete Solar EPC solutions, delivering projects from concept to commissioning and long-term operation.</p>
              
              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Engineering</h4>
                  <ul>
                    <li>Solar irradiation and site assessment</li>
                    <li>Electrical and structural design</li>
                    <li>Technology selection (modules, inverters, structures)</li>
                    <li>Grid evacuation planning</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Procurement</h4>
                  <ul>
                    <li>PV modules, inverters, transformers, SCADA</li>
                    <li>Strategic sourcing and vendor management</li>
                    <li>Timely logistics and delivery</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Construction</h4>
                  <ul>
                    <li>Site preparation and civil works</li>
                    <li>Mounting structure and module installation</li>
                    <li>DC/AC cabling, substations</li>
                    <li>Testing and grid synchronization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detailed-image reveal">
              <img src={projSolar} alt="Solar EPC" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Power T&D EPC */}
      <section id="power-epc" className="section-padding power-detailed">
        <div className="container">
          <div className="detailed-grid reverse">
            <div className="detailed-image reveal">
              <img src={projLines} alt="Power T&D" className="rounded-image" />
            </div>
            <div className="detailed-content reveal">
              <span className="badge">Infrastructure</span>
              <h2 className="section-title">POWER TRANSMISSION & DISTRIBUTION (T&D) EPC</h2>
              <p>Triyambake delivers comprehensive Transmission & Distribution EPC solutions covering the full project lifecycle.</p>

              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Feasibility Study & Planning</h4>
                  <ul>
                    <li>Load forecasting and demand analysis</li>
                    <li>Route surveys and selection</li>
                    <li>Environmental and social impact assessments</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Design & Engineering</h4>
                  <ul>
                    <li>Electrical, civil, and structural design</li>
                    <li>Grid code and utility compliance</li>
                    <li>Detailed drawings and documentation</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Procurement & Construction</h4>
                  <ul>
                    <li>Installation of distribution and power transformers</li>
                    <li>Tower erection, pole installation, stringing</li>
                    <li>Substation construction (AIS / GIS)</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Testing & Commissioning</h4>
                  <ul>
                    <li>System validation and energization</li>
                    <li>Integration with existing grids</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O&M Services */}
      <section id="om-services" className="section-padding om-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Operational Excellence</span>
              <h2 className="section-title">OPERATION & MAINTENANCE (O&M) SERVICES</h2>
              <p>Triyambake offers comprehensive O&M services to ensure safe, reliable, and continuous power delivery.</p>

              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Transmission Lines</h4>
                  <ul>
                    <li>Ground and drone-based inspections</li>
                    <li>Tower condition monitoring</li>
                    <li>Conductor sag and tension adjustment</li>
                    <li>Thermographic scanning and vegetation control</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Substations (AIS / GIS)</h4>
                  <ul>
                    <li>Transformer and breaker maintenance</li>
                    <li>Relay testing and calibration</li>
                    <li>Oil testing, filtration, and SF6 monitoring</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Distribution Networks</h4>
                  <ul>
                    <li>Overhead line and pole inspections</li>
                    <li>Cable fault detection and repair</li>
                    <li>Load balancing and network optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detailed-image reveal">
              <img src={projTransformer} alt="O&M Services" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section id="it-solutions" className="section-padding it-detailed">
        <div className="container">
          <div className="detailed-grid reverse">
            <div className="detailed-image reveal">
              <img src={itSolutions} alt="IT Solutions" className="rounded-image" />
            </div>
            <div className="detailed-content reveal">
              <span className="badge">Digital Transformation</span>
              <h2 className="section-title">IT & IT ENABLED SOLUTIONS</h2>
              <p>Triyambake provides cutting-edge IT solutions designed to optimize business processes and enhance operational efficiency.</p>

              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Enterprise Solutions</h4>
                  <ul>
                    <li>Custom ERP and CRM development</li>
                    <li>Business process automation</li>
                    <li>Digital workflow integration</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Infrastructure & Cloud</h4>
                  <ul>
                    <li>Cloud migration and management</li>
                    <li>Network security and infrastructure</li>
                    <li>Managed IT services and support</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Data & Intelligence</h4>
                  <ul>
                    <li>Data analytics and visualization</li>
                    <li>Business intelligence reporting</li>
                    <li>AI-driven process optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Supply */}
      <section id="hardware-supply" className="section-padding hardware-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Manufacturing</span>
              <h2 className="section-title">T&D LINE HARDWARE, FITTING & ACCESSORIES</h2>
              <p>As a leading manufacturer and exporter, we provide high-precision hardware and fittings for power transmission and distribution lines.</p>

              <div className="expertise-categories">
                <div className="expertise-cat">
                  <h4>Transmission Hardware</h4>
                  <ul>
                    <li>Suspension and tension clamps</li>
                    <li>Vibration dampers and spacers</li>
                    <li>Arcing horns and corona rings</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Distribution Accessories</h4>
                  <ul>
                    <li>Pole top brackets and cross-arms</li>
                    <li>Stay sets and earth rods</li>
                    <li>PG clamps and connector fittings</li>
                  </ul>
                </div>
                <div className="expertise-cat">
                  <h4>Custom Engineering</h4>
                  <ul>
                    <li>Forging and casting solutions</li>
                    <li>Hot-dip galvanizing services</li>
                    <li>Design and testing of prototype fittings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detailed-image reveal">
              <img src={hardwareSupply} alt="Hardware Supply" className="rounded-image" />
            </div>
          </div>
        </div>
      </section>

      {/* HSE Section */}
      <section id="hse" className="section-padding hse-section dark-bg">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge secondary">Our Commitment</span>
            <h2 className="section-title center white-text">HEALTH, SAFETY & ENVIRONMENT (HSE)</h2>
            <p className="section-subtitle center white-text">Our HSE framework is integrated into every stage of project planning and execution.</p>
          </div>

          <div className="hse-grid reveal">
            <div className="hse-card">
              <h3>Safety Commitment</h3>
              <ul>
                <li>Implementation of a Zero Harm Safety Culture</li>
                <li>Mandatory site safety inductions and toolbox talks</li>
                <li>Use of certified Personal Protective Equipment (PPE)</li>
                <li>Electrical safety protocols for high-voltage environments</li>
              </ul>
            </div>
            <div className="hse-card">
              <h3>Environmental Responsibility</h3>
              <ul>
                <li>Environmentally responsible route planning</li>
                <li>Safe disposal and management of industrial waste</li>
                <li>Minimizing environmental impact during installations</li>
              </ul>
            </div>
            <div className="hse-card accent">
              <h3>Compliance</h3>
              <p>Our safety and environmental practices align with national regulations and international best practices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Business