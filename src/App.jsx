import './App.css';

const navItems = ['About', 'Skills', 'Projects', 'Certificate', 'Contact'];

const email = 'kunalsinghkushwah779@gmail.com';

const socials = [
  {
    label: 'Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=kunalsinghkushwah779@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kunalsinghkushwah',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kunal-singh-kushwah/',
  },
];

const stats = [
  ['4th Year', 'B.Tech student'],
  ['IT', 'Information Technology'],
  ['Full Stack', 'Web development'],
  ['DSA', 'Problem solving'],
];

const skills = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
  },
  {
    title: 'Backend',
    items: ['NodeJS', 'ExpressJS', 'REST APIs'],
  },
  {
    title: 'Databases',
    items: ['MongoDB', 'SQL', 'Data Modeling'],
  },
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'Computer Science',
    items: ['Data Structures', 'Algorithms', 'Problem Solving'],
  },
];

const projects = [
  {
    title: 'EventFlow',
    type: 'Event Booking Platform',
    href: 'https://eventflow-frontend-sooty.vercel.app',
    summary:
      'A modern event booking experience for discovering events, viewing details, and moving users through a smooth booking flow.',
    stack: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB'],
    image: '/projects/eventflow-home.png',
    imageAlt: 'EventFlow home page with a dark event booking hero section',
  },

  {
  title: 'Currency Converter',
  type: 'Real-Time Currency Exchange App',
  href: 'https://currency-exchange-five-rho.vercel.app/',
  summary:
    'A responsive currency converter built using HTML, CSS, and JavaScript that fetches real-time exchange rates using API integration.',
  stack: ['HTML', 'CSS', 'JavaScript', 'API'],
  image: '/projects/currency-converter.png',
  imageAlt: 'Currency Converter web application interface',
  },
];

const certificate = {
  title: 'Delta - Full Stack Web Development',
  issuer: 'Apna College',
  recipient: 'Kunal Singh Kushwah',
  credentialId: '688ceec295a52e350c0b0bd6',
  href: '/certificates/full-stack-development-certificate.pdf',
};

