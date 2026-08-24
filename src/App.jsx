const ArrowUpRight = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2.23c-3.21.7-3.89-1.36-3.89-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18A11 11 0 0 1 12 6.12c.98 0 1.94.13 2.85.38 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.42.36.78 1.06.78 2.13v3.28c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.41v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.04H3.54V8.98H7.1v11.47Z" />
  </svg>
);

const MailIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
    <path d="M20.5 11.6a8.5 8.5 0 0 1-12.66 7.42L3.5 20.5l1.43-4.18A8.5 8.5 0 1 1 20.5 11.6Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.2 7.8c.35-.35.75-.16.95.18l1.02 1.74c.17.3.12.62-.1.86l-.63.67c.62 1.25 1.65 2.28 2.9 2.9l.67-.63c.24-.22.56-.27.86-.1l1.74 1.02c.34.2.53.6.18.95-.63.63-1.46.94-2.35.75-3.02-.64-5.3-2.92-5.94-5.94-.19-.9.12-1.72.75-2.35Z" fill="currentColor" />
  </svg>
);

const skillGroups = [
  {
    number: "01",
    mark: "UI",
    title: "Frontend",
    description: "Responsive interfaces that feel clear, fast, and intentional on every screen.",
    skills: ["React.js", "Redux Toolkit", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    number: "02",
    mark: "API",
    title: "Backend",
    description: "Secure APIs and dependable data flows for real product requirements.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "MongoDB / Mongoose"],
  },
  {
    number: "03",
    mark: "SHIP",
    title: "Delivery",
    description: "From local development and testing to a production-ready release.",
    skills: ["Git / GitHub", "Postman", "Cloudinary", "Vercel", "Render"],
  },
];

export default function Home() {
  return (
    <main className="relative isolate min-h-screen">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Syed Muharram Ali, home">
          <span>SMA</span>
          <span className="brand-copy">Syed Muharram Ali</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="hero-topline">
            <div className="availability"><span /> Open to opportunities</div>
            <p>PORTFOLIO / 2026</p>
          </div>
          <p className="eyebrow">MERN STACK DEVELOPER · GILGIT, PAKISTAN</p>
          <h1>I build <span>web products</span> that work as well as they look.</h1>
          <p className="hero-lede">
            I&apos;m Syed Muharram Ali, a full-stack developer focused on turning useful ideas into reliable, responsive, and production-ready web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight /></a>
            <a className="button button-secondary" href="https://github.com/syedmuharramali" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
          </div>
          <div className="proof-row" aria-label="Quick facts">
            <div><strong>2+</strong><span>Years learning<br />and building</span></div>
            <div><strong>MERN</strong><span>End-to-end<br />development</span></div>
            <div><strong>KIU</strong><span>BS Computer<br />Science</span></div>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Syed Muharram Ali">
          <div className="portrait-halo" />
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />
          <div className="portrait-frame">
            <img src="/syed-muharram-ali.webp" alt="Syed Muharram Ali, MERN Stack Developer" />
          </div>
          <div className="stack-card">
            <div className="stack-card-top"><span /><span /><span /></div>
            <code><b>const</b> developer = {'{'}<br />&nbsp;&nbsp;focus: <em>&quot;real products&quot;</em>,<br />&nbsp;&nbsp;stack: <em>&quot;MERN&quot;</em><br />{'}'}</code>
          </div>
          <div className="location-pill"><span>⌁</span> Gilgit · PK</div>
          <div className="micro-pill micro-pill-ui">INTERFACES</div>
          <div className="micro-pill micro-pill-api">REST APIs</div>
        </div>
      </section>

      <section className="marquee" aria-label="Technology stack">
        <div className="marquee-track">
          <span>REACT.JS</span><i>✦</i><span>NODE.JS</span><i>✦</i><span>EXPRESS.JS</span><i>✦</i><span>MONGODB</span><i>✦</i><span>TAILWIND CSS</span><i>✦</i><span>REST APIS</span><i>✦</i>
          <span>REACT.JS</span><i>✦</i><span>NODE.JS</span><i>✦</i><span>EXPRESS.JS</span><i>✦</i><span>MONGODB</span><i>✦</i><span>TAILWIND CSS</span><i>✦</i><span>REST APIS</span><i>✦</i>
        </div>
      </section>

      <section className="about shell section" id="about">
        <div className="section-kicker"><span>01</span> About</div>
        <div className="about-grid">
          <h2>Curious by nature.<br /><em>Practical by choice.</em></h2>
          <div className="about-copy">
            <p>I&apos;m a final-semester Computer Science student at Karakoram International University who enjoys solving the less-visible problems behind a smooth digital experience.</p>
            <p>My work spans polished React interfaces, structured Express APIs, authentication, commerce logic, data modelling, and deployment. I&apos;m currently sharpening those skills by building and improving complete products—not isolated demos.</p>
            <div className="about-points">
              <div><strong>Product thinking</strong><span>I connect technical decisions to user needs.</span></div>
              <div><strong>Full-stack ownership</strong><span>I follow features from interface to database.</span></div>
              <div><strong>Continuous improvement</strong><span>I refine the details instead of stopping at “working.”</span></div>
            </div>
            <a className="text-link" href="https://www.linkedin.com/in/syedmuharramali/" target="_blank" rel="noreferrer">More about me on LinkedIn <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="skills shell section" id="skills">
        <div className="section-heading">
          <div className="section-kicker"><span>02</span> Capabilities</div>
          <h2>My working stack</h2>
          <p>The tools I use to take a product from its first screen to a stable release.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <div className="skill-card-top"><span className="skill-number">{group.number}</span><i>{group.mark}</i></div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="chips">
                {group.skills.map((skill) => <span className="transition-colors duration-200 hover:border-violet-400/40 hover:text-white" key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="work-heading">
          <div>
            <div className="section-kicker"><span>03</span> Selected work</div>
            <h2>Two products.<br /><em>The whole stack.</em></h2>
          </div>
          <p>Two practical full-stack products that show how I turn real workflows into clear interfaces and maintainable backend systems.</p>
        </div>

        <div className="project-list">
          <article className="project-card">
            <div className="project-copy">
              <div className="project-label"><span>Featured case study</span><i>Live deployment</i></div>
              <p className="project-index">PROJECT / 01</p>
              <h3>ShopEase</h3>
              <p className="project-lede">A full-stack ecommerce platform built to handle the complete journey—from discovering a product to managing the order after checkout.</p>
              <div className="project-tags"><span>FULL STACK</span><span>ECOMMERCE</span><span>PRODUCTION-MINDED</span></div>

              <div className="project-highlights">
                <div><span>01</span><p><strong>Flexible catalog</strong>Product options, variants, stock, search, and category-based browsing.</p></div>
                <div><span>02</span><p><strong>Customer journey</strong>Authentication, cart, wishlist, coupons, checkout, reviews, and tracking.</p></div>
                <div><span>03</span><p><strong>Operational control</strong>Protected admin flows, order management, analytics, and security.</p></div>
              </div>

              <div className="project-actions">
                <a className="button button-primary" href="https://shopease-sage.vercel.app/" target="_blank" rel="noreferrer">View live site <ArrowUpRight /></a>
                <a className="button button-secondary" href="https://github.com/syedmuharramali/ShopEase-Ecommerce" target="_blank" rel="noreferrer"><GithubIcon /> View source</a>
              </div>
            </div>

            <div className="project-system" aria-label="ShopEase application architecture">
              <div className="system-topbar">
                <div><span /><span /><span /></div>
                <p>shopease / system-overview</p>
                <i>● DEPLOYED</i>
              </div>
              <div className="system-canvas">
                <div className="system-title">
                  <span>COMMERCE ENGINE</span>
                  <strong>From storefront<br />to fulfillment.</strong>
                </div>
                <div className="flow" aria-label="React to API to MongoDB flow">
                  <div><span>01</span><strong>React</strong><small>Storefront</small></div>
                  <i>→</i>
                  <div><span>02</span><strong>Express</strong><small>REST API</small></div>
                  <i>→</i>
                  <div><span>03</span><strong>MongoDB</strong><small>Data layer</small></div>
                </div>
                <div className="system-stats">
                  <div><span>AUTH</span><strong>JWT</strong><small>Protected access</small></div>
                  <div><span>STATE</span><strong>Redux</strong><small>Predictable flows</small></div>
                  <div><span>MEDIA</span><strong>Cloudinary</strong><small>Optimized assets</small></div>
                  <div><span>UX</span><strong>Responsive</strong><small>Across devices</small></div>
                </div>
                <div className="system-footer"><span>REACT.JS</span><span>NODE.JS</span><span>EXPRESS.JS</span><span>MONGODB</span></div>
              </div>
            </div>
          </article>

          <article className="project-card project-card-invoflow">
            <div className="project-copy">
              <div className="project-label"><span>Full-stack application</span><i>Core workflow complete</i></div>
              <p className="project-index">PROJECT / 02</p>
              <h3>InvoFlow</h3>
              <p className="project-lede">An invoice management application that helps users create, organize, search, update, and export professional invoices from one focused workspace.</p>
              <div className="project-tags"><span>FULL STACK</span><span>INVOICE WORKFLOW</span><span>PDF GENERATION</span></div>

              <div className="project-highlights">
                <div><span>01</span><p><strong>Invoice lifecycle</strong>Create, view, edit, delete, and track invoices through Draft, Sent, Paid, and Overdue states.</p></div>
                <div><span>02</span><p><strong>PDF workflow</strong>Generate, preview, and download professional invoice documents directly from the application.</p></div>
                <div><span>03</span><p><strong>Focused management</strong>JWT-protected access, dashboard summaries, and search by client name, email, or status.</p></div>
              </div>

              <div className="project-actions">
                <a className="button button-primary" href="https://github.com/syedmuharramali/invoflow" target="_blank" rel="noreferrer"><GithubIcon /> View source <ArrowUpRight /></a>
              </div>
            </div>

            <div className="project-system" aria-label="InvoFlow application architecture">
              <div className="system-topbar">
                <div><span /><span /><span /></div>
                <p>invoflow / billing-workspace</p>
                <i>● FULL STACK</i>
              </div>
              <div className="system-canvas">
                <div className="system-title">
                  <span>INVOICE ENGINE</span>
                  <strong>From client details<br />to a ready PDF.</strong>
                </div>
                <div className="flow" aria-label="React to Express to MongoDB flow">
                  <div><span>01</span><strong>React</strong><small>Workspace</small></div>
                  <i>→</i>
                  <div><span>02</span><strong>Express</strong><small>Invoice API</small></div>
                  <i>→</i>
                  <div><span>03</span><strong>MongoDB</strong><small>Records</small></div>
                </div>
                <div className="system-stats">
                  <div><span>DOCS</span><strong>PDF</strong><small>Preview & download</small></div>
                  <div><span>AUTH</span><strong>JWT</strong><small>Protected workspace</small></div>
                  <div><span>FIND</span><strong>Search</strong><small>Name, email, status</small></div>
                  <div><span>FLOW</span><strong>4 states</strong><small>Draft to paid</small></div>
                </div>
                <div className="system-footer"><span>REACT.JS</span><span>NODE.JS</span><span>EXPRESS.JS</span><span>MONGODB</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="journey shell section" id="journey">
        <div className="section-kicker"><span>04</span> Journey</div>
        <div className="journey-grid">
          <div>
            <p className="journey-label">Education</p>
            <h2>BS Computer Science</h2>
            <p>Karakoram International University · Gilgit</p>
            <span className="journey-status">Final semester</span>
          </div>
          <div>
            <p className="journey-label">Current focus</p>
            <h2>Building production-ready systems</h2>
            <p>Strengthening full-stack architecture, ecommerce workflows, performance, security, and the details that make software dependable.</p>
          </div>
        </div>
      </section>

      <section className="contact shell section" id="contact">
        <div className="contact-orbit" />
        <div className="section-kicker"><span>05</span> Start a conversation</div>
        <div className="contact-status"><i /> Available for the right opportunity</div>
        <p className="contact-overline">Have a role, project, or useful idea?</p>
        <h2>Let&apos;s build something<br /><em>worth using.</em></h2>
        <p className="contact-copy">I&apos;m open to junior MERN opportunities, internships, and conversations about practical web products.</p>
        <a className="contact-email" href="mailto:syedmuharramali.dev@gmail.com?subject=Portfolio%20Opportunity">syedmuharramali.dev@gmail.com</a>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:syedmuharramali.dev@gmail.com?subject=Portfolio%20Opportunity"><MailIcon /> Send an email</a>
          <a className="button button-whatsapp" href="https://wa.me/923173779004?text=Hello%20Syed%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity." target="_blank" rel="noreferrer"><WhatsAppIcon /> Chat on WhatsApp</a>
        </div>
        <div className="contact-socials" aria-label="Professional profiles">
          <a href="https://www.linkedin.com/in/syedmuharramali/" target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a>
          <a href="https://github.com/syedmuharramali" target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>© 2026 Syed Muharram Ali</p>
        <div>
          <a href="mailto:syedmuharramali.dev@gmail.com?subject=Portfolio%20Opportunity" aria-label="Email Syed Muharram Ali"><MailIcon /></a>
          <a href="https://wa.me/923173779004?text=Hello%20Syed%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity." aria-label="Chat with Syed Muharram Ali on WhatsApp" target="_blank" rel="noreferrer"><WhatsAppIcon /></a>
          <a href="https://github.com/syedmuharramali" aria-label="GitHub" target="_blank" rel="noreferrer"><GithubIcon /></a>
          <a href="https://www.linkedin.com/in/syedmuharramali/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        </div>
      </footer>
    </main>
  );
}
