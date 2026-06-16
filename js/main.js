/* ── Ícones SVG inline ──────────────────────────────────────── */
const ICONS = {
  phone: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
};

/* ── Helpers ────────────────────────────────────────────────── */
function el(tag, attrs = {}, ...children) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') e.className = v;
    else e.setAttribute(k, v);
  }
  for (const c of children) {
    if (typeof c === 'string') e.insertAdjacentHTML('beforeend', c);
    else if (c) e.appendChild(c);
  }
  return e;
}

function section(titulo, className = '') {
  const sec = el('section', { class: 'section' + (className ? ' ' + className : '') });
  if (titulo) {
    sec.appendChild(el('h2', { class: 'section-title' }, titulo));
  }
  return sec;
}

function plainList(itens) {
  const ul = el('ul', { class: 'plain-list' });
  itens.forEach(t => ul.appendChild(el('li', {}, t)));
  return ul;
}

function criarExpItem(exp) {
  const art = el('article', { class: 'exp-item' });

  /* Empresa como título do grupo */
  art.appendChild(el('span', { class: 'exp-job' }, exp.empresa));

  /* Caso simples: cargo único */
  if (exp.cargo) {
    const company = el('p', { class: 'exp-company' });
    company.insertAdjacentHTML('beforeend',
      `${exp.cargo} <span class="exp-date">| ${exp.periodo}</span>`
    );
    art.appendChild(company);

    const ul = el('ul', { class: 'exp-bullets' });
    exp.itens.forEach(item => ul.appendChild(el('li', {}, item)));
    art.appendChild(ul);
  }

  /* Caso múltiplos cargos na mesma empresa */
  if (exp.cargos) {
    exp.cargos.forEach(c => {
      const subcargo = el('div', { class: 'exp-subcargo' });

      const company = el('p', { class: 'exp-company' });
      company.insertAdjacentHTML('beforeend',
        `${c.cargo} <span class="exp-date">| ${c.periodo}</span>`
      );
      subcargo.appendChild(company);

      const ul = el('ul', { class: 'exp-bullets' });
      c.itens.forEach(item => ul.appendChild(el('li', {}, item)));
      subcargo.appendChild(ul);

      art.appendChild(subcargo);
    });
  }

  /* Indicadores — só na versão completa */
  if (versaoCompleta && exp.indicadores) {
    const ind = el('div', { class: 'exp-indicadores' });
    // ind.appendChild(el('p', { class: 'exp-indicadores-title' }, 'Indicadores de Rendimento'));
    ind.appendChild(el('p', { class: 'exp-indicadores-text' }, exp.indicadores.trim()));
    art.appendChild(ind);
  }

  return art;
}

/*function criarExpItem(exp) {
  const art = el('article', { class: 'exp-item' });
  art.appendChild(el('span', { class: 'exp-job' }, exp.cargo));
  const company = el('p', { class: 'exp-company' });
  company.insertAdjacentHTML('beforeend',
    `${exp.empresa} <span class="exp-date">| ${exp.periodo}</span>`
  );
  art.appendChild(company);
  const ul = el('ul', { class: 'exp-bullets' });
  exp.itens.forEach(item => ul.appendChild(el('li', {}, item)));
  art.appendChild(ul);
  return art;
}*/

