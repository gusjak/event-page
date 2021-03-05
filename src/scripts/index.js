// Hamburger Menu Show/Hide
document.getElementById('nav-toggle').onclick = function () {
  document.getElementById('nav-content').classList.toggle('hidden');
};

// Document Title Animation
let i = 0;
setInterval(function () {
  document.title = i++ % 2 == 0 ? 'Welcome to' : "Mikkeller's Launch Event 🍻";
}, 1500);
