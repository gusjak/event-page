// Hamburger Menu Show/Hide
document.getElementById('nav-toggle').onclick = () => {
  document.getElementById('nav-content').classList.toggle('hidden');
};

// Document Title Animation
let i = 0;
setInterval(() => {
  document.title = i++ % 2 == 0 ? 'Welcome to' : "Mikkeller's Launch Event 🍻";
}, 1500);

// Get query parameter values
const url_string = window.location.href.toLowerCase();
const url = new URL(url_string);
const firstName = url.searchParams.get('firstname');
const lastName = url.searchParams.get('lastname');
const email = url.searchParams.get('email');

if (firstName === null && lastName === null && email === null) {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
} else {
  document.getElementById('name').value = firstName + ' ' + lastName;
  document.getElementById('email').value = email;
}

// Card click Events

// Event Card
document.querySelector('.show-event').onclick = () => {
  document.querySelector('.event').classList.toggle('-translate-y-full');
  document.querySelector('.event-arrow').classList.toggle('rotate-180');
};

// Eat Card
document.querySelector('.show-eat').onclick = () => {
  document.querySelector('.eat').classList.toggle('-translate-y-full');
  document.querySelector('.eat-arrow').classList.toggle('rotate-180');
};

// Music Card
document.querySelector('.show-music').onclick = () => {
  document.querySelector('.music').classList.toggle('-translate-y-full');
  document.querySelector('.music-arrow').classList.toggle('rotate-180');
};

// Register Form Card
document.querySelector('.show-form').onclick = () => {
  document.querySelector('.form').classList.toggle('-translate-y-full');
  document.querySelector('.show-form').classList.toggle('hidden');
};

// About Us Card
document.querySelector('.show-about').onclick = () => {
  document.querySelector('.about').classList.toggle('-translate-y-full');
  document.querySelector('.about-arrow').classList.toggle('rotate-180');
};
