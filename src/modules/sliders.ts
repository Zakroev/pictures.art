export interface Isliders {
  slides: string;
  dir: string;
  prev: string;
  next: string;
}

const sliders = ({ slides, dir, prev, next }: Isliders) => {
  let slideIndex: number = 1;
  let paused: number | undefined;

  const items: NodeListOf<HTMLElement> = document.querySelectorAll(slides);

  const showSlides = (n: number) => {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach((item: HTMLElement) => {
      item.classList.add('animated');
      item.style.display = 'none';
    });

    items[slideIndex - 1].style.display = 'block';
  };

  showSlides(slideIndex);

  const changeSlides = (n: number) => {
    showSlides((slideIndex += n));
  };

  try {
    const prevButton: NodeListOf<HTMLElement> = document.querySelectorAll(prev);
    const nextButton: NodeListOf<HTMLElement> = document.querySelectorAll(next);

    prevButton.forEach((button) => {
      button.addEventListener('click', () => {
        changeSlides(-1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      });
    });

    nextButton.forEach((button) => {
      button.addEventListener('click', () => {
        changeSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      });
    });
  } catch (e) {}

  const activateAnimation = () => {
    if (dir === 'vertical') {
      paused = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      paused = setInterval(() => {
        changeSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  };

  activateAnimation();

  items[0].parentNode?.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });

  items[0].parentNode?.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

export default sliders;
