const mask = (selector: string) => {
  const setCursorPosition = (pos: number, elem: HTMLInputElement) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    }
  };
  const createMask = (event: Event) => {
    const eventTarget = event.target as HTMLInputElement;
    const matrix = '+7 (___) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = eventTarget.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    eventTarget.value = matrix.replace(/./g, (a) => {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ''
        : a;
    });

    if (event.type === 'blur') {
      if (eventTarget.value.length == 2) {
        eventTarget.value = '';
      }
    } else {
      setCursorPosition(eventTarget.value.length, eventTarget);
    }
  };

  const inputs = document.querySelectorAll(selector);

  inputs.forEach((input) => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};
export default mask;
