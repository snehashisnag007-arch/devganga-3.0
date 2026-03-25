const rawLibrary = Array.isArray(window.IMAGE_LIBRARY) ? window.IMAGE_LIBRARY : [];

const themeMeta = [
  {
    id: "retro-classic",
    folder: "Retro",
    name: "Retro Classic",
    featured: [
      "Gemini_Generated_Image_dbsqindbsqindbsq.png",
      "focus.jpeg",
      "detail-1.jpeg",
      "detail-2.jpeg",
    ],
    tagline: "Timeless elegance meets warm vintage charm",
    ideaNote:
      "The idea is to make the cafe feel collected, grounded, and quietly luxurious. It borrows from old coffee houses and reading rooms, so guests get warmth, familiarity, and a sense of time layered into the space.",
    summary:
      "Leather, walnut, amber light, and old-world cafe detailing create a room that feels storied and intimate.",
    inspiration:
      "This board leans into colonial coffee-house richness: deep browns, honeyed lamps, tufted seating, bookshelves, and tactile vintage accents that feel collected over time.",
    palette: [
      ["Espresso", "#3B2314"],
      ["Dark Oak", "#5C4033"],
      ["Tobacco", "#6B4423"],
      ["Amber", "#D4A574"],
      ["Cream", "#F5F5DC"],
      ["Parchment", "#F1E5C1"],
    ],
    elements: [
      ["Furniture", "Leather lounge chairs, carved wood tables, classic stools"],
      ["Lighting", "Edison bulbs, amber table lamps, brass-toned glow"],
      ["Counter", "Rich stone tops, warm timber fronts, collector display pieces"],
      ["Atmosphere", "Library corners, framed prints, nostalgia without clutter"],
    ],
    colors: {
      primary: "#3B2314",
      secondary: "#D4A574",
    },
  },
  {
    id: "boho-chic",
    folder: "Boho Chic",
    name: "Boho Chic",
    featured: [
      "Gemini_Generated_Image_iy40n9iy40n9iy40.png",
      "boho-chic-cafe-interior-design-5.jpg",
      "download (6).jpeg",
      "Yoga & Zen_ Inspiration for the perfect space_.jpeg",
    ],
    tagline: "Nature-led calm with spiritual softness",
    ideaNote:
      "This concept turns the cafe into a softer retreat. The inspiration comes from yoga culture, woven craft, indoor greens, and sunlight, creating a room that feels slow, breathable, and restorative.",
    summary:
      "Rattan, woven textures, greenery, and ritual objects turn the cafe into a breezy sanctuary.",
    inspiration:
      "The boho board borrows from Rishikesh's meditative mood through cane seating, macrame, pottery, plants, and sun-faded tones that feel airy, handmade, and deeply grounded.",
    palette: [
      ["Natural Linen", "#E8DCC4"],
      ["Sage", "#87AE73"],
      ["Leaf", "#6B8E23"],
      ["Forest", "#228B22"],
      ["Jute", "#D2B48C"],
      ["Terracotta", "#E07A5F"],
    ],
    elements: [
      ["Furniture", "Rattan chairs, woven swings, easy modular seating"],
      ["Plants", "Pothos, monstera, dried grasses, soft green layering"],
      ["Counter", "Live-edge wood, craft ceramics, herbal display moments"],
      ["Spirit", "Singing bowls, mandalas, beading, handwoven texture"],
    ],
    colors: {
      primary: "#6B8E23",
      secondary: "#E07A5F",
    },
  },
  {
    id: "indian-river",
    folder: "Indian river",
    name: "Indian River",
    featured: [
      "Gemini_Generated_Image_ut3h0xut3h0xut3h.png",
      "Gemini_Generated_Image_bih5pjbih5pjbih5.png",
      "Pichwai Paintings - Buy Modern Pichwai Wall Paintings & Art Online _ Kalavaati.jpeg",
      "Rhys Seating Collection.jpeg",
    ],
    tagline: "Craft heritage carried through indigo and brass",
    ideaNote:
      "The inspo here is about making local craft feel contemporary instead of museum-like. Indigo tones, pottery, brass, carved screens, and textiles build a stronger cultural identity without losing cafe comfort.",
    summary:
      "Blue pottery, handwork, carved screens, and river-inspired tones bring a more rooted Indian identity.",
    inspiration:
      "This concept uses analogous blues from the Ganges as its thread, pairing artisanal objects, jaali-inspired forms, textiles, brass accents, and pottery-driven storytelling.",
    palette: [
      ["Deep Indigo", "#1A237E"],
      ["Teal Ocean", "#00838F"],
      ["Peacock", "#006064"],
      ["Ganga Blue", "#4DD0E1"],
      ["Mint", "#B2DFDB"],
      ["Turmeric Gold", "#FFD700"],
    ],
    elements: [
      ["Furniture", "Carved timber pieces, tailored upholstery, artisan silhouettes"],
      ["Patterns", "Block print, blue pottery, jaali rhythm, hand-painted moments"],
      ["Counter", "Mirror-work texture, brass detailing, ceramic-led styling"],
      ["Walls", "Lanterns, murals, maps, and culture-forward display niches"],
    ],
    colors: {
      primary: "#00838F",
      secondary: "#FFD700",
    },
  },
  {
    id: "moto-cafe",
    folder: "moto cafe",
    name: "Moto Cafe",
    featured: [
      "IMG_1685_master.jpg",
      "8822393_master.jpg",
      "Whiskey bottle pendant light.jpeg",
      "Engine Coffee Table Alfa Romeo V6 BUSSO - Etsy.jpeg",
    ],
    tagline: "Industrial grit with a playful rebel streak",
    ideaNote:
      "This board is meant to bring in biker-route energy and workshop character. Reclaimed parts, poster walls, and harder materials keep it bold, but the warm lighting stops it from feeling harsh.",
    summary:
      "Vintage signs, repurposed mechanical pieces, workshop metals, and rough textures create the boldest concept of the set.",
    inspiration:
      "This board channels road-trip energy and garage character through steel, reclaimed wood, found-object decor, wall graphics, and a warm but rugged cafe attitude.",
    palette: [
      ["Soot", "#2B2B2B"],
      ["Cast Iron", "#3E3E3E"],
      ["Raw Leather", "#6B4423"],
      ["Rust Gold", "#B8860B"],
      ["Signal Red", "#DC143C"],
      ["Factory Green", "#556B2F"],
    ],
    elements: [
      ["Signature", "Repurposed tables, bold poster walls, mechanical conversation pieces"],
      ["Lighting", "Cage pendants, bottle lights, zigzag Edison runs"],
      ["Counter", "Workshop timber, pipe shelving, steel edge detailing"],
      ["Decor", "Tin signage, vinyl references, cafe-with-garage personality"],
    ],
    colors: {
      primary: "#2B2B2B",
      secondary: "#DC143C",
    },
  },
];

