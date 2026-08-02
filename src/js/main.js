// ==========================================================================
// CHILL&GO — interacciones del sitio
// ==========================================================================

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.music': 'Lanzamientos',
    'nav.tour': 'Tour',
    'nav.merch': 'Merch',
    'nav.press': 'Prensa',
    'nav.contact': 'Contacto',
    'nav.gallery': 'Galería',
    'bio.copy': 'Chill&amp;Go es el proyecto de <strong class="text-paper">Juan Torres</strong>, productor y multiinstrumentista de la Ciudad de México. Su música mezcla ritmos latinos, lofi y sonidos cotidianos de la CDMX. Realizó el takeover de la playlist "Lofi Mexa" en Spotify, y su música ha acompañado campañas globales de Nike y producciones de cine mexicano.',
    'bio.listenNow': 'Escúchalo ahora',
    'bio.viewTour': 'Ver Tour',
    'releases.title': 'Lanzamientos',
    'releases.viewAll': 'Ver discografía completa →',
    'releases.item1.meta': 'NUEVO ÁLBUM',
    'releases.item1.title': 'Tengo que ir<br>a terapia',
    'releases.item2.meta': 'ÁLBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ÁLBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NUEVO SINGLE',
    'releases.item4.title': 'ME DUELE QUE ROMPIMOS',
    'releases.item5.meta': 'LOFI MEXA LIVE SET',
    'releases.item5.title': 'MEXSYNTHCO LIVE SET',
    'releases.item6.meta': 'ÁLBUM',
    'releases.item6.title': 'Autorretrato',
    'tour.title': 'Próximas Fechas',
    'tour.date1': '21 de Agosto',
    'tour.venue1': 'La Saturnalia (con RNDN)',
    'tour.loc1': 'CDMX | IMLOFI Presenta.',
    'tour.status1': 'Entrada Libre',
    'tour.date2': '4 de Septiembre',
    'tour.venue2': 'CCH Sur',
    'tour.loc2': 'CDMX.',
    'tour.status2': 'Entrada Libre',
    'tour.date3': '10 de Septiembre',
    'tour.venue3': 'Outline (con RNDN)',
    'tour.loc3': 'CDMX | IMLOFI Presenta.',
    'tour.status3': 'Entrada Libre',
    'tour.date4': 'Nov 2026',
    'tour.venue4': 'Festival Internacional del Globo',
    'tour.loc4': 'León, Gto.',
    'tour.buttonTickets': 'Boletos',
    'gallery.title': 'Flyers',
    'gallery.subtitle': 'Identidad gráfica hecha en colaboración con ilustradoras mexicanas.',
    'merch.title': 'Merch',
    'prensa.title': 'Prensa, Syncs & Hitos',
    'prensa.syncs': 'Syncs / Cine',
    'prensa.press': 'Prensa',
    'prensa.openings': 'Aperturas',
    'prensa.epkTitle': 'EPK 2026',
    'prensa.epkText': 'Biografía y rider técnico.',
    'prensa.downloadEpk': 'Descargar EPK (PDF)',
    'footer.bookingTitle': 'Booking & Contacto',
    'footer.bookingText': 'Para fechas y prensa.',
    'footer.syncText': 'Para sincronizaciones y licencias.',
    'footer.copyright': '© 2026 Chill&Go.',
    'footer.madeIn': 'Hecho en el DF.'
  },
  en: {
    'nav.home': 'Home',
    'nav.music': 'Releases',
    'nav.tour': 'Tour',
    'nav.merch': 'Merch',
    'nav.press': 'Press',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',
    'bio.copy': 'Chill&amp;Go is the project of <strong class="text-paper">Juan Torres</strong>, producer and multi-instrumentalist from Mexico City. His music blends Latin rhythms, lo-fi, and everyday sounds from Mexico City. He took over the "Lofi Mexa" playlist on Spotify, and his music has accompanied global Nike campaigns and Mexican film productions.',
    'bio.listenNow': 'Listen now',
    'bio.viewTour': 'See tour',
    'releases.title': 'Releases',
    'releases.viewAll': 'View full discography →',
    'releases.item1.meta': 'NEW ALBUM',
    'releases.item1.title': 'I have to go<br>to therapy',
    'releases.item2.meta': 'ALBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ALBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NEW SINGLE',
    'releases.item4.title': 'ME DUELE QUE ROMPIMOS',
    'releases.item5.meta': 'LOFI MEXA LIVE SET',
    'releases.item5.title': 'MEXSYNTHCO LIVE SET',
    'releases.item6.meta': 'ALBUM',
    'releases.item6.title': 'Autorretrato',
    'tour.title': 'Upcoming Dates',
    'tour.date1': 'August 21',
    'tour.venue1': 'La Saturnalia (with RNDN)',
    'tour.loc1': 'CDMX | IMLOFI presents.',
    'tour.status1': 'Free Entry',
    'tour.date2': 'September 4',
    'tour.venue2': 'CCH Sur',
    'tour.loc2': 'CDMX.',
    'tour.status2': 'Free Entry',
    'tour.date3': 'September 10',
    'tour.venue3': 'Outline (with RNDN)',
    'tour.loc3': 'CDMX | IMLOFI presents.',
    'tour.status3': 'Free Entry',
    'tour.date4': 'Nov 2026',
    'tour.venue4': 'International Hot Air Balloon Festival',
    'tour.loc4': 'León, Gto.',
    'tour.buttonTickets': 'Tickets',
    'gallery.title': 'Flyers',
    'gallery.subtitle': 'Graphic identity created in collaboration with Mexican illustrators.',
    'merch.title': 'Merch',
    'prensa.title': 'Press, Syncs & Milestones',
    'prensa.syncs': 'Syncs / Film',
    'prensa.press': 'Press',
    'prensa.openings': 'Openings',
    'prensa.epkTitle': 'EPK 2026',
    'prensa.epkText': 'Biography and technical rider.',
    'prensa.downloadEpk': 'Download EPK (PDF)',
    'footer.bookingTitle': 'Booking & Contact',
    'footer.bookingText': 'For dates and press.',
    'footer.syncText': 'For syncs and licensing.',
    'footer.copyright': '© 2026 Chill&Go.',
    'footer.madeIn': 'Made in the DF.'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.music': 'Sorties',
    'nav.tour': 'Tour',
    'nav.merch': 'Merch',
    'nav.press': 'Presse',
    'nav.contact': 'Contact',
    'nav.gallery': 'Galerie',
    'bio.copy': 'Chill&amp;Go est le projet de <strong class="text-paper">Juan Torres</strong>, producteur et multi-instrumentiste de Mexico. Sa musique mêle des rythmes latins, du lo-fi et des sons du quotidien de Mexico. Il a pris la main sur la playlist "Lofi Mexa" sur Spotify, et sa musique a accompagné des campagnes Nike mondiales ainsi que des productions cinématographiques mexicaines.',
    'bio.listenNow': 'Écouter maintenant',
    'bio.viewTour': 'Voir le tour',
    'releases.title': 'Sorties',
    'releases.viewAll': 'Voir toute la discographie →',
    'releases.item1.meta': 'NOUVEL ALBUM',
    'releases.item1.title': 'Je dois aller<br>en thérapie',
    'releases.item2.meta': 'ALBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ALBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NOUVEAU SINGLE',
    'releases.item4.title': 'ME DUELE QUE ROMPIMOS',
    'releases.item5.meta': 'LOFI MEXA LIVE SET',
    'releases.item5.title': 'MEXSYNTHCO LIVE SET',
    'releases.item6.meta': 'ALBUM',
    'releases.item6.title': 'Autorretrato',
    'tour.title': 'Dates à Venir',
    'tour.date1': '21 août',
    'tour.venue1': 'La Saturnalia (avec RNDN)',
    'tour.loc1': 'CDMX | IMLOFI présente.',
    'tour.status1': 'Entrée Libre',
    'tour.date2': '4 septembre',
    'tour.venue2': 'CCH Sur',
    'tour.loc2': 'CDMX.',
    'tour.status2': 'Entrée Libre',
    'tour.date3': '10 septembre',
    'tour.venue3': 'Outline (avec RNDN)',
    'tour.loc3': 'CDMX | IMLOFI présente.',
    'tour.status3': 'Entrée Libre',
    'tour.date4': 'Nov 2026',
    'tour.venue4': 'Festival international des montgolfières',
    'tour.loc4': 'León, Gto.',
    'tour.buttonTickets': 'Billets',
    'gallery.title': 'Affiches',
    'gallery.subtitle': 'Identité graphique réalisée en collaboration avec des illustratrices mexicaines.',
    'merch.title': 'Merch',
    'prensa.title': 'Presse, Syncs & Jalons',
    'prensa.syncs': 'Syncs / Cinéma',
    'prensa.press': 'Presse',
    'prensa.openings': 'Ouvertures',
    'prensa.epkTitle': 'EPK 2026',
    'prensa.epkText': 'Biographie et rider technique.',
    'prensa.downloadEpk': 'Télécharger l’EPK (PDF)',
    'footer.bookingTitle': 'Booking & Contact',
    'footer.bookingText': 'Pour les dates et la presse.',
    'footer.syncText': 'Pour les synchronisations et licences.',
    'footer.copyright': '© 2026 Chill&Go.',
    'footer.madeIn': 'Fabriqué à Mexico.'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.music': 'Veröffentlichungen',
    'nav.tour': 'Tour',
    'nav.merch': 'Merch',
    'nav.press': 'Presse',
    'nav.contact': 'Kontakt',
    'nav.gallery': 'Galerie',
    'bio.copy': 'Chill&amp;Go ist das Projekt von <strong class="text-paper">Juan Torres</strong>, Produzent und Multi-Instrumentalist aus Mexiko-Stadt. Seine Musik verbindet lateinamerikanische Rhythmen, Lo-Fi und Alltagsgeräusche aus Mexiko-Stadt. Er übernahm die Playlist "Lofi Mexa" auf Spotify, und seine Musik begleitete globale Nike-Kampagnen sowie mexikanische Filmproduktionen.',
    'bio.listenNow': 'Jetzt hören',
    'bio.viewTour': 'Tour ansehen',
    'releases.title': 'Veröffentlichungen',
    'releases.viewAll': 'Komplette Diskografie ansehen →',
    'releases.item1.meta': 'NEUES ALBUM',
    'releases.item1.title': 'Ich muss gehen<br>zur Therapie',
    'releases.item2.meta': 'ALBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ALBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NEUE SINGLE',
    'releases.item4.title': 'ME DUELE QUE ROMPIMOS',
    'releases.item5.meta': 'LOFI MEXA LIVE SET',
    'releases.item5.title': 'MEXSYNTHCO LIVE SET',
    'releases.item6.meta': 'ALBUM',
    'releases.item6.title': 'Autorretrato',
    'tour.title': 'Anstehende Termine',
    'tour.date1': '21. August',
    'tour.venue1': 'La Saturnalia (mit RNDN)',
    'tour.loc1': 'CDMX | IMLOFI präsentiert.',
    'tour.status1': 'Freier Eintritt',
    'tour.date2': '4. September',
    'tour.venue2': 'CCH Sur',
    'tour.loc2': 'CDMX.',
    'tour.status2': 'Freier Eintritt',
    'tour.date3': '10. September',
    'tour.venue3': 'Outline (mit RNDN)',
    'tour.loc3': 'CDMX | IMLOFI präsentiert.',
    'tour.status3': 'Freier Eintritt',
    'tour.date4': 'Nov 2026',
    'tour.venue4': 'Internationales Heißluftballon-Festival',
    'tour.loc4': 'León, Gto.',
    'tour.buttonTickets': 'Tickets',
    'gallery.title': 'Flyer',
    'gallery.subtitle': 'Grafische Identität in Zusammenarbeit mit mexikanischen Illustratorinnen.',
    'merch.title': 'Merch',
    'prensa.title': 'Presse, Syncs & Meilensteine',
    'prensa.syncs': 'Syncs / Film',
    'prensa.press': 'Presse',
    'prensa.openings': 'Eröffnungen',
    'prensa.epkTitle': 'EPK 2026',
    'prensa.epkText': 'Biografie und technischer Rider.',
    'prensa.downloadEpk': 'EPK herunterladen (PDF)',
    'footer.bookingTitle': 'Booking & Kontakt',
    'footer.bookingText': 'Für Termine und Presse.',
    'footer.syncText': 'Für Synchronisationen und Lizenzen.',
    'footer.copyright': '© 2026 Chill&Go.',
    'footer.madeIn': 'Hergestellt in der DF.'
  }
};

