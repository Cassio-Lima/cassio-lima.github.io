// Nav + Footer — site chrome
const { useState } = React;

function Nav({ active, onNav }) {
  const links = [
    { id: 'home', label: 'Work' },
    { id: 'papers', label: 'Papers' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav className="nav">
      <a className="nav-brand" href="#home" onClick={(e) => { e.preventDefault(); onNav('home'); }}>
        <BrandMark size={26}/>
        <div className="nav-brand-text">
          <span className="nav-name">Cássio Lima</span>
          <span className="nav-tag">DATA · R&amp;D · BIOINFORMATICS</span>
        </div>
      </a>
      <div className="nav-links">
        {links.map(l => (
          <a key={l.id}
             className={'nav-link' + (active === l.id ? ' active' : '')}
             href={'#' + l.id}
             onClick={(e) => { e.preventDefault(); onNav(l.id); }}>
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-meta">
        <span className="status-dot"/>
        <Mono>BREDA · NL</Mono>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <BrandMark size={22}/>
            <span>Cássio Lima</span>
          </div>
          <p className="footer-blurb">Data scientist · PhD in plant biotechnology. Reproducible pipelines for omics and environmental data.</p>
        </div>
        <div>
          <MicroLabel>ELSEWHERE</MicroLabel>
          <ul className="footer-list">
            <li><a href="https://linkedin.com/in/cassio-lima"><Icon name="linkedin" size={13}/> linkedin.com/in/cassio-lima</a></li>
            <li><a href="https://orcid.org/0000-0001-7787-8784"><Icon name="fileText" size={13}/> orcid · 0000-0001-7787-8784</a></li>
            <li><a href="mailto:cassio.f.lima@proton.me"><Icon name="mail" size={13}/> cassio.f.lima@proton.me</a></li>
          </ul>
        </div>
        <div>
          <MicroLabel>COLOPHON</MicroLabel>
          <p className="footer-colophon">Set in Fraunces & Inter, with JetBrains Mono for the technical bits. Built in the dark.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <Mono>© 2025 · Last updated 2026-05</Mono>
        <Mono>v0.4.2 · build a18f3c</Mono>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer });
