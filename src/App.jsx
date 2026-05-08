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
                <a href="#milestones">Milestones</a>
              </div>
            </li>
            <li className="dropdown">
              <a href="#services">Expertise</a>
              <div className="dropdown-content">
                <a href="#solar">Solar EPC</a>
                <a href="#power">Power T&D</a>
                <a href="#metering">Metering</a>
                <a href="#supply">Supply & Trading</a>
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

      {/* Business Units */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header reveal">
            <h2 className="section-title center">Business Units</h2>
            <p className="section-subtitle center">Providing integrated solutions across the power spectrum.</p>
          </div>
          <div className="services-grid">
            <ServiceCard title="Solar EPC" desc="Turnkey solutions for grid-scale solar parks and industrial rooftops." />
            <ServiceCard title="Power T&D" desc="Building resilient transmission grids and high-voltage substations." />
            <ServiceCard title="Metering & Energy" desc="Advanced energy monitoring and audits for industrial efficiency." />
            <ServiceCard title="Civil Infra" desc="Critical civil engineering for substations and power plants." />
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
              <p>Simple Impartial... Build the difference!</p>
              <p className="presence">India | Uganda | Eastern Africa</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Expertise</a></li>
                <li><a href="#portfolio">Projects</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Connect</h4>
              <p>📧 contact@tiplinfra.com</p>
              <p>🌐 www.triyambake.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Triyambake Infrastructure Private Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const ServiceCard = ({ title, desc }) => (
  <div className="service-card reveal">
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
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

export default App
