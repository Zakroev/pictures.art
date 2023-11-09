const drop = () => {
  const fileInputs = document.querySelectorAll('[name="upload"]');
  const events = ['dragenter', 'dragleave', 'dragover', 'drop'];
  const event1 = ['dragenter', 'dragover'];
  const events2 = ['dragleave', 'drop'];

  const preventDefaults = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  events.forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, preventDefaults, false);
    });
  });

  const highlight = (item: any) => {
    item.closest('.file_upload').style.border = '5px solid yellow';
    item.closest('.file_upload').style.background = 'rgba(0,0,0, .7)';
  };

  const unhighlight = (item: any) => {
    item.closest('.file_upload').style.border = 'none';
    if (item.closest('.calc_form')) {
      item.closest('.file_upload').style.background = '#fff';
    } else {
      item.closest('.file_upload').style.background = '#ededed';
    }
  };

  event1.forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, () => highlight(input), false);
    });
  });

  events2.forEach((event) => {
    fileInputs.forEach((input) => {
      input.addEventListener(event, () => unhighlight(input), false);
    });
  });

  // fileInputs.forEach((input) => {
  //   input.addEventListener('drop', (e) => {
  //     input.files = e.dataTransfer.files;

  //     let dots;
  //     const arr = input.files[0].name.split('.');

  //     arr[0].length > 6 ? (dots = '...') : (dots = '.');
  //     const name = arr[0].substring(0, 6) + dots + arr[1];
  //     input.previousElementSibling?.textContent = name;
  //   });
  // });
};

export default drop;
