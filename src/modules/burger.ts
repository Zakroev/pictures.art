const burger = (menuSelector: string, burgerSelector: string) => {
  const menuElement = document.querySelector(
    menuSelector
  ) as HTMLElement | null;
  const burgerElement = document.querySelector(
    burgerSelector
  ) as HTMLElement | null;

  if (menuElement) {
    menuElement.style.display = 'none';
  }

  if (burgerElement) {
    burgerElement.addEventListener('click', () => {
      const menuStyle = menuElement?.style;

      if (
        menuStyle &&
        menuStyle.display === 'none' &&
        window.screen.availWidth < 993
      ) {
        menuStyle.display = 'block';
      } else if (menuStyle) {
        menuStyle.display = 'none';
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.screen.availWidth < 992 && menuElement) {
      menuElement.style.display = 'none';
    }
  });
};

export default burger;
