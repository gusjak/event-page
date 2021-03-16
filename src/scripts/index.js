// Capitalize first letter of name in Title
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get query parameter values
const url_string = window.location.href.toLowerCase();
const url = new URL(url_string);
const firstName = url.searchParams.get('name');
const lastName = url.searchParams.get('lastname');
const email = url.searchParams.get('email');

// Assign query parameter values on website
let i = 0;

if (firstName === null && lastName === null && email === null) {
  document.getElementById('name').value = '';

  document.title = 'Mikkeller Launch Event';
  setInterval(() => {
    document.title = i++ % 2 == 0 ? 'Cheers 🍻' : 'Mikkeller Launch Event';
  }, 2000);

  document.getElementById('last-name').value = '';
  document.getElementById('email').value = '';
} else {
  document.getElementById('name').value = firstName;

  document.title = 'Mikkeller Launch Event';
  setInterval(() => {
    document.title = i++ % 2 == 0 ? `Cheers ${capitalizeFirstLetter(firstName)}! 🍻` : 'Mikkeller Launch Event';
  }, 2000);

  document.getElementById('last-name').value = lastName;
  document.getElementById('email').value = email;
}
