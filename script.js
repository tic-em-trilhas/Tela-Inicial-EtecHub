const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelector('.indicators');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i]?.classList.toggle('active', i === index);
  });

  // Lógica para esconder as setas
  if (index === 0) {
    prevButton.style.display = 'none'; // Esconde a seta da esquerda no primeiro slide
  } else {
    prevButton.style.display = 'block';
  }

  if (index === slides.length - 1) {
    prevButton.style.display = 'none';
    nextButton.style.display = 'none'; // Esconde a seta da direita no quarto slide
    indicators.style.display = 'none'; // Esconde os dots no quarto slide
  } else {
    nextButton.style.display = 'block';
    indicators.style.display = 'flex';
  }
}

// Lógica para navegação pelos slides
prevButton.addEventListener('click', () => {
  currentSlide = Math.max(0, currentSlide - 1);
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = Math.min(slides.length - 1, currentSlide + 1);
  showSlide(currentSlide);
});

// Funcionalidade dos dots
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    currentSlide = i;
    showSlide(currentSlide);
  });
});

// Exibir slide inicial corretamente
showSlide(currentSlide);

document.querySelector('.skip-button').addEventListener('click', () => {
  currentSlide = 3; // Índice do 4º slide (começa em 0)
  showSlide(currentSlide);
});

