const checkTextInputs = (selector: string) => {
  const txtInputs = Array.from(
    document.querySelectorAll<HTMLInputElement>(selector)
  );

  txtInputs.forEach((input) => {
    input.addEventListener('input', () => {
      const inputValue = input.value;
      const validValue = inputValue.replace(/[^а-яё 0-9]/gi, '');
      if (inputValue !== validValue) {
        input.value = validValue;
      }
    });
  });
};

export default checkTextInputs;
