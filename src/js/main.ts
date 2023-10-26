import { modals, sliders } from '../modules';
import { Isliders } from '../modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  modals();

  const sliderParams: Isliders = {
    slides: '.feedback-slider-item',
    dir: 'horizontal',
    prev: '.main-prev-btn',
    next: '.main-next-btn'
  };

  const sliderParams2: Isliders = {
    slides: '.main-slider-item',
    dir: 'vertical',
    prev: '.main-prev-btn',
    next: '.main-next-btn'
  };

  sliders(sliderParams);
  sliders(sliderParams2);
});
