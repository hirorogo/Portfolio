const button = document.getElementById('show-email');
const email = document.getElementById('email');
button.addEventListener('click', function() {
    email.style.display = 'block';
    button.style.display = 'none';
});