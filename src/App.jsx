import React, { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css'; // <-- Import your CSS
import StarBackground from './Components/StarBackground'; // Our new star background

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // Handle toggling the mobile menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle click on any nav link
  const handleNavLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    setIsMenuOpen(false); // Close the menu on mobile after clicking a link
  };

  // ScrollReveal effect (runs once on mount)
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true,
    });

    sr.reveal('.home-title');
    sr.reveal('.button', { delay: 200 });
    sr.reveal('.home-img', { delay: 400 });
    sr.reveal('.home-social', { delay: 400 });

    sr.reveal('.about-img');
    sr.reveal('.about-subtitle', { delay: 200 });
    sr.reveal('.about-text', { delay: 400 });

    sr.reveal('.skills-subtitle', { delay: 100 });
    sr.reveal('.skills-text', { delay: 150 });
    sr.reveal('.skills-data', { interval: 200 });
    sr.reveal('.skills-img', { delay: 400 });

    sr.reveal('.work-img', { interval: 200 });

    sr.reveal('.contact-input', { interval: 200 });
  }, []);

  return (
    <>
            <StarBackground />
      {/* HEADER */}
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            {/* <a href="#home" className="nav-logo">
              NextGem
            </a> */}
            <img src={'../public/nextgemBig.png'} width={200} height={100}></img>
          </div>

          {/* Mobile/desktop nav menu */}
          <div
            className={`nav-menu ${isMenuOpen ? 'show' : ''}`}
            id="nav-menu"
          >
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
                  href="#skills"
                  className={`nav-link ${activeLink === '#skills' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('#skills')}
                >
                  Skills
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
          <div
            className="nav-toggle"
            id="nav-toggle"
            onClick={handleToggleMenu}
          >
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="l-main">
        {/* HOME */}
        <section className="home bd-grid" id="home">
          <div className="home-data">
            <h1 className="home-title">
              This is <br /><span className="home-title-color">NextGem</span>
              <br /> 
            </h1>
            <a href="#contact" className="button">
              Contact
            </a>
          </div>

          <div className="home-social">
            <a href="#!" className="home-social-icon">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#!" className="home-social-icon">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#!" className="home-social-icon">
              <i className="bx bxl-github"></i>
            </a>
          </div>

          <div className="home-img">
            <img
              src={'../public/PIXELATED GEM-01.png'}
              alt="NextGem Profile"
            />
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <h2 className="section-title">About</h2>

          <div className="about-container bd-grid">
            <div className="about-img">
              <img
                src="https://i.postimg.cc/NjdgX2sq/about.jpg"
                alt="About"
              />
            </div>

            <div>
              <h2 className="about-subtitle">I'm NextGem</h2>
              <p className="about-text">
                As a passionate web designer, I thrive on creating visually
                appealing and user-friendly websites. My journey in web design
                began with a fascination for how design can enhance user
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills-container bd-grid">
            <div>
              <h2 className="skills-subtitle">Professional Skills</h2>
              <p className="skills-text">
                I love to think outside the box and bring unique ideas to life
                through design, I have proficiency in HTML, CSS, and JavaScript,
                ensuring that my designs are not only beautiful but also
                functional. I prioritize the needs and preferences of users,
                conducting research to understand their behaviors and
                preferences.
              </p>

              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-html5 skills-icon"></i>
                  <span className="skills-name">HTML5</span>
                </div>
                <div>
                  <span className="skills-percentage">95%</span>
                </div>
                <div className="skills-bar skills-html"></div>
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-css3 skills-icon"></i>
                  <span className="skills-name">CSS3</span>
                </div>
                <div>
                  <span className="skills-percentage">85%</span>
                </div>
                <div className="skills-bar skills-css"></div>
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxl-javascript skills-icon"></i>
                  <span className="skills-name">JAVASCRIPT</span>
                </div>
                <div>
                  <span className="skills-percentage">65%</span>
                </div>
                <div className="skills-bar skills-js"></div>
              </div>

              <div className="skills-data">
                <div className="skills-names">
                  <i className="bx bxs-paint skills-icon"></i>
                  <span className="skills-name">UX/UI</span>
                </div>
                <div>
                  <span className="skills-percentage">85%</span>
                </div>
                <div className="skills-bar skills-ux"></div>
              </div>
            </div>

            <div>
              <img
                src="https://i.postimg.cc/52LWbPyt/work3.jpg"
                alt="Skills"
                className="skills-img"
              />
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work section" id="work">
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
        </section>

        {/* CONTACT */}
        <section className="contact section" id="contact">
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
        </section>
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