const defaultLanguage = (() => {
  const saved = localStorage.getItem('chillandgo-lang');
  if (saved && translations[saved]) {
    return saved;
  }
  const browserLang = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return translations[browserLang] ? browserLang : 'es';
})();

let currentLanguage = defaultLanguage;

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.es;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    const value = dictionary[key];
    if (!value) return;
    if (element.getAttribute('data-i18n-html') === 'true') {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.documentElement.lang = lang;
  document.getElementById('lang-current').textContent = lang.toUpperCase();
  localStorage.setItem('chillandgo-lang', lang);
  currentLanguage = lang;
}

function setupLanguageSwitcher() {
  const toggle = document.getElementById('lang-toggle');
  const menu = document.getElementById('lang-menu');
  const options = document.querySelectorAll('.lang-option');

  toggle.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(isHidden));
  });

  options.forEach((option) => {
    option.addEventListener('click', () => {
      applyTranslations(option.getAttribute('data-lang'));
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
      menu.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Nav: sólido al hacer scroll
const nav = document.getElementById('site-nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll);
onScroll();

// Menú móvil a pantalla completa
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');

menuBtn.addEventListener('click', () => {
  const isClosed = mobileMenu.classList.contains('closed');
  mobileMenu.classList.toggle('closed');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', String(isClosed));
  document.body.style.overflow = isClosed ? 'hidden' : '';
});

document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('closed');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

// ==========================================================================
// Merch → WhatsApp
// Cambia WHATSAPP_NUMBER por tu número con lada de país, solo dígitos.
// Ej. México: 52 + 10 dígitos  ->  '5215512345678'
// ==========================================================================
const WHATSAPP_NUMBER = '5215513545645'; // TODO: reemplazar por el número real

document.querySelectorAll('.merch-card[data-merch]').forEach(card => {
  const producto = card.getAttribute('data-merch');
  const mensaje = `Hola Chill&Go 👋 Me interesa el producto: ${producto}. ¿Sigue disponible?`;
  card.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  card.target = '_blank';
  card.rel = 'noopener';
});

setupLanguageSwitcher();
applyTranslations(currentLanguage);
