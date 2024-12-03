import Card from './card.js';

const cardsData = [
    { title: 'Edificio minerva 1', image: 'https://firebasestorage.googleapis.com/v0/b/dbasistenciadocente.appspot.com/o/EDIFICIO%20MINERVA%2FAulas%2FAulas%20por%20dentro%2FAulas%20por%20dentro%202.jpg?alt=media&token=0804b56d-a777-47f7-a5a7-da370ed1ecc4', text: 'Auditorio<br>A 15km de distancia' },
    { title: 'Edificio minerva 2', image: 'https://firebasestorage.googleapis.com/v0/b/dbasistenciadocente.appspot.com/o/BIBLIOTECA%2FBa%C3%B1os%2FBa%C3%B1os%20damas.jpg?alt=media&token=7678bb53-e4d2-4345-b594-ea38024d91f6', text: 'Auditorio<br>A 20km de distancia' },
    { title: 'Edificio minerva 3', image: './recursos/edificioMinerva.jpg', text: 'Auditorio<br>A 10km de distancia' }
];

const verMasCards = [
    { title: 'Edificio minerva 4', image: './recursos/edificioMinerva.jpg', text: 'Auditorio<br>A 25km de distancia' },
    { title: 'Edificio minerva 5', image: './recursos/edificioMinerva.jpg', text: 'Auditorio<br>A 30km de distancia' },
    { title: 'Edificio minerva 6', image: './recursos/edificioMinerva.jpg', text: 'Auditorio<br>A 35km de distancia' }
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
