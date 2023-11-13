const drop = () => {
  const fileInputs =
    document.querySelectorAll<HTMLInputElement>('[name="upload"]');
  const dragEvents = ['dragenter', 'dragleave', 'dragover', 'drop'];
  const highlightEvents = ['dragenter', 'dragover'];
  const unhighlightEvents = ['dragleave', 'drop'];

  const preventDefaults = (e: Event) => {
    e.preventDefault();
    e.stopPropagation();
  };

  dragEvents.forEach((event) => {
    fileInputs.forEach((input) =>
      input.addEventListener(event, preventDefaults, false)
    );
  });

  const highlight = (item: HTMLElement) => {
    const fileUpload = item.closest('.file_upload') as HTMLElement;
    if (fileUpload) {
      (fileUpload.style.border = '5px solid yellow'),
        (fileUpload.style.background = 'rgba(0,0,0, .7)');
    }
  };

  const unhighlight = (item: HTMLElement) => {
    const fileUpload = item.closest('.file_upload') as HTMLElement;

    if (fileUpload) {
      fileUpload.style.border = 'none';
      fileUpload.style.background = item.closest('.calc_form')
        ? '#fff'
        : '#ededed';
    }
  };

  highlightEvents.forEach((event) => {
    fileInputs.forEach((input) =>
      input.addEventListener(event, () => highlight(input), false)
    );
  });

  unhighlightEvents.forEach((event) => {
    fileInputs.forEach((input) =>
      input.addEventListener(event, () => unhighlight(input), false)
    );
  });

  fileInputs.forEach((input) => {
    input.addEventListener('drop', (e) => {
      preventDefaults(e);
      unhighlight(input);

      const dataTransfer = e.dataTransfer;
      if (dataTransfer && dataTransfer.files.length > 0) {
        const [fileName, fileExt] = dataTransfer.files[0].name.split('.');
        const dots = fileName.length > 5 ? '...' : '.';
        const name = `${fileName.substring(0, 6)}${dots}${fileExt}`;
        if (input.previousElementSibling) {
          input.previousElementSibling.textContent = name;
        }
      }
    });
  });
};

export default drop;
