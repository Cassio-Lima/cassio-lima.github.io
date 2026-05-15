// Views: Home, Papers, CV, Contact
const { useState: useStateV, useMemo } = React;

/* --------- Helpers --------- */
function fmtAuthors(authors) {
  return authors.map((a, i) => {
    const me = a.startsWith('_') && a.endsWith('_');
    const name = me ? a.slice(1, -1) : a;
    return (
      <React.Fragment key={i}>
        {i > 0 && ', '}
        <span className={me ? 'me' : ''}>{name}</span>
      </React.Fragment>
    );
  });
}

/* ====================================================================
   HOME
   ==================================================================== */
function HomeView({ onNav }) {
  return (
    <main className="view view-home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-text">
            <MicroLabel accent>CURRENTLY · DATA MANAGEMENT · RIJK ZWAAN</MicroLabel>
            <h1 className="hero-title">
              At the intersection of<br/>
              <em>science and technology.</em>
            </h1>
            <p className="hero-blurb">
              I'm a Data Management &amp; Governance Specialist and Data Scientist with a PhD in plant biotechnology. I design governance frameworks and full-stack solutions that turn complex biological data into something a colleague can actually use — grounded in DAMA, FAIR, and the habits of a reproducible lab.
            </p>
            <div className="hero-ctas">
              <Btn variant="primary" icon="arrowRight" onClick={() => onNav('papers')}>See selected work</Btn>
              <Btn variant="secondary" icon="download" href="cv/" target="_blank" rel="noopener">Download CV</Btn>
            </div>
            <div className="hero-stats">
              <Stat k="years in data" v="9+"/>
              <Stat k="peer-reviewed papers" v="9"/>
              <Stat k="languages spoken" v="4"/>
            </div>
          </div>
          <div className="hero-aside">
            <FigurePanel/>
            <div className="hero-aside-card">
              <MicroLabel>NOW</MicroLabel>
              <p>Building a GIS database for an ecological corridor in Rio de Janeiro state with Hidden Universe Biodiversity — integrating land tenure, biodiversity records and climate variables that were never designed to talk to each other.</p>
              <Mono style={{ color: 'var(--chloro-300)' }}>↳ HUB · in progress</Mono>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="block">
        <SectionHead label="SELECTED WORK" title="What I've been building." href="papers" onNav={onNav}/>
        <div className="work-grid">
          {SELECTED_WORK.map((w) => (
            <article key={w.id} className="work-card">
              <header className="work-card-head">
                <Mono>{w.year}</Mono>
                <span className="work-venue">{w.venue}</span>
              </header>
              <h3 className="work-title">{w.title}</h3>
              <p className="work-blurb">{w.blurb}</p>
              <footer className="work-foot">
                {w.tags.map((t) => <Pill key={t}>{t}</Pill>)}
                <span className="work-arrow"><Icon name="arrowUpRight" size={14}/></span>
              </footer>
            </article>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="block about-strip">
        <div className="about-grid">
          <div>
            <MicroLabel>ABOUT</MicroLabel>
            <p className="about-lede">
              With experience in both <em>R&amp;D</em> and <em>IT</em>, I specialise in translating complex business needs into effective, scalable solutions — driven by a passion for data management and data stewardship.
            </p>
            <p className="about-body">
              My work combines expertise in <em>data governance</em> (DAMA, FAIR), full-stack development, and bioinformatics to ensure high-quality, interoperable data flows across R&amp;D and enterprise environments. I thrive at the intersection of science and technology — leveraging tools and methods to uncover the narratives hidden in data, and to drive innovation in science and beyond.
            </p>
          </div>
          <ul className="about-side">
            <li><Mono>BASED</Mono>Breda, Netherlands</li>
            <li><Mono>FROM</Mono>Rio de Janeiro, Brazil</li>
            <li><Mono>LANGUAGES</Mono>PT native · EN fluent · ES advanced · NL basic</li>
            <li><Mono>RIGHT TO WORK</Mono>NL · EU · Brazil</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Stat({ k, v }) {
  return <div className="stat"><div className="stat-v">{v}</div><div className="stat-k">{k}</div></div>;
}

function SectionHead({ label, title, href, onNav }) {
  return (
    <header className="section-head">
      <div>
        <MicroLabel>{label}</MicroLabel>
        <h2 className="section-title">{title}</h2>
      </div>
      {href && <a className="section-more" onClick={(e) => { e.preventDefault(); onNav(href); }}>All {href} <Icon name="arrowUpRight" size={12}/></a>}
    </header>
  );
}

/* ====================================================================
   PAPERS
   ==================================================================== */
function PapersView() {
  const allTags = useMemo(() => Array.from(new Set(PAPERS.flatMap(p => p.tags))), []);
  const [active, setActive] = useStateV(null);
  const filtered = active ? PAPERS.filter(p => p.tags.includes(active)) : PAPERS;

  return (
    <main className="view view-papers">
      <header className="page-head">
        <MicroLabel accent>PUBLICATIONS · ORCID 0000-0001-7787-8784</MicroLabel>
        <h1>Papers &amp; data contributions.</h1>
        <p>Highlighted: figures and datasets I personally compiled or designed. Full list on ORCID.</p>
      </header>
      <div className="filter-bar">
        <Mono>FILTER</Mono>
        <button className={'chip' + (!active ? ' active' : '')} onClick={() => setActive(null)}>All</button>
        {allTags.map((t) => (
          <button key={t} className={'chip' + (active === t ? ' active' : '')} onClick={() => setActive(t)}>{t}</button>
        ))}
      </div>
      <ul className="paper-list">
        {filtered.map((p, i) => (
          <li key={i} className="paper-row">
            <div className="paper-year"><Mono>{p.year}</Mono></div>
            <div className="paper-body">
              <div className="paper-venue">{p.venue}</div>
              <h3 className="paper-title">{p.title}</h3>
              <div className="paper-authors">{fmtAuthors(p.authors)}</div>
              <div className="paper-meta">
                <Mono>DOI · {p.doi}</Mono>
                {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
              </div>
            </div>
            <div className="paper-actions">
              <a><Icon name="fileText" size={14}/> PDF</a>
              <a><Icon name="database" size={14}/> Data</a>
              <a><Icon name="arrowUpRight" size={14}/></a>
            </div>
          </li>
        ))}
      </ul>
      <div className="paper-note">
        <Icon name="leaf" size={14} style={{color: 'var(--chloro-300)'}}/>
        <p>Full publication list available on <a href="https://orcid.org/0000-0001-7787-8784">ORCID</a>. Pre-prints and conference posters available on request.</p>
      </div>
    </main>
  );
}

/* ====================================================================
   CV
   ==================================================================== */
function CVView() {
  return (
    <main className="view view-cv">
      <header className="page-head">
        <MicroLabel accent>CURRICULUM VITAE · UPDATED 2026-05</MicroLabel>
        <h1>{PROFILE.name}.</h1>
        <p>Specialist Data Management · Data Scientist PhD · Rijk Zwaan · Hidden Universe Biodiversity</p>
        <div className="page-head-actions">
          <Btn variant="primary" icon="download" href="cv/" target="_blank" rel="noopener">Open printable CV</Btn>
          <Btn variant="secondary" href={`https://orcid.org/${PROFILE.orcid}`} target="_blank" rel="noopener">View ORCID</Btn>
        </div>
      </header>

      <section className="block">
        <div className="cv-grid">
          <div className="cv-main">
            <MicroLabel>EXPERIENCE</MicroLabel>
            <div className="timeline">
              {EXPERIENCE.map((e, i) => (
                <article key={i} className="tl-item">
                  <div className="tl-rail"><div className="tl-dot"/></div>
                  <div className="tl-body">
                    <header>
                      <Mono>{e.period}</Mono>
                      <h3 className="tl-role">{e.role}</h3>
                      <div className="tl-org">{e.org} <span>·</span> {e.place}</div>
                    </header>
                    <ul className="tl-bullets">
                      {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-7)' }}>
              <MicroLabel>EDUCATION</MicroLabel>
              <ul className="edu-list">
                {EDUCATION.map((e, i) => (
                  <li key={i}>
                    <Mono>{e.period}</Mono>
                    <div>
                      <div className="edu-deg">{e.degree}</div>
                      <div className="edu-org">{e.org} <span>·</span> {e.place}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="cv-aside">
            <MicroLabel>TECHNICAL</MicroLabel>
            <div className="skill-groups">
              {SKILLS.map((g, i) => (
                <div className="skill-group" key={i}>
                  <h4>{g.group}</h4>
                  <div className="skill-items">
                    {g.items.map((s, j) => <Pill key={j}>{s}</Pill>)}
                  </div>
                </div>
              ))}
            </div>
            <MicroLabel>CERTIFICATIONS</MicroLabel>
            <ul className="cert-list">
              <li><Icon name="check" size={12}/> CDMP Associate · DAMA International</li>
              <li><Icon name="check" size={12}/> Nextflow & Reproducibility (2022)</li>
              <li><Icon name="check" size={12}/> Research Data Management (2022)</li>
              <li><Icon name="check" size={12}/> Unsupervised Learning (2021)</li>
              <li><Icon name="check" size={12}/> Omics Data Integration (2021)</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* ====================================================================
   CONTACT
   ==================================================================== */
function ContactView() {
  return (
    <main className="view view-contact">
      <header className="page-head">
        <MicroLabel accent>OPEN TO · COLLABORATION · CONSULTING · SPEAKING</MicroLabel>
        <h1>Let's talk.</h1>
        <p>For research collaborations, consulting on FAIR data, or just to compare notes on plant stress data — I read every message.</p>
      </header>
      <section className="block">
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${PROFILE.email}`}>
            <Icon name="mail" size={20}/>
            <div className="contact-k">EMAIL</div>
            <div className="contact-v">{PROFILE.email}</div>
            <div className="contact-arrow"><Icon name="arrowUpRight" size={14}/></div>
          </a>
          <a className="contact-card" href={`https://${PROFILE.linkedin}`}>
            <Icon name="linkedin" size={20}/>
            <div className="contact-k">LINKEDIN</div>
            <div className="contact-v">{PROFILE.linkedin}</div>
            <div className="contact-arrow"><Icon name="arrowUpRight" size={14}/></div>
          </a>
          <a className="contact-card" href={`https://orcid.org/${PROFILE.orcid}`}>
            <Icon name="fileText" size={20}/>
            <div className="contact-k">ORCID</div>
            <div className="contact-v">{PROFILE.orcid}</div>
            <div className="contact-arrow"><Icon name="arrowUpRight" size={14}/></div>
          </a>
        </div>

        <div className="contact-form-wrap">
          <div>
            <MicroLabel>SEND A NOTE</MicroLabel>
            <h3 className="form-title">Or write here, briefly.</h3>
            <p className="form-blurb">Tell me what you're working on. I'll get back within a week.</p>
            <ul className="form-availability">
              <li><Icon name="mapPin" size={13}/> Based in Breda, NL · CET</li>
              <li><Icon name="check" size={13}/> Open to remote-first collaboration</li>
              <li><Icon name="check" size={13}/> Speaking in PT / EN / ES</li>
            </ul>
          </div>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <span>NAME</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              <span>EMAIL</span>
              <input type="email" placeholder="you@institution.org" />
            </label>
            <label>
              <span>WHAT'S THIS ABOUT</span>
              <select defaultValue="">
                <option value="" disabled>Choose one…</option>
                <option>Research collaboration</option>
                <option>Consulting · FAIR / pipelines</option>
                <option>Speaking / panel</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              <span>MESSAGE</span>
              <textarea rows="4" placeholder="A paragraph is plenty."/>
            </label>
            <Btn variant="primary" icon="arrowRight">Send</Btn>
          </form>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomeView, PapersView, CVView, ContactView });
