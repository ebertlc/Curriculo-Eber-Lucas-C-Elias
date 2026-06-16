/* ── Language Switching ─────────────────────────────────────── */
const langSelect = document.getElementById('lang-select');
const savedLang = localStorage.getItem('cv-lang') || 'pt';
langSelect.value = savedLang;

function loadLang(lang) {
  const scriptId = 'lang-data-script';
  const old = document.getElementById(scriptId);
  if (old) old.remove();

  const script = document.createElement('script');
  script.id = scriptId;
  script.src = lang === 'en' ? 'js/english_data.js' : 'js/portugues_data.js';
  script.onload = () => {
    document.getElementById('cv-root').innerHTML = '';
    renderCV(CV, document.getElementById('cv-root'));
  };
  document.body.appendChild(script);
  localStorage.setItem('cv-lang', lang);
}

if (savedLang !== 'pt') loadLang(savedLang);
langSelect.addEventListener('change', (e) => loadLang(e.target.value));

/* ── Dropdown Menu ─────────────────────────────────────────── */
const settingsBtn = document.getElementById('settings-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

settingsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && e.target !== settingsBtn) {
    dropdownMenu.classList.remove('show');
  }
});

/* ── Theme Toggle ──────────────────────────────────────────── */
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

const sunPath = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
const moonPath = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

const savedTheme = localStorage.getItem('cv-theme');
if (savedTheme === 'dark') {
  html.setAttribute('data-theme', 'dark');
  icon.innerHTML = moonPath;
}

toggle.addEventListener('click', () => {
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? 'light' : 'dark');
  icon.innerHTML = dark ? sunPath : moonPath;
  localStorage.setItem('cv-theme', dark ? 'light' : 'dark');
});

/* ── Print PDF ─────────────────────────────────────────────── */
document.getElementById('print-btn').addEventListener('click', () => {
  const prev = html.getAttribute('data-theme');
  html.setAttribute('data-theme', 'light');
  window.print();
  html.setAttribute('data-theme', prev);
});

/* ── Version Toggle ────────────────────────────────────────── */
let versaoCompleta = false;

document.getElementById('versao-btn').addEventListener('click', () => {
  versaoCompleta = !versaoCompleta;
  document.getElementById('versao-btn').querySelector('span').textContent =
    versaoCompleta ? 'Simplificado' : 'Completo';
  document.getElementById('cv-root').innerHTML = '';
  renderCV(CV, document.getElementById('cv-root'));
});
