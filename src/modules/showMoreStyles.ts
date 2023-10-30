import { getResource } from '../js/services/requests';

export interface IStylesData {
  styles: {
    src: string;
    title: string;
    link: string;
  }[];
}

const showMoreStyles = (trigger: string, wrapper: string) => {
  const button = document.querySelector(trigger);

  function clickHandler() {
    getResource('/db.json')
      .then((res: IStylesData) => {
        if (Array.isArray(res.styles)) {
          createCards(res.styles);
        } else {
          console.error("Invalid data format: 'styles' is not an array");
        }
      })

      .catch((error: Error) => console.log(error));

    button?.remove();
  }

  if (button) {
    button.addEventListener('click', clickHandler.bind(button));
  }

  const createCards = (responses: IStylesData['styles']) => {
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
