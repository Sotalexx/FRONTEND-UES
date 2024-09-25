const menuContainer = document.querySelector('.menu-container');
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Evento al presionar el mouse
    menuContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - menuContainer.offsetLeft;
      scrollLeft = menuContainer.scrollLeft;
      menuContainer.style.cursor = 'grabbing'; // Cambia el cursor al arrastrar
    });

    // Evento cuando el mouse se mueve
    menuContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - menuContainer.offsetLeft;
      const walk = (x - startX) * 2; // Ajustar la velocidad del desplazamiento
      menuContainer.scrollLeft = scrollLeft - walk;
    });

    // Evento al soltar el mouse
    menuContainer.addEventListener('mouseup', () => {
      isDragging = false;
      menuContainer.style.cursor = 'grab'; // Restablecer el cursor
    });

    // Evento cuando el mouse sale del contenedor
    menuContainer.addEventListener('mouseleave', () => {
      isDragging = false;
      menuContainer.style.cursor = 'grab'; // Restablecer el cursor
    });


    function showMoreCards() {
      const hiddenCards = document.querySelector('.hidden-cards');
      hiddenCards.style.display = 'grid'; // Mostrar las tarjetas ocultas
      const viewMoreBtn = document.querySelector('.view-more-btn');
      viewMoreBtn.style.display = 'none'; // Ocultar el botón "Ver más"
    }

    function showMoreCards(departmentId) {
        const hiddenCards = document.getElementById(departmentId);
        const btn = document.querySelector(`button[onclick="showMoreCards('${departmentId}')"]`);
        if (hiddenCards.style.display === 'none' || hiddenCards.style.display === '') {
            hiddenCards.style.display = 'grid'; // Asegurar que se muestra como grid
            btn.innerText = 'Ver menos...';
        } else {
            hiddenCards.style.display = 'none';
            btn.innerText = 'Ver más...';
        }
    }