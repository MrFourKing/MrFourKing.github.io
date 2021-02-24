import MoveTo from '../vendor/moveTo';

const initHeader = () => {
  const header = document.querySelector('.header');
  const breakpointLg = window.matchMedia('(min-width: 767px)');

  if (!header) return;

  const burgerBtn = header.querySelector('.header__toggle');
  const navBlock = header.querySelector('.header__nav');
  const navLinks = navBlock.querySelectorAll('.main-menu__link');
  const logoLink = header.querySelector('.header__logo');

  const moveTo = new MoveTo({
    tolerance: 85,
  });

  const openMenu = () => {
    burgerBtn.ariaPressed = 'true';
    navBlock.classList.add('active');
    header.classList.add('open');
    window.disableBodyScroll(navBlock);
  };

  const closeMenu = () => {
    burgerBtn.ariaPressed = 'false';
    navBlock.classList.remove('active');
    header.classList.remove('open');
    window.enableBodyScroll(navBlock);
  };

  const closeMenuOnResize = () => {
    closeMenu();
  };

  const initLinksAction = () => {
    navLinks.forEach((item) => {
      item.addEventListener('click', (evt) => {
        const target = document.querySelector(item.dataset.target);
        evt.preventDefault();
        closeMenu();
        moveTo.move(target);
      });
    });
  };

  const initBurgerAction = () => {
    if (burgerBtn) {
      breakpointLg.addListener(closeMenuOnResize);
      burgerBtn.addEventListener('click', () => {
        if (burgerBtn.ariaPressed === 'true') {
          closeMenu();
        } else {
          openMenu();
        }
      });
    }
  };

  window.addEventListener('scroll', () => {
    window.scrollY > 0 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
  });

  initBurgerAction();
  initLinksAction();

  logoLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    moveTo.move(0 - pageYOffset);
  });
};

export {
  initHeader
};
