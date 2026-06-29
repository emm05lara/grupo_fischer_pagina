/* ============================================================
   Grupo Fischer · assets/js/main.js
   Tema claro/oscuro + Menú hamburguesa
   ============================================================ */

(function () {
  'use strict';

  const THEME_KEY = 'gf-tema';
  const html      = document.documentElement;

  /* ---- Tema ---- */
  function aplicarTema(tema) {
    html.setAttribute('data-theme', tema);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.setAttribute(
        'aria-label',
        tema === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'
      );
      btn.setAttribute('title', btn.getAttribute('aria-label'));
    }
  }

  function initTema() {
    const guardado  = localStorage.getItem(THEME_KEY);
    const prefLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    aplicarTema(guardado ?? (prefLight ? 'light' : 'dark'));
  }

  function toggleTema() {
    const actual  = html.getAttribute('data-theme');
    const siguiente = actual === 'light' ? 'dark' : 'light';
    aplicarTema(siguiente);
    localStorage.setItem(THEME_KEY, siguiente);
  }

  /* ---- Menú hamburguesa ---- */
  function initNav() {
    const toggle = document.getElementById('nav-toggle');
    const nav    = document.getElementById('main-nav');
    if (!toggle || !nav) return;

    function cerrarNav() {
      nav.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function abrirNav() {
      nav.classList.add('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    toggle.addEventListener('click', function () {
      const abierto = nav.classList.contains('nav-open');
      abierto ? cerrarNav() : abrirNav();
    });

    /* Cerrar al hacer clic en un enlace */
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', cerrarNav);
    });

    /* Cerrar con Escape */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
        cerrarNav();
        toggle.focus();
      }
    });

    /* Cerrar si se redimensiona a desktop */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) cerrarNav();
    });
  }

  /* ---- Init ---- */
  initTema();

  document.addEventListener('DOMContentLoaded', function () {
    initNav();

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.addEventListener('click', toggleTema);
  });

})();
