const picturesSize = (imgSelector: string) => {
  const blocks = document.querySelectorAll(imgSelector);

  const showImg = (block: HTMLElement) => {
    const img = block.querySelector('img') as HTMLImageElement;
    img.src = img.src.slice(0, -4) + '-1.png';
    Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
      const element = p as HTMLElement;
      element.style.display = 'none';
    });
  };

  const hideImg = (block: HTMLElement) => {
    const img = block.querySelector('img') as HTMLImageElement;
    img.src = img.src.slice(0, -6) + '.png';
    Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
      const element = p as HTMLElement;
      element.style.display = 'block';
    });
  };

  blocks.forEach((block) => {
    block.addEventListener('mouseover', () => {
      showImg(block as HTMLElement);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block as HTMLElement);
    });
  });
};

export default picturesSize;
