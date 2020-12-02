export default function initSeasonModal() {
  const buttonOpen = document.querySelectorAll('[data-modal="open"]');
  const buttonClose = document.querySelectorAll('[data-modal="close"]');
  const modalContainer = document.querySelectorAll('[data-modal="container"]');

  const arrayContainer = Array.from(modalContainer);
  const arraySeason = Array.from(buttonOpen);

  if(buttonOpen && buttonClose && modalContainer) {
    
    function toggleModal(event) {
      event.preventDefault();
      
      const modalID = arrayContainer.find(el => el.id === event.target.id);
      modalID.classList.toggle('active');
    }
    
    function outClick(event) {
      if(event.target === this) {
        modalContainer.forEach((item) => item.classList.remove('active'));
      }
    }

    buttonOpen.forEach((item) => item.addEventListener('click', toggleModal));
    buttonClose.forEach((item) => item.addEventListener('click', outClick));
    modalContainer.forEach((item) => item.addEventListener('click', outClick));

  }
}