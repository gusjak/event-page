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

// Card click Event
document.querySelector('.show').onclick = () => {
  document.querySelector('.event').classList.toggle('-translate-y-full');
  document.querySelector('.arrow').classList.toggle('rotate-180');
};
