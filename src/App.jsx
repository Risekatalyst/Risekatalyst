import { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  ArrowRight,
  Megaphone,
  BarChart3,
  GraduationCap,
  Users,
  Rocket,
  CheckCircle2,
  FileText,
  ShieldCheck,
  BadgeHelp,
  Mail,
  Phone,
  Send,
  Menu,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    icon: Megaphone,
    title: "Lead Generation",
    desc: "Qualified student and admission leads for institutes through sharper targeting, better campaign structure, and stronger inquiry intent.",
  },
  {
    icon: BarChart3,
    title: "Performance Ads",
    desc: "Meta and Google campaigns designed for reach, inquiry quality, and scalable return on ad spend.",
  },
  {
    icon: GraduationCap,
    title: "Admission Funnels",
    desc: "Landing journeys built to convert attention into inquiries, counseling calls, and admission growth.",
  },
  {
    icon: Users,
    title: "Creative Strategy",
    desc: "Clear messaging, hooks, visuals, and content direction that support serious performance campaigns.",
  },
];

const processItems = [
  {
    icon: Rocket,
    title: "Discover",
    desc: "We understand your institute, your audience, your admissions cycle, and your growth goals.",
  },
  {
    icon: BarChart3,
    title: "Build",
    desc: "We shape the campaign structure, landing flow, messaging, and creative around that target.",
  },
  {
    icon: CheckCircle2,
    title: "Scale",
    desc: "We optimize, improve, and grow based on numbers, not noise.",
  },
];

const team = [
  { name: "Gaurav Modi", role: "Founder", tags: ["Leadership", "Strategy"] },
  { name: "Ayush Pandey", role: "Co-Founder", tags: ["Operations", "Growth"] },
  { name: "Sarthak Singh", role: "Developer & Head Executive", tags: ["Development", "Execution"] },
  { name: "Kaushal Yadav", role: "HR Head Manager", tags: ["People", "Management"] },
  { name: "Rahul", role: "IT Support Manager & Sales Manager", tags: ["Support", "Sales"] },
  { name: "Shivam", role: "Architect Designer & Head Editor", tags: ["Design", "Editing"] },
];

const privacySections = [
  {
    title: "Information We Collect",
    text: "We may collect your name, email address, phone number, institute details, and any message submitted through this website.",
  },
  {
    title: "How We Use Information",
    text: "We use submitted information to respond to inquiries, discuss services, improve communication, and support our business operations.",
  },
  {
    title: "Sharing of Information",
    text: "We do not sell personal information. We may use trusted tools or service providers only where necessary to operate our services.",
  },
];

const termsSections = [
  {
    title: "Website Usage",
    text: "By using this website, you agree not to misuse its content, forms, branding, or services.",
  },
  {
    title: "Service Scope",
    text: "All service descriptions on this website are general. Final pricing, deliverables, scope, and timelines depend on direct agreement.",
  },
  {
    title: "Ownership",
    text: "The branding, design, layout, and original content of this website belong to Katalyst Rise unless stated otherwise.",
  },
];

const disclaimerSections = [
  {
    title: "No Guaranteed Results",
    text: "Marketing performance depends on many factors. We do not guarantee a fixed number of leads, admissions, or revenue.",
  },
  {
    title: "Third-Party Platforms",
    text: "This website may mention platforms such as Google and Meta. We are not responsible for their policy or product changes.",
  },
  {
    title: "General Information",
    text: "The content on this website is for informational purposes and should not be treated as legal, financial, or regulatory advice.",
  },
];

const particles = Array.from({ length: 16 }, (_, i) => i + 1);

