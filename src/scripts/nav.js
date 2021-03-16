// Hamburger Menu Show/Hide
document.getElementById('nav-toggle').onclick = () => {
  document.getElementById('nav-content').classList.toggle('hidden');
};

// Toggle Henry's Hat

const signupLink = document.querySelector('.signup');
const eventLink = document.querySelector('.event');
const aboutLink = document.querySelector('.about');
const contactLink = document.querySelector('.contact');

signupLink.onclick = () => {
  document.querySelector('.hat1').classList.remove('hidden');
  document.querySelector('.hat2').classList.add('hidden');
  document.querySelector('.hat3').classList.add('hidden');
  document.querySelector('.hat4').classList.add('hidden');
};

eventLink.onclick = () => {
  document.querySelector('.hat2').classList.remove('hidden');
  document.querySelector('.hat1').classList.add('hidden');
  document.querySelector('.hat3').classList.add('hidden');
  document.querySelector('.hat4').classList.add('hidden');
};

aboutLink.onclick = () => {
  document.querySelector('.hat3').classList.toggle('hidden');
  document.querySelector('.hat1').classList.add('hidden');
  document.querySelector('.hat2').classList.add('hidden');
  document.querySelector('.hat4').classList.add('hidden');
};

contactLink.onclick = () => {
  document.querySelector('.hat4').classList.toggle('hidden');
  document.querySelector('.hat1').classList.add('hidden');
  document.querySelector('.hat2').classList.add('hidden');
  document.querySelector('.hat3').classList.add('hidden');
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
