const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const statusElement = document.querySelector("#shop-status");
const yearElement = document.querySelector("#year");
const languageToggle = document.querySelector("[data-language-toggle]");

const translations = {
  en: {
    navAria: "Primary navigation",
    navToggleAria: "Toggle navigation",
    navServices: "Services",
    navExperience: "Experience",
    navBarbers: "Barbers",
    navVisit: "Visit",
    languageToggleAria: "Switch to Spanish",
    heroEyebrow: "East Elmhurst, Queens",
    heroTitle: "Sharp cuts, clean fades, neighborhood service.",
    heroCopy:
      "A neighborhood barber shop near Jackson Heights for classic cuts, skin fades, beard work, and quick cleanups before work, dinner, or a night out.",
    callToBook: "Call to Book",
    viewServices: "View Services",
    metaWalkIns: "Walk-ins welcome",
    metaOpen: "Open 7 days",
    metaSpanish: "Se habla espanol",
    statusLabel: "Today's status",
    statusChecking: "Checking hours...",
    statusOpen: "Open now",
    statusClosed: "Closed now",
    hoursDirections: "Hours and directions",
    servicesEyebrow: "Services",
    servicesTitle: "Fresh work without the fuss.",
    servicesCopy:
      "Choose a quick cleanup or sit back for the full treatment. Prices are simple, honest, and easy to understand.",
    serviceClassicTitle: "Classic Cut",
    serviceClassicCopy:
      "Scissor or clipper cut finished with neckline cleanup and styling.",
    serviceFadeTitle: "Skin Fade",
    serviceFadeCopy:
      "Detailed fade, razor-sharp edges, and a finish that holds its shape.",
    serviceBeardTitle: "Beard Trim",
    serviceBeardCopy: "Shape, line-up, and hot towel finish for a clean, balanced beard.",
    serviceComboTitle: "Cut + Beard",
    serviceComboCopy: "The full reset: haircut, beard detail, hot towel, and styling.",
    experienceEyebrow: "The Experience",
    experienceTitle: "Built for busy Queens schedules.",
    experienceCopy:
      "Get a precise cut in a relaxed shop where the chair is ready, the tools are clean, and every detail gets a second look before you leave.",
    experiencePointOne: "Online-style speed with old-school attention",
    experiencePointTwo: "Hot towel service available with beard trims",
    experiencePointThree: "Easy access from the 7 train and neighborhood buses",
    barbersEyebrow: "Your Barbers",
    barbersTitle: "Local hands, steady standards.",
    barbersCopy:
      "Our team works with straight hair, curls, waves, fades, beards, and everything in between.",
    barberCardOneTitle: "Precision first",
    barberCardOneCopy:
      "We check growth patterns, face shape, and your normal styling routine.",
    barberCardTwoTitle: "No rushed finishes",
    barberCardTwoCopy: "Edges, neckline, and blend get cleaned up before the cape comes off.",
    barberCardThreeTitle: "Neighborhood friendly",
    barberCardThreeCopy: "Bring a photo, bring a question, or just ask for your usual.",
    visitEyebrow: "Visit Us",
    visitTitle: "Stop by Sandy Barber Shop.",
    getDirections: "Get Directions",
    hoursTitle: "Hours",
    hoursWeekdays: "Mon - Sat",
    hoursSunday: "Sunday",
    footerRights:
      '&copy; <span id="year">2026</span> Sandy Barber Shop. All rights reserved.',
    backToTop: "Back to top",
    disclaimer:
      "Portfolio concept only. This is not the official Sandy Barber Shop website.",
  },
  es: {
    navAria: "Navegacion principal",
    navToggleAria: "Abrir o cerrar navegacion",
    navServices: "Servicios",
    navExperience: "Experiencia",
    navBarbers: "Barberos",
    navVisit: "Visitanos",
    languageToggleAria: "Switch to English",
    heroEyebrow: "East Elmhurst, Queens",
    heroTitle: "Cortes limpios, fades precisos y servicio de barrio.",
    heroCopy:
      "Una barberia cerca de Jackson Heights para cortes clasicos, skin fades, barba y retoques rapidos antes del trabajo, una cena o una salida.",
    callToBook: "Llamar",
    viewServices: "Ver Servicios",
    metaWalkIns: "Sin cita previa",
    metaOpen: "Abierto 7 dias",
    metaSpanish: "Se habla espanol",
    statusLabel: "Estado de hoy",
    statusChecking: "Revisando horario...",
    statusOpen: "Abierto ahora",
    statusClosed: "Cerrado ahora",
    hoursDirections: "Horario y direcciones",
    servicesEyebrow: "Servicios",
    servicesTitle: "Buen corte, sin complicaciones.",
    servicesCopy:
      "Elige un retoque rapido o sientate para el servicio completo. Precios simples, claros y faciles de entender.",
    serviceClassicTitle: "Corte Clasico",
    serviceClassicCopy: "Corte con tijera o maquina, terminado con limpieza del cuello.",
    serviceFadeTitle: "Skin Fade",
    serviceFadeCopy: "Fade detallado, lineas limpias y un acabado que mantiene su forma.",
    serviceBeardTitle: "Barba",
    serviceBeardCopy: "Forma, linea y acabado limpio para una barba balanceada.",
    serviceComboTitle: "Corte + Barba",
    serviceComboCopy: "El servicio completo: corte, detalle de barba, toalla caliente y estilo.",
    experienceEyebrow: "La Experiencia",
    experienceTitle: "Hecho para horarios ocupados en Queens.",
    experienceCopy:
      "Recibe un corte preciso en una barberia relajada, con silla lista, herramientas limpias y cada detalle revisado antes de salir.",
    experiencePointOne: "Servicio rapido con atencion de barberia clasica",
    experiencePointTwo: "Toalla caliente disponible con servicios de barba",
    experiencePointThree: "Facil acceso desde el tren 7 y buses del vecindario",
    barbersEyebrow: "Tus Barberos",
    barbersTitle: "Manos locales, estandares firmes.",
    barbersCopy:
      "Nuestro equipo trabaja con pelo lacio, rizos, waves, fades, barbas y todo lo demas.",
    barberCardOneTitle: "Precision primero",
    barberCardOneCopy:
      "Revisamos el crecimiento del pelo, la forma de la cara y tu rutina normal.",
    barberCardTwoTitle: "Sin acabados apurados",
    barberCardTwoCopy: "Lineas, cuello y blend se limpian antes de quitar la capa.",
    barberCardThreeTitle: "Servicio de barrio",
    barberCardThreeCopy: "Trae una foto, haz una pregunta o pide tu corte de siempre.",
    visitEyebrow: "Visitanos",
    visitTitle: "Pasa por Sandy Barber Shop.",
    getDirections: "Como Llegar",
    hoursTitle: "Horario",
    hoursWeekdays: "Lun - Sab",
    hoursSunday: "Domingo",
    footerRights:
      '&copy; <span id="year">2026</span> Sandy Barber Shop. Todos los derechos reservados.',
    backToTop: "Volver arriba",
    disclaimer:
      "Concepto de portafolio solamente. Este no es el sitio oficial de Sandy Barber Shop.",
  },
};

let currentLanguage = localStorage.getItem("sandyLanguage") || "en";

if (!translations[currentLanguage]) {
  currentLanguage = "en";
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (statusElement) {
  updateShopStatus();
}

function updateShopStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  const closesAt = day === 0 ? 18 : 20;
  const opensAt = 9;
  const isOpen = hour >= opensAt && hour < closesAt;

  statusElement.textContent = isOpen
    ? translations[currentLanguage].statusOpen
    : translations[currentLanguage].statusClosed;
}

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : "en";
  const copy = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy[key]) {
      element.innerHTML = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attribute, key] = pair.split(":").map((item) => item.trim());
      if (attribute && copy[key]) {
        element.setAttribute(attribute, copy[key]);
      }
    });
  });

  if (languageToggle) {
    languageToggle.setAttribute("aria-label", copy.languageToggleAria);

    languageToggle.querySelectorAll("[data-lang-option]").forEach((option) => {
      option.classList.toggle("is-active", option.dataset.langOption === currentLanguage);
    });
  }

  const updatedYearElement = document.querySelector("#year");
  if (updatedYearElement) {
    updatedYearElement.textContent = new Date().getFullYear();
  }

  if (statusElement) {
    updateShopStatus();
  }
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "es" : "en";
    localStorage.setItem("sandyLanguage", nextLanguage);
    applyLanguage(nextLanguage);
  });
}

applyLanguage(currentLanguage);
