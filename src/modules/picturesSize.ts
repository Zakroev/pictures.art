const picturesSize = (imgSelector: string) => {
  const blocks = document.querySelectorAll(imgSelector);

  const showImg = (block: HTMLElement, imgPath: string) => {
    const img = block.querySelector('img') as HTMLImageElement;
    img.src = imgPath;
    Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
      const element = p as HTMLElement;
      element.style.display = 'none';
    });
  };

  const hideImg = (block: HTMLElement, imgPath: string) => {
    const img = block.querySelector('img') as HTMLImageElement;
    img.src = imgPath;
    Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
      const element = p as HTMLElement;
      element.style.display = 'block';
    });
  };

  blocks.forEach((block, index) => {
    const imgPath = `/imagesSize/sizes-${index + 1}-1.png`;

    block.addEventListener('mouseover', () => {
      showImg(block as HTMLElement, imgPath);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block as HTMLElement, imgPath);
    });
  });
};

export default picturesSize;
