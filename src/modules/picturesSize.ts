const picturesSize = (imgSelector: string) => {
  const blocks = document.querySelectorAll(imgSelector);

  const showImg = (
    block: HTMLElement,
    smallImgPath: string,
    bigImgPath: string
  ) => {
    const img: HTMLImageElement | null = block.querySelector('img');
    if (img) {
      img.dataset.originalSrc = img.src;
      img.src = smallImgPath;

      Array.from(block.querySelectorAll('p:not(.sizes-hit)')).forEach((p) => {
        const element = p as HTMLElement;
        element.style.display = 'none';
      });

      const bigImg = new Image();
      bigImg.src = bigImgPath;
      bigImg.onload = () => {
        img.dataset.originalSrc = bigImgPath;
      };
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
    const smallImgPath = `/imagesSize/sizes-${index + 1}-small.png`;
    const bigImgPath = `/imagesSize/sizes-${index + 1}-1.png`;

    block.addEventListener('mouseover', () => {
      showImg(block as HTMLElement, smallImgPath, bigImgPath);
    });

    block.addEventListener('mouseout', () => {
      hideImg(block as HTMLElement);
    });
  });
};

export default picturesSize;
