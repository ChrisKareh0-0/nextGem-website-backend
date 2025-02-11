import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css'; // <-- Import your CSS
import StarBackground from './Components/StarBackground'; // Our new star background
import ClientsCarousel from './Components/ClientsCarousel';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle nav link click
  const handleNavLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  // ScrollReveal effect (runs once on mount)
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.home-title', {delay: 200});
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home-img', { delay: 400 });
    sr.reveal('.home-social', { delay: 400 });

    sr.reveal('.about-img');
    sr.reveal('.about-subtitle', { delay: 200 });
    sr.reveal('.about-text', { delay: 400 });

    sr.reveal('.Services-subtitle', { delay: 100 });
    sr.reveal('.Services-text', { delay: 150 });
    sr.reveal('.Services-data', { interval: 200 });
    sr.reveal('.Services-img', { delay: 400 });

    sr.reveal('.work-img', { interval: 200 });
    sr.reveal('.contact-input', { interval: 200 });
  }, []);

  // Common SVG style as an object (camelCased properties)
  const svgStyle = {
    shapeRendering: 'geometricPrecision',
    textRendering: 'geometricPrecision',
    imageRendering: 'optimizeQuality',
    fillRule: 'evenodd',
    clipRule: 'evenodd'
  };

  return (
    <>
      <StarBackground />
      {/* HEADER */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            {/* You can uncomment the below line if you prefer a text logo */}
            {/* <a href="#home" className="nav-logo">NextGem</a> */}
            <img
              src={'../public/NEXTGEM LOGO 1-05.png'}
              width={200}
              height={100}
              alt="NextGem Logo"
            />
          </div>

          {/* Mobile/desktop nav menu */}
          <div className={`nav-menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
            <ul className="nav-list">
              <li className="nav-item">
                <a
                  href="#home"
                  className={`nav-link ${activeLink === '#home' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('#home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#about"
                  className={`nav-link ${activeLink === '#about' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('#about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Services"
                  className={`nav-link ${activeLink === '#Services' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('#Services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#work"
                  className={`nav-link ${activeLink === '#work' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('#work')}
                >
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#contact"
                  className={`nav-link ${activeLink === '#contact' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('#contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile nav toggle button */}
          <div className="nav-toggle" id="nav-toggle" onClick={handleToggleMenu}>
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="l-main">
        {/* HOME SECTION */}
        <section className="home bd-grid" id="home">
          <div className="home-data">
            <h1 className="home-title">
              This is <br />
              <span className="home-title-color">NextGem</span>
              <br />
            </h1>
            {/* Example button with star SVGs */}
            <button className='contactButton'>
              Contact
              <div className="star-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={svgStyle}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={svgStyle}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={svgStyle}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={svgStyle}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={svgStyle}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={svgStyle}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs></defs>
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer"></metadata>
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>

          <div className="home-social">
            <a href="#!" className="home-social-icon">
              <i className="bx bxl-tiktok"></i>
            </a>
            <a href="#!" className="home-social-icon">
              <i className="bx bxl-instagram"></i>
            </a>
            {/* <a href="#!" className="home-social-icon">
              <i className="bx bxl-github"></i>
            </a> */}
          </div>

          <div className="home-img">
            <img
              src={'../public/IMG_0560.png'}
              alt="NextGem Profile"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about-container bd-grid">
            <div className="about-img">
              <img
                src="../public/play.png"
                alt="About"
              />
            </div>
            <div>
              <h2 className="about-subtitle">
              
              At NextGem , we specialize in branding, social media marketing, content creation, and digital strategies for all businesses. With expertise in brand positioning and digital storytelling, we help businesses build credibility, generate leads, and convert online engagement into real sales.
              </h2>
            </div>
          </div>
        </section>

        {/* Services SECTION */}
        <section className="Services section" id="Services">
          <h2 className="section-title">Services</h2>
          <div className="Services-container bd-grid">
            <div>
              <h2 className="Services-subtitle">Professional Services</h2>
              <p className="Services-text">
                I love to think outside the box and bring unique ideas to life through design. I have proficiency in HTML, CSS, and JavaScript,
                ensuring that my designs are not only beautiful but also functional. I prioritize the needs and preferences of users,
                conducting research to understand their behaviors and preferences.
              </p>
              <div className="Services-data">
                <div className="Services-names">
                  <i className="bx bxl-html5 Services-icon"></i>
                  <span className="Services-name">HTML5</span>
                </div>
                <div>
                  <span className="Services-percentage">95%</span>
                </div>
                <div className="Services-bar Services-html"></div>
              </div>
              <div className="Services-data">
                <div className="Services-names">
                  <i className="bx bxl-css3 Services-icon"></i>
                  <span className="Services-name">CSS3</span>
                </div>
                <div>
                  <span className="Services-percentage">85%</span>
                </div>
                <div className="Services-bar Services-css"></div>
              </div>
              <div className="Services-data">
                <div className="Services-names">
                  <i className="bx bxl-javascript Services-icon"></i>
                  <span className="Services-name">JAVASCRIPT</span>
                </div>
                <div>
                  <span className="Services-percentage">65%</span>
                </div>
                <div className="Services-bar Services-js"></div>
              </div>
              <div className="Services-data">
                <div className="Services-names">
                  <i className="bx bxs-paint Services-icon"></i>
                  <span className="Services-name">UX/UI</span>
                </div>
                <div>
                  <span className="Services-percentage">85%</span>
                </div>
                <div className="Services-bar Services-ux"></div>
              </div>
            </div>
            <div>
              <img
                src="https://i.postimg.cc/52LWbPyt/work3.jpg"
                alt="Services"
                className="Services-img"
              />
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        {/* <section className="work section" id="work">
          <h2 className="section-title">Work</h2>
          <div className="work-container bd-grid">
            <div className="work-img">
              <img
                src="https://i.postimg.cc/NM0n9bsm/work1.jpg"
                alt="Work 1"
              />
            </div>
            <div className="work-img">
              <img
                src="https://i.postimg.cc/tJZmDTVg/work2.jpg"
                alt="Work 2"
              />
            </div>
            <div className="work-img">
              <img
                src="https://i.postimg.cc/52LWbPyt/work3.jpg"
                alt="Work 3"
              />
            </div>
            <div className="work-img">
              <img
                src="https://i.postimg.cc/fW1wsSCB/work4.jpg"
                alt="Work 4"
              />
            </div>
            <div className="work-img">
              <img
                src="https://i.postimg.cc/m2MTgZ6R/work5.jpg"
                alt="Work 5"
              />
            </div>
            <div className="work-img">
              <img
                src="https://i.postimg.cc/Qd3h9LR7/work6.jpg"
                alt="Work 6"
              />
            </div>
          </div>
        </section> */}
        <ClientsCarousel />

        {/* CONTACT SECTION */}
        {/* <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-container bd-grid">
            <form action="" className="contact-form">
              <input
                type="text"
                placeholder="Name"
                className="contact-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="contact-input"
              />
              <textarea
                cols="0"
                rows="10"
                className="contact-input"
                placeholder="Message"
              ></textarea>
              <input
                type="button"
                value="Send"
                className="contact-button button"
              />
            </form>
          </div>
        </section> */}
        <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : creative@nextgem.agency</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Phone Number"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p className="footer-title">NextGem</p>
        <div className="footer-social">
          <a href="#!" className="footer-icon">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="#!" className="footer-icon">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="#!" className="footer-icon">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <p>&#169; 2024 Copyright all rights reserved</p>
      </footer>
    </>
  );
}

export default App;
