
function toggleMenu() {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.style.display = link.style.display === 'block' ? 'none' : 'block';
        link.classList.toggle('show');
    });
}