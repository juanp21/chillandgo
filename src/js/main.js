// ==========================================================================
// CHILL&GO — interacciones del sitio
// ==========================================================================

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
