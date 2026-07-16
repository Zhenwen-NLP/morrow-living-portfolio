"use client";

import { FormEvent, useState } from "react";

const stages = [
  {
    age: "06 months",
    year: "2026",
    role: "Parent-led",
    title: "The first signs of wonder.",
    copy: "Leo watched the shadows of the leaves move across the wall for three quiet minutes. He seemed especially drawn to the changing light.",
    memory: "A new kind of attention",
    detail: "Observed by Mama · 01:14",
    color: "sun",
  },
  {
    age: "04 years",
    year: "2030",
    role: "Creating together",
    title: "Stories find a voice.",
    copy: "Leo told a story about a blue whale who carried a city on its back. It is his first story with a character who changes their mind.",
    memory: "The city on the whale",
    detail: "Told by Leo · 04:32",
    color: "sky",
  },
  {
    age: "08 years",
    year: "2034",
    role: "Child-owned",
    title: "An idea becomes real.",
    copy: "After three versions, Leo built a small game about helping lost birds navigate home using the stars. He chose to keep the failed versions, too.",
    memory: "Northbound — version 3",
    detail: "Created by Leo · 12 days",
    color: "clay",
  },
  {
    age: "18 years",
    year: "2044",
    role: "A life in their hands",
    title: "A childhood becomes a compass.",
    copy: "Across years of stories, maps and small inventions, a pattern appears: a lasting curiosity about how people find their way — through places and through life.",
    memory: "A thread worth following",
    detail: "Reflected on by Leo",
    color: "moss",
  },
];

const values = [
  ["01", "Curiosity over correctness", "The quality of a question matters more than finding the approved answer."],
  ["02", "Create before consume", "A child should leave a mark on the world before the world fills their attention."],
  ["03", "Beauty shapes thinking", "Calm, thoughtful surroundings are not decoration. They are part of how we learn."],
  ["04", "AI is a companion", "It remembers, notices and wonders alongside us — never replacing human judgment."],
];

