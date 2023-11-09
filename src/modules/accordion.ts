const accordion = () => {
  const headings = document.querySelectorAll('[data-toggle="accordion"]');

  headings.forEach((heading) => {
    heading.addEventListener('click', () => {
      const block = heading.nextElementSibling as HTMLElement;
      const isOpen = block.getAttribute('data-open') === 'true';
      block.setAttribute('data-open', isOpen ? 'false' : 'true');
    });
  });
};

export default accordion;
