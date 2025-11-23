document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navItemsRight = document.querySelector('.nav-items-right');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Menu hamburger
    hamburger.addEventListener('click', function() {
        navItemsRight.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Dropdowns no mobile
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        });
    }

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-container')) {
            navItemsRight.classList.remove('active');
            hamburger.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Fechar menu ao redimensionar a janela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navItemsRight.classList.remove('active');
            hamburger.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});


//  carrosselll
document.addEventListener('DOMContentLoaded', function() {
    const carrosselTrack = document.querySelector('.carrossel-track');
    const carrosselContainer = document.querySelector('.carrossel-container');
    const carrosselItems = document.querySelectorAll('.experiencia-item');
    
    if (carrosselTrack && carrosselItems.length > 0) {
        // Clonar os itens para criar efeito infinito
        const itemsToClone = Math.ceil(carrosselContainer.offsetWidth / (carrosselItems[0].offsetWidth + 32));
        
        for (let i = 0; i < itemsToClone; i++) {
            carrosselItems.forEach(item => {
                const clone = item.cloneNode(true);
                carrosselTrack.appendChild(clone);
            });
        }
        
        const allItems = document.querySelectorAll('.experiencia-item');
        let currentIndex = 0;
        let itemsToShow = 4;
        let autoPlayInterval;
        
        function updateItemsToShow() {
            if (window.innerWidth <= 480) {
                itemsToShow = 1;
            } else if (window.innerWidth <= 768) {
                itemsToShow = 2;
            } else if (window.innerWidth <= 1024) {
                itemsToShow = 3;
            } else {
                itemsToShow = 4;
            }
        }
        
        function updateCarrossel() {
            const itemWidth = carrosselItems[0].offsetWidth + 32;
            const translateX = -currentIndex * itemWidth;
            
            carrosselTrack.style.transition = 'transform 0.5s ease';
            carrosselTrack.style.transform = `translateX(${translateX}px)`;
            
            // Reset suave quando chegar no final dos itens originais
            if (currentIndex >= carrosselItems.length) {
                setTimeout(() => {
                    carrosselTrack.style.transition = 'none';
                    currentIndex = 0;
                    carrosselTrack.style.transform = `translateX(0px)`;
                    
                    // Forçar reflow
                    void carrosselTrack.offsetWidth;
                    
                    setTimeout(() => {
                        carrosselTrack.style.transition = 'transform 0.5s ease';
                    }, 50);
                }, 500);
            }
        }
        
        function nextSlide() {
            currentIndex++;
            updateCarrossel();
        }
        
        function startAutoPlay() {
            autoPlayInterval = setInterval(nextSlide, 3000);
        }
        
        function stopAutoPlay() {
            clearInterval(autoPlayInterval);
        }
        
        // Pausa quando o mouse está sobre o carrossel
        carrosselContainer.addEventListener('mouseenter', stopAutoPlay);
        carrosselContainer.addEventListener('mouseleave', startAutoPlay);
        
        // Inicializar
        updateItemsToShow();
        startAutoPlay();
        
        // Atualizar no resize
        window.addEventListener('resize', function() {
            updateItemsToShow();
        });
    }
});

function home() {
    const target = document.getElementById('home');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (history && history.pushState) history.pushState(null, '', '#home');
        else window.location.hash = '#home';
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (history && history.pushState) history.pushState(null, '', '#home');
        else window.location.hash = '#home';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('sobremim');
    const target = document.getElementById('sobreMim');

    if (link && target) {
        link.style.cursor = 'pointer'; // Adiciona o cursor pointer
        link.addEventListener('click', function(e) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (history && history.pushState) history.pushState(null, '', '#sobreMim');
            else window.location.hash = '#sobreMim';
        });
    }
});

