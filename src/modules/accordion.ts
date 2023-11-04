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
  // const blocks = document.querySelectorAll(itemsSelector);

  // blocks.forEach((block) => {
  //   block.classList.add('animated', 'fadeInDown');
  // });

  // buttons.forEach((button) => {
  //   button.addEventListener('click', function (this: HTMLElement) {
  //     if (!this.classList.contains('active')) {
  //       buttons.forEach((button) => {
  //         button.classList.remove('active', 'active-style');
  //       });
  //       this.classList.add('active', 'active-style');
  //     }
  //   });
  // });
};

export default accordion;
