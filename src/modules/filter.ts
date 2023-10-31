const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu?.querySelectorAll('li');
  const btnAll = menu?.querySelector('.all');
  const btnLovers = menu?.querySelector('.lovers');
  const btnChef = menu?.querySelector('.chef');
  const btnGirl = menu?.querySelector('.girl');
  const btnGuy = menu?.querySelector('.guy');
  const btnGrandmother = menu?.querySelector('.grandmother');
  const btnGranddad = menu?.querySelector('.granddad');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const marksAll = wrapper?.querySelectorAll(
    '.all'
  ) as NodeListOf<HTMLElement> | null;
  const markGirl = wrapper?.querySelectorAll(
    '.girl'
  ) as NodeListOf<HTMLElement> | null;
  const markLovers = wrapper?.querySelectorAll(
    '.lovers'
  ) as NodeListOf<HTMLElement> | null;
  const markChef = wrapper?.querySelectorAll(
    '.chef'
  ) as NodeListOf<HTMLElement> | null;
  const markGuy = wrapper?.querySelectorAll(
    '.guy'
  ) as NodeListOf<HTMLElement> | null;
  const no = document.querySelector('.portfolio-no') as HTMLElement;

  const typeFilter = (marksType: NodeListOf<HTMLElement> | null) => {
    marksAll?.forEach((mark) => {
      (mark as HTMLElement).style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });

    (no as HTMLElement).style.display = 'none';
    no?.classList.remove('animated', 'fadeIn');

    if (marksType) {
      marksType.forEach((mark) => {
        (mark as HTMLElement).style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      (no as HTMLElement).style.display = 'block';
      no?.classList.add('animated', 'fadeIn');
    }
  };

  btnAll?.addEventListener('click', () => {
    typeFilter(marksAll);
  });

  btnLovers?.addEventListener('click', () => {
    typeFilter(markLovers);
  });

  btnChef?.addEventListener('click', () => {
    typeFilter(markChef);
  });

  btnGuy?.addEventListener('click', () => {
    typeFilter(markGuy);
  });

  btnGirl?.addEventListener('click', () => {
    typeFilter(markGirl);
  });

  btnGrandmother?.addEventListener('click', () => {
    typeFilter(null);
  });

  btnGranddad?.addEventListener('click', () => {
    typeFilter(null);
  });

  menu?.addEventListener('click', (e) => {
    let target = e.target;

    if (target && target instanceof HTMLElement && target.tagName === 'LI') {
      items?.forEach((btn) => btn.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

export default filter;
