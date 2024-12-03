import Card from './card.js';

const cardsData = [
    { title: 'Pabellon Norte 1', image: './recursos/pabellonNorte.jpg', text: 'Auditorio<br>A 15km de distancia' },
    { title: 'Pabellon Norte 2', image: './recursos/pabellonNorte.jpg', text: 'Auditorio<br>A 20km de distancia' },
    { title: 'Pabellon Norte 3', image: './recursos/pabellonNorte.jpg', text: 'Auditorio<br>A 10km de distancia' }
];

const verMasCards = [
    { title: 'Pabellon Norte 4', image: './recursos/pabellonNorte.jpg', text: 'Auditorio<br>A 25km de distancia' },
    { title: 'Pabellon Norte 5', image: './recursos/pabellonNorte.jpg', text: 'Auditorio<br>A 30km de distancia' },
    { title: 'Pabellon Norte 6', image: './recursos/pabellonNorte.jpg', text: 'Auditorio<br>A 35km de distancia' }
];

function renderCards(container, cards, extra = false) {
    const fragment = document.createDocumentFragment();
    cards.forEach(cardData => {
        const card = new Card(cardData.title, cardData.image, cardData.text);
        const cardElement = card.render();
        if (extra) {
            cardElement.classList.add('extra-card');
        }
        fragment.appendChild(cardElement);
    });
    container.appendChild(fragment);
}

export function initCards(container, btnVerMas) {
    // Renderiza las primeras cards
    renderCards(container, cardsData);

    let isExpanded = false;

    btnVerMas.addEventListener('click', () => {
        if (!isExpanded) {
            renderCards(container, verMasCards, true); 
            btnVerMas.textContent = 'Ver menos';
        } else {
            const extraCards = document.querySelectorAll('.extra-card');
            // Elimina las cards con la clase 'extra-card'
            extraCards.forEach(card => card.remove());  
            btnVerMas.textContent = 'Ver más';
        }
        isExpanded = !isExpanded;
    });
}