const themes = themeMeta
  .map((theme) => {
    const folderEntry = rawLibrary.find((entry) => entry.folder === theme.folder);
    return {
      ...theme,
      files: folderEntry ? folderEntry.files : [],
    };
  })
  .filter((theme) => theme.files.length > 0);

const totalImages = themes.reduce((sum, theme) => sum + theme.files.length, 0);
let activeThemeId = themes[0]?.id || null;
let lightboxItems = [];
let lightboxIndex = 0;

const heroGrid = document.getElementById("hero-grid");
const heroStats = document.getElementById("hero-stats");
const highlights = document.getElementById("highlights");
const themeCardGrid = document.getElementById("theme-card-grid");
const themeSwitcher = document.getElementById("theme-switcher");
const themePanels = document.getElementById("theme-panels");
const lightbox = document.getElementById("lightbox");
const brandMark = document.getElementById("brand-mark");
const locationTitle = document.getElementById("location-title");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
let brandTapCount = 0;
let brandTapTimer = null;

const riverRibbon = document.createElement("div");
riverRibbon.className = "river-ribbon";
riverRibbon.innerHTML = "<strong>Ganga Flow</strong><span>Hidden river mode unlocked.</span>";
document.body.appendChild(riverRibbon);

const quoteCard = document.createElement("div");
quoteCard.className = "quote-card";
quoteCard.innerHTML =
  "<strong>Hidden Note</strong><p>Rishikesh moves like the river itself: calm from afar, alive up close, and always shaping the spaces built beside it.</p>";
document.body.appendChild(quoteCard);

function encodeAsset(path) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function titleFromPath(path) {
  const fileName = path.split("/").pop() || "";
  return fileName.replace(/\.[^.]+$/, "");
}

function createImage(path, alt) {
  const img = document.createElement("img");
  img.src = encodeAsset(path);
  img.alt = alt;
  img.loading = "lazy";
  img.decoding = "async";
  return img;
}

function getFeaturedFiles(theme, limit) {
  const preferred = (theme.featured || [])
    .map((fileName) => theme.files.find((path) => path.endsWith(`/${fileName}`)))
    .filter(Boolean);
  const fallback = theme.files.filter((path) => !preferred.includes(path));
  return [...preferred, ...fallback].slice(0, limit);
}

