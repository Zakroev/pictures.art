const formsFunction = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const uploads: HTMLInputElement[] = Array.from(
    document.querySelectorAll<HTMLInputElement>('[name="upload"]')
  );

  interface IMessage {
    loading: string;
    success: string;
    failure: string;
    spinner: string;
    ok: string;
    fail: string;
  }

  interface IPath {
    designer: string;
    question: string;
  }

  const message: IMessage = {
    loading: 'Загрузка',
    success: 'Спасибо! Мы с вами свяжемся',
    failure: 'Что-то пошло не так',
    spinner: 'src/assets/img/loading-loading-forever.gif',
    ok: 'src/assets/img/cute-ok.gif',
    fail: 'src/assets/img/mimochai-cute.gif'
  };

  const path: IPath = {
    designer: 'http://localhost:3000/api/data',
    question: 'http://localhost:3000/api/data'
  };

  const postData: (
    url: string,
    data: { [key: string]: string }
  ) => Promise<string> = async (
    url: string,
    data: { [key: string]: string }
  ) => {
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
    uploads.forEach((upload) => {
      if (upload.previousElementSibling) {
        upload.previousElementSibling.textContent = 'Файл не выбран';
      }
    });
  };

  uploads.forEach((upload: HTMLInputElement) => {
    upload.addEventListener('input', () => {
      if (upload.files && upload.files.length > 0) {
        const [fileName, fileExt] = upload.files[0].name.split('.');
        const dots = fileName.length > 5 ? '...' : '.';
        const name = `${fileName.substring(0, 6)}${dots}${fileExt}`;
        if (upload.previousElementSibling) {
          upload.previousElementSibling.textContent = name;
        }
      } else {
        if (upload.previousElementSibling) {
          upload.previousElementSibling.textContent = 'Файл не выбран';
        }
      }
    });
  });

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
      statusImg.classList.add('animated', 'fadeInUp', 'popup_img');
      statusMessage.appendChild(statusImg);

      const textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);

      const formData = new FormData(form);
      const formDataObj: { [key: string]: string } = {};
      const url: string =
        form.closest('.popup-design') || form.classList.contains('calc_form')
          ? path.designer
          : path.question;

      formData.forEach((value, key) => (formDataObj[key] = value.toString()));

      const formInputs = form.querySelectorAll('input');

      formInputs.forEach((input) => {
        formData.append(input.name, input.value);
      });

      postData(url, formDataObj)
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
            form.style.display = 'block';
            form.classList.remove('fadeOutUp');
            form.classList.remove('fadeInUp');
          }, 5000);
        });
    });
  });
};
export default formsFunction;
