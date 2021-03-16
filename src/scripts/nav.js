// Hamburger Menu Show/Hide
document.getElementById('nav-toggle').onclick = () => {
  document.getElementById('nav-content').classList.toggle('hidden');
};

// Shrink Navbar when scrolling
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerWidth > 640) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('navbar').classList.remove('lg:h-36');
      document.getElementById('navbar').classList.add('lg:h-20');
    } else {
      document.getElementById('navbar').classList.remove('lg:h-20');
      document.getElementById('navbar').classList.add('lg:h-36');
    }
  } else {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById('navbar').classList.remove('h-24');
      document.getElementById('navbar').classList.add('h-16');
    } else {
      document.getElementById('navbar').classList.remove('h-16');
      document.getElementById('navbar').classList.add('h-24');
    }
  }
}
