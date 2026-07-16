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

const demoSteps = [
  {
    number: "01",
    label: "Capture",
    title: "Save the moment, not a form.",
    copy: "A photo, voice note, drawing or one-line observation is enough.",
    result: "12 seconds to keep a real moment",
  },
  {
    number: "02",
    label: "Understand",
    title: "AI connects the quiet signals.",
    copy: "Morrow finds recurring interests and new ways of thinking across everyday moments.",
    result: "A useful insight — never a score",
  },
  {
    number: "03",
    label: "Remember",
    title: "A life story grows by itself.",
    copy: "Every moment finds its place on a timeline the child will one day own.",
    result: "One living portfolio, from birth onward",
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
  const [demoStep, setDemoStep] = useState(0);
  const [joined, setJoined] = useState(false);
  const current = stages[stage];
  const currentDemo = demoSteps[demoStep];

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
          <a href="#how">How it works</a>
          <a href="#portfolio">Growing with Leo</a>
          <a href="#principles">Our beliefs</a>
        </nav>
        <a className="nav-cta" href="#invitation">Begin a story <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker"><span /> A living portfolio for childhood</div>
        <h1>Turn small moments into<br /><em>a story of becoming.</em></h1>
        <p className="hero-copy">
          Capture a photo, voice, question or creation. Morrow notices the growth inside it — and builds a portfolio that belongs to your child.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#how">See how it works <span>↓</span></a>
          <a className="text-button" href="#portfolio">Watch Leo grow <span>→</span></a>
        </div>

        <div className="product-showcase" aria-label="Morrow product preview: capture a moment, receive an AI insight, and save it to a living portfolio">
          <div className="showcase-label label-capture"><i>1</i><span><strong>Capture</strong>a real moment</span></div>
          <div className="showcase-label label-understand"><i>2</i><span><strong>Understand</strong>what is changing</span></div>
          <div className="showcase-label label-remember"><i>3</i><span><strong>Remember</strong>the whole journey</span></div>
          <div className="product-window">
            <div className="product-topbar">
              <div className="mini-brand"><span className="brand-mark"><i /><i /><i /></span>morrow</div>
              <span>Leo&apos;s space</span>
              <div className="parent-avatar">M</div>
            </div>
            <div className="product-grid">
              <aside className="product-sidebar">
                <div className="child-chip"><span>L</span><div><strong>Leo</strong><small>6 months</small></div><i>⌄</i></div>
                <div className="product-nav">
                  <span className="selected"><i>◷</i>Today</span>
                  <span><i>⌁</i>Timeline</span>
                  <span><i>✦</i>Insights</span>
                  <span><i>◇</i>Creations</span>
                </div>
                <div className="ownership-mini"><small>Held by</small><div><span>M</span><span>D</span><strong>Family</strong></div></div>
              </aside>

              <section className="product-feed">
                <div className="feed-heading"><div><small>SUNDAY, JULY 16</small><h3>Today with Leo</h3></div><button>＋ Add a moment</button></div>
                <article className="moment-entry">
                  <div className="moment-photo" aria-hidden="true">
                    <div className="mini-sun" />
                    <div className="mini-leaf leaf-a" /><div className="mini-leaf leaf-b" /><div className="mini-leaf leaf-c" />
                    <span>5:42 PM</span>
                  </div>
                  <div className="moment-copy"><span className="moment-type">OBSERVATION</span><p>Leo watched the moving shadows of the leaves for three quiet minutes.</p><small>Recorded by Mama · <i>●</i> Private</small></div>
                </article>
                <div className="quick-capture">
                  <button><i>◎</i><span><strong>Photo</strong>Catch a detail</span></button>
                  <button><i>≋</i><span><strong>Voice</strong>Keep their sound</span></button>
                  <button><i>✎</i><span><strong>Note</strong>Write one line</span></button>
                </div>
              </section>

              <aside className="product-insight">
                <div className="ai-heading"><span>✦</span><div><small>MORROW NOTICED</small><strong>A pattern is emerging</strong></div></div>
                <div className="pattern-visual" aria-hidden="true">
                  <div className="pattern-center"><span>◉</span><small>Visual<br />curiosity</small></div>
                  <div className="pattern-node pn-one">Light</div><div className="pattern-node pn-two">Movement</div><div className="pattern-node pn-three">Leaves</div>
                  <i className="pattern-line pl-one" /><i className="pattern-line pl-two" /><i className="pattern-line pl-three" />
                </div>
                <p>Leo has returned to light and slow movement <strong>5 times</strong> this month.</p>
                <div className="saved-status"><span>✓</span><div><small>SAVED TO</small><strong>Living Portfolio</strong></div><i>↗</i></div>
                <div className="mini-timeline"><i /><span>First gaze<small>Jun 22</small></span><i /><span>Window light<small>Jul 02</small></span><i className="now" /><span>Leaf shadows<small>Today</small></span></div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-heading process-heading">
          <p className="eyebrow">How Morrow works</p>
          <h2>One moment in.<br /><em>A lifetime of meaning out.</em></h2>
        </div>

        <div className="demo-stepper" role="tablist" aria-label="How Morrow works">
          {demoSteps.map((item, index) => (
            <button key={item.label} role="tab" aria-selected={demoStep === index} className={demoStep === index ? "active" : ""} onClick={() => setDemoStep(index)}>
              <i>{item.number}</i><span>{item.label}</span><small>{index === 0 ? "A moment" : index === 1 ? "A pattern" : "A story"}</small>
            </button>
          ))}
        </div>

        <div className="demo-walkthrough">
          <div className={`demo-canvas step-${demoStep}`} key={demoStep}>
            {demoStep === 0 && (
              <div className="capture-canvas">
                <div className="capture-phone">
                  <div className="phone-top"><span>9:41</span><i>● ●●</i></div>
                  <div className="camera-scene"><div className="camera-sun" /><div className="camera-plant"><i /><i /><i /><i /></div><span>Hold onto this</span></div>
                  <div className="capture-controls"><button>Photo</button><button className="shutter" aria-label="Capture photo" /><button>Voice</button></div>
                </div>
                <div className="capture-options"><span>What can become a moment?</span><div><i>◎</i><strong>A look</strong></div><div><i>≋</i><strong>A sound</strong></div><div><i>✎</i><strong>A thought</strong></div><div><i>◇</i><strong>A creation</strong></div></div>
                <div className="capture-confirm"><span>✓</span><div><small>MOMENT SAVED</small><strong>Leaf shadows</strong><p>Photo · 1 line · 12 sec</p></div></div>
              </div>
            )}
            {demoStep === 1 && (
              <div className="understand-canvas">
                <div className="signal-map" aria-label="Five everyday moments connecting to the emerging interest visual curiosity">
                  <div className="signal-center"><span>✦</span><strong>Visual<br />curiosity</strong><small>Emerging thread</small></div>
                  <div className="signal-node sn1"><i className="tiny-photo tp1" />Window light<small>June 22</small></div>
                  <div className="signal-node sn2"><i className="tiny-photo tp2" />Moving water<small>June 29</small></div>
                  <div className="signal-node sn3"><i className="tiny-photo tp3" />Blue reflection<small>July 02</small></div>
                  <div className="signal-node sn4"><i className="tiny-photo tp4" />Leaf shadows<small>Today</small></div>
                  <div className="signal-connector sc1" /><div className="signal-connector sc2" /><div className="signal-connector sc3" /><div className="signal-connector sc4" />
                </div>
                <div className="insight-ticket"><small>MORROW&apos;S NOTE · JULY</small><h4>He is not just looking.<br />He is comparing change.</h4><p>Slow movement and reflected light now hold Leo&apos;s attention longer than they did four weeks ago.</p><div><span>Based on 5 moments</span><span>No score attached</span></div></div>
              </div>
            )}
            {demoStep === 2 && (
              <div className="remember-canvas">
                <div className="life-years"><button className="active">2026<small>First wonder</small></button><button>2030<small>First story</small></button><button>2034<small>First invention</small></button><button>2044<small>Their own space</small></button></div>
                <div className="portfolio-spread">
                  <div className="spread-year"><small>CHAPTER 01</small><strong>2026</strong><span>Learning to notice</span></div>
                  <div className="spread-memory sm1"><i /><div><small>JUNE 22</small><strong>The window at noon</strong><span>First sustained gaze</span></div></div>
                  <div className="spread-memory sm2"><i /><div><small>JULY 16</small><strong>Shadows in the leaves</strong><span>A pattern begins</span></div></div>
                  <div className="spread-thread"><span>✦</span><div><small>THREAD ACROSS TIME</small><strong>Visual curiosity</strong><p>2 moments · still unfolding</p></div></div>
                </div>
              </div>
            )}
          </div>
          <div className="demo-copy">
            <span className="demo-number">{currentDemo.number}</span>
            <h3>{currentDemo.title}</h3>
            <p>{currentDemo.copy}</p>
            <div><i>✓</i><strong>{currentDemo.result}</strong></div>
            <button onClick={() => setDemoStep((demoStep + 1) % demoSteps.length)}>{demoStep === 2 ? "Start again" : "Next: " + demoSteps[demoStep + 1].label}<span>→</span></button>
          </div>
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
