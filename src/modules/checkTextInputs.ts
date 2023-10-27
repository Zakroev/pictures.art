const checkTextInputs = (selector: string) => {
  const txtInputs = Array.from(
    document.querySelectorAll<HTMLInputElement>(selector)
  );

  txtInputs.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.key.match(/[^а-яё 0-9]/gi)) {
        e.preventDefault;
      }
    });
  });
};

export default checkTextInputs;