function renderHero() {
  const picks = themes
    .map((theme) => getFeaturedFiles(theme, 1)[0])
    .filter(Boolean)
    .slice(0, 4);

  heroGrid.innerHTML = "";
  picks.forEach((path, index) => {
    const item = document.createElement("div");
    item.className = "hero-grid-item";
    item.appendChild(createImage(path, `Featured moodboard image ${index + 1}`));
    heroGrid.appendChild(item);
  });

  const stats = [
    ["Themes", String(themes.length)],
    ["Image library", String(totalImages)],
    ["Moodboards", String(themes.length)],
  ];

  heroStats.innerHTML = "";
  stats.forEach(([label, value]) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<dt>${label}</dt><dd>${value}</dd>`;
    heroStats.appendChild(wrapper);
  });
}

function renderHighlights() {
  const cards = [
    {
      value: `${totalImages}+`,
      text: "local reference images shape the full presentation library",
    },
    {
      value: "4",
      text: "distinct concept boards mirror the reference structure",
    },
    {
      value: "1",
      text: "single-page flow keeps the whole concept easy to present",
    },
  ];

  highlights.innerHTML = "";
  cards.forEach((card) => {
    const article = document.createElement("article");
    article.className = "highlight-card";
    article.innerHTML = `<strong>${card.value}</strong><span>${card.text}</span>`;
    highlights.appendChild(article);
  });
}

function renderThemeCards() {
  themeCardGrid.innerHTML = "";

  themes.forEach((theme) => {
    const card = document.createElement("article");
    card.className = "theme-card";
    card.style.setProperty("--theme-primary", theme.colors.primary);
    card.innerHTML = `
      <div class="theme-card-top">
        <div>
          <small>${theme.tagline}</small>
          <h3>${theme.name}</h3>
        </div>
        <span class="theme-chip">${theme.files.length} images</span>
      </div>
      <p>${theme.summary}</p>
      <div class="theme-preview"></div>
      <button type="button">Open Board</button>
    `;

    const preview = card.querySelector(".theme-preview");
    getFeaturedFiles(theme, 3).forEach((path, index) => {
      preview.appendChild(createImage(path, `${theme.name} preview ${index + 1}`));
    });

    card.querySelector("button").addEventListener("click", () => {
      setActiveTheme(theme.id);
      document.getElementById("boards").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    themeCardGrid.appendChild(card);
  });
}

function renderTabs() {
  themeSwitcher.innerHTML = "";
  themes.forEach((theme) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-tab";
    button.setAttribute("role", "tab");
    button.dataset.theme = theme.id;
    button.textContent = theme.name;
    button.style.setProperty("--theme-primary", theme.colors.primary);
    button.addEventListener("click", () => setActiveTheme(theme.id));
    themeSwitcher.appendChild(button);
  });
}

function buildPreview(theme) {
  const preview = document.createElement("div");
  preview.className = "panel-preview";

  getFeaturedFiles(theme, 4).forEach((path, index) => {
    const figure = document.createElement("figure");
    figure.appendChild(createImage(path, `${theme.name} featured view ${index + 1}`));
    const caption = document.createElement("figcaption");
    caption.textContent = index === 0 ? "Hero view" : `Detail ${index}`;
    figure.appendChild(caption);
    preview.appendChild(figure);
  });

  return preview;
}

function buildPalette(theme) {
  const wrapper = document.createElement("section");
  wrapper.className = "panel-palette";
  wrapper.innerHTML = `<h4>Color Palette</h4>`;

  const grid = document.createElement("div");
  grid.className = "palette-grid";

  theme.palette.forEach(([name, hex]) => {
    const swatch = document.createElement("article");
    swatch.className = "swatch";
    swatch.innerHTML = `
      <div class="swatch-chip" style="background:${hex}"></div>
      <div class="swatch-meta">
        <strong>${name}</strong>
        <span>${hex}</span>
      </div>
    `;
    grid.appendChild(swatch);
  });

  wrapper.appendChild(grid);
  return wrapper;
}

function buildElements(theme) {
  const wrapper = document.createElement("section");
  wrapper.className = "panel-elements";
  wrapper.innerHTML = `<h4>Design Elements</h4>`;

  const list = document.createElement("ul");
  list.className = "element-list";

  theme.elements.forEach(([title, body]) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${title}</strong><span>${body}</span>`;
    list.appendChild(item);
  });

  wrapper.appendChild(list);
  return wrapper;
}

function buildGallery(theme) {
  const section = document.createElement("section");
  section.className = "panel-gallery";
  section.innerHTML = `<h4>Full Image Board</h4>`;

  const rail = document.createElement("div");
  rail.className = "gallery-rail";

  const masonry = document.createElement("div");
  masonry.className = "gallery-masonry";

  theme.files.forEach((path, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "gallery-card";
    card.dataset.label = titleFromPath(path);
    card.dataset.theme = theme.id;
    card.dataset.index = String(index);
    card.appendChild(createImage(path, `${theme.name} gallery image ${index + 1}`));
    card.addEventListener("click", () => openLightbox(theme, index));
    masonry.appendChild(card);
  });

  rail.appendChild(masonry);
  section.appendChild(rail);

  const caption = document.createElement("div");
  caption.className = "gallery-caption";
  caption.innerHTML = `
    <span>${theme.files.length} linked images from <strong>${theme.folder}</strong></span>
    <span>Click any frame to enlarge</span>
  `;
  section.appendChild(caption);

  return section;
}