export default function Home() {
  const [stage, setStage] = useState(0);
  const [joined, setJoined] = useState(false);
  const current = stages[stage];

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Morrow home">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span>morrow</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#portfolio">The portfolio</a>
          <a href="#principles">Our beliefs</a>
          <a href="#families">For families</a>
        </nav>
        <a className="nav-cta" href="#invitation">Begin a story <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span /> Designing childhood for the future</div>
        <h1>A childhood worth<br /><em>growing into.</em></h1>
        <p className="hero-copy">
          Morrow is a living record of how a child wonders, creates and becomes — thoughtfully held by AI, and owned by the family.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#portfolio">See Leo grow <span>↓</span></a>
          <button className="text-button" onClick={() => document.getElementById("manifesto")?.scrollIntoView({ behavior: "smooth" })}>Read our point of view <span>→</span></button>
        </div>

        <div className="hero-object" aria-label="A preview of Leo's living portfolio">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="memory-card main-memory">
            <div className="card-topline"><span>Today · 5:42 PM</span><span className="soft-pill">Noticed by Morrow</span></div>
            <div className="leaf-window" aria-hidden="true">
              <div className="sun-disc" />
              <div className="stem stem-one"><i /><i /></div>
              <div className="stem stem-two"><i /><i /></div>
              <span className="window-caption">3 minutes of wonder</span>
            </div>
            <p>Leo kept returning to the way light moved through the leaves.</p>
            <div className="card-footer"><span className="avatar">L</span><span>Leo · 6 months</span><span className="card-arrow">↗</span></div>
          </div>
          <div className="floating-note note-one">
            <span className="note-icon">✦</span>
            <span><small>A pattern is emerging</small><strong>Visual attention</strong></span>
          </div>
          <div className="floating-note note-two">
            <span className="audio-bars"><i /><i /><i /><i /><i /></span>
            <span><small>First saved sound</small><strong>00:18</strong></span>
          </div>
          <p className="hero-caption">Not more screen time.<br />More meaningful time.</p>
        </div>
      </section>

      <section className="belief-band" id="manifesto">
        <p className="eyebrow">A different starting point</p>
        <div className="belief-grid">
          <h2>We are not building<br />an education app.</h2>
          <div>
            <p>We are building the childhood we wish existed: full of curiosity, beauty, expression and room to find one&apos;s own way.</p>
            <p className="muted">AI is not the destination. It is the quiet infrastructure that helps a family notice what might otherwise pass unseen.</p>
          </div>
        </div>
        <div className="comparison" aria-label="A comparison of old and new models of education">
          <div><small>The old model</small><span>Learn</span><i>→</i><span>Test</span><i>→</i><span>Forget</span></div>
          <div><small>A living childhood</small><span>Wonder</span><i>→</i><span>Create</span><i>→</i><span>Become</span></div>
        </div>
      </section>

      <section className="portfolio-section" id="portfolio">
        <div className="section-heading">
          <p className="eyebrow">The living portfolio</p>
          <h2>Not a record of achievement.<br /><em>A record of becoming.</em></h2>
          <p>Watch the relationship evolve as a child grows. The memory stays; the ownership gently changes hands.</p>
        </div>

        <div className="timeline-tabs" role="tablist" aria-label="Leo's life stages">
          {stages.map((item, index) => (
            <button
              key={item.age}
              role="tab"
              aria-selected={stage === index}
              className={stage === index ? "active" : ""}
              onClick={() => setStage(index)}
            >
              <span>{item.age}</span><small>{item.year}</small>
            </button>
          ))}
        </div>

        <div className={`stage-panel ${current.color}`} key={current.age}>
          <div className="stage-story">
            <div className="role-pill">{current.role}</div>
            <p className="stage-year">Leo, {current.age}</p>
            <h3>{current.title}</h3>
            <p className="stage-copy">“{current.copy}”</p>
            <button className="round-link" aria-label={`Open ${current.memory}`}><span>Open this memory</span><i>↗</i></button>
          </div>
          <div className="artifact-card">
            <div className="artifact-visual" aria-hidden="true">
              <div className="artifact-shape shape-a" />
              <div className="artifact-shape shape-b" />
              <div className="artifact-shape shape-c" />
              <span>{String(stage + 1).padStart(2, "0")}</span>
            </div>
            <div className="artifact-meta"><small>{current.detail}</small><strong>{current.memory}</strong></div>
            <button aria-label="Play memory">{stage === 0 || stage === 1 ? "▶" : "↗"}</button>
          </div>
        </div>
      </section>

      <section className="intelligence-section">
        <div className="insight-visual">
          <div className="growth-card">
            <div className="growth-head"><span>Growth, gently understood</span><small>Last 6 months</small></div>
            <div className="growth-orbit">
              <div className="ring ring-one" /><div className="ring ring-two" /><div className="ring ring-three" />
              <div className="growth-center"><strong>Leo</strong><small>8 years</small></div>
              <span className="point p1">Express</span><span className="point p2">Make</span><span className="point p3">Wonder</span><span className="point p4">Care</span>
            </div>
            <div className="insight-summary"><span>↗</span><p><strong>Something is taking shape.</strong> Leo&apos;s stories, map-making and questions about stars are beginning to connect.</p></div>
          </div>
          <p className="visual-note">No scores.<br />No rankings.<br />Only signals worth noticing.</p>
        </div>
        <div className="intelligence-copy">
          <p className="eyebrow">Growth intelligence</p>
          <h2>AI that notices,<br /><em>without defining.</em></h2>
          <p>Morrow finds the quiet threads across thousands of ordinary moments — a recurring color, a deepening question, a new way of caring.</p>
          <div className="guardrails">
            <div><span>01</span><p><strong>Insight, never assessment</strong>We describe change without turning a child into a score.</p></div>
            <div><span>02</span><p><strong>Memory, with consent</strong>Families decide what is kept, shared or allowed to fade.</p></div>
            <div><span>03</span><p><strong>Human meaning comes first</strong>AI offers a lens. Parents and children decide what it means.</p></div>
          </div>
        </div>
      </section>

      <section className="ritual-section" id="families">
        <div className="section-heading light">
          <p className="eyebrow">A fifteen-minute family ritual</p>
          <h2>Less performing.<br /><em>More being together.</em></h2>
        </div>
        <div className="ritual-board">
          <div className="ritual-intro">
            <span className="date-badge">SUN<br /><strong>16</strong></span>
            <div><small>Tonight&apos;s invitation</small><h3>Invent a color<br />the world has never seen.</h3></div>
            <p>There is no right result. Give it a name, imagine where it lives, and make it with whatever is nearby.</p>
            <button>Begin together <span>→</span></button>
          </div>
          <div className="ritual-pieces" aria-hidden="true">
            <div className="paper paper-one"><i /><span>Mistberry</span></div>
            <div className="paper paper-two"><i /><i /><i /></div>
            <div className="color-stone stone-one" />
            <div className="color-stone stone-two" />
            <div className="pencil" />
            <span className="handwriting">“It&apos;s the color of a<br />cloud remembering rain.”</span>
          </div>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="section-heading compact">
          <p className="eyebrow">What we believe</p>
          <h2>A product is temporary.<br /><em>A point of view can endure.</em></h2>
        </div>
        <div className="values-list">
          {values.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span><h3>{title}</h3><p>{copy}</p><i>↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="ownership-section">
        <div className="ownership-copy">
          <p className="eyebrow">Designed for the parent. Growing with the child.</p>
          <h2>One home for twenty years of becoming.</h2>
          <p>The product&apos;s center of gravity moves as the child does. What begins as a parent&apos;s loving observation becomes a young person&apos;s own creative history.</p>
        </div>
        <div className="ownership-line">
          <span className="line-fill" />
          <div><i>01</i><strong>Held by you</strong><small>0—3</small></div>
          <div><i>02</i><strong>Made together</strong><small>3—7</small></div>
          <div><i>03</i><strong>Led by them</strong><small>7—13</small></div>
          <div><i>04</i><strong>Owned by them</strong><small>13+</small></div>
        </div>
      </section>

      <section className="invitation-section" id="invitation">
        <div className="invitation-mark" aria-hidden="true"><i /><i /><i /></div>
        <p className="eyebrow">An invitation to begin</p>
        <h2>One day, they will ask<br /><em>who they have always been.</em></h2>
        <p>Let&apos;s help them find more than photographs.</p>
        {joined ? (
          <div className="success-message"><span>✓</span><div><strong>You&apos;re part of the first chapter.</strong><small>We&apos;ll be in touch with a thoughtful hello.</small></div></div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="email">Your email address</label>
            <input id="email" type="email" required placeholder="Your email address" />
            <button type="submit">Join the first families <span>→</span></button>
          </form>
        )}
        <small className="privacy-note">A quiet note now and then. No noise, ever.</small>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark" aria-hidden="true"><i /><i /><i /></span><span>morrow</span></a>
        <p>We design childhood for the future,<br />one family at a time.</p>
        <div><a href="#portfolio">The portfolio</a><a href="#principles">Our beliefs</a><a href="mailto:hello@morrow.family">Say hello</a></div>
        <small>© 2026 Morrow Family · A concept for a more human future.</small>
      </footer>
    </main>
  );
}
