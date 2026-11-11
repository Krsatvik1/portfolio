<script>
  // Download page for the Keep Working widget (app repo: session-pulse, GitHub Krsatvik1/keep-working).
  // Visual first: the films and the widget's own loops carry it; words only where a picture can't.
  // Media in static/keep-working, rendered from the widget's views (Tools/Film.swift, Tools/InstallFilm.swift).
  const DOWNLOAD = "https://github.com/Krsatvik1/keep-working/releases/latest/download/KeepWorking.zip";
  const CMD = 'xattr -dr com.apple.quarantine "/Applications/Keep Working.app"';

  const states = [
    { clip: "working", name: "Working" },
    { clip: "image", name: "New image" },
    { clip: "needs", name: "Needs you" },
    { clip: "done", name: "Done" },
  ];

  let copied = false;
  async function copy() {
    try {
      await navigator.clipboard.writeText(CMD);
      copied = true;
      setTimeout(() => (copied = false), 1600);
    } catch {}
  }
</script>

<svelte:head>
  <title>Keep Working</title>
  <meta name="description" content="Your Claude sessions, on your Mac desktop. Free." />
  <meta property="og:title" content="Keep Working" />
  <meta property="og:description" content="Your Claude sessions, on your Mac desktop. Free." />
  <meta property="og:image" content="https://www.krsatvik.xyz/keep-working/poster.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
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
    <span class="meta">Free · macOS 14+</span>
  </section>

  <section class="film">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src="/keep-working/keep-working.mp4" poster="/keep-working/poster.jpg" autoplay muted loop playsinline controls preload="metadata"></video>
  </section>

  <section class="states">
    {#each states as s}
      <figure>
        <video src="/keep-working/loop-{s.clip}.mp4" poster="/keep-working/loop-{s.clip}.jpg" autoplay muted loop playsinline preload="auto" aria-label={s.name}></video>
        <figcaption>{s.name}</figcaption>
      </figure>
    {/each}
  </section>

  <section class="install">
    <h2>Install</h2>
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src="/keep-working/install.mp4" poster="/keep-working/install-poster.jpg" autoplay muted loop playsinline preload="metadata"></video>
    <div class="cmd">
      <span>Or skip steps 2–3 in Terminal</span>
      <code>{CMD}</code>
      <button type="button" on:click={copy}>{copied ? "Copied" : "Copy"}</button>
    </div>
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
  h2 { font-size: 15px; font-weight: 600; color: var(--mute); margin: 0 0 14px; letter-spacing: 0; }
  .install video { aspect-ratio: 16 / 9; border-radius: 16px; background: #ddd7cf; }

  .cmd { display: flex; align-items: center; gap: 12px; margin-top: 16px; flex-wrap: wrap; font-size: 13px; color: var(--mute); }
  .cmd code {
    flex: 1; min-width: 0; overflow-x: auto; white-space: nowrap; color: var(--ink);
    background: #e3ded6; border-radius: 8px; padding: 8px 12px; font-size: 12.5px;
  }
  .cmd button {
    border: 0; background: var(--ink); color: var(--paper); font: inherit; font-size: 13px; font-weight: 600;
    padding: 8px 14px; border-radius: 8px;
  }

  .end { max-width: 1200px; margin: clamp(80px, 10vw, 140px) auto 0; display: grid; justify-items: center; gap: 18px; }
  .by { font-size: 13px; color: var(--mute); text-decoration: none; }
  .by:hover { color: var(--ink); }

  @media (max-width: 800px) {
    .states { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  }
  @media (max-width: 600px) {
    .cmd span { width: 100%; }
  }
</style>
