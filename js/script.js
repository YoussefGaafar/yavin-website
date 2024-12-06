const userScroll = function () {
  const navbar = document.querySelector('.navbar');
  const toTopBtn = document.querySelector('#to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-sticky');
      toTopBtn.classList.add('show--to-top');
    } else {
      navbar.classList.remove('navbar-sticky');
      toTopBtn.classList.remove('show--to-top');
    }
  });
};

// Navigating to Top of the page after clicking on the toTopBtn
const scrollToTop = function () {
  window.scrollTo({
    top: 0,
  });
};

// Adding Counter Typing Effect on the Stats Section
const incrementStats = function () {
  const countersEl = document.querySelectorAll('.counter'); // Selecting all of the Counter Elements
  countersEl.forEach((counterEl) => {
    counterEl.textContent = 0; // Resetting the Value to start counting from 0

    const updateCounter = () => {
      const dataTarget = +counterEl.dataset.target; // This data-target holds the actual number that we want to display
      const statsNumber = +counterEl.textContent;
      const incrementSpeed = dataTarget / 200; // Controls the speed of text been written

      if (statsNumber < dataTarget) {
        counterEl.textContent = Math.ceil(statsNumber + incrementSpeed);
        setTimeout(updateCounter, 1);
      } else {
        counterEl.textContent = dataTarget;
      }
    };
    updateCounter();
  });
};

// Closing the Navbar on small to medium screens (Hamburger Menu) after a link click if the menu is opened
const collapseMenu = function () {
  const navbarUl = document.querySelector('.navbar-nav');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');

  // Event Delegation
  navbarUl.addEventListener('click', (e) => {
    if (!e.target.classList.contains('nav-link')) return;
    // Link is clicked
    if (navbarToggler.getAttribute('aria-expanded') === 'true')
      new bootstrap.Collapse(navbarCollapse).hide(); // Collapsing the burger menu
  });
};

// Calling the callback functions
document.addEventListener('DOMContentLoaded', function () {
  userScroll();
  incrementStats();
  collapseMenu();
});

// toTop Button Event Listener
document.querySelector('#to-top').addEventListener('click', scrollToTop);
