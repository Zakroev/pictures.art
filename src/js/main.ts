import {
  modals,
  sliders,
  forms,
  mask,
  checkTextInputs,
  showMoreStyles,
  calc,
  filter,
  picturesSize,
  scrolling, burger
} from '../modules';
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
  forms();
  mask('[name="phone"]');
  checkTextInputs('[name = "name"]');
  checkTextInputs('[name = "message"]');
  showMoreStyles('.button-styles', '#styles .row');
  calc({
    size: '#size',
    material: '#material',
    options: '#options',
    promocode: '.promocode',
    result: '.calc-price'
  });
  filter();
  picturesSize('.sizes-block');
  scrolling('.pageup');
  burger('.burger-menu', '.burger');
});
