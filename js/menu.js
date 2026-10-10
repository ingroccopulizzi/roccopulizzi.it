/*
  SITO DI ROCCO PULIZZI — menu su telefono
  Versione del codice: v0.9 (2026-10-10)

  Cosa fa: sul telefono nasconde il menu dietro un pulsante e lo apre/chiude.
  Se questo script non funziona, il menu resta semplicemente sempre visibile.
  Nessun cookie, nessun tracciamento.
*/
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var pulsante = document.querySelector('.testata__menu-pulsante');
    var menu = document.getElementById('menu-principale');
    if (!pulsante || !menu) return;
    var etichetta = pulsante.querySelector('.visually-hidden');

    function imposta(aperto) {
      menu.classList.toggle('is-aperto', aperto);
      pulsante.setAttribute('aria-expanded', aperto ? 'true' : 'false');
      if (etichetta) etichetta.textContent = aperto ? 'Chiudi il menu' : 'Apri il menu';
    }

    pulsante.addEventListener('click', function () {
      imposta(pulsante.getAttribute('aria-expanded') !== 'true');
    });

    // Chiude il menu dopo aver scelto una voce
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') imposta(false);
    });

    // Il tasto Esc chiude il menu e riporta il cursore sul pulsante
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && pulsante.getAttribute('aria-expanded') === 'true') {
        imposta(false);
        pulsante.focus();
      }
    });
  });
})();
