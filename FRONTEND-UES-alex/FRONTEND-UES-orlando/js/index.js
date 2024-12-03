import { initCards as initMedicinaCards } from './medicina.js';
import { initCards as initMinervaCards } from './minerva.js';
import { initCards as initPabellonNorteCards } from './pabellonNorte.js';

document.addEventListener('DOMContentLoaded', () => {
    const mediContainer = document.getElementById('cards-medicina');
    const mediBtn = document.getElementById('load-more-btn-medicina');

    const minervaContainer = document.getElementById('cards-minerva');
    const minervaBtn = document.getElementById('load-more-btn-minerva');
    
    const pabellonNorteContainer = document.getElementById('cards-pabellon-norte');
    const pabellonNorteBtn = document.getElementById('load-more-btn-pabellon-norte');
    

    initMedicinaCards(mediContainer, mediBtn);
    initMinervaCards(minervaContainer, minervaBtn);
    initPabellonNorteCards(pabellonNorteContainer, pabellonNorteBtn);
});
