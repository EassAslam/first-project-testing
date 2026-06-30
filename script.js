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
    serviceRegularTitle: "Regular Haircut",
    serviceRegularCopy: "Clean everyday cut with neckline cleanup and a finished shape.",
    serviceHaircutBeardTitle: "Haircut with Beard",
    serviceHaircutBeardCopy: "Haircut and beard cleanup for a complete, polished look.",
    serviceKidsTitle: "Kids Haircut",
    serviceKidsCopy: "Simple, neat cuts for kids with patient neighborhood service.",
    serviceShapeUpTitle: "Shape Up",
    serviceShapeUpCopy: "Fast edge cleanup around the hairline, temples, and neckline.",
    serviceShapeBeardTitle: "Shape Up with Beard",
    serviceShapeBeardCopy: "Hairline and beard edges cleaned up together.",
    serviceAddonsTitle: "Small Add-ons",
    serviceAddonsCopy: "Quick finishing details for a sharper look.",
    serviceEyebrowsLabel: "Eyebrows",
    serviceLinesLabel: "Lines",
    experienceEyebrow: "The Experience",
    experienceTitle: "Built for busy Queens schedules.",
    experienceCopy:
      "Get a precise cut in a relaxed shop where the chair is ready, the tools are clean, and every detail gets a second look before you leave.",
    experiencePointOne: "Online-style speed with old-school attention",
    experiencePointTwo: "Hot towel service available with beard trims",
    experiencePointThree: "Easy access from the 7 train and neighborhood buses",
    barbersEyebrow: "Your Barbers",
    barbersTitle: "Meet the team behind the chair.",
    barbersCopy:
      "Real barber profiles can go here as soon as the shop is ready with names, photos, and specialties.",
    barberOneRole: "Owner / Barber",
    barberOneName: "Sandy",
    barberOneBio:
      "Placeholder bio for the shop owner, focused on clean cuts, steady service, and regular clients.",
    barberTwoRole: "Barber",
    barberTwoName: "Team Barber",
    barberTwoBio:
      "Placeholder bio for a team barber, with room to add experience, style, and client favorites later.",
    barberThreeRole: "Barber",
    barberThreeName: "Team Barber",
    barberThreeBio:
      "Placeholder bio for another barber profile, ready for a real portrait and personal introduction.",
    barberTagFades: "Fades",
    barberTagClassic: "Classic Cuts",
    barberTagBeards: "Beards",
    barberTagShapeUps: "Shape Ups",
    barberTagKids: "Kids Cuts",
    barberTagLineups: "Line Ups",
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
    serviceRegularTitle: "Corte Regular",
    serviceRegularCopy: "Corte limpio de todos los dias con cuello arreglado y buena forma.",
    serviceHaircutBeardTitle: "Corte y Barba",
    serviceHaircutBeardCopy: "Corte de pelo y limpieza de barba para un acabado completo.",
    serviceKidsTitle: "Ninos",
    serviceKidsCopy: "Cortes simples y limpios para ninos con servicio paciente.",
    serviceShapeUpTitle: "Cerquillo",
    serviceShapeUpCopy: "Limpieza rapida de linea, sienes y cuello.",
    serviceShapeBeardTitle: "Cerquillo y Barba",
    serviceShapeBeardCopy: "Linea del pelo y bordes de barba arreglados juntos.",
    serviceAddonsTitle: "Detalles Pequenos",
    serviceAddonsCopy: "Detalles rapidos para un acabado mas definido.",
    serviceEyebrowsLabel: "Cejas",
    serviceLinesLabel: "Linea",
    experienceEyebrow: "La Experiencia",
    experienceTitle: "Hecho para horarios ocupados en Queens.",
    experienceCopy:
      "Recibe un corte preciso en una barberia relajada, con silla lista, herramientas limpias y cada detalle revisado antes de salir.",
    experiencePointOne: "Servicio rapido con atencion de barberia clasica",
    experiencePointTwo: "Toalla caliente disponible con servicios de barba",
    experiencePointThree: "Facil acceso desde el tren 7 y buses del vecindario",
    barbersEyebrow: "Tus Barberos",
    barbersTitle: "Conoce al equipo detras de la silla.",
    barbersCopy:
      "Los perfiles reales de los barberos pueden ir aqui cuando la barberia tenga nombres, fotos y especialidades.",
    barberOneRole: "Dueno / Barbero",
    barberOneName: "Sandy",
    barberOneBio:
      "Bio temporal del dueno, enfocada en cortes limpios, servicio constante y clientes regulares.",
    barberTwoRole: "Barbero",
    barberTwoName: "Barbero del Equipo",
    barberTwoBio:
      "Bio temporal para un barbero del equipo, con espacio para agregar experiencia, estilo y servicios favoritos.",
    barberThreeRole: "Barbero",
    barberThreeName: "Barbero del Equipo",
    barberThreeBio:
      "Bio temporal para otro perfil, listo para una foto real y una introduccion personal.",
    barberTagFades: "Fades",
    barberTagClassic: "Cortes Clasicos",
    barberTagBeards: "Barbas",
    barberTagShapeUps: "Cerquillos",
    barberTagKids: "Cortes de Ninos",
    barberTagLineups: "Lineas",
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
