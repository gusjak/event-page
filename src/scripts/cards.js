// Card click Events

// Show/Hide Event Card Information
const eventButton = document.querySelector('.show-event');
const eventButtonText = document.querySelector('.event-button-text');
eventButton.onclick = () => {
  eventButton.classList.toggle('-bottom-1');
  eventButtonText.classList.toggle('-translate-y-12');
  if (eventButtonText.textContent == 'Show Less') {
    eventButtonText.textContent = 'Show More';
  } else {
    eventButtonText.textContent = 'Show Less';
  }
  document.querySelector('.event-card').classList.toggle('-translate-y-full');
  document.querySelector('.event-arrow').classList.toggle('rotate-180');
};

// Show/Hide Eat Card Information
const eatButton = document.querySelector('.show-eat');
const eatButtonText = document.querySelector('.eat-button-text');
eatButton.onclick = () => {
  eatButton.classList.toggle('-bottom-1');
  eatButtonText.classList.toggle('-translate-y-12');
  if (eatButtonText.textContent == 'Show Less') {
    eatButtonText.textContent = 'Show More';
  } else {
    eatButtonText.textContent = 'Show Less';
  }
  document.querySelector('.eat').classList.toggle('-translate-y-full');
  document.querySelector('.eat-arrow').classList.toggle('rotate-180');
};

// Show/Hide Music Card Information
const musicButton = document.querySelector('.show-music');
const musicButtonText = document.querySelector('.music-button-text');
musicButton.onclick = () => {
  musicButton.classList.toggle('-bottom-1');
  musicButtonText.classList.toggle('-translate-y-12');
  if (musicButtonText.textContent == 'Show Less') {
    musicButtonText.textContent = 'Show More';
  } else {
    musicButtonText.textContent = 'Show Less';
  }
  document.querySelector('.music').classList.toggle('-translate-y-full');
  document.querySelector('.music-arrow').classList.toggle('rotate-180');
};

// Show Sign Up Comfirmation
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.form').classList.toggle('-translate-y-full');
  document.querySelector('.show-form').classList.toggle('hidden');
});

// Show/Hide Gift Card Information Front
const giftButton = document.querySelector('.show-gift');
giftButton.onclick = () => {
  document.querySelector('.gift').classList.toggle('-translate-y-full');
};

// Show/Hide Gift Card Information Back
const giftBackButton = document.querySelector('.back');
giftBackButton.onclick = () => {
  document.querySelector('.gift').classList.remove('-translate-y-full');
};
