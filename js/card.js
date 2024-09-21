class Card {
    constructor(title, image, text) {
        this.title = title;
        this.image = image;
        this.text = text;
    }

    render() {
        const cardHTML = document.createElement('div');
        cardHTML.classList.add('col-md-4');
        cardHTML.innerHTML = `
            <div class="card mb-5">
                <img src="${this.image}" class="card-img-top" alt="${this.title}">
                <div class="card-body">
                    <h5 class="card-title color-texto">${this.title}</h5>
                    <p class="card-text sub-texto">${this.text}</p>
                </div>
            </div>
            
        `;
        return cardHTML;
    }
}

export default Card;
