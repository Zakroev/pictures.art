import { getResource } from '../js/services/requests';

const showMoreStyles = (trigger: string, wrapper: string) => {
  const button = document.querySelector(trigger);

  function clickHandler() {
    getResource('http://localhost:3000/styles')
      .then((res: any) => createCards(res))
      .catch((error: any) => console.log(error));

    button?.remove();
  }

  if (button) {
    button.addEventListener('click', clickHandler.bind(button));
  }

  const createCards = (responses: any) => {
    responses.forEach((response: any) => {
      const card = document.createElement('div');

      card.classList.add(
        'animated',
        'fadeInUp',
        'col-sm-3',
        'col-sm-offset-0',
        'col-xs-10',
        'col-xs-offset-1'
      );

      card.innerHTML = `
      <div class="styles-block">
          <img src=${response.src} alt=style>
          <h4>${response.title}</h4>
          <a href=${response.link}>Подробнее</a>
      </div>
      `;

      document.querySelector(wrapper)?.appendChild(card);
    });
  };
};

export default showMoreStyles;
