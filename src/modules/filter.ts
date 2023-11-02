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

  const buttonParamPairs = [
    { element: btnAll, param: marksAll },
    { element: btnLovers, param: markLovers },
    { element: btnChef, param: markChef },
    { element: btnGuy, param: markGuy },
    { element: btnGirl, param: markGirl },
    { element: btnGrandmother, param: null },
    { element: btnGranddad, param: null }
  ];

  buttonParamPairs.forEach(({ element, param }) => {
    if (element) {
      element.addEventListener('click', () => typeFilter(param));
    }
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
