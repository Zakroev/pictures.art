const accordion = (triggerSelector: string) => {
  const buttons = document.querySelectorAll(triggerSelector);

  buttons.forEach((button) => {
    button.addEventListener('click', function (this: HTMLElement) {
      this.classList.toggle('active-style');
      this.nextElementSibling?.classList.toggle('active-content');

      const nextSibling = this.nextElementSibling as HTMLElement | null;
      if (nextSibling) {
        if (this.classList.contains('active-style')) {
          nextSibling.style.maxHeight = nextSibling.scrollHeight + 80 + 'px';
        } else {
          nextSibling.style.maxHeight = '0px';
        }
      }
    });
  });
};

export default accordion;
