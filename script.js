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
    navGallery: "Gallery",
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
    experienceImageAlt: "Inside Sandy Barber Shop with barber chairs and mirrors",
    experiencePointOne: "Online-style speed with old-school attention",
    experiencePointTwo: "Hot towel service available with beard trims",
    experiencePointThree: "Easy access from the 7 train and neighborhood buses",
    barbersEyebrow: "Your Barbers",
    barbersTitle: "Meet the team behind the chair.",
    barbersCopy: "Choose a barber with the experience and style that fits your next cut.",
    barberOneRole: "Manager / Barber",
    barberOneName: "Papo",
    barberOneAlt: "Papo, manager and barber at Sandy Barber Shop",
    barberOneExperience: "20 years experience",
    barberOneBio:
      "Versatile barber for any haircut, from clean everyday cuts to detailed fades and beard work.",
    barberTwoRole: "Barber",
    barberTwoName: "Edvin",
    barberTwoAlt: "Edvin, barber at Sandy Barber Shop",
    barberTwoExperience: "15 years experience",
    barberTwoBio:
      "Experienced with all haircuts, including tapers, shape-ups, beard lineups, and sharp modern finishes.",
    barberThreeRole: "Barber",
    barberThreeName: "Franklin",
    barberThreeAlt: "Franklin, barber at Sandy Barber Shop",
    barberThreeExperience: "10 years experience",
    barberThreeBio:
      "Focused on regular haircuts, beard work, clean lineups, and reliable everyday cuts.",
    barberTagFades: "Fades",
    barberTagClassic: "Classic Cuts",
    barberTagBeards: "Beards",
    barberTagShapeUps: "Shape Ups",
    barberTagKids: "Kids Cuts",
    barberTagLineups: "Line Ups",
    barberTagAnyCut: "Any Haircut",
    barberTagTapers: "Tapers",
    barberTagRegular: "Regular Cuts",
    barberCallShop: "Call Shop",
    barberCallEdvin: "Call Edvin",
    barberCallFranklin: "Call Franklin",
    galleryEyebrow: "Gallery",
    galleryTitle: "A look around the shop.",
    galleryCopy: "A few atmosphere shots for now. The haircut gallery can be added once the cut photos are ready.",
    galleryStorefrontAlt: "Full Sandy Barber Shop storefront on 80th Street",
    galleryStorefrontTitle: "Storefront",
    galleryStorefrontCopy: "A clear exterior view helps customers recognize the shop before they arrive.",
    galleryInteriorAlt: "Wide interior view of the barber stations",
    galleryInteriorTitle: "Inside the Shop",
    galleryInteriorCopy: "A wider interior view shows the chairs, mirrors, and daily pace.",
    galleryToolsAlt: "Barber clippers and tools on the station",
    galleryToolsTitle: "Tools Ready",
    galleryToolsCopy: "Detail shots add texture and make the service feel hands-on.",
    galleryDetailAlt: "Pink barber clippers on a clean station",
    galleryDetailTitle: "Station Detail",
    galleryDetailCopy: "Small details help show the care and personality inside the shop.",
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
    navGallery: "Galeria",
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
    experienceImageAlt: "Interior de Sandy Barber Shop con sillas y espejos de barberia",
    experiencePointOne: "Servicio rapido con atencion de barberia clasica",
    experiencePointTwo: "Toalla caliente disponible con servicios de barba",
    experiencePointThree: "Facil acceso desde el tren 7 y buses del vecindario",
    barbersEyebrow: "Tus Barberos",
    barbersTitle: "Conoce al equipo detras de la silla.",
    barbersCopy: "Elige un barbero con la experiencia y el estilo para tu proximo corte.",
    barberOneRole: "Manager / Barbero",
    barberOneName: "Papo",
    barberOneAlt: "Papo, manager y barbero de Sandy Barber Shop",
    barberOneExperience: "20 anos de experiencia",
    barberOneBio:
      "Barbero versatil para cualquier corte, desde cortes diarios limpios hasta fades detallados y barba.",
    barberTwoRole: "Barbero",
    barberTwoName: "Edvin",
    barberTwoAlt: "Edvin, barbero de Sandy Barber Shop",
    barberTwoExperience: "15 anos de experiencia",
    barberTwoBio:
      "Con experiencia en todo tipo de cortes, incluyendo tapers, cerquillos, lineas de barba y acabados modernos.",
    barberThreeRole: "Barbero",
    barberThreeName: "Franklin",
    barberThreeAlt: "Franklin, barbero de Sandy Barber Shop",
    barberThreeExperience: "10 anos de experiencia",
    barberThreeBio:
      "Enfocado en cortes regulares, barba, lineas limpias y cortes diarios confiables.",
    barberTagFades: "Fades",
    barberTagClassic: "Cortes Clasicos",
    barberTagBeards: "Barbas",
    barberTagShapeUps: "Cerquillos",
    barberTagKids: "Cortes de Ninos",
    barberTagLineups: "Lineas",
    barberTagAnyCut: "Cualquier Corte",
    barberTagTapers: "Tapers",
    barberTagRegular: "Cortes Regulares",
    barberCallShop: "Llamar Barberia",
    barberCallEdvin: "Llamar a Edvin",
    barberCallFranklin: "Llamar a Franklin",
    galleryEyebrow: "Galeria",
    galleryTitle: "Una mirada a la barberia.",
    galleryCopy: "Algunas fotos del ambiente por ahora. La galeria de cortes se puede agregar cuando las fotos esten listas.",
    galleryStorefrontAlt: "Exterior completo de Sandy Barber Shop en la calle 80",
    galleryStorefrontTitle: "Exterior",
    galleryStorefrontCopy: "Una vista clara del exterior ayuda a los clientes a reconocer la barberia al llegar.",
    galleryInteriorAlt: "Vista amplia del interior y las estaciones de barberia",
    galleryInteriorTitle: "Dentro de la Barberia",
    galleryInteriorCopy: "Una vista amplia muestra las sillas, espejos y el ritmo diario.",
    galleryToolsAlt: "Maquinas y herramientas de barbero en la estacion",
    galleryToolsTitle: "Herramientas Listas",
    galleryToolsCopy: "Los detalles agregan textura y hacen que el servicio se sienta real.",
    galleryDetailAlt: "Maquinas rosadas de barbero en una estacion limpia",
    galleryDetailTitle: "Detalle de Estacion",
    galleryDetailCopy: "Los pequenos detalles muestran el cuidado y la personalidad dentro de la barberia.",
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
