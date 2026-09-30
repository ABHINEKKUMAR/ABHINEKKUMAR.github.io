import { ConsultationForm } from "./ConsultationForm";
import {
  faqs,
  officeDetails,
  practiceAreas,
  processSteps,
  profile,
} from "./site-content";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

const contactLabels = {
  Phone: "Phone awaiting confirmation",
  WhatsApp: "WhatsApp awaiting confirmation",
} as const;

function PlaceholderContactAction({ kind }: { kind: "Phone" | "WhatsApp" }) {
  return (
    <button
      className="contact-placeholder"
      type="button"
      aria-label={contactLabels[kind]}
      title={`${kind} details are awaiting confirmation`}
    >
      <span className="contact-placeholder__label">{kind}</span>
      <span className="contact-placeholder__status">Awaiting confirmation</span>
    </button>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Biplab Das home">
          <span className="brand-mark" aria-hidden="true">BD</span>
          <span>
            <strong>Biplab Das</strong>
            <small>Advocate · LLB</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#about">About</a>
          <a href="#faqs">FAQs</a>
        </nav>
        <a className="button button--small button--gold" href="#contact">
          Request consultation <ArrowIcon />
        </a>
      </header>
      <nav className="mobile-nav" aria-label="Mobile section navigation">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact</a>
      </nav>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__wash" aria-hidden="true" />
          <div className="hero__content">
            <p className="eyebrow"><span /> Accident claim assistance in Dhanbad</p>
            <h1 id="hero-title">Injured in an accident?<br /><em>Understand your legal options.</em></h1>
            <p className="hero__intro">
              Clear, careful guidance for motor accident compensation,
              insurance disputes and related legal matters in Dhanbad.
            </p>
            <div className="hero__actions">
              <a className="button button--gold" href="#contact">
                Request a consultation <ArrowIcon />
              </a>
              <a className="text-link text-link--light" href="#process">
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Advocate profile summary">
            <p className="hero-card__kicker">Legal assistance, locally grounded</p>
            <div className="hero-card__monogram" aria-hidden="true">BD</div>
            <h2>{profile.name}</h2>
            <p>{profile.title} · {profile.qualification}</p>
            <dl>
              <div><dt>Office</dt><dd>Binod Nagar, Dhanbad</dd></div>
              <div><dt>Public listing</dt><dd>Est. 1968*</dd></div>
              <div><dt>Focus</dt><dd>Accident claims</dd></div>
            </dl>
            <small>*As shown on the supplied public listing; to be confirmed.</small>
          </aside>
        </section>

        <section className="guidance" aria-label="What to do after an accident">
          <div className="guidance__title">
            <span className="guidance__number">01</span>
            <h2>After an accident,<br />small steps matter.</h2>
          </div>
          <ul>
            <li><span>+</span> Prioritise medical care</li>
            <li><span>+</span> Preserve bills and reports</li>
            <li><span>+</span> Keep FIR and insurance details</li>
            <li><span>+</span> Photograph relevant evidence</li>
          </ul>
        </section>

        <section className="section services" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow eyebrow--dark"><span /> Areas of assistance</p>
              <h2 id="services-title">Legal support when<br /><em>the way forward feels unclear.</em></h2>
            </div>
            <p>Accident claims are the primary focus, supported by the other legal services shown on the advocate’s public profile.</p>
          </div>
          <div className="services-grid">
            {practiceAreas.map((area, index) => (
              <article className={`service-card${area.featured ? " service-card--featured" : ""}`} key={area.title}>
                <span className="service-card__index">0{index + 1}</span>
                <span className="service-card__rule" />
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a href="#contact" aria-label={`Discuss ${area.title}`}>Discuss this matter <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="process__intro">
            <p className="eyebrow"><span /> A clear first step</p>
            <h2 id="process-title">From uncertainty<br /><em>to a practical next step.</em></h2>
            <p>Every matter begins with listening, reviewing what is available, and explaining the options in plain language.</p>
            <a className="text-link text-link--light" href="#contact">Prepare your enquiry <ArrowIcon /></a>
          </div>
          <ol className="process-list">
            {processSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div><h3>{step.title}</h3><p>{step.description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="about__portrait" aria-hidden="true">
            <span className="about__portrait-label">Advocate · Dhanbad</span>
            <strong>BD</strong>
            <span className="about__portrait-caption">Biplab Das · LLB</span>
          </div>
          <div className="about__copy">
            <p className="eyebrow eyebrow--dark"><span /> About the advocate</p>
            <h2 id="about-title">Local legal guidance,<br /><em>delivered with clarity.</em></h2>
            <p className="about__lead">Advocate Biplab Das is listed as an LLB-qualified lawyer serving clients from Binod Nagar, Dhanbad.</p>
            <p>This demo website presents accident-claim assistance prominently while reflecting the wider civil, criminal, family, property, consumer and advisory matters shown on the supplied public listing.</p>
            <dl className="about__facts">
              <div><dt>Qualification</dt><dd>LLB</dd></div>
              <div><dt>Location</dt><dd>Binod Nagar, Dhanbad</dd></div>
              <div><dt>Listing reports</dt><dd>Established 1968*</dd></div>
            </dl>
            <small>*Profile details should be confirmed by the advocate before official publication.</small>
          </div>
        </section>

        <section className="section faq-section" id="faqs" aria-labelledby="faq-title">
          <div className="section-heading section-heading--faq">
            <div>
              <p className="eyebrow eyebrow--dark"><span /> Common questions</p>
              <h2 id="faq-title">Before you speak<br /><em>with an advocate.</em></h2>
            </div>
            <p>General information to help you prepare. It is not a substitute for advice on your specific matter.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{faq.question}<b aria-hidden="true">+</b></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contact__info">
            <p className="eyebrow"><span /> Start a conversation</p>
            <h2 id="contact-title">Prepare your<br /><em>consultation request.</em></h2>
            <p>This is a client-demo form. It validates your entries locally and does not send or store any personal information.</p>
            <address>
              <span>Office</span>
              {officeDetails.address}
            </address>
            <div className="contact__meta">
              <div><span>Listing hours</span><strong>Opens at {officeDetails.openingTime}*</strong></div>
              <a href={officeDetails.directionsUrl} target="_blank" rel="noreferrer">Get directions <ArrowIcon /></a>
            </div>
            <small>*Please confirm before visiting.</small>
          </div>
          <ConsultationForm />
        </section>
      </main>

      <footer>
        <div className="footer__brand">
          <span className="brand-mark" aria-hidden="true">BD</span>
          <div><strong>Biplab Das</strong><small>Advocate · LLB · Dhanbad</small></div>
        </div>
        <p>This demonstration is for informational presentation only. It is not legal advice, does not create an advocate-client relationship, and does not guarantee any result. Public profile details must be confirmed before publication.</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      <div className="mobile-contact-bar" aria-label="Contact options">
        <PlaceholderContactAction kind="Phone" />
        <PlaceholderContactAction kind="WhatsApp" />
        <a href="#contact">Enquire</a>
      </div>
    </div>
  );
}
