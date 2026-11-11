<script>
  // Keep Working's download page. The app lives in its own repo (session-pulse, GitHub Krsatvik1/keep-working);
  // the zip is a GitHub release asset. Media in static/keep-working comes from the showcase film.
  const DOWNLOAD = "https://github.com/Krsatvik1/keep-working/releases/latest/download/KeepWorking.zip";

  const CMD = 'xattr -dr com.apple.quarantine "/Applications/Keep Working.app"';
  let copied = false;
  async function copy() {
    try {
      await navigator.clipboard.writeText(CMD);
      copied = true;
      setTimeout(() => (copied = false), 1600);
    } catch {}
  }

  const states = [
    { img: "state-1.jpg", name: "Working", line: "It walks the steps while Claude works." },
    { img: "state-2.jpg", name: "New image", line: "It snaps a photo, and the image fades in behind." },
    { img: "state-3.jpg", name: "Needs you", line: "It waves. One click opens that chat." },
    { img: "state-4.jpg", name: "Done", line: "It jumps, spins, and settles." },
  ];
</script>

<svelte:head>
  <title>Keep Working: a desktop widget for Claude</title>
  <meta name="description" content="A small macOS widget that shows what your Claude sessions are doing. Free." />
  <meta property="og:title" content="Keep Working" />
  <meta property="og:description" content="A small macOS widget that shows what your Claude sessions are doing. Free." />
  <meta property="og:image" content="https://www.krsatvik.xyz/keep-working/poster.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="kw">
  <header class="top">
    <span class="mark"><img src="/keep-working/icon.png" alt="" width="28" height="28" />Keep Working</span>
    <a href="/" data-sveltekit-reload>by Kumar Satvik</a>
  </header>

  <section class="get">
    <div>
      <h1>Keep Working</h1>
      <p class="lede">A little widget that shows what your Claude Code sessions are doing, right on your Mac desktop. Give Claude a job, go do something else.</p>
    </div>
    <div class="cta">
      <a class="button" href={DOWNLOAD}>
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2v9m0 0L4.5 7.5M8 11l3.5-3.5M3 14h10" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Download for macOS
      </a>
      <p class="small">Free. macOS 14 or later.<br />Works with Claude Code in the terminal and in the Claude app.</p>
    </div>
  </section>

  <section class="film">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src="/keep-working/keep-working.mp4" poster="/keep-working/poster.jpg" autoplay muted loop playsinline controls preload="metadata"></video>
    <p class="small">Read only: it looks at Claude's files on your Mac, and nothing leaves it.</p>
  </section>

  <section class="states">
    {#each states as s}
      <figure>
        <img src="/keep-working/{s.img}" alt="The widget showing {s.name.toLowerCase()}" loading="lazy" />
        <figcaption><b>{s.name}.</b> {s.line}</figcaption>
      </figure>
    {/each}
  </section>

  <section class="setup">
    <h2>Set it up in a minute</h2>
    <p class="small">It isn't from the App Store, so macOS asks you to allow it once.</p>

    <div class="howto">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video src="/keep-working/install.mp4" poster="/keep-working/install-poster.jpg" autoplay muted loop playsinline controls preload="metadata"></video>
    </div>

    <ol class="steps">
      <li><b>Unzip it</b> and drag Keep Working into Applications.</li>
      <li><b>Open it.</b> macOS stops it the first time. Click Done.</li>
      <li><b>System Settings, Privacy &amp; Security.</b> Click Open Anyway, confirm, then Touch ID or your password.</li>
      <li><b>Right-click the desktop,</b> choose Edit Widgets, find Keep Working, and pick a size.</li>
    </ol>

    <div class="alt">
      <p class="small">Or skip steps 2 and 3 with one line in Terminal. Copy it, open Terminal (⌘ Space, type Terminal), paste with ⌘V and press Return. It clears the downloaded-from-the-web flag on the app.</p>
      <div class="cmd">
        <code>{CMD}</code>
        <button type="button" on:click={copy}>{copied ? "Copied" : "Copy"}</button>
      </div>
    </div>
  </section>

  <footer class="end">
    <span class="mark"><img src="/keep-working/icon.png" alt="" width="22" height="22" />Keep Working</span>
    <a class="button small-button" href={DOWNLOAD}>Download for macOS</a>
  </footer>
</main>

<style>
  .kw {
    --paper: #eeeae4;
    --ink: #1b1816;
    --mute: #6f6862;
    --line: #d9d3cb;
    --clay: #d97757;
    background: var(--paper);
    color: var(--ink);
    font-family: "inter-variable", Inter, system-ui, sans-serif;
    min-height: 100dvh;
    padding: 0 clamp(16px, 4vw, 48px) 64px;
    font-size: 17px;
    line-height: 1.5;
    letter-spacing: -0.005em;
  }
  :global(body:has(.kw)) { background: #eeeae4; }

  .top {
    display: flex; justify-content: space-between; align-items: center;
    max-width: 1200px; margin: 0 auto; padding: 20px 0;
    font-size: 15px;
  }
  .top a { color: var(--mute); text-decoration: none; }
  .top a:hover { color: var(--ink); }
  .mark { display: inline-flex; align-items: center; gap: 10px; font-weight: 600; }

  .get {
    max-width: 1200px; margin: 12px auto 0;
    display: flex; justify-content: space-between; align-items: flex-end; gap: 32px;
  }
  .cta { flex: none; text-align: right; }
  .cta .small { margin: 10px 0 0; }
  h1 { font-size: clamp(40px, 6vw, 64px); line-height: 1; letter-spacing: -0.04em; font-weight: 700; margin: 0; }
  .lede { font-size: 18px; margin: 14px 0 0; max-width: 30em; }

  .film { max-width: min(1200px, calc(64vh * 16 / 9)); margin: 28px auto 0; text-align: center; }
  .film video {
    display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 14px;
    background: #222; box-shadow: 0 30px 60px -30px rgba(27, 24, 22, 0.45);
  }
  .button {
    display: inline-flex; align-items: center; gap: 10px;
    background: var(--ink); color: var(--paper); text-decoration: none;
    font-weight: 600; font-size: 16px; padding: 14px 24px; border-radius: 999px;
    transition: transform 0.15s ease, background 0.15s ease;
  }
  .button:hover { transform: translateY(-1px); background: #000; }
  .small { color: var(--mute); font-size: 14px; margin-top: 16px; }

  .states {
    max-width: 1200px; margin: 96px auto 0;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px 20px;
  }
  .states figure { margin: 0; }
  .states img { display: block; width: 100%; aspect-ratio: 9 / 10; object-fit: cover; border-radius: 14px; background: #2a2725; }
  .states figcaption { margin-top: 12px; font-size: 16px; color: var(--mute); }
  .states figcaption b { color: var(--ink); font-weight: 600; }

  .setup { max-width: 1200px; margin: 120px auto 0; }
  h2 { font-size: clamp(30px, 4vw, 44px); letter-spacing: -0.03em; line-height: 1.05; margin: 0; font-weight: 700; }
  .howto { margin-top: 36px; }
  .howto video { display: block; width: 100%; aspect-ratio: 16 / 9; border-radius: 14px; background: #e3ded6; }
  .steps {
    list-style: none; padding: 0; margin: 28px 0 0; counter-reset: step;
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  }
  .steps li { counter-increment: step; font-size: 15px; color: var(--mute); }
  .steps li b { color: var(--ink); font-weight: 600; }
  .steps li::before { content: counter(step) "  "; color: var(--clay); font-weight: 700; }

  .alt { margin-top: 36px; max-width: 640px; }
  .cmd { display: flex; align-items: center; gap: 8px; margin-top: 10px; background: #e3ded6; border-radius: 10px; padding: 6px 6px 6px 14px; }
  .cmd code { flex: 1; min-width: 0; overflow-x: auto; white-space: nowrap; font-size: 13px; color: var(--ink); padding: 6px 0; }
  .cmd button {
    flex: none; border: 0; background: var(--ink); color: var(--paper); font: inherit; font-size: 13px; font-weight: 600;
    padding: 7px 14px; border-radius: 7px;
  }

  .end {
    max-width: 1200px; margin: 120px auto 0; padding-top: 24px; border-top: 1px solid var(--line);
    display: flex; justify-content: space-between; align-items: center;
  }
  .small-button { padding: 10px 18px; font-size: 14px; }

  @media (max-width: 900px) {
    .steps, .states { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 700px) {
    .kw { font-size: 16px; }
    .get { display: block; }
    .cta { text-align: left; margin-top: 20px; }
    .states { gap: 20px 12px; margin-top: 64px; }
    .states figcaption { font-size: 14px; }
    .steps { grid-template-columns: 1fr; gap: 10px; }
    .steps li { font-size: 14px; }
    .setup, .end { margin-top: 80px; }
  }
</style>
