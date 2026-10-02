import "./style.css";
import { useEffect, useState } from "react";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaCode,
  FaMobileAlt,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaGraduationCap,
  FaCertificate,
  FaBars,
  FaTimes,
  FaBootstrap,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import profileImage from "./assets/IMG_1927.JPG";

function App() {
  /* ================= ACTIVE SECTION ================= */
  const [activeSection, setActiveSection] = useState("home");
  /* ================= MOBILE MENU STATE ================= */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* ================= HANDLE CONTACT FORM ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    // استخراج البيانات من عناصر النموذج
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    // صياغة نص البريد الإلكتروني
    const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // رابط فتح Gmail مباشرة في المتصفح وتعبئة البيانات تلقائياً
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=basantadel5505@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;

    // فتح صفحة Gmail
    window.open(gmailUrl, "_blank");
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  
  return (
    <div className="portfolio">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          Basant<span>.</span>
        </div>

        {/* زر فتح/إغلاق القائمة للشاشات الصغيرة */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* طبقة خلفية مظللة عند فتح القائمة */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

        {/* روابط التنقل (تتحول لشريط جانبي في الموبايل) */}
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
            onClick={closeMenu}
          >
            Skills
          </a>
          <a
            href="#education"
            className={activeSection === "education" ? "active" : ""}
            onClick={closeMenu}
          >
            Education
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
            onClick={closeMenu}
          >
            Contact
          </a>

          <a href="#contact" className="talk-btn mobile-talk-btn" onClick={closeMenu}>
            Let's Talk <span>↗</span>
          </a>
        </div>

        <a href="#contact" className="talk-btn desktop-talk-btn">
          Let's Talk <span>↗</span>
        </a>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <p className="hello">Hello, I'm</p>

          <h1>
            Basant <span>Adel</span>
          </h1>

          <h2>
            Front-End <strong>Developer</strong>
          </h2>

          <p className="description">
            I create modern, responsive and user-friendly websites using React
            and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work <span>→</span>
            </a>
            <a href="#contact" className="secondary-btn">
              Contact Me <span>↗</span>
            </a>
          </div>

          {/* TECH STACK */}
          <div className="tech-stack">
            <span>Tech Stack</span>
            <b>React</b>
            <b>HTML</b>
            <b>CSS</b>
            <b>JS</b>
          </div>

          {/* SOCIAL */}
          <div className="social-links">
            <span>Find me on</span>

            <a
              href="https://github.com/basant262"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="www.linkedin.com/in/basant-adel-bam5505"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:basantadel5505@email.com"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="hero-visual">
          <div className="glow-circle"></div>

          {/* PROFILE IMAGE */}
          <div className="photo-container">
            <img
              src={profileImage}
              alt="Basant Adel"
              className="profile-image"
            />
          </div>

          {/* CODE CARD */}
          <div className="code-card">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Basant Adel",
  role: "Front-End Developer",
  skills: ["React", "JavaScript",
           "HTML", "CSS"]
};`}
            </pre>
          </div>

          {/* FLOATING ICONS */}
          <div className="floating-icon code-icon">&lt;/&gt;</div>
          <div className="floating-icon js-icon">JS</div>
          <div className="floating-icon react-icon">⚛</div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section about-section" id="about">
        <div className="section-title">
          <span>01</span>
          <div>
            <p>Get To Know Me</p>
            <h2>
              About <strong>Me</strong>
            </h2>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>
              I'm a passionate <span>Front-End Developer.</span>
            </h3>

            <p>
              I’m a Front-End Developer passionate about creating modern,
              responsive, and user-friendly web experiences. I enjoy turning
              ideas into clean and functional websites with a strong focus on
              design, usability, and performance.
            </p>

            <p>
              I work with HTML, CSS, JavaScript, React, Bootstrap, PHP,
              Laravel, and SQL, and I use GitHub to manage my projects. I’m
              always looking for new challenges that help me improve my skills
              and create better digital experiences.
            </p>

            <a href="#contact" className="secondary-btn about-btn">
              Let's Work Together <span>↗</span>
            </a>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <FaCode />
              <h4>Clean Code</h4>
              <p>Writing organized and maintainable code.</p>
            </div>

            <div className="info-card">
              <FaLaptopCode />
              <h4>Modern Design</h4>
              <p>Creating modern and attractive interfaces.</p>
            </div>

            <div className="info-card">
              <FaMobileAlt />
              <h4>Responsive</h4>
              <p>Websites that work perfectly on all screens.</p>
            </div>

            <div className="info-card">
              <FaReact />
              <h4>React</h4>
              <p>Building interactive interfaces with React.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="section skills-section" id="skills">
        <div className="section-title center-title">
          <span>02</span>
          <div>
            <p>What I Work With</p>
            <h2>
              My <strong>Skills</strong>
            </h2>
          </div>
        </div>

        <p className="section-description">
          Technologies and tools I use to build modern and responsive web
          applications.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <FaHtml5 />
            <h3>HTML5</h3>
            <p>Semantic and structured web pages.</p>
          </div>

          <div className="skill-card">
            <FaCss3Alt />
            <h3>CSS3</h3>
            <p>Responsive layouts and modern styling.</p>
          </div>

          <div className="skill-card">
            <FaJs />
            <h3>JavaScript</h3>
            <p>Interactive and dynamic web experiences.</p>
          </div>

          <div className="skill-card">
            <FaReact />
            <h3>React</h3>
            <p>Building reusable UI components.</p>
          </div>

          <div className="skill-card">
            <FaBootstrap />
            <h3>Bootstrap</h3>
            <p>Fast and responsive web layout development</p>
          </div>

          <div className="skill-card">
            <FaGitAlt />
            <h3>Git &amp; GitHub</h3>
            <p>Version control and project management.</p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & COURSES ================= */}
      <section className="section education-section" id="education">
        <div className="section-title center-title">
          <span>03</span>
          <div>
            <p>My Background</p>
            <h2>
              Education &amp; <strong>Courses</strong>
            </h2>
          </div>
        </div>

        <p className="section-description">
          My academic background, certifications, and continuous learning journey.
        </p>

        <div className="about-cards">
          {/* Degree / Education */}
          <div className="info-card">
            <FaGraduationCap />
            <h4>Bachelor's Degree</h4>
            <p>Beni Suef Technological University - BTU / Information Technology Department</p>
            <small style={{ color: "var(--accent-color,#22e879)", marginTop: "10px", display: "block" }}>
              Egyptian-Korean Faculty of Technological Industry and Energy (2023 - 2027)
            </small>
          </div>

          {/* Front-End Track */}
          <div className="info-card">
            <FaCertificate />
            <h4>Front-End Web Development</h4>
            <p>Comprehensive training on HTML5, CSS3, JavaScript .</p>
            <small style={{ color: "var(--accent-color,#22e879)", marginTop: "10px", display: "block" }}>
              Ofline Certification / Traning Center of Computer Science and Information Technology
            </small>
          </div>

          {/* Full-Stack / PHP Track */}
          <div className="info-card">
            <FaCertificate />
            <h4>Full Stack Wep Development using PHP </h4>
            <p>Hands-on course covering Clinte-side Technologies , MySQL , PHP, Laravel .</p>
            <small style={{ color: "var(--accent-color,#22e879)", marginTop: "10px", display: "block" }}>
              Online Certification / ITI - Information Technology Institute
            </small>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="section projects-section" id="projects">
        <div className="section-title">
          <span>04</span>
          <div>
            <p>Some Of My Work</p>
            <h2>
              Featured <strong>Projects</strong>
            </h2>
          </div>
        </div>

        <div className="projects-grid">
          {/* PROJECT 1 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-image-content">
                <FaMobileAlt />
              </div>
            </div>

            <div className="project-content">
              <div className="project-number">01</div>
              <h3>Modern E-Commerce</h3>
              <p>
                A modern responsive e-commerce website with a clean interface
                and interactive components.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/basant262/bosy_store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://basant262.github.io/bosy_store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-image-content">
                <FaLaptopCode />
              </div>
            </div>

            <div className="project-content">
              <div className="project-number">02</div>
              <h3>GenusAI Admin Dashboard</h3>
              <p>
                A modern admin dashboard for GenusAI Academy to manage users,
                courses, notifications, reviews and contact messages.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/basant262"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://basant262.github.io/Dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-image-content">
                <FaCode />
              </div>
            </div>

            <div className="project-content">
              <div className="project-number">03</div>
              <h3>Portfolio Website</h3>
              <p>
                A personal portfolio website showcasing my skills, projects and
                experience.
              </p>

              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/basant262/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://basant262.github.io/portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>

                    {/* PROJECT 4 */}
          <div className="project-card">
            <div className="project-image">
              <div className="project-image-content">
                <FaBootstrap />
              </div>
            </div>

            <div className="project-content">
              <div className="project-number">03</div>
              <h3>Bootstrap Landing Page</h3>
              <p>
               A responsive and modern landing page built using Bootstrap, focusing on clean layout, responsive design, and user-friendly navigation.
              </p>

              <div className="project-tech">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>Bootstrap 5</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/basant262/bootstrap-project/blob/main/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://basant262.github.io/bootstrap-project/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Demo <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section contact-section" id="contact">
        <div className="section-title center-title">
          <span>05</span>
          <div>
            <p>Have A Project In Mind?</p>
            <h2>
              Let's <strong>Talk</strong>
            </h2>
          </div>
        </div>

        <p className="section-description">
          I'm always open to discussing new projects, creative ideas or
          opportunities.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <h3>
              Let's create something <span>amazing together.</span>
            </h3>
            <p>
              Have a project or idea you'd like to discuss? Feel free to reach
              out.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <small>Email</small>
                <a href="mailto:basantadel5505@email.com">
                  basantadel5505@email.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedinIn />
              </div>
              <div>
                <small>LinkedIn</small>
                <a
                  href="https://www.linkedin.com/in/basant-adel-bam5505"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaGithub />
              </div>
              <div>
                <small>GitHub</small>
                <a
                  href="https://github.com/basant262"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form className="contact-form"  onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <input type="text" placeholder="Subject" required />

            <textarea
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-logo">
          Basant<span>.</span>
        </div>

        <p>Designed &amp; Built by Basant Adel</p>

        <div className="footer-social">
          <a
            href="https://github.com/basant262"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/basant-adel-bam5505"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a href="mailto:basantadel5505@email.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;