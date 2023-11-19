function toggleMenu() {
    const navLinks = Array.from(document.querySelectorAll('.navbar a'));
    navLinks.forEach(link => {
        link.style.display = (link.style.display === 'block') ? 'none' : 'block';
        link.classList.toggle('show');
    });
}

function showMenuOnLargeScreen() {
    const windowWidth = window.innerWidth;
    const navLinks = document.querySelectorAll('.navbar a');
    const responsiveButton = document.querySelector('.responsive'); // Definimos responsiveButton aquí

    if (windowWidth > 500) {
        for (const link of navLinks) {
            link.style.display = 'block';
        }
    } else {
        if (responsiveButton && !responsiveButton.classList.contains('show')) {
            for (const link of navLinks) {
                link.style.display = 'none';
            }
        }
    }
}

window.addEventListener('resize', showMenuOnLargeScreen);
window.addEventListener('load', showMenuOnLargeScreen);
