<script>
  /**
   * Blown — scroll story, ported from the No Spoon case study (frames A1–A4, B1–B3, C1)
   * and redrawn in this site's grid: the devices sit in a hairline cell over three columns,
   * the chapter and its steps sit in the fourth.
   *
   *   01 Luxury   laptop + phone scroll through four screens of blown.co.in together
   *   02 Control  tap a salon, its panel opens; the phone shows the CMS; typing renames the salon; publish
   *   03 Impact   the devices clear and the GA4 chart takes the cell
   *
   * Everything is scrubbed by scroll (P = 0..1 over the section). Device sizes are in --k units
   * (1k = 1px of a 1392px-wide stage), so the whole stage scales with one container width.
   * Below lg only the phone is shown.
   */
  import { onMount } from "svelte";
  import { borderAll } from "$lib/commonClasses.js";

  const img = (f) => `/blown/${f}`;

  // The live edit: the salon's name, the biggest type in the panel.
  const NAME_FROM = "Indiranagar";
  const NAME_TO = "Indiranagar Flagship";
  const HOURS = "Mon–Sun 9:30AM - 8:30PM";

  const chapters = [
    {
      n: "01",
      name: "Luxury",
      l: "A ₹2,599 haircut starts on a phone.",
      m: "The first screen has to feel worth it.",
    },
    {
      n: "02",
      name: "Control",
      l: "Four salons. No web team.",
      m: "Every change is made from a phone, then published.",
    },
    {
      n: "03",
      name: "Impact",
      l: "Six months on the new site.",
      m: "People don't just look. They tap Book.",
    },
  ];

  // In P (share of the section's scroll): a step lights from `from`, and clicking it lands on `at`.
  const steps = [
    { label: "The first screen", from: 0, at: 0.016 },
    { label: "How things unfold", from: 0.096, at: 0.128 },
    { label: "Find a salon", from: 0.192, at: 0.224 },
    { label: "Shop the look", from: 0.288, at: 0.32 },
    { label: "Open a salon", from: 0.37, at: 0.448 },
    { label: "Rename it", from: 0.47, at: 0.576 },
    { label: "Publish", from: 0.645, at: 0.72 },
    { label: "The numbers", from: 0.84, at: 0.9 },
  ];

  // GA4, read 26 Oct 2026. Full months only (GA was added 23 Apr; Oct was partial when read).
  const months = [
    { m: "May", users: 1203, taps: 504 },
    { m: "Jun", users: 1414, taps: 552 },
    { m: "Jul", users: 1461, taps: 535 },
    { m: "Aug", users: 1510, taps: 653 },
    { m: "Sep", users: 1626, taps: 543 },
  ];
  const max = Math.max(...months.map((d) => d.users));
  const fmt = (n) => n.toLocaleString("en-IN");

  const stats = [
    { v: 8517, label: "Visitors" },
    { v: 3366, label: "Taps on Book, WhatsApp or Call" },
    { v: 83, suffix: "%", label: "On a phone" },
    { v: 1587, label: "Pressed Book on the first screen" },
  ];

  let root;
  let now = { time: "9:41", date: "Mon 26 Oct" };

  onMount(() => {
    const d = new Date();
    now = {
      time: d.toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit" }),
      date: d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }).replace(",", ""),
    };

    const q = (s) => root.querySelector(s);
    const sticky = q(".bs-sticky");
    const stage = q(".bs-stage");
    const strip = q(".mb-strip");
    const stripM = q(".ip-strip");
    const dim = q(".mb-dim");
    const tap = q(".mb-tap");
    const panel = q(".mb-panel");
    const sites = [...root.querySelectorAll("[data-site]")];
    const cms = q(".cms");
    const ipPanel = q(".ip-panel");
    const status = q("[data-status]");
    const publish = q("[data-publish]");
    const toast = q("[data-toast]");
    const field = q("[data-edit-field]");
    const finalEl = q(".bs-final");
    const chartEl = q(".chart");
    const lives = [...root.querySelectorAll("[data-live]")];
    const lines = [...root.querySelectorAll(".bs-line")];
    const stepEls = [...root.querySelectorAll(".bs-step")];
    const narrow = matchMedia("(max-width: 1023px)");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");

    const clamp = (v) => Math.min(1, Math.max(0, v));
    const seg = (p, a, b) => clamp((p - a) / (b - a));
    const ease = (t) => t * t * (3 - 2 * t);
    const lerp = (a, b, t) => a + (b - a) * t;

    // typing: the new part of the name, one character at a time
    const added = NAME_TO.slice(NAME_FROM.length);
    const typed = (t) => NAME_FROM + added.slice(0, Math.round(t * added.length));

    let counted = false;
    const countUp = () => {
      if (counted) return;
      counted = true;
      if (reduced.matches) return;
      root.querySelectorAll("[data-count]").forEach((el) => {
        const end = +el.dataset.count;
        const suffix = el.dataset.suffix ?? "";
        const t0 = performance.now();
        const step = (t) => {
          const k = Math.min(1, (t - t0) / 1400);
          el.textContent = fmt(Math.round(end * (1 - Math.pow(1 - k, 3)))) + suffix;
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    };

    // the sticky sits under the site's sticky bar, so progress runs from its top offset
    let stickTop = 0;
    const measure = () => (stickTop = parseFloat(getComputedStyle(sticky).top) || 0);

    let last = "";
    let lastSite = "";
    let P = 0;
    const render = () => {
      const r = root.getBoundingClientRect();
      const total = r.height - sticky.offsetHeight;
      P = clamp((stickTop - r.top) / total);
      const p = clamp(P / 0.8); // the devices run over the first 80% of the scroll
      const fin = ease(seg(P, 0.82, 0.9)); // then they clear and the chart takes the cell

      // which of the four screens is showing (holds between moves)
      const screen =
        ease(seg(p, 0.06, 0.14)) + ease(seg(p, 0.18, 0.26)) + ease(seg(p, 0.3, 0.38)) - ease(seg(p, 0.42, 0.48));
      strip.style.transform = `translate3d(0, ${-screen * 25}%, 0)`;
      const phoneScreen = Math.min(screen, 3) + (p > 0.42 ? 3 - screen : 0); // phone keeps its last screen
      stripM.style.transform = `translate3d(0, ${-phoneScreen * 25}%, 0)`;

      // chapter
      const control = p >= 0.44;
      const impact = P >= 0.84;
      lines[0].classList.toggle("is-on", !control && !impact);
      lines[1].classList.toggle("is-on", control && !impact);
      lines[2].classList.toggle("is-on", impact);

      // final: devices lift and fade, the chart rises into the same cell
      stage.style.opacity = String(1 - fin);
      stage.style.translate = `0 ${-fin * 40}px`;
      const show = ease(seg(P, 0.86, 0.93));
      finalEl.style.opacity = String(show);
      finalEl.style.translate = `0 ${(1 - show) * 32}px`;
      finalEl.style.pointerEvents = show > 0.5 ? "" : "none";
      root.classList.toggle("is-final", fin > 0.5);
      if (P > 0.86 && !chartEl.classList.contains("is-in")) {
        chartEl.classList.add("is-in");
        countUp();
      }

      // tap marker, then the salon panel slides in
      const tIn = seg(p, 0.48, 0.52);
      const tOut = seg(p, 0.54, 0.57);
      tap.style.opacity = String(tIn * (1 - tOut));
      tap.style.transform = `scale(${lerp(1.6, 1, ease(tIn))})`;
      const open = ease(seg(p, 0.52, 0.58));
      panel.style.transform = `translate3d(${(1 - open) * 101}%, 0, 0)`;
      dim.style.opacity = String(open);

      // phone: site → CMS (both layouts), and on narrow screens CMS → live panel at the end
      const toCms = ease(seg(p, 0.44, 0.48));
      const toPanel = narrow.matches ? ease(seg(p, 0.9, 0.95)) : 0;
      cms.style.opacity = String(toCms * (1 - toPanel));
      cms.style.transform = `translate3d(0, ${(1 - toCms) * 6}%, 0)`;
      ipPanel.style.opacity = String(toPanel);
      root.classList.toggle("is-cms", toCms > 0.5 && toPanel < 0.5);

      // typing, mirrored on the site
      const typing = seg(p, 0.6, 0.8);
      const text = typed(typing);
      if (text !== last) {
        lives.forEach((el) => (el.textContent = text));
        last = text;
      }
      // the site only changes once it's published, with a quick reload on the panel
      const site = p >= 0.85 ? NAME_TO : NAME_FROM;
      if (site !== lastSite) {
        sites.forEach((el) => (el.textContent = site));
        if (lastSite) {
          panel.classList.remove("is-reload");
          void panel.offsetWidth;
          panel.classList.add("is-reload");
        }
        lastSite = site;
      }
      field.classList.toggle("is-focus", typing > 0 && p < 0.84);
      const changed = typing > 0 && p < 0.85;
      status.textContent = changed ? "Status: Changed" : "Status: Published";
      publish.classList.toggle("is-ready", changed);
      publish.classList.toggle("is-press", p >= 0.82 && p < 0.85);
      toast.classList.toggle("is-on", p >= 0.85 && p < 0.97);

      // steps
      stepEls.forEach((b, i) => {
        const next = steps[i + 1] ? steps[i + 1].from : 2;
        b.classList.toggle("is-on", P >= steps[i].from && P < next);
      });
    };

    let raf = 0;
    const onScroll = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          render();
        });
    };
    const onResize = () => {
      measure();
      onScroll();
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onResize);
    narrow.addEventListener("change", onResize);
    measure();
    render();

    // the devices drift a little toward the cursor, like the cards on the home page
    let tx = 0, ty = 0, cx = 0, cy = 0, drifting = 0;
    const drift = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      stage.style.transform = `translate3d(${cx * 18}px, ${cy * 12}px, 0)`;
      drifting = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(drift) : 0;
    };
    const onPointer = (e) => {
      if (reduced.matches) return;
      tx = e.clientX / innerWidth - 0.5;
      ty = e.clientY / innerHeight - 0.5;
      if (!drifting) drifting = requestAnimationFrame(drift);
    };
    const hover = matchMedia("(hover: hover)").matches;
    if (hover) addEventListener("pointermove", onPointer);

    // steps jump to their place in the story
    const jumps = stepEls.map((b, i) => {
      const go = () => {
        const r = root.getBoundingClientRect();
        const total = r.height - sticky.offsetHeight;
        scrollTo({ top: scrollY + r.top - stickTop + steps[i].at * total, behavior: "smooth" });
      };
      b.addEventListener("click", go);
      return go;
    });

    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onResize);
      narrow.removeEventListener("change", onResize);
      if (hover) removeEventListener("pointermove", onPointer);
      stepEls.forEach((b, i) => b.removeEventListener("click", jumps[i]));
      cancelAnimationFrame(raf);
      cancelAnimationFrame(drifting);
    };
  });
</script>

<section class="bs col-span-4" bind:this={root} aria-label="Blown, told in three chapters">
  <div class="bs-sticky">
    <div class="bs-grid">
      <!-- devices, then the chart, in one cell over three columns -->
      <div class="{borderAll} bs-cell bg-white bg-opacity-70">
        <div class="bs-stage" aria-hidden="true">
          <!-- laptop -->
          <div class="mb">
            <div class="mb-lid">
              <div class="mb-display">
                <div class="mb-bar">
                  <span class="mb-dots"><i></i><i></i><i></i></span>
                  <span class="mb-url">blown.co.in</span>
                  <span class="mb-clock">{now.date} {now.time}</span>
                </div>
                <div class="mb-screen">
                  <img class="mb-strip" src={img("site-desktop.jpg")} alt="" decoding="async" />
                  <div class="mb-dim"></div>
                  <div class="mb-tap"><span></span></div>
                  <div class="mb-panel">
                    <img src={img("panel-desktop.jpg")} alt="" decoding="async" />
                    <div class="mb-name" data-site>{NAME_FROM}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-base"><span></span></div>
          </div>

          <!-- phone -->
          <div class="ip">
            <i class="ip-btn ip-btn--a"></i><i class="ip-btn ip-btn--u"></i><i class="ip-btn ip-btn--d"></i><i
              class="ip-btn ip-btn--p"
            ></i>
            <div class="ip-body">
              <div class="ip-display">
                <div class="ip-status">
                  <span>{now.time}</span>
                  <svg viewBox="0 0 40 9" aria-hidden="true"
                    ><rect x="0" y="6" width="2" height="3"></rect><rect x="3" y="4.5" width="2" height="4.5"></rect><rect
                      x="6"
                      y="3"
                      width="2"
                      height="6"
                    ></rect><rect x="9" y="1" width="2" height="8"></rect><path
                      d="M14.5 3.2a6 6 0 0 1 8 0l-.9.9a4.7 4.7 0 0 0-6.2 0zM16.2 4.9a3.5 3.5 0 0 1 4.6 0l-.9.9a2.2 2.2 0 0 0-2.8 0zM18.5 6.4l1 1-1 1-1-1z"
                    ></path><rect
                      x="25.5"
                      y="0.5"
                      width="12"
                      height="7.5"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      stroke-opacity="0.5"
                    ></rect><rect x="27" y="2" width="9" height="4.5" rx="1"></rect></svg
                  >
                </div>
                <div class="ip-screen">
                  <img class="ip-strip" src={img("site-mobile.jpg")} alt="" decoding="async" />

                  <!-- Payload CMS, the salon's edit screen (rebuilt from the real admin) -->
                  <div class="cms">
                    <div class="cms-crumb">Studios / Indiranagar</div>
                    <div class="cms-title"><span data-live>{NAME_FROM}</span><em data-status>Status: Published</em></div>
                    <div class="cms-actions">
                      <span class="cms-btn">Save Draft</span>
                      <span class="cms-btn cms-btn--pub" data-publish>Publish changes</span>
                    </div>
                    <div class="cms-field cms-field--edit" data-edit-field>
                      <span>Name *</span><b><span data-live>{NAME_FROM}</span><i class="cms-caret"></i></b>
                    </div>
                    <div class="cms-field"><span>Editorial_label</span><b>THE COLOUR LAB</b></div>
                    <div class="cms-field"><span>Address</span><b>100 Feet Road, Indiranagar, Bangalore…</b></div>
                    <div class="cms-field"><span>Hours</span><b>{HOURS}</b></div>
                    <div class="cms-section">Hero Media (carousel)</div>
                    <div class="cms-media"><i></i>0A9A3048.jpg</div>
                    <div class="cms-toast" data-toast>
                      <svg viewBox="0 0 14 14"><path d="M2 7.5 L5.5 11 L12 3.5"></path></svg>Studio successfully published.
                    </div>
                  </div>

                  <!-- phone-only ending: the live salon panel -->
                  <div class="ip-panel">
                    <img src={img("panel-mobile.jpg")} alt="" decoding="async" />
                    <div class="ip-name" data-site>{NAME_FROM}</div>
                  </div>
                </div>
                <div class="ip-island"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 03 Impact: the devices clear and the chart takes the cell -->
        <div class="bs-final" aria-label="Impact">
          <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">Each month, May to Sep 2026</div>
          <figure class="chart">
            <div class="chart-cols">
              {#each months as d, i}
                <button
                  type="button"
                  class="col"
                  style="--i:{i};--u:{d.users / max};--t:{d.taps / max}"
                  aria-label="{d.m}: {fmt(d.users)} visitors, {d.taps} booking taps"
                >
                  <span class="col-u"></span><span class="col-t"></span>
                  <span class="col-tip"><b>{fmt(d.users)}</b> visitors<br /><b>{d.taps}</b> booking taps</span>
                </button>
              {/each}
            </div>
            <div class="chart-months text-cap_sm lg:text-cap_lg font-bold uppercase" aria-hidden="true">
              {#each months as d}<span>{d.m}</span>{/each}
            </div>
            <figcaption class="chart-key text-cap_sm lg:text-cap_lg font-bold uppercase">
              <span><i class="sw sw--u"></i>Visitors</span>
              <span><i class="sw sw--t"></i>Taps on Book, WhatsApp or Call</span>
            </figcaption>
          </figure>
          <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">In all, 23 Apr to 25 Oct 2026</div>
          <div class="stats">
            {#each stats as s}
              <div class="{borderAll} stat">
                <b
                  class="font-['ringold-sans'] text-h2_sm lg:text-h2_lg font-normal"
                  data-count={s.v}
                  data-suffix={s.suffix ?? ""}>{fmt(s.v)}{s.suffix ?? ""}</b
                >
                <span class="text-base_sm lg:text-base_lg">{s.label}</span>
              </div>
            {/each}
          </div>
          <p class="bs-source text-base_sm lg:text-base_lg">
            Google Analytics 4. Taps are clicks, not completed bookings, and one visitor can tap more than once.
          </p>
        </div>
      </div>

      <!-- chapter and steps in the fourth column -->
      <div class="bs-side">
        <div class="{borderAll} bs-lines bg-white" aria-live="polite">
          {#each chapters as c, i}
            <div class="bs-line" class:is-on={i === 0}>
              <div class="text-cap_sm lg:text-cap_lg font-bold uppercase">{c.n} / {c.name}</div>
              <p class="bs-l font-['ringold-sans']">{c.l}</p>
              <p class="bs-m text-base_sm lg:text-base_lg">{c.m}</p>
            </div>
          {/each}
        </div>
        <ol class="bs-steps" aria-label="Story steps">
          {#each steps as s, i}
            <li>
              <button type="button" class="{borderAll} bs-step" aria-label={s.label}>
                <span class="bs-n font-['ringold-sans']">{i + 1}</span>
                <span class="bs-label text-cap_sm lg:text-cap_lg font-bold uppercase">{s.label}</span>
              </button>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</section>

<style>
  /* ---------- shell: the sticky sits under the site's 5dvi (lg) / 30dvi (sm) sticky bars ---------- */
  .bs {
    --top: 30dvi;
    --ink: #1c1917;
    --line: #e7e5e4;
    position: relative;
    height: 800vh;
    margin-top: 15dvi;
  }
  .bs-sticky {
    position: sticky;
    top: var(--top);
    height: calc(100svh - var(--top));
    padding: 3dvi 0 4dvi;
  }
  .bs-grid {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .bs-cell {
    flex: 1;
    min-height: 0;
    container-type: size;
    display: grid;
    place-items: center;
  }

  /* ---------- side: chapter + steps ---------- */
  .bs-side {
    display: flex;
    flex-direction: column;
  }
  .bs-lines {
    position: relative;
    height: 40dvi;
  }
  .bs-line {
    position: absolute;
    inset: 0;
    padding: 5dvi;
    display: flex;
    flex-direction: column;
    gap: 2dvi;
    pointer-events: none;
  }
  .bs-line > * {
    opacity: 0;
    transform: translateY(0.6em);
    transition:
      opacity 0.4s ease,
      transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .bs-line:global(.is-on) > * {
    opacity: 1;
    transform: none;
  }
  .bs-line:global(.is-on) > * + * {
    transition-delay: 0.06s;
  }
  .bs-l {
    font-size: 7dvi;
    line-height: 6.6dvi;
  }
  .bs-steps {
    display: flex;
  }
  .bs-steps li {
    flex: 1;
  }
  .bs-steps li:nth-child(5),
  .bs-steps li:nth-child(8) {
    margin-left: 2dvi;
  }
  .bs-step {
    width: 100%;
    height: 10dvi;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    transition:
      background 0.2s,
      color 0.2s;
  }
  .bs-step:global(.is-on) {
    background: var(--ink);
    color: #fff;
  }
  .bs-step:hover:not(:global(.is-on)) {
    background: var(--line);
  }
  .bs-n {
    font-size: 6dvi;
    line-height: 1;
    margin-top: 1dvi;
  }
  .bs-label {
    display: none;
  }

  @media (min-width: 1024px) {
    .bs {
      --top: 5dvi;
      height: 900vh;
      margin-top: 5dvi;
    }
    .bs-sticky {
      padding: 2dvi 0;
    }
    .bs-grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .bs-cell {
      grid-column: span 3;
    }
    .bs-side {
      justify-content: space-between;
    }
    .bs-lines {
      flex: 1;
      height: auto;
      margin-bottom: 2dvi;
    }
    .bs-line {
      padding: 2dvi;
      gap: 1dvi;
    }
    .bs-l {
      font-size: 3dvi;
      line-height: 2.8dvi;
      margin-top: 0.4dvi;
    }
    .bs-steps {
      flex-direction: column;
    }
    .bs-steps li:nth-child(5),
    .bs-steps li:nth-child(8) {
      margin: 1dvi 0 0;
    }
    .bs-step {
      height: 3.2dvi;
      align-items: baseline;
      padding-top: 0.9dvi;
      justify-content: flex-start;
      gap: 1dvi;
      padding: 0 1dvi 0 0;
      text-align: left;
    }
    .bs-n {
      width: 3.2dvi;
      flex-shrink: 0;
      text-align: center;
      font-size: 1.8dvi;
      margin-top: 0;
    }
    .bs-label {
      display: block;
    }
  }

  /* ---------- stage (1k = 1px of a 1156px stage: the 1064 laptop base, then the 232 phone overlapping it by 140; 680 tall) ---------- */
  .bs-stage {
    --k: calc(100cqw / 1156);
    width: min(calc(100cqw - 4dvi), calc((100cqh - 4dvi) * 1.7));
    container-type: inline-size;
    display: flex;
    align-items: flex-end;
    will-change: transform;
  }

  /* laptop, drawn in hairlines like the grid */
  .mb {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }
  .mb-lid {
    padding: calc(var(--k) * 15) calc(var(--k) * 18) calc(var(--k) * 20);
    background: #fff;
    border: 1px solid var(--ink);
    border-bottom: 0;
    border-radius: calc(var(--k) * 14) calc(var(--k) * 14) 0 0;
  }
  .mb-display {
    position: relative;
    width: calc(var(--k) * 962);
    display: flex;
    flex-direction: column;
    border: 1px solid var(--ink);
    overflow: hidden;
    background: #000;
  }
  .mb-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(var(--k) * 24);
    padding: 0 calc(var(--k) * 10);
    flex-shrink: 0;
    background: #fff;
    border-bottom: 1px solid var(--ink);
    font-size: calc(var(--k) * 9.5);
    color: var(--ink);
  }
  .mb-dots {
    display: flex;
    gap: calc(var(--k) * 5);
    width: calc(var(--k) * 120);
  }
  .mb-dots i {
    width: calc(var(--k) * 8);
    height: calc(var(--k) * 8);
    border: 1px solid var(--ink);
    border-radius: 50%;
  }
  .mb-url {
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .mb-clock {
    width: calc(var(--k) * 120);
    text-align: right;
    font-variant-numeric: tabular-nums;
  }
  .mb-screen {
    position: relative;
    height: calc(var(--k) * 601);
    overflow: hidden;
    background: #050505;
  }
  .mb-strip {
    width: 100%;
    max-width: none;
    will-change: transform;
  }
  .mb-dim {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(6px);
    opacity: 0;
  }
  .mb-tap {
    position: absolute;
    left: calc(var(--k) * 337);
    top: calc(var(--k) * 383);
    width: calc(var(--k) * 40);
    height: calc(var(--k) * 40);
    border-radius: 50%;
    border: 1.5px solid #fff;
    background: rgba(255, 255, 255, 0.14);
    display: grid;
    place-items: center;
    opacity: 0;
  }
  .mb-tap span {
    width: 25%;
    height: 25%;
    border-radius: 50%;
    background: #fff;
  }
  .mb-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 44.375%;
    transform: translate3d(101%, 0, 0);
    will-change: transform;
    box-shadow: -1px 0 0 #1c1c1c;
  }
  .mb-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
  /* the live salon name, set like Blown's panel heading (Inter 200) */
  .mb-name,
  .ip-name {
    position: absolute;
    font-family: "inter-variable", "Inter", sans-serif;
    font-weight: 200;
    color: #e5e4e2;
    white-space: nowrap;
  }
  .mb-name {
    left: calc(var(--k) * 16);
    top: calc(var(--k) * 132.3);
    font-size: calc(var(--k) * 18.7);
    line-height: calc(var(--k) * 28);
    letter-spacing: calc(var(--k) * -0.33);
  }
  .mb-panel:global(.is-reload) {
    animation: reload 0.6s ease;
  }
  @keyframes reload {
    0% {
      opacity: 0.25;
    }
    100% {
      opacity: 1;
    }
  }
  .mb-base {
    position: relative;
    width: calc(var(--k) * 1064);
    height: calc(var(--k) * 15);
    background: #fff;
    border: 1px solid var(--ink);
    border-radius: 0 0 calc(var(--k) * 14) calc(var(--k) * 14);
  }
  .mb-base span {
    position: absolute;
    top: -1px;
    left: calc(50% - var(--k) * 75);
    width: calc(var(--k) * 150);
    height: calc(var(--k) * 6);
    border: 1px solid var(--ink);
    border-top: 0;
    border-radius: 0 0 calc(var(--k) * 6) calc(var(--k) * 6);
  }

  /* phone, same hairline */
  .ip {
    position: relative;
    z-index: 1;
    margin-left: calc(var(--k) * -140);
    flex-shrink: 0;
    width: calc(var(--k) * 232);
    height: calc(var(--k) * 484);
  }
  .ip-btn {
    position: absolute;
    width: calc(var(--k) * 4);
    background: #fff;
    border: 1px solid var(--ink);
  }
  .ip-btn--a {
    left: calc(var(--k) * -3);
    top: calc(var(--k) * 88);
    height: calc(var(--k) * 18);
  }
  .ip-btn--u {
    left: calc(var(--k) * -3);
    top: calc(var(--k) * 122);
    height: calc(var(--k) * 34);
  }
  .ip-btn--d {
    left: calc(var(--k) * -3);
    top: calc(var(--k) * 166);
    height: calc(var(--k) * 34);
  }
  .ip-btn--p {
    right: calc(var(--k) * -3);
    top: calc(var(--k) * 136);
    height: calc(var(--k) * 52);
  }
  .ip-body {
    position: absolute;
    inset: 0;
    padding: calc(var(--k) * 7);
    background: #fff;
    border: 1px solid var(--ink);
    border-radius: calc(var(--k) * 38);
  }
  .ip-display {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--ink);
    border-radius: calc(var(--k) * 31);
    overflow: hidden;
    background: #000;
  }
  .ip-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(var(--k) * 30);
    padding: calc(var(--k) * 2) calc(var(--k) * 20) 0 calc(var(--k) * 26);
    flex-shrink: 0;
    font-weight: 500;
    font-size: calc(var(--k) * 10);
    color: #fff;
    background: #000;
    transition: background 0.4s;
  }
  .ip-status svg {
    width: calc(var(--k) * 40);
    height: calc(var(--k) * 9);
    fill: currentColor;
  }
  .bs:global(.is-cms) .ip-status {
    background: #141414;
  }
  .ip-screen {
    position: relative;
    flex: 1;
    overflow: hidden;
    background: #000;
  }
  .ip-strip {
    width: 100%;
    max-width: none;
    will-change: transform;
  }
  .ip-island {
    position: absolute;
    top: calc(var(--k) * 6);
    left: calc(50% - var(--k) * 33);
    width: calc(var(--k) * 66);
    height: calc(var(--k) * 19);
    background: #000;
    border-radius: calc(var(--k) * 10);
  }
  .ip-panel {
    position: absolute;
    inset: 0;
    opacity: 0;
    background: #050505;
  }
  .ip-panel img {
    width: 100%;
    max-width: none;
  }
  .ip-name {
    left: calc(var(--k) * 13.8);
    top: calc(var(--k) * 109.7);
    font-size: calc(var(--k) * 15.5);
    line-height: calc(var(--k) * 23.3);
    letter-spacing: calc(var(--k) * -0.28);
  }

  /* Payload CMS, scaled from its 330px design */
  .cms {
    --c: calc(var(--k) * 0.6545);
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: calc(var(--c) * 14);
    padding: calc(var(--c) * 10) calc(var(--c) * 18) 0;
    background: #141414;
    font-family: "inter-variable", "Inter", sans-serif;
    color: #ededed;
    opacity: 0;
  }
  .cms-crumb {
    font-size: calc(var(--c) * 11);
    color: #9a9a9a;
  }
  .cms-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cms-title {
    gap: calc(var(--c) * 8);
  }
  .cms-title span {
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: calc(var(--c) * 24);
    font-weight: 500;
    letter-spacing: -0.01em;
  }
  .cms-title em {
    flex-shrink: 0;
    white-space: nowrap;
    font-style: normal;
    font-size: calc(var(--c) * 10);
    color: #9a9a9a;
  }
  .cms-actions {
    display: flex;
    gap: calc(var(--c) * 8);
    padding-bottom: calc(var(--c) * 14);
    border-bottom: 1px solid #2a2a2a;
  }
  .cms-btn {
    flex: 1;
    height: calc(var(--c) * 32);
    display: grid;
    place-items: center;
    border: 1px solid #3a3a3a;
    border-radius: calc(var(--c) * 4);
    font-size: calc(var(--c) * 11);
    color: #8a8a8a;
    transition:
      background 0.3s,
      color 0.3s,
      transform 0.15s;
  }
  .cms-btn--pub {
    border-color: transparent;
    background: #5a5a5a;
    color: #ededed;
  }
  .cms-btn--pub:global(.is-ready) {
    background: #ededed;
    color: #141414;
    font-weight: 500;
  }
  .cms-btn--pub:global(.is-press) {
    transform: scale(0.95);
    background: #bdbdbd;
  }
  .cms-field {
    display: flex;
    flex-direction: column;
    gap: calc(var(--c) * 6);
  }
  .cms-field > span {
    font-size: calc(var(--c) * 11);
    color: #bdbdbd;
  }
  .cms-field > b {
    display: flex;
    align-items: center;
    gap: 1px;
    height: calc(var(--c) * 36);
    padding: 0 calc(var(--c) * 10);
    background: #222;
    border: 1px solid #2e2e2e;
    border-radius: calc(var(--c) * 3);
    font-size: calc(var(--c) * 12);
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    transition: border-color 0.25s;
  }
  .cms-caret {
    width: 1px;
    height: calc(var(--c) * 15);
    background: #ededed;
    opacity: 0;
  }
  .cms-field--edit:global(.is-focus) > b {
    border-color: #ededed;
  }
  .cms-field--edit:global(.is-focus) .cms-caret {
    animation: caret 1s steps(1) infinite;
  }
  @keyframes caret {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
  .cms-section {
    padding-top: calc(var(--c) * 10);
    font-size: calc(var(--c) * 16);
    font-weight: 500;
  }
  .cms-media {
    display: flex;
    align-items: center;
    gap: calc(var(--c) * 10);
    height: calc(var(--c) * 56);
    padding: 0 calc(var(--c) * 10);
    background: #1c1c1c;
    border: 1px solid #2e2e2e;
    border-radius: calc(var(--c) * 3);
    font-size: calc(var(--c) * 11);
    color: #bdbdbd;
  }
  .cms-media i {
    width: calc(var(--c) * 36);
    height: calc(var(--c) * 36);
    background: #3a3a3a;
    border-radius: 2px;
  }
  .cms-toast {
    position: absolute;
    left: calc(var(--c) * 14);
    right: calc(var(--c) * 14);
    bottom: calc(var(--c) * 22);
    height: calc(var(--c) * 44);
    display: flex;
    align-items: center;
    gap: calc(var(--c) * 10);
    padding: 0 calc(var(--c) * 14);
    background: #ededed;
    border-radius: calc(var(--c) * 6);
    font-size: calc(var(--c) * 12);
    font-weight: 500;
    color: #141414;
    opacity: 0;
    transform: translateY(40%);
    transition:
      opacity 0.35s ease,
      transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .cms-toast svg {
    width: calc(var(--c) * 14);
    height: calc(var(--c) * 14);
    fill: none;
    stroke: #141414;
    stroke-width: 1.8;
  }
  .cms-toast:global(.is-on) {
    opacity: 1;
    transform: none;
  }

  /* below lg: the phone alone */
  @media (max-width: 1023px) {
    .bs-stage {
      --k: calc(100cqw / 232);
      width: min(calc(100cqw - 10dvi), calc((100cqh - 10dvi) * 0.479));
    }
    .mb {
      display: none;
    }
    .ip {
      margin-left: 0;
    }
  }

  /* ---------- 03 Impact ---------- */
  .bs-final {
    position: absolute;
    inset: 0;
    padding: 5dvi;
    display: flex;
    flex-direction: column;
    gap: 3dvi;
    opacity: 0;
    pointer-events: none;
  }
  .chart {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
  .chart-cols {
    flex: 1;
    min-height: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 1px solid var(--ink);
  }
  .col {
    position: relative;
    width: 14%;
    height: 100%;
    padding: 0;
    border: 0;
    background: none;
    transition: opacity 0.3s;
  }
  .col-u,
  .col-t {
    position: absolute;
    bottom: 0;
    width: 48%;
    transform-origin: bottom;
    transform: scaleY(0);
    transition: transform 1.1s cubic-bezier(0.65, 0, 0.35, 1);
    transition-delay: calc(var(--i) * 70ms);
  }
  .col-u {
    left: 0;
    height: calc(var(--u) * 92%);
    background: var(--line);
    border: 1px solid var(--ink);
    border-bottom: 0;
  }
  .col-t {
    right: 0;
    border: 1px solid var(--ink);
    border-bottom: 0;
    height: calc(var(--t) * 92%);
    background: var(--ink);
    transition-delay: calc(var(--i) * 70ms + 350ms);
  }
  .chart:global(.is-in) .col-u,
  .chart:global(.is-in) .col-t {
    transform: none;
  }
  .col-tip {
    position: absolute;
    left: 50%;
    bottom: calc(var(--u) * 92% + 10px);
    transform: translate(-50%, 6px);
    padding: 8px 10px;
    background: var(--ink);
    color: #fff;
    font-size: 13px;
    line-height: 1.35;
    white-space: nowrap;
    text-align: left;
    opacity: 0;
    pointer-events: none;
    transition:
      opacity 0.25s,
      transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
  }
  .col-tip b {
    font-weight: 700;
  }
  .col:hover .col-tip,
  .col:focus-visible .col-tip {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  .chart-cols:hover .col:not(:hover) {
    opacity: 0.45;
  }
  .chart-months {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5dvi;
  }
  .chart-months span {
    width: 14%;
  }
  .chart-key {
    display: flex;
    flex-wrap: wrap;
    gap: 1dvi 3dvi;
    margin-top: 2dvi;
  }
  .chart-key span {
    display: flex;
    align-items: center;
    gap: 1dvi;
  }
  .sw {
    width: 2.5dvi;
    height: 2.5dvi;
    border: 1px solid var(--ink);
  }
  .sw--u {
    background: var(--line);
  }
  .sw--t {
    background: var(--ink);
  }
  .stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .stat {
    display: flex;
    flex-direction: column;
    gap: 1dvi;
    padding: 3dvi;
    background: #fff;
  }
  .stat b {
    font-variant-numeric: tabular-nums;
  }
  .bs-source {
    margin: 0;
    color: #78716c;
  }
  @media (min-width: 1024px) {
    .bs-final {
      padding: 2dvi;
      gap: 1.5dvi;
    }
    .chart-months {
      margin-top: 0.6dvi;
    }
    .chart-key {
      margin-top: 0.8dvi;
      gap: 0.5dvi 2dvi;
    }
    .chart-key span {
      gap: 0.5dvi;
    }
    .sw {
      width: 1dvi;
      height: 1dvi;
    }
    .stats {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .stat {
      gap: 0.4dvi;
      padding: 1.2dvi 1.5dvi;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .col-u,
    .col-t {
      transform: none;
    }
  }
</style>
