// Card click Events

// Show/Hide Event Card Information
document.querySelector('.show-event').onclick = () => {
  document.querySelector('.event').classList.toggle('-translate-y-full');
  document.querySelector('.event-arrow').classList.toggle('rotate-180');
};

// Show/Hide Eat Card Information
document.querySelector('.show-eat').onclick = () => {
  document.querySelector('.eat').classList.toggle('-translate-y-full');
  document.querySelector('.eat-arrow').classList.toggle('rotate-180');
};

// Show/Hide Music Card Information
document.querySelector('.show-music').onclick = () => {
  document.querySelector('.music').classList.toggle('-translate-y-full');
  document.querySelector('.music-arrow').classList.toggle('rotate-180');
};

// Show Sign Up Comfirmation
document.querySelector('.show-form').onclick = () => {
  document.querySelector('.form').classList.toggle('-translate-y-full');
  document.querySelector('.show-form').classList.toggle('hidden');
};

// Show/Hide Gift Card Information
document.querySelector('.show-gift').onclick = () => {
  document.querySelector('.gift').classList.toggle('-translate-y-full');
};
