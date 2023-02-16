const cards = document.querySelectorAll('.content-card');

cards.forEach(card => {
  const contentText = card.querySelector('.content-text');
  const cardImage = card.querySelector('.content-card-img');
  
  const informationBtn = card.querySelector('.information-btn');
  informationBtn.addEventListener('click', () => {
    contentText.classList.remove('hidden');
    cardImage.style.display = 'none';
  });

  const backBtn = card.querySelector('.back-button');
  backBtn.addEventListener('click', () => {
    contentText.classList.add('hidden');
    cardImage.style.display = 'block';
  });
});

const salutation = document.querySelector('.salutation');

function typeWrite(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = ''
  console.log(textArray)
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, 75 * i);
  });
}
typeWrite(salutation);

const menuIcon = document.querySelector('#menu-icon');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault()
  const nav = document.querySelector('#nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');

  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
  
};

menuIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('touchstart', toggleMenu);

window.onscroll = () => {
  nav.classList.remove('active');
};

const scrollAnimation = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  reset: true
});

scrollAnimation.reveal('.home-img', {delay:200, origin:'top'});
scrollAnimation.reveal('.home-img', {delay:200, origin:'top'});
scrollAnimation.reveal('.about, .projects, .cta, .resume, .contact', {delay: 100, origin:'top'} );
