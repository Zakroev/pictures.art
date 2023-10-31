export interface ICalculator {
  size: string;
  material: string;
  options: string;
  promocode: string;
  result: string;
}

const calc = ({ size, material, options, promocode, result }: ICalculator) => {
  const sizeBlock = document.querySelector(size) as HTMLInputElement;
  const materialBlock = document.querySelector(material) as HTMLSelectElement;
  const optionBlock = document.querySelector(options) as HTMLSelectElement;
  const promocodeBlock = document.querySelector(promocode) as HTMLInputElement;
  const resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    if (
      sizeBlock &&
      materialBlock &&
      optionBlock &&
      promocodeBlock &&
      resultBlock
    ) {
      sum = Math.round(
        +sizeBlock.value * +materialBlock.value + +optionBlock.value
      );

      if (sizeBlock.value == '' || materialBlock.value == '') {
        resultBlock.textContent =
          'Пожалуйста, выберите размер и материал картины';
      } else if (promocodeBlock.value === 'IWANTIMPORTANT') {
        resultBlock.textContent = Math.round(sum * 0.7).toString();
      } else {
        resultBlock.textContent = sum.toString();
      }
    }
  };
  if (
    sizeBlock &&
    materialBlock &&
    optionBlock &&
    promocodeBlock &&
    resultBlock
  ) {
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
  }
};

export default calc;