/* ── Renderizador principal ─────────────────────────────────── */
function renderCV(cv, root) {

  /* CABEÇALHO */
  const header = el('header');
  header.appendChild(el('h1', { class: 'hd-name' }, cv.nome));
  header.appendChild(el('p', { class: 'hd-role' }, cv.cargo));

  const addr = el('address', { style: 'font-style:normal;' });
  const row1 = el('div', { class: 'contact-row' });
  const row2 = el('div', { class: 'contact-row' });
  cv.contato.forEach((c, i) => {
    const cell = el('span', { class: 'contact-cell' });
    cell.insertAdjacentHTML('beforeend', ICONS[c.icone] || '');
    if (c.href) {
      cell.appendChild(el('a', { href: c.href, target: '_blank', rel: 'noopener' }, c.texto));
    } else {
      cell.insertAdjacentHTML('beforeend', c.texto);
    }
    (i < 3 ? row1 : row2).appendChild(cell);
  });
  addr.appendChild(row1);
  addr.appendChild(row2);
  header.appendChild(addr);
  root.appendChild(header);

  /* RESUMO */
  if (cv.resumo) {
    const secResumo = section(cv.resumoVisivel !== false ? 'Resumo Profissional' : '');
    secResumo.appendChild(el('p', { class: 'section-text' }, cv.resumo.trim()));
    root.appendChild(secResumo);
  }

  /* SKILLS */
  const secSkills = section('Skills', 'section-skills');
  const skillRow = el('div', { class: 'skills-row' });
  cv.skills.forEach(s => skillRow.appendChild(el('span', { class: 'skill-tag' }, s)));
  secSkills.appendChild(skillRow);
  root.appendChild(secSkills);

  /* EXPERIÊNCIAS */
  if (cv.experiencias && cv.experiencias.length > 0) {
    const secExp = el('section', { class: 'section' });
    const expHeader = el('div', { class: 'exp-section-header' });
    expHeader.appendChild(el('h2', { class: 'section-title' }, 'Experiências'));
    expHeader.appendChild(criarExpItem(cv.experiencias[0]));
    secExp.appendChild(expHeader);

    if (cv.experiencias.length > 1) {
      const expList = el('div', { class: 'exp-list' });
      cv.experiencias.slice(1).forEach(exp => {
        expList.appendChild(criarExpItem(exp));
      });
      secExp.appendChild(expList);
    }
    root.appendChild(secExp);
  }

  /* FORMAÇÃO */
  const secForm = section('Formação');
  cv.formacao.forEach(f => {
    const div = el('div', { class: 'edu-item' });
    div.appendChild(el('p', { class: 'edu-degree' }, f.curso));
    div.appendChild(el('p', { class: 'edu-institution' }, f.instituicao));
    secForm.appendChild(div);
  });
  root.appendChild(secForm);

  /* CERTIFICAÇÕES */
  const secCert = section('Certificações');
  secCert.appendChild(plainList(cv.certificacoes));
  root.appendChild(secCert);

  /* IDIOMAS */
  const secLang = section('Idiomas');
  const langRow = el('div', { class: 'lang-row' });
  cv.idiomas.forEach(l => {
    const div = el('div', { class: 'lang-pair' });
    div.insertAdjacentHTML('beforeend',
      `<span class="lang-name">${l.idioma}</span><span class="lang-level">${l.nivel}</span>`
    );
    langRow.appendChild(div);
  });
  secLang.appendChild(langRow);
  root.appendChild(secLang);

  /* PREMIAÇÕES */
  const secPrem = section('Premiações');
  const premList = el('ul', { class: 'plain-list' });
  cv.premiacoes.forEach(p => {
    const li = el('li', {});
    li.insertAdjacentHTML('beforeend', `<strong>${p.titulo}</strong>`);
    if (versaoCompleta && p.descricao) {
      li.insertAdjacentHTML('beforeend',
        `<span class="prem-desc">${p.descricao}</span>`
      );
    }
    premList.appendChild(li);
  });
  secPrem.appendChild(premList);
  root.appendChild(secPrem);
}

let versaoCompleta = false;

renderCV(CV, document.getElementById('cv-root'));

/* ── Dark mode + PDF ────────────────────────────────────────── */
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

const sunPath = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
const moonPath = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`;

const saved = localStorage.getItem('cv-theme');
if (saved === 'dark') { html.setAttribute('data-theme', 'dark'); icon.innerHTML = moonPath; }

toggle.addEventListener('click', () => {
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? 'light' : 'dark');
  icon.innerHTML = dark ? sunPath : moonPath;
  localStorage.setItem('cv-theme', dark ? 'light' : 'dark');
});

document.getElementById('print-btn').addEventListener('click', () => {
  const prev = html.getAttribute('data-theme');
  html.setAttribute('data-theme', 'light');
  window.print();
  html.setAttribute('data-theme', prev);
});

document.getElementById('versao-btn').addEventListener('click', () => {
  versaoCompleta = !versaoCompleta;
  document.getElementById('versao-btn').querySelector('span').textContent =
    versaoCompleta ? 'Simplificado' : 'Completo';
  document.getElementById('cv-root').innerHTML = '';
  renderCV(CV, document.getElementById('cv-root'));
});
