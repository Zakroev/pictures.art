// import checkNumInputs from './checkNumInputs';

const formsFunction = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');

  // checkNumInputs('input[name = "user_phone"]');

  interface Imessage {
    loading: string;
    success: string;
    failure: string;
    spinner: string;
    ok: string;
    fail: string;
  }

  interface Ipath {
    designer: string;
    question: string;
  }

  //Исправить пути картинок
  const message: Imessage = {
    loading: 'Загрузка',
    success: 'Спасибо! Мы с вами свяжемся',
    failure: 'Что-то пошло не так',
    spinner: 'assets/img/loading-loading-forever.gif',
    ok: 'src/assets/img/cute-ok.gif',
    fail: 'assets/img/mimochai-cute.gif'
  };

  //Дописать тут
  const path: Ipath = {
    designer: 'assets/server',
    question: 'http://localhost:3000'
  };

  const postData = async (url: string, data: string) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((input) => {
      input.value = '';
    });
  };

  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode?.appendChild(statusMessage);

      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);

      const statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(form);
      const formDataObj: { [key: string]: string } = {};
      let api;
      form.closest('.popup-design')
        ? (api = path.designer)
        : (api = path.question);

      formData.forEach((value, key) => (formDataObj[key] = value.toString()));

      const formInputs = form.querySelectorAll('input');

      formInputs.forEach((input) => {
        formData.append(input.name, input.value);
      });

      postData('http://localhost:3000', formDataObj)
        .then((res) => {
          console.log(res);
          statusImg.setAttribute('src', message.ok);
          textMessage.textContent = message.success;
        })
        .catch(() => {
          {
            statusImg.setAttribute('src', message.fail);
            statusMessage.textContent = message.failure;
          }
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};
export default formsFunction;
