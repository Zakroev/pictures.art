const scrolling = (upSelector: string) => {
  const upElem = document.querySelector(upSelector);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem?.classList.add('animated', 'fadeIn');
      upElem?.classList.remove('fadeOut');
    } else {
      upElem?.classList.add('fadeOut');
      upElem?.classList.remove('fadeIn');
    }
  });

  const links = document.querySelectorAll('[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const hash = (link as HTMLAnchorElement).hash;
      const targetElement = document.querySelector(hash) as HTMLElement;

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
};

export default scrolling;