function renderPanels() {
  themePanels.innerHTML = "";

  themes.forEach((theme, index) => {
    const panel = document.createElement("article");
    panel.className = "theme-panel";
    panel.dataset.theme = theme.id;
    panel.style.setProperty("--theme-primary", theme.colors.primary);

    const intro = document.createElement("div");
    intro.className = "panel-intro";

    const copy = document.createElement("section");
    copy.className = "panel-copy";
    copy.innerHTML = `
      <div class="panel-heading">
        <div>
          <p class="eyebrow">Board ${String(index + 1).padStart(2, "0")}</p>
          <h3>${theme.name}</h3>
          <p class="panel-tagline">${theme.tagline}</p>
        </div>
        <span class="theme-chip">${theme.files.length} assets</span>
      </div>
      <p class="panel-mini-heading">Idea Behind The Inspo</p>
      <p>${theme.ideaNote}</p>
      <p class="panel-mini-heading">Material + Mood Direction</p>
      <p>${theme.inspiration}</p>
    `;
    copy.appendChild(buildPreview(theme));

    intro.append(copy, buildPalette(theme));
    panel.append(intro, buildElements(theme), buildGallery(theme));
    themePanels.appendChild(panel);
  });
}

function setActiveTheme(themeId) {
  activeThemeId = themeId;

  document.querySelectorAll(".theme-tab").forEach((button) => {
    const isActive = button.dataset.theme === themeId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  document.querySelectorAll(".theme-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.theme === themeId);
  });
}

function openLightbox(theme, index) {
  lightboxItems = theme.files;
  lightboxIndex = index;
  updateLightbox(theme.name);
  if (!lightbox.open) {
    lightbox.showModal();
  }
}

function updateLightbox(themeName) {
  const path = lightboxItems[lightboxIndex];
  lightboxImage.src = encodeAsset(path);
  lightboxImage.alt = `${themeName} enlarged image ${lightboxIndex + 1}`;
  lightboxCaption.textContent = `${themeName} • ${titleFromPath(path)}`;
}

function stepLightbox(delta) {
  if (!lightboxItems.length) {
    return;
  }

  const activeTheme =
    themes.find((theme) => theme.files === lightboxItems) ||
    themes.find((theme) => theme.id === activeThemeId);

  lightboxIndex = (lightboxIndex + delta + lightboxItems.length) % lightboxItems.length;
  updateLightbox(activeTheme ? activeTheme.name : "Gallery");
}

function flashRiverRibbon() {
  riverRibbon.classList.add("is-visible");
  window.clearTimeout(flashRiverRibbon.hideTimer);
  flashRiverRibbon.hideTimer = window.setTimeout(() => {
    riverRibbon.classList.remove("is-visible");
  }, 2400);
}

function toggleRiverMode() {
  document.body.classList.toggle("is-river-mode");
  flashRiverRibbon();
}

function flashQuoteCard() {
  quoteCard.classList.add("is-visible");
  window.clearTimeout(flashQuoteCard.hideTimer);
  flashQuoteCard.hideTimer = window.setTimeout(() => {
    quoteCard.classList.remove("is-visible");
  }, 3200);
}

function registerBrandTap() {
  brandTapCount += 1;
  window.clearTimeout(brandTapTimer);
  brandTapTimer = window.setTimeout(() => {
    brandTapCount = 0;
  }, 1400);

  if (brandTapCount >= 2) {
    brandTapCount = 0;
    toggleRiverMode();
  }
}

lightboxPrev.addEventListener("click", () => stepLightbox(-1));
lightboxNext.addEventListener("click", () => stepLightbox(1));

if (brandMark) {
  brandMark.title = "Double-tap for a small surprise.";
  brandMark.addEventListener("click", registerBrandTap);
}

if (locationTitle) {
  locationTitle.title = "Double-click for a hidden note.";
  locationTitle.addEventListener("dblclick", flashQuoteCard);
}

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) {
    return;
  }

  if (event.key === "ArrowLeft") {
    stepLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    stepLightbox(1);
  }
});

renderHero();
renderHighlights();
renderThemeCards();
renderTabs();
renderPanels();

if (activeThemeId) {
  setActiveTheme(activeThemeId);
}
