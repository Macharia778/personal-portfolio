
const header = document.getElementById('header');
let lastScrollY = window.scrollY;
let isHidden = false;
let timeoutId = null;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY; if (currentScrollY < 50) {
        isHidden = false;
        clearTimeout(timeoutId);
        header.classList.remove('visible'); // Make sure it's shown
    }

    // If scrolling down and header is visible
    if (currentScrollY > lastScrollY && !isHidden && currentScrollY > 100) {
        header.classList.add('visible');
        isHidden = true;

        // Automatically show header again after 3 seconds
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            header.classList.remove('visible');
            // isHidden = false;
        }, 1000);
    }

    lastScrollY = currentScrollY;
});
  