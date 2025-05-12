/* Fonction pour le carrousel */

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const carouselSlide = document.querySelector('.carousel-slide');

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

window.addEventListener('load', () => {
    showSlide(slideIndex);
});

/* Fonction pour le tri du tableau */

let isAscending = true;

function sortTable(columnIndex) {
    const table = document.getElementById("games-table");
    let rows = Array.from(table.rows).slice(1); 
    
    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText;
        let cellB = rowB.cells[columnIndex].innerText;
        
        if (columnIndex === 1) {
            cellA = parseInt(cellA);
            cellB = parseInt(cellB);
        }
        
        if (cellA > cellB) return isAscending ? 1 : -1;
        if (cellA < cellB) return isAscending ? -1 : 1;
        return 0;
    });
    
    isAscending = !isAscending;
    document.getElementById("sort-button").textContent = isAscending ? "↑" : "↓";
    rows.forEach(row => table.appendChild(row));
}

/* Fonction pour le résultat du quiz */

function checkAnswers() {
    const answers = {
        q1: 'true',
        q2: 'false',
        q3: 'true',
        q4: 'true',
        q5: 'false',
        q6: 'true',
        q7: 'true',
        q8: 'true',
        q9: 'true',
        q10: 'true'
    };

    let score = 0;
    for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName('q' + i);
        let answered = false;
        for (const radio of radios) {
            if (radio.checked) {
                answered = true;
                if (radio.value === answers['q' + i]) {
                    score++;
                }
            }
        }
        if (!answered) {
            alert(`Veuillez répondre à toutes les questions.`);
            return;
        }
    }

    const result = document.getElementById('result-mario');
    result.textContent = `Vous avez obtenu ${score} sur 10.`;
}
