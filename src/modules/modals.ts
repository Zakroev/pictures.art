const modules = () => {
  let btnPressed: boolean = false;

  interface IbindModal {
    triggerSelector: string;
    modalSelector: string;
    closeSelector: string;
    destroy?: boolean;
  }

  function bindModal({
    triggerSelector,
    modalSelector,
    closeSelector,
    destroy = false
  }: IbindModal) {
    const triggers: NodeListOf<HTMLElement> =
      document.querySelectorAll(triggerSelector);
    const modal: HTMLElement | null = document.querySelector(modalSelector);
    const close: HTMLElement | null = document.querySelector(closeSelector);
    const windows: NodeListOf<HTMLElement> =
      document.querySelectorAll('[data-modal]');
    const scroll: number = calcScroll();

    //Функции повтора кода--------------------------------
    const hideWindow = () => {
      windows.forEach((window) => {
        window.style.display = 'none';
        window.classList.add('animated', 'fadeIn');
      });
    };

    const closeModal = () => {
      if (modal) {
        (modal.style.display = 'none'),
          document.body.classList.remove('modal-open'),
          (document.body.style.marginRight = '0px');
      }
    };
    //Блок с фунциями повтора кода окончен ------------------------

    triggers.forEach((trigger) => {
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault();
          }

          btnPressed = true;

          if (destroy) {
            trigger.remove();
          }

          hideWindow();

          if (modal) {
            modal.style.display = 'block';
            document.body.classList.add('modal-open');
            document.body.style.marginRight = `${scroll}px`;
          }
        });
      }
    });

    close?.addEventListener('click', () => {
      hideWindow();
      closeModal();
    });

    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideWindow();
        closeModal();
      }
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
  }

  const showModalByTime = (selector: string, time: number) => {
    setTimeout(() => {
      let display = false;

      document.querySelectorAll('[data-modal]').forEach((item) => {
        if (getComputedStyle(item).display !== 'none') {
          display = true;
        }
      });

      if (!display) {
        const element = document.querySelector(selector);
        if (element) {
          (element as HTMLElement).style.display = 'block';
          document.body.style.overflow = '';
          const scroll: number = calcScroll();
          document.body.style.marginRight = `${scroll}px`;
        }
      }
    }, time);
  };

  const calcScroll = (): number => {
    const div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove;

    return scrollWidth;
  };

  bindModal({
    triggerSelector: '.button-design',
    modalSelector: '.popup-design',
    closeSelector: '.popup-design .popup-close'
  });

  bindModal({
    triggerSelector: '.button-consultation',
    modalSelector: '.popup-consultation',
    closeSelector: '.popup-consultation .popup-close'
  });

  bindModal({
    triggerSelector: '.fixed-gift',
    modalSelector: '.popup-gift',
    closeSelector: '.popup-gift .popup-close',
    destroy: true
  });

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = document.querySelector('.fixed-gift') as HTMLElement;
        element.click();
      }
    });
  }, {});

  const footerElement = document.querySelector('.footer') as HTMLElement;
  scrollObserver.observe(footerElement);

  showModalByTime('.popup-consultation', 60000);
};

export default modules;
