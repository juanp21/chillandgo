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
    'bio.copy': 'Chill&amp;Go es el proyecto de <strong class="text-paper">Juan Pablo Gutiérrez</strong>, productor y multiinstrumentista de la Ciudad de México. Con más de 11 millones de reproducciones globales, su música mezcla ritmos latinos, lofi, indie y jazz con la energía cotidiana de la CDMX. Ha curado la playlist oficial "Lofi Mexa" en Spotify, licenció su música para Nike Retail con Muzak a nivel global y sincronizó su track "Autorretrato" en la película <em>Déjame estar contigo</em>. En vivo ha llevado su show a escenarios como Foro Indie Rocks!, Foro del Tejedor, Festival Internacional del Globo, Palacio Postal y Mexsynthco, además de abrir giras y shows para Amandititita, H3F y Cosmic Wacho.',
    'bio.listenNow': 'Escúchalo ahora',
    'bio.viewTour': 'Ver Tour',
    'stats.monthly': 'Oyentes mensuales',
    'stats.followers': 'Seguidores',
    'stats.subscribers': 'Suscriptores',
    'featured.title': 'featured on indie latin by deezer',
    'featured.text': 'escucha "Me duele que rompimos" en deezer',
    'featured.button': 'escuchar ahora',
    'releases.title': 'Lanzamientos',
    'releases.viewAll': 'Ver discografía completa →',
    'releases.item1.meta': 'NUEVO ÁLBUM',
    'releases.item1.title': 'Tengo que ir<br>a terapia',
    'releases.item2.meta': 'ÁLBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ÁLBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NUEVO SINGLE',
    'releases.item4.title': 'youjustdontknow',
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
    'tour.date4': '13 de NOVIEMBRE',
    'tour.venue4': 'SAE x Rebel Rebel',
    'tour.loc4': 'CDMX | Full Band.',
    'tour.date5': '15 de NOVIEMBRE',
    'tour.venue5': 'Festival Internacional del Globo',
    'tour.loc5': 'León, Gto.',
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
    'bio.copy': 'Chill&amp;Go is the project of <strong class="text-paper">Juan Pablo Gutiérrez</strong>, producer and multi-instrumentalist from Mexico City. With more than 11 million streams worldwide, his music blends Latin rhythms, lo-fi, indie and jazz with the everyday energy of Mexico City. He has curated the official "Lofi Mexa" playlist on Spotify, licensed his music globally to Nike Retail through Muzak, and synced his track "Autorretrato" in the film <em>Déjame estar contigo</em>. Live, he has taken his show to stages such as Foro Indie Rocks!, Foro del Tejedor, Festival Internacional del Globo, Palacio Postal and Mexsynthco, and has opened tours and shows for Amandititita, H3F and Cosmic Wacho.',
    'bio.listenNow': 'Listen now',
    'bio.viewTour': 'See tour',
    'stats.monthly': 'Monthly listeners',
    'stats.followers': 'Followers',
    'stats.subscribers': 'Subscribers',
    'featured.title': 'featured on indie latin by deezer',
    'featured.text': 'listen to "Me duele que rompimos" on deezer',
    'featured.button': 'listen now',
    'releases.title': 'Releases',
    'releases.viewAll': 'View full discography →',
    'releases.item1.meta': 'NEW ALBUM',
    'releases.item1.title': 'Tengo que ir<br>a terapia',
    'releases.item2.meta': 'ALBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ALBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NEW SINGLE',
    'releases.item4.title': 'youjustdontknow',
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
    'tour.date4': 'November 13',
    'tour.venue4': 'SAE x Rebel Rebel',
    'tour.loc4': 'CDMX | Full Band.',
    'tour.date5': 'November 15',
    'tour.venue5': 'International Hot Air Balloon Festival',
    'tour.loc5': 'León, Gto.',
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
    'bio.copy': 'Chill&amp;Go est le projet de <strong class="text-paper">Juan Pablo Gutiérrez</strong>, producteur et multi-instrumentiste de Mexico. Avec plus de 11 millions d\'écoutes dans le monde, sa musique mêle rythmes latins, lo-fi, indie et jazz à l\'énergie quotidienne de Mexico. Il a été curateur de la playlist officielle "Lofi Mexa" sur Spotify, a licencié sa musique à Nike Retail via Muzak à l\'échelle mondiale et a placé son morceau "Autorretrato" dans le film <em>Déjame estar contigo</em>. Sur scène, il s\'est produit au Foro Indie Rocks!, au Foro del Tejedor, au Festival Internacional del Globo, au Palacio Postal et à Mexsynthco, et a assuré les premières parties de tournées et de concerts d\'Amandititita, H3F et Cosmic Wacho.',
    'bio.listenNow': 'Écouter maintenant',
    'bio.viewTour': 'Voir le tour',
    'stats.monthly': 'Auditeurs mensuels',
    'stats.followers': 'Abonnés',
    'stats.subscribers': 'Abonnés',
    'featured.title': 'featured on indie latin by deezer',
    'featured.text': 'écoute "Me duele que rompimos" sur deezer',
    'featured.button': 'écouter maintenant',
    'releases.title': 'Sorties',
    'releases.viewAll': 'Voir toute la discographie →',
    'releases.item1.meta': 'NOUVEL ALBUM',
    'releases.item1.title': 'Tengo que ir<br>a terapia',
    'releases.item2.meta': 'ALBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ALBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NOUVEAU SINGLE',
    'releases.item4.title': 'youjustdontknow',
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
    'tour.date4': '13 novembre',
    'tour.venue4': 'SAE x Rebel Rebel',
    'tour.loc4': 'CDMX | Full Band.',
    'tour.date5': '15 novembre',
    'tour.venue5': 'Festival international des montgolfières',
    'tour.loc5': 'León, Gto.',
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
    'bio.copy': 'Chill&amp;Go ist das Projekt von <strong class="text-paper">Juan Pablo Gutiérrez</strong>, Produzent und Multi-Instrumentalist aus Mexiko-Stadt. Mit über 11 Millionen Streams weltweit verbindet seine Musik lateinamerikanische Rhythmen, Lo-Fi, Indie und Jazz mit der alltäglichen Energie von Mexiko-Stadt. Er hat die offizielle Playlist "Lofi Mexa" auf Spotify kuratiert, seine Musik über Muzak weltweit an Nike Retail lizenziert und seinen Track "Autorretrato" im Film <em>Déjame estar contigo</em> platziert. Live stand er auf Bühnen wie Foro Indie Rocks!, Foro del Tejedor, Festival Internacional del Globo, Palacio Postal und Mexsynthco und eröffnete Tourneen und Shows für Amandititita, H3F und Cosmic Wacho.',
    'bio.listenNow': 'Jetzt hören',
    'bio.viewTour': 'Tour ansehen',
    'stats.monthly': 'Monatliche Hörer',
    'stats.followers': 'Follower',
    'stats.subscribers': 'Abonnenten',
    'featured.title': 'featured on indie latin by deezer',
    'featured.text': 'hör "Me duele que rompimos" auf deezer',
    'featured.button': 'jetzt hören',
    'releases.title': 'Veröffentlichungen',
    'releases.viewAll': 'Komplette Diskografie ansehen →',
    'releases.item1.meta': 'NEUES ALBUM',
    'releases.item1.title': 'Tengo que ir<br>a terapia',
    'releases.item2.meta': 'ALBUM',
    'releases.item2.title': 'El Patio 1 & 2',
    'releases.item3.meta': 'ALBUM',
    'releases.item3.title': 'El Mercado',
    'releases.item4.meta': 'NEUE SINGLE',
    'releases.item4.title': 'youjustdontknow',
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
    'tour.date4': '13. November',
    'tour.venue4': 'SAE x Rebel Rebel',
    'tour.loc4': 'CDMX | Full Band.',
    'tour.date5': '15. November',
    'tour.venue5': 'Internationales Heißluftballon-Festival',
    'tour.loc5': 'León, Gto.',
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
