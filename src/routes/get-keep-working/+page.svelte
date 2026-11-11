<script>
  // Download page for the Keep Working widget (app repo: session-pulse, GitHub Krsatvik1/keep-working).
  // Visual first: the films and the widget's own loops carry it; words only where a picture can't.
  // Media in static/keep-working, rendered from the widget's views (Tools/Film.swift, Tools/InstallFilm.swift).
  const DOWNLOAD = "https://github.com/Krsatvik1/keep-working/releases/latest/download/KeepWorking.dmg";
  const REPO = "https://github.com/Krsatvik1/keep-working";
  const URL = "https://www.krsatvik.xyz/get-keep-working";
  const OG = "https://www.krsatvik.xyz/keep-working/og.jpg";
  const LD = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Keep Working",
    description: "A macOS desktop widget that shows your Claude Code sessions live.",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS 14 or later",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    downloadUrl: "https://github.com/Krsatvik1/keep-working/releases/latest/download/KeepWorking.dmg",
    codeRepository: "https://github.com/Krsatvik1/keep-working",
    image: "https://www.krsatvik.xyz/keep-working/og.jpg",
    author: { "@type": "Person", name: "Kumar Satvik", url: "https://www.krsatvik.xyz" },
  };

  const states = [
    { clip: "working", name: "Working" },
    { clip: "image", name: "New image" },
    { clip: "needs", name: "Needs you" },
    { clip: "done", name: "Done" },
  ];

</script>

<svelte:head>
  <title>Keep Working: your Claude sessions on your Mac desktop</title>
  <meta name="description" content="A free, open-source macOS widget that shows your Claude Code sessions live on your desktop: working, a new image, needs you, done. One click opens the chat." />
  <link rel="canonical" href={URL} />
  <link rel="icon" type="image/png" href="/keep-working/icon.png" />
  <link rel="apple-touch-icon" href="/keep-working/icon.png" />
  <meta name="theme-color" content="#eeeae4" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={URL} />
  <meta property="og:title" content="Keep Working" />
  <meta property="og:description" content="Your Claude sessions, on your Mac desktop. Open source, macOS 14+." />
  <meta property="og:image" content={OG} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Keep Working: a Mac desktop widget showing a Claude session that needs you" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Keep Working" />
  <meta name="twitter:description" content="Your Claude sessions, on your Mac desktop. Open source, macOS 14+." />
  <meta name="twitter:image" content={OG} />
  {@html `<script type="application/ld+json">${JSON.stringify(LD)}</script>`}
</svelte:head>

