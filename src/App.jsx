import { useEffect, useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import heroBg from './assets/hero-bg.png'
import projSolar from './assets/project-solar.png'
import projTransformer from './assets/project-transformer.png'
import projLines from './assets/project-lines.png'

function App() {
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
    <div className="app">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <span>📧 contact@tiplinfra.com</span>
            <span>📍 Gaya, Bihar | India | Uganda</span>
          </div>
          <div className="top-links">
            <a href="#">Financials</a>
            <a href="#">Media Center</a>
            <a href="#">Careers</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo-container">
            <img src={logo} alt="Triyambake Logo" className="nav-logo" />
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li className="dropdown">
              <a href="#about">About Us</a>
              <div className="dropdown-content">
                <a href="#vision">Mission & Vision</a>
                <a href="#leadership">Management</a>
                <a href="#certifications">Certifications</a>
                <a href="#milestones">Milestones</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#services">Expertise</a>
              <div className="dropdown-content">
                <a href="#solar-epc">Solar EPC Projects</a>
                <a href="#power-epc">Power T&D EPC</a>
                <a href="#om-services">O&M Services</a>
                <a href="#hse">Health & Safety (HSE)</a>
              </div>
            </li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#clients">Clientele</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="cta-button nav-cta">Connect With Us</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${heroBg})` }}>
        <div className="container hero-content reveal">
          <span className="badge">Leading EPC Solutions Provider</span>
          <h1>Empowering Progress Through <span className="highlight">Engineering Excellence</span></h1>
          <p>Triyambake Infra Pvt. Ltd. delivers end-to-end EPC solutions across India and Africa, specializing in power transmission and sustainable infrastructure.</p>
          <div className="hero-actions">
            <a href="#services" className="cta-button primary">Explore Solutions</a>
            <a href="#portfolio" className="cta-button secondary">Our Impact</a>
          </div>
        </div>
      </header>

      {/* Mission & Vision */}
      <section id="vision" className="section-padding vision-section">
        <div className="container reveal">
          <div className="vision-grid">
            <div className="vision-card">
              <div className="icon">🔭</div>
              <h3>Our Vision</h3>
              <p>To contribute to the delivery of sustainable, reliable, and resilient infrastructure solutions that empower communities and support national development.</p>
            </div>
            <div className="vision-card accent">
              <div className="icon">🎯</div>
              <h3>Our Mission</h3>
              <p>To provide end-to-end, integrated EPC solutions by leveraging advanced technologies, skilled human capital, and a deep understanding of power and infrastructure development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section surface-bg">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <h2 className="section-title">Who We Are</h2>
              <p>Triyambake Infra Pvt. Ltd. is an emerging Engineering, Procurement, and Construction (EPC) company operating in the power and infrastructure sector, with a growing footprint across India and Africa.</p>
              <p>Founded and managed by engineers with extensive on-ground execution experience, the company is built on strong technical foundations, disciplined project management, and adaptability to diverse terrains and operating environments.</p>
              <p>From feasibility studies and system design to procurement, construction, commissioning, and long-term operations, Triyambake Infra delivers end-to-end EPC solutions aligned with sustainable development and energy access goals.</p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">MW Solar Installed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Km Transmission</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Regions Served</span>
                </div>
              </div>
            </div>
            <div className="about-image reveal">
              <div className="image-card">
                <img src={heroBg} alt="Infrastructure" />
                <div className="experience-badge">Engineers at Core</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section id="leadership" className="section-padding leadership-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Management Team</h2>
            <p className="section-subtitle center">Led by engineers with extensive on-ground execution experience.</p>
          </div>
          <div className="leadership-content reveal">
            <div className="leadership-main">
              <p>Triyambake Infra Pvt. Ltd. is led by a team of experienced professionals with strong backgrounds in power transmission, renewable energy, EPC project execution, and international infrastructure development.</p>
              <p>The leadership team brings together engineering expertise, project management discipline, and cross-border execution experience, enabling the company to deliver complex infrastructure projects across diverse terrains and regulatory environments.</p>
            </div>

            <div className="management-grid">
              <div className="management-strengths-card reveal">
                <h3>Our Management Strengths</h3>
                <ul className="strength-list">
                  <li><span>Extensive experience in Transmission & Distribution (T&D) projects</span></li>
                  <li><span>Hands-on leadership in Solar EPC and Renewable Energy execution</span></li>
                  <li><span>Proven track record in international project delivery (Africa region)</span></li>
                  <li><span>Strong capabilities in engineering, procurement strategy, and site execution</span></li>
                  <li><span>Commitment to quality, safety, and long-term client partnerships</span></li>
                </ul>
              </div>
              <div className="management-focus reveal">
                <div className="focus-item">
                  <h4>Precision & Accountability</h4>
                  <p>The management team is actively involved in technical planning, execution oversight, and risk management.</p>
                </div>
                <div className="focus-item">
                  <h4>Quality Assurance</h4>
                  <p>Every project is delivered with meticulous attention to detail and rigorous quality standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding certifications-section surface-bg">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge">Quality Assurance</span>
            <h2 className="section-title center">Compliance & Certifications</h2>
            <p className="section-subtitle center">Triyambake Infra is committed to maintaining the highest international standards in quality, safety, and environmental management.</p>
          </div>

          <div className="cert-grid reveal">
            <CertCard title="ISO 9001:2015" subtitle="Quality Management Systems" desc="Certified for Engineering, Procurement, and Construction (EPC) of electrical power projects, solar energy, and infrastructure." />
            <CertCard title="ISO 14001:2015" subtitle="Environmental Management Systems" desc="Commitment to minimizing environmental impact and promoting sustainable engineering practices across all operations." />
            <CertCard title="ISO 45001:2018" subtitle="Health & Safety Management" desc="Adherence to rigorous occupational health and safety protocols to ensure a 'Zero Harm' environment for our workforce." />
            <CertCard title="Startup India" subtitle="DIPP Recognition" desc="Recognized as a startup by the Department for Promotion of Industry and Internal Trade, Ministry of Commerce & Industry." />
            <CertCard title="MSME UDYAM" subtitle="Ministry of MSME" desc="Registered under the Ministry of Micro, Small and Medium Enterprises, supporting national industrial growth." />
            <CertCard title="IEC Code" subtitle="Importer-Exporter Code" desc="Registered with the Directorate General of Foreign Trade for international trade and cross-border project execution." />
          </div>
        </div>
      </section>

      {/* Expertise & Resources */}
      <section id="expertise" className="section-padding expertise-section surface-bg">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Expertise & Resources</h2>
            <p className="section-subtitle center">The foundation of our operational excellence.</p>
          </div>
          <div className="resources-grid">
            <ResourceCard icon="👷" title="People" desc="Highly experienced talent pool of experts in project management, design, and execution." />
            <ResourceCard icon="🤖" title="Technology" desc="Digitalisation, drones for monitoring, and advanced geospatial technologies." />
            <ResourceCard icon="⛓️" title="Supply Chain" desc="Strategic relationships with world-class vendors integrated into our lifecycle." />
          </div>
        </div>
      </section>

      {/* Business Units Overview (Image 5) */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Business Units</h2>
            <p className="section-subtitle center">Triyambake Infra operates through four strategic business verticals.</p>
          </div>
          <div className="business-units-intro reveal">
            <p>Each business unit is supported by in-house engineering, procurement, quality control, and project management teams, ensuring seamless coordination and execution.</p>
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
              link="#supply"
            />
          </div>
        </div>
      </section>

      {/* Solar EPC Projects (Image 1) */}
      <section id="solar-epc" className="section-padding solar-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Renewable Energy</span>
              <h2 className="section-title">SOLAR EPC PROJECTS</h2>
              <p>Triyambake Infra provides complete Solar EPC solutions, delivering projects from concept to commissioning and long-term operation.</p>
              <p>Solar power enhances energy economics while reducing environmental impact, and our technical expertise ensures optimized plant performance.</p>

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

      {/* Power T&D EPC (Image 3) */}
      <section id="power-epc" className="section-padding power-detailed">
        <div className="container">
          <div className="detailed-grid reverse">
            <div className="detailed-image reveal">
              <img src={projLines} alt="Power T&D" className="rounded-image" />
            </div>
            <div className="detailed-content reveal">
              <span className="badge">Infrastructure</span>
              <h2 className="section-title">POWER TRANSMISSION & DISTRIBUTION (T&D) EPC</h2>
              <p>Triyambake Infra delivers comprehensive Transmission & Distribution EPC solutions covering the full project lifecycle.</p>

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

      {/* O&M Services (Image 4) */}
      <section id="om-services" className="section-padding om-detailed surface-bg">
        <div className="container">
          <div className="detailed-grid">
            <div className="detailed-content reveal">
              <span className="badge">Operational Excellence</span>
              <h2 className="section-title">OPERATION & MAINTENANCE (O&M) SERVICES</h2>
              <p>Triyambake Infra offers comprehensive O&M services to ensure safe, reliable, and continuous power delivery.</p>

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

      {/* HSE Section (Image 2) */}
      <section id="hse" className="section-padding hse-section dark-bg">
        <div className="container">
          <div className="section-header reveal">
            <span className="badge secondary">Our Commitment</span>
            <h2 className="section-title center white-text">HEALTH, SAFETY & ENVIRONMENT (HSE)</h2>
            <p className="section-subtitle center white-text">Our HSE framework is integrated into every stage of project planning and execution.</p>
          </div>

          <div className="hse-intro reveal white-text">
            <p>Triyambake Infra Pvt. Ltd. maintains a strong commitment to health, safety, and environmental protection across all project sites and operations.</p>
          </div>

          <div className="hse-grid reveal">
            <div className="hse-card">
              <h3>Safety Commitment</h3>
              <ul>
                <li>Implementation of a Zero Harm Safety Culture</li>
                <li>Mandatory site safety inductions and toolbox talks</li>
                <li>Use of certified Personal Protective Equipment (PPE)</li>
                <li>Electrical safety protocols for live-line and high-voltage environments</li>
                <li>Strict adherence to work-at-height and lifting safety procedures</li>
              </ul>
            </div>
            <div className="hse-card">
              <h3>Environmental Responsibility</h3>
              <ul>
                <li>Environmentally responsible route planning and land use practices</li>
                <li>Safe disposal and management of industrial and electrical waste</li>
                <li>Minimizing environmental impact during solar and transmission installations</li>
              </ul>
            </div>
            <div className="hse-card accent">
              <h3>Compliance</h3>
              <p>Our safety and environmental practices align with national regulations and international best practices, ensuring safe working conditions for personnel and minimal impact on surrounding communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section-padding portfolio-section surface-bg">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Project Portfolio</h2>
            <p className="section-subtitle center">Showcasing our global footprint and technical impact.</p>
          </div>
          <div className="portfolio-grid">
            <PortfolioItem img={projSolar} title="50MW Solar Plant" loc="India" />
            <PortfolioItem img={projTransformer} title="132kV Substation" loc="Uganda" />
            <PortfolioItem img={projLines} title="Rural Electrification" loc="Eastern Africa" />
          </div>
        </div>
      </section>

      {/* Clientele */}
      <section id="clients" className="section-padding clients-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Our Clientele</h2>
            <p className="section-subtitle center">Trusted by leading government and industrial bodies.</p>
          </div>
          <div className="tabs reveal">
            <button className={activeTab === 'Gov' ? 'active' : ''} onClick={() => setActiveTab('Gov')}>Government</button>
            <button className={activeTab === 'Corp' ? 'active' : ''} onClick={() => setActiveTab('Corp')}>Industrial</button>
            <button className={activeTab === 'Int' ? 'active' : ''} onClick={() => setActiveTab('Int')}>International</button>
          </div>
          <div className="tab-content reveal">
            <ul className="client-list">
              {activeTab === 'Gov' && <>
                <li>Election Commission of India</li>
                <li>Software Technology Parks of India</li>
                <li>IIT Delhi</li>
                <li>Noida Special Economic Zone</li>
                <li>Archaeological Survey of India</li>
              </>}
              {activeTab === 'Corp' && <>
                <li>MRF</li>
                <li>Calderys</li>
                <li>ASWT Industries</li>
              </>}
              {activeTab === 'Int' && <>
                <li>Kinyara Sugar Limited</li>
                <li>Hoima Sugar Limited</li>
                <li>Nile Infratech Limited</li>
              </>}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logo} alt="Logo" className="footer-logo" />
              <p className="footer-tagline">Simple Impartial... Build the difference!</p>
              <div className="footer-socials">
                <a href="#" className="social-icon">IN</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">FB</a>
              </div>
            </div>
            <div className="footer-links-group">
              <h4>Corporate</h4>
              <ul>
                <li><a href="#about">About Triyambake</a></li>
                <li><a href="#vision">Mission & Vision</a></li>
                <li><a href="#leadership">Management</a></li>
                <li><a href="#clients">Clientele</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <h4>Expertise</h4>
              <ul>
                <li><a href="#solar-epc">Solar EPC Projects</a></li>
                <li><a href="#power-epc">Power T&D EPC</a></li>
                <li><a href="#om-services">O&M Services</a></li>
                <li><a href="#hse">Safety & Environment</a></li>
              </ul>
            </div>
            <div className="footer-contact-info">
              <h4>Get In Touch</h4>
              <p>📧 contact@tiplinfra.com</p>
              <p>🌐 www.triyambake.com</p>
              <p className="presence">India | Uganda | Eastern Africa</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; {new Date().getFullYear()} Triyambake Infrastructure Private Limited.</p>
              <div className="legal-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

const ServiceCard = ({ title, desc, link }) => (
  <a href={link} className="service-card reveal">
    <h3>{title}</h3>
    <p>{desc}</p>
    <span className="learn-more">Learn Details →</span>
  </a>
)

const ResourceCard = ({ icon, title, desc }) => (
  <div className="resource-card reveal">
    <div className="res-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
)

const PortfolioItem = ({ img, title, loc }) => (
  <div className="portfolio-item reveal">
    <img src={img} alt={title} />
    <div className="portfolio-overlay">
      <span>{loc}</span>
      <h3>{title}</h3>
    </div>
  </div>
)

const CertCard = ({ title, subtitle, desc }) => (
  <div className="cert-card reveal">
    <div className="cert-icon">📜</div>
    <div className="cert-info">
      <h3>{title}</h3>
      <span className="cert-subtitle">{subtitle}</span>
      <p>{desc}</p>
    </div>
  </div>
)

export default App
