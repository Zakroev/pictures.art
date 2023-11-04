const picturesSize = (imgSelector: string) => {
  const blocks = document.querySelectorAll(imgSelector);

  const showImg = (block: HTMLElement, imgPath: string) => {
    const img: HTMLImageElement | null = block.querySelector('img');
    if (img) {
      img.dataset.originalSrc = img.src;
      img.src = imgPath;
      Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
        const element = p as HTMLElement;
        element.style.display = 'none';
      });
    }
  };

  const hideImg = (block: HTMLElement) => {
    const img: HTMLImageElement | null = block.querySelector('img');
    if (img) {
      img.src = img.dataset.originalSrc || '';
      Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
        const element = p as HTMLElement;
        element.style.display = 'block';
      });
    }
  };

  blocks.forEach((block, index) => {
    const imgPath = `/imagesSize/sizes-${index + 1}-1.png`;

    block.addEventListener('mouseover', () => {
      showImg(block as HTMLElement, imgPath);
    });
    block.addEventListener('mouseout', () => {
      hideImg(block as HTMLElement);
    });
  });
};

export default picturesSize;
