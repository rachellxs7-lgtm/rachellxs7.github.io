import { useMemo, useState } from 'react';
import TextType from './components/text_type';

const pages = [
  { id: 'home', index: '001', label: 'Home' },
  { id: 'about', index: '002', label: 'About' },
  { id: 'works', index: '003', label: 'Works' },
  { id: 'contact', index: '004', label: 'Contact' },
];

const skills = [
  'LLM Agents / MCP & Tools',
  'RAG / Retrieval Design',
  'PRD / Evaluation Frameworks',
  'Domain / Tax & Accounting',
];

const projects = [
  {
    title: 'Financial-Tax Intelligent Agent Platform',
    description: 'Multi-agent architecture with RAG, planner, and MCP tools across 20 intents',
    year: '2026',
  },
  {
    title: 'Tax Benefit Matching Engine',
    description: 'Unified MATCH API matching enterprises to 25 tax incentive policies',
    year: '2026',
  },
  {
    title: 'Tax Compliance Reporting Platform',
    description: 'Embedded compliance module for accounting firms and enterprise finance',
    year: '2025',
  },
  {
    title: 'RAG Knowledge Pipeline',
    description: 'Document parsing, chunking, review, and vectorization workflow',
    year: '2025',
  },
  {
    title: 'Tax Filing Assistant',
    description: 'Structured filing rules: deadlines, frequencies, and holiday deferral logic',
    year: '2024',
  },
];

const contacts = [
  ['Wechat', 'rachel_design'],
  ['Github', 'github.com/racheldesigns'],
  ['Email', 'hello@rachel.design'],
];

function App() {
  const [activePage, setActivePage] = useState('about');

  const currentPage = useMemo(
    () => pages.find((page) => page.id === activePage) ?? pages[1],
    [activePage],
  );

  return (
    <div className="site-shell">
      <TopNav activePage={activePage} onNavigate={setActivePage} />
      <main className="page-shell">
        {activePage === 'home' && <HomePage onNavigate={setActivePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'works' && <WorksPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>
      <Footer currentPage={currentPage} />
    </div>
  );
}

function TopNav({ activePage, onNavigate }) {
  return (
    <nav className="top-nav">
      <button className="brand" type="button" onClick={() => onNavigate('home')}>
        [R] PORTFOLIO / 2026
      </button>
      <div className="nav-links" aria-label="Primary navigation">
        {pages.map((page) => (
          <button
            className={`nav-link ${activePage === page.id ? 'is-active' : ''}`}
            key={page.id}
            type="button"
            onClick={() => onNavigate(page.id)}
          >
            {page.index} {page.label}
          </button>
        ))}
      </div>
      <button className="menu-button" type="button">
        Menu
      </button>
    </nav>
  );
}

function HeaderStrip({ eyebrow, meta }) {
  return (
    <header className="header-strip">
      <span>{eyebrow}</span>
      <span>{meta}</span>
    </header>
  );
}

function HomePage({ onNavigate }) {
  return (
    <section className="home-page">
      <HeaderStrip eyebrow="-> Index / 001 - Home" meta="Portfolio system" />
      <div className="home-grid">
        <div className="hero-block">
          <p className="label">// 00 SYSTEM</p>
          <TextType
            as="h1"
            className="typing-hero"
            text="hi this is rachel"
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
        </div>
        <div className="home-actions">
          {pages.slice(1).map((page) => (
            <button className="table-row" key={page.id} type="button" onClick={() => onNavigate(page.id)}>
              <span>{page.index}</span>
              <strong>{page.label}</strong>
              <span>Open</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <>
      <HeaderStrip eyebrow="-> File / 002 - About" meta="Last updated 2026.05" />
      <section className="hero hero-centered">
        <h1>About.</h1>
      </section>
      <section className="about-grid">
        <aside className="about-aside">
          <InfoBlock title="// 01 Bio">
            Senior AI product manager. Building agent platforms for financial-tax SaaS. Former KPMG
            auditor. Hangzhou.
          </InfoBlock>
          <InfoBlock title="// 02 Focus">
            LLM Agent Architecture.
            <br />
            Intent Classification & RAG.
            <br />
            Tax Domain Modeling.
          </InfoBlock>
          <InfoBlock title="// 03 Status">
            <span className="status-tag">[ Status: Accepting contracts ]</span>
          </InfoBlock>
        </aside>
        <section className="about-content">
          <p>
            I design AI products that refuse to flatten domain complexity. My work sits at the
            intersection of large language models and regulatory expertise - turning the
            footnote-heavy reality of tax and accounting into systems finance teams can trust at the
            line-item level.
          </p>
          <p>
            Currently leading the design of a multi-agent platform for tax intelligence, where
            retrieval, planning, and tool-calling must coexist with auditable accuracy. Before
            product, I spent years in audit at KPMG - which is where I first learned that trust in a
            system is built one footnote at a time.
          </p>
          <div className="skill-list">
            {skills.map((skill, index) => (
              <div className="indexed-row" key={skill}>
                <span>{String(index + 1).padStart(3, '0')}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

function WorksPage() {
  return (
    <>
      <HeaderStrip eyebrow="-> Index / 003 - Works" meta="5 projects - 2024-2026" />
      <section className="hero hero-left">
        <h1>Selected / Works.</h1>
      </section>
      <section className="project-list">
        {projects.map((project, index) => (
          <article className="project-row" key={project.title}>
            <div className="project-main">
              <span>{String(index + 1).padStart(3, '0')}</span>
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-meta">
              <span>{project.year}</span>
              <span aria-hidden="true">-&gt;</span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <HeaderStrip eyebrow="-> File / 004 - Contact" meta="Response time ~24h" />
      <section className="contact-hero">
        <h1>
          Let's
          <br />
          talk.
        </h1>
      </section>
      <section className="contact-list">
        {contacts.map(([label, value]) => (
          <a className="contact-row" href="#" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </section>
    </>
  );
}

function InfoBlock({ title, children }) {
  return (
    <div className="info-block">
      <span className="label">{title}</span>
      <p>{children}</p>
    </div>
  );
}

function Footer({ currentPage }) {
  return (
    <footer className="footer">
      <span>(C) 2026 RACHEL</span>
      <span>
        V1.0 - LIGHT - {currentPage.index} {currentPage.label}
      </span>
    </footer>
  );
}

export default App;
