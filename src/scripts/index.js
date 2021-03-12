// Hamburger Menu Show/Hide
document.getElementById('nav-toggle').onclick = function () {
  document.getElementById('nav-content').classList.toggle('hidden');
};

// Document Title Animation
let i = 0;
setInterval(function () {
  document.title = i++ % 2 == 0 ? 'Welcome to' : "Mikkeller's Launch Event 🍻";
}, 1500);

// Get query parameter values
window.onload = function () {
  try {
    const url_string = window.location.href.toLowerCase();
    const url = new URL(url_string);
    const name = url.searchParams.get('name');
    const email = url.searchParams.get('email');

    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
  } catch {
    console.log('You dun goofed');
  }
};