function SiteShell({ children }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === "/";
  const sectionLink = (id) => (isHome ? `#${id}` : `/#${id}`);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="site-shell">
      <div className="site-background" aria-hidden="true">
        <div className="grid-layer" />
        <div className="noise-layer" />
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
        <div className="beam beam-a" />
        <div className="beam beam-b" />
        <div className="beam beam-c" />
        <div className="scan-band" />
        <div className="pulse-ring pulse-ring-a" />
        <div className="pulse-ring pulse-ring-b" />
        <div className="vline v1" />
        <div className="vline v2" />
        <div className="vline v3" />

        <div className="particle-field">
          {particles.map((n) => (
            <span key={n} className={`particle p-${n}`} />
          ))}
        </div>
      </div>

      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-shell header-shell">
          <Link to="/" className="brand-logo" aria-label="Katalyst Rise home">
            <img src="/logo-full.png" alt="Katalyst Rise" className="brand-logo-img" />
          </Link>

          <nav className="top-nav">
            <a href={sectionLink("services")}>Services</a>
            <a href={sectionLink("process")}>Process</a>
            <a href={sectionLink("team")}>Team</a>
            <a href={sectionLink("contact")}>Contact</a>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-top">
          <div className="mobile-menu-title">Menu</div>
          <button
            type="button"
            className="menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        <div className="mobile-menu-links">
          <a href={sectionLink("services")} onClick={() => setMenuOpen(false)}>Services</a>
          <a href={sectionLink("process")} onClick={() => setMenuOpen(false)}>Process</a>
          <a href={sectionLink("team")} onClick={() => setMenuOpen(false)}>Team</a>
          <a href={sectionLink("contact")} onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="mobile-menu-divider" />

        <div className="mobile-legal-links">
          <Link to="/privacy" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link to="/disclaimer" onClick={() => setMenuOpen(false)}>Disclaimer</Link>
        </div>

        <div className="mobile-menu-footer">
          <p className="mobile-menu-note">
            Admissions-focused growth systems, paid campaigns, and sharper inquiry generation for institutes.
          </p>

          <a
            href={sectionLink("contact")}
            className="primary-btn"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project <ArrowRight size={18} />
          </a>
        </div>
      </aside>

      {children}

      <footer className="site-footer">
        <div className="container-shell footer-grid">
          <div>
            <img src="/logo-full.png" alt="Katalyst Rise" className="footer-brand-img" />
            <p className="footer-copy">
              Lead generation and ad campaigns for institutes with sharper strategy,
              stronger creative, and admissions-focused execution.
            </p>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <div className="footer-links">
              <p><Mail size={15} /> partnerships@risekatalyst.com</p>
              <p><Phone size={15} /> +91 7322057668</p>
            </div>
          </div>

          <div>
            <p className="footer-label">Legal</p>
            <div className="footer-nav">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">© 2026 Katalyst Rise. All rights reserved.</div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-title reveal-block">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="hero-dashboard">
      <div className="dashboard-shell">
        <div className="dashboard-glow" />
        <div className="dashboard-head">
          <div>
            <p className="dashboard-kicker">Live Growth View</p>
            <h3>Admissions Engine</h3>
          </div>
          <span className="status-pill">Active</span>
        </div>

        <div className="metrics-grid">
          {[
            ["25+", "Campaigns Managed", 0.68],
            ["10+", "Institutes Supported", 0.74],
            ["1.25K+", "Leads Generated", 0.82],
            ["24/7", "Optimization Flow", 0.9],
          ].map(([number, label, progress], index) => (
            <div key={label} className={`metric-card metric-card-${index}`}>
              <p className="metric-number">{number}</p>
              <p className="metric-label">{label}</p>
              <div className="metric-track">
                <div className="metric-fill" style={{ transform: `scaleX(${progress})` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="signal-panel">
          <div className="signal-head">
            <span>Campaign Direction</span>
            <span>Admissions Focused</span>
          </div>
          <div className="signal-stage">
            <div className="signal-ring ring-1" />
            <div className="signal-ring ring-2" />
            <div className="signal-ring ring-3" />
            <div className="signal-sweep" />
            <div className="signal-vertical" />
            <div className="signal-dot" />
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const scope = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState("");

  useGSAP(
    () => {
      const isMobile = window.matchMedia("(max-width: 759px)").matches;

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .from(".hero-kicker", {
          y: isMobile ? 14 : 20,
          opacity: 0,
          duration: isMobile ? 0.4 : 0.55,
        })
        .from(
          ".hero-line",
          {
            yPercent: isMobile ? 90 : 115,
            opacity: 0,
            duration: isMobile ? 0.65 : 0.9,
            stagger: 0.12,
          },
          "-=0.1"
        )
        .from(
          ".hero-copy",
          {
            y: 20,
            opacity: 0,
            duration: isMobile ? 0.45 : 0.55,
          },
          "-=0.35"
        )
        .from(
          ".hero-actions a",
          {
            y: 18,
            opacity: 0,
            duration: 0.35,
            stagger: 0.1,
          },
          "-=0.2"
        )
        .from(
          ".hero-chip",
          {
            y: 14,
            opacity: 0,
            duration: 0.28,
            stagger: 0.05,
          },
          "-=0.15"
        )
        .from(
          ".hero-dashboard",
          {
            y: isMobile ? 18 : 30,
            opacity: 0,
            scale: 0.985,
            duration: isMobile ? 0.55 : 0.8,
          },
          "-=0.3"
        )
        .from(
          ".metric-card",
          {
            y: 18,
            opacity: 0,
            duration: 0.35,
            stagger: 0.08,
          },
          "-=0.35"
        );

      if (!isMobile) {
        gsap.to(".scan-band", {
          x: "140vw",
          duration: 7,
          ease: "none",
          repeat: -1,
        });

        gsap.to(".signal-dot", {
          y: -138,
          duration: 2.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".aurora-a", {
          x: 40,
          y: -18,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".aurora-b", {
          x: -36,
          y: 26,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".aurora-c", {
          x: 18,
          y: -28,
          duration: 13,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(".beam-a", {
          x: "120vw",
          duration: 10,
          ease: "none",
          repeat: -1,
        });

        gsap.to(".beam-b", {
          x: "-120vw",
          duration: 12,
          ease: "none",
          repeat: -1,
        });

        gsap.to(".beam-c", {
          x: "90vw",
          duration: 9,
          ease: "none",
          repeat: -1,
        });

        ScrollTrigger.matchMedia({
          "(min-width: 900px)": () => {
            gsap
              .timeline({
                scrollTrigger: {
                  trigger: ".hero-section",
                  start: "top top",
                  end: "bottom top",
                  scrub: 1,
                },
              })
              .to(".hero-copy-col", { yPercent: -8, opacity: 0.75 }, 0)
              .to(".hero-dashboard", { yPercent: 10, scale: 1.03 }, 0);
          },
        });
      }

      gsap.utils.toArray(".reveal-block").forEach((element) => {
        const delay = Number(element.dataset.delay || 0);

        gsap.from(element, {
          y: isMobile ? 22 : 34,
          opacity: 0,
          scale: 0.988,
          duration: isMobile ? 0.48 : 0.7,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: isMobile ? "top 92%" : "top 86%",
            once: true,
          },
        });
      });
    },
    { scope }
  );

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setDone("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = {};
      }

      if (!res.ok) {
        throw new Error(data.error || "Form backend is not available in preview yet.");
      }

      setDone(data.message || "Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setDone(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteShell>
      <main ref={scope}>
        <section className="hero-section">
          <div className="container-shell hero-grid">
            <div className="hero-copy-col">
              <div className="hero-kicker">Admissions growth systems for institutes</div>

              <h1 className="hero-title">
                <span className="line-wrap"><span className="hero-line">Build demand.</span></span>
                <span className="line-wrap"><span className="hero-line">Capture intent.</span></span>
                <span className="line-wrap"><span className="hero-line accent-text">Scale admissions.</span></span>
              </h1>

              <p className="hero-copy">
                Katalyst Rise helps institutes generate quality leads, run sharper ad campaigns,
                and build a stronger admissions-focused growth engine.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-btn">
                  Start a Project <ArrowRight size={18} />
                </a>
                <a href="#services" className="secondary-btn">
                  See Services
                </a>
              </div>

              <div className="hero-chips">
                {["Meta Ads", "Google Ads", "Admission Funnels", "Creative Strategy"].map((item) => (
                  <span key={item} className="hero-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <HeroDashboard />
          </div>
        </section>

        <section id="services" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Services"
              title="What we actually build"
              copy="Campaign systems, paid execution, and conversion journeys designed to improve inquiry quality and admissions growth."
            />

            <div className="services-grid">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="service-card reveal-block"
                    data-delay={index * 0.05}
                  >
                    <div className="icon-box">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="process" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Process"
              title="A clear path from attention to admission"
              copy="No filler. Just a focused operating model that turns marketing activity into measurable growth."
            />

            <div className="process-grid">
              {processItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="process-card reveal-block"
                    data-delay={index * 0.08}
                  >
                    <div className="process-index">0{index + 1}</div>
                    <div className="icon-box">
                      <Icon size={24} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="team" className="standard-section">
          <div className="container-shell">
            <SectionTitle
              eyebrow="Team"
              title="People behind Katalyst Rise"
              copy="Meet the people driving strategy, execution, and growth at Katalyst Rise."
            />

            <div className="team-grid">
              {team.map((member, index) => (
                <div
                  key={member.name}
                  className="team-card reveal-block"
                  data-delay={index * 0.05}
                >
                  <div className="team-top">
                    <div className="team-mark">{member.name.charAt(0)}</div>
                    <div>
                      <h3>{member.name}</h3>
                      <p className="team-role">{member.role}</p>
                    </div>
                  </div>

                  <div className="team-tags">
                    {member.tags.map((tag) => (
                      <span key={tag} className="team-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="standard-section">
          <div className="container-shell">
            <div className="contact-panel reveal-block">
              <SectionTitle
                eyebrow="Contact"
                title="Let’s build the growth system"
                copy="Tell us about your institute, campaign requirements, or admissions goals."
              />

              <div className="contact-grid">
                <form onSubmit={submitForm} className="contact-form">
                  <input
                    className="form-field"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <input
                    className="form-field"
                    placeholder="Your email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                  <textarea
                    rows="5"
                    className="form-field"
                    placeholder="Tell us about your institute or campaign goal"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                  <button type="submit" disabled={loading} className="primary-btn full-btn">
                    <Send size={18} />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                  {done ? <p className="form-message">{done}</p> : null}
                </form>

                <div className="contact-side">
                  <div className="contact-benefit-card reveal-block" data-delay={0.08}>
                    <p className="section-eyebrow small-left">What you get</p>

                    <div className="benefit-list">
                      {[
                        "Lead generation strategy for institutes",
                        "Performance ad campaign planning",
                        "Responsive website and conversion flow",
                        "Creative direction with measurable focus",
                      ].map((item) => (
                        <div key={item} className="benefit-row">
                          <CheckCircle2 size={18} />
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="contact-meta-grid">
                    <div className="contact-meta-card reveal-block" data-delay={0.12}>
                      <div className="contact-meta-icon">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="meta-label">Email</p>
                        <p className="meta-value">partnerships@risekatalyst.com</p>
                      </div>
                    </div>

                    <div className="contact-meta-card reveal-block" data-delay={0.18}>
                      <div className="contact-meta-icon">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="meta-label">Phone</p>
                        <p className="meta-value">+91 7322057668</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

function LegalPage({ title, icon: Icon, sections }) {
  return (
    <SiteShell>
      <main className="standard-section">
        <div className="container-shell">
          <div className="legal-panel reveal-block">
            <div className="legal-head">
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h1>{title}</h1>
            </div>

            <div className="legal-content">
              {sections.map((section, index) => (
                <div key={section.title} className="reveal-block" data-delay={index * 0.05}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/privacy"
        element={<LegalPage title="Privacy Policy" icon={ShieldCheck} sections={privacySections} />}
      />
      <Route
        path="/terms"
        element={<LegalPage title="Terms & Conditions" icon={FileText} sections={termsSections} />}
      />
      <Route
        path="/disclaimer"
        element={<LegalPage title="Disclaimer" icon={BadgeHelp} sections={disclaimerSections} />}
      />
    </Routes>
  );
}