<main class="kw">
  <header class="top">
    <img src="/keep-working/icon.png" alt="" width="30" height="30" />
  </header>

  <section class="hero">
    <h1>Keep Working</h1>
    <p>Your Claude sessions, on your desktop.</p>
    <a class="pill" href={DOWNLOAD}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v9m0 0L4.5 7.5M8 11l3.5-3.5M3 14h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Download for macOS
    </a>
    <span class="meta">Open source on <a href={REPO}>GitHub</a> · macOS 14+</span>
    <a class="first" href="#install">
      Read first: how to install
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 3v10m0 0-4-4m4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </section>

  <section class="film">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src="/keep-working/keep-working.mp4" poster="/keep-working/poster.jpg" autoplay muted loop playsinline controls preload="metadata"></video>
  </section>

  <section class="install" id="install">
    <h2>How to install</h2>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src="/keep-working/install.mp4" poster="/keep-working/install-poster.jpg" autoplay muted loop playsinline preload="metadata"></video>
  </section>

  <section class="states">
    {#each states as s}
      <figure>
        <video src="/keep-working/loop-{s.clip}.mp4" poster="/keep-working/loop-{s.clip}.jpg" autoplay muted loop playsinline preload="auto" aria-label={s.name}></video>
        <figcaption>{s.name}</figcaption>
      </figure>
    {/each}
  </section>


  <section class="contribute">
    <h2>Want to contribute?</h2>
    <p>It's open source. Read the code, open an issue, send a fix.</p>
    <a class="pill light" href={REPO}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      Check out the code
    </a>
  </section>

  <footer class="end">
    <a class="pill" href={DOWNLOAD}>Download for macOS</a>
    <a class="by" href="/" data-sveltekit-reload>Kumar Satvik</a>
  </footer>
</main>

<style>
  .kw {
    --paper: #eeeae4;
    --ink: #1b1816;
    --mute: #7a736c;
    background: var(--paper);
    color: var(--ink);
    font-family: "inter-variable", Inter, system-ui, sans-serif;
    min-height: 100dvh;
    padding: 0 clamp(16px, 4vw, 48px) 48px;
    letter-spacing: -0.01em;
  }
  :global(body:has(.kw)) { background: #eeeae4; }

  .top { display: flex; justify-content: center; align-items: center; max-width: 1200px; margin: 0 auto; padding: 18px 0; }
  .top img { display: block; }

  .pill {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--ink); color: var(--paper); text-decoration: none;
    font-weight: 600; font-size: 16px; padding: 14px 24px; border-radius: 999px;
    transition: transform 0.15s ease;
  }
  .pill:hover { transform: translateY(-1px); }

  .hero { text-align: center; margin: clamp(24px, 5vw, 56px) auto 0; display: grid; justify-items: center; gap: 14px; }
  h1 { font-size: clamp(48px, 8vw, 96px); line-height: 0.95; letter-spacing: -0.045em; font-weight: 700; margin: 0; }
  .hero p { font-size: clamp(17px, 1.6vw, 21px); color: var(--mute); margin: 0 0 10px; }
  .meta { font-size: 13px; color: var(--mute); }
  .meta a { color: inherit; text-underline-offset: 2px; }
  .meta a:hover { color: var(--ink); }
  .first {
    display: inline-flex; align-items: center; gap: 8px; margin-top: 10px;
    background: rgba(217, 119, 87, 0.14); color: #8a3d22; text-decoration: none;
    font-size: 15px; font-weight: 600; padding: 10px 18px; border-radius: 999px;
    box-shadow: inset 0 0 0 1px rgba(217, 119, 87, 0.35);
  }
  .first:hover { background: rgba(217, 119, 87, 0.22); }
  :global(html:has(.kw)) { scroll-behavior: smooth; }

  video { display: block; width: 100%; }
  .film { max-width: min(1200px, calc(72vh * 16 / 9)); margin: 48px auto 0; }
  .film video { aspect-ratio: 16 / 9; border-radius: 16px; background: #ddd7cf; box-shadow: 0 40px 80px -40px rgba(27, 24, 22, 0.5); }

  .states {
    max-width: 1200px; margin: clamp(80px, 10vw, 140px) auto 0;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  }
  .states figure { margin: 0; }
  .states video { aspect-ratio: 436 / 480; border-radius: 20px; background: #2a2725; object-fit: cover; }
  .states figcaption { margin-top: 12px; font-size: 15px; font-weight: 600; text-align: center; }

  .install { max-width: 1200px; margin: clamp(80px, 10vw, 140px) auto 0; }
  .install h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; letter-spacing: -0.03em; text-align: center; margin: 0 0 24px; }
  .install { scroll-margin-top: 24px; }
  .install video { aspect-ratio: 16 / 9; border-radius: 16px; background: #ddd7cf; }

  .contribute {
    max-width: 1200px; margin: clamp(80px, 10vw, 140px) auto 0; text-align: center;
    background: var(--ink); color: var(--paper); border-radius: 24px; padding: clamp(40px, 6vw, 72px) 24px;
    display: grid; justify-items: center; gap: 14px;
  }
  .contribute h2 { font-size: clamp(26px, 3vw, 36px); font-weight: 700; letter-spacing: -0.03em; margin: 0; }
  .contribute p { margin: 0 0 10px; color: rgba(238, 234, 228, 0.7); font-size: 16px; }
  .pill.light { background: var(--paper); color: var(--ink); }
  .end { max-width: 1200px; margin: clamp(80px, 10vw, 140px) auto 0; display: grid; justify-items: center; gap: 18px; }
  .by { font-size: 13px; color: var(--mute); text-decoration: none; }
  .by:hover { color: var(--ink); }

  @media (max-width: 800px) {
    .states { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
</style>