function App() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <div className="container top-nav__inner">
          <a className="brand" href="#top" aria-label="Kunal Singh Kushwah portfolio home">
            <span className="brand__mark">KS</span>
            <span>Kunal Singh Kushwah</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a className="button button--primary nav-cta" href="#contact">
            Connect
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open menu">
              <span />
              <span />
              <span />
            </summary>
            <div className="mobile-menu__panel">
              {navItems.map((item) => (
                <a href={`#${item.toLowerCase()}`} key={item}>
                  {item}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">4th Year B.Tech Information Technology Student</p>
              <h1>Kunal Singh Kushwah</h1>
              <p className="hero-lede">
                Full-stack developer with a strong frontend foundation, practical backend skills,
                and command over Java, Python, Data Structures, and Algorithms.
              </p>

              <div className="signal-row" aria-label="Current focus">
                <span>Building React interfaces</span>
                <span>Designing APIs</span>
                <span>Solving DSA problems</span>
              </div>

              <div className="button-row">
                <a className="button button--primary" href="#projects">
                  View projects
                </a>
                {socials.map((social) => (
                  <a
                    className="button button--secondary"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="stat-grid" aria-label="Profile highlights">
                {stats.map(([value, label]) => (
                  <div className="stat-card" key={value}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="profile-panel" aria-label="Developer profile summary">
              <div className="profile-card">
                <div className="profile-avatar">KS</div>
                <div>
                  <h2>Frontend-focused full-stack developer</h2>
                  <p>
                    Building clean interfaces, backend APIs, and database-backed products with a
                    problem-solving mindset.
                  </p>
                </div>
                <div className="profile-card__tags" aria-label="Core strengths">
                  <span>ReactJS</span>
                  <span>NodeJS</span>
                  <span>MongoDB</span>
                </div>
              </div>

              <div className="code-card" aria-label="Developer stack preview">
                <div className="code-card__topbar">
                  <span />
                  <span />
                  <span />
                  <p>portfolio.js</p>
                </div>
                <pre>
                  <code>{`const kunal = {
  role: "IT Student",
  focus: ["ReactJS", "NodeJS", "DSA"],
  languages: ["Java", "Python"],
  building: "Useful web products"
};`}</code>
                </pre>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section--soft" id="about">
          <div className="container about-grid">
            <div className="section-heading section-heading--left">
              <p className="eyebrow">About</p>
              <h2>A developer who connects clean UI with reliable logic.</h2>
            </div>
            <div className="about-copy">
              <p>
                Kunal is a 4th Year B.Tech Information Technology student focused on building
                practical full-stack web applications. His strengths include frontend development
                with ReactJS, backend development with NodeJS and ExpressJS, and working with both
                MongoDB and SQL databases.
              </p>
              <p>
                Alongside web development, he has strong command over Java and Python, with a solid
                understanding of Data Structures and Algorithms for writing efficient solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading section-heading--spotlight">
              <p className="eyebrow">Technical toolkit</p>
              <h2>Skills</h2>
              <p>
                A focused stack for building responsive interfaces, APIs, databases, and
                algorithmic solutions.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-card__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <div className="chip-list">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--soft" id="projects">
          <div className="container">
            <div className="section-heading section-heading--spotlight">
              <p className="eyebrow">Selected work</p>
              <h2>Projects</h2>
              <p>Two deployed projects that show product thinking, UI execution, and full-stack fundamentals.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-browser">
                    <div className="project-browser__bar" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                      <small>{project.title}.live</small>
                    </div>
                    <div className="project-visual">
                      <img src={project.image} alt={project.imageAlt} />
                    </div>
                  </div>
                  <div className="project-card__body">
                    <p className="project-type">{project.type}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <div className="chip-list">
                      {project.stack.map((item) => (
                        <span className="chip chip--light" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <a className="button button--primary" href={project.href} rel="noreferrer" target="_blank">
                      Open project
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="certificate">
          <div className="container certificate-grid">
            <div className="certificate-copy">
              <p className="eyebrow">Certificate</p>
              <h2>Full Stack Web Development Certificate</h2>
              <p>
                Completed the Delta Full Stack Web Development course from Apna College, covering
                modern web development foundations and project-based learning.
              </p>

              <dl className="credential-list">
                <div>
                  <dt>Recipient</dt>
                  <dd>{certificate.recipient}</dd>
                </div>
                <div>
                  <dt>Issuer</dt>
                  <dd>{certificate.issuer}</dd>
                </div>
                <div>
                  <dt>Course</dt>
                  <dd>{certificate.title}</dd>
                </div>
                <div>
                  <dt>Credential ID</dt>
                  <dd>{certificate.credentialId}</dd>
                </div>
              </dl>

              <a className="button button--primary" href={certificate.href} rel="noreferrer" target="_blank">
                View certificate
              </a>
            </div>

            <div className="certificate-preview" aria-label="Certificate PDF preview">
              <object data={certificate.href} title="Full Stack Web Development Certificate" type="application/pdf">
                <a href={certificate.href}>Open Full Stack Web Development certificate</a>
              </object>
            </div>
          </div>
        </section>

        <section className="section section--cta" id="contact">
          <div className="container">
            <div className="cta-band">
              <p className="eyebrow">Contact</p>
              <h2>Open to internships, projects, and collaboration.</h2>
              <p>
                The fastest way to connect with Kunal is through Gmail, GitHub, or LinkedIn.
              </p>
              <a className="contact-email" href={`mailto:${email}`}>
                {email}
              </a>
              <div className="button-row button-row--center">
                {socials.map((social) => (
                  <a
                    className={social.label === 'Gmail' ? 'button button--primary' : 'button button--secondary'}
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="brand brand--dark" href="#top" aria-label="Kunal Singh Kushwah portfolio home">
            <span className="brand__mark">KS</span>
            <span>Kunal Singh Kushwah</span>
          </a>
          <p>4th Year B.Tech IT Student | Full Stack Developer | Java | Python | DSA</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
