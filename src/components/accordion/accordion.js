const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
  const expandIcon = accordion.querySelector('.icon');
  expandIcon.addEventListener('click', () => {
    accordion.classList.toggle('open');
  });
});
