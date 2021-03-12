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
window.onload = () => {
  try {
    const url_string = window.location.href.toLowerCase();
    const url = new URL(url_string);
    const firstName = url.searchParams.get('firstname');
    const lastName = url.searchParams.get('lastname');
    const email = url.searchParams.get('email');

    document.getElementById('name').value = firstName + ' ' + lastName;
    document.getElementById('email').value = email;
  } catch {
    console.log('You dun goofed');
  }
};

// Card click Event
document.getElementById('arrow').onclick = () => {
  document.getElementById('arrow').classList.toggle('rotate-180');
  document.getElementById('event').classList.toggle('-translate-y-full');
};
