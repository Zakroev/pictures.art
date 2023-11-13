const burger = (menuSelector: string, burgerSelector: string) => {
  const breakpoint = 993;

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
        window.screen.availWidth < breakpoint
      ) {
        menuStyle.display = 'block';
      } else if (menuStyle) {
        menuStyle.display = 'none';
      }
    });
  }

  window.addEventListener('resize', () => {
    if (window.screen.availWidth < breakpoint && menuElement) {
      menuElement.style.display = 'none';
    }
  });
};

export default burger;
