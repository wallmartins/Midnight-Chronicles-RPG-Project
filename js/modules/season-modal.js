export default function initSeasonModal() {
  const buttonOpen = document.querySelectorAll('[data-modal="open"]');
  const buttonClose = document.querySelectorAll('[data-modal="close"]');
  const modalContainer = document.querySelectorAll('[data-modal="container"]');

  const arrayContainer = Array.from(modalContainer);
  const arraySeason = Array.from(buttonOpen);

  if(buttonOpen && buttonClose && modalContainer) {
    
    function toggleModal(event) {
      event.preventDefault();

      if(event.target === arraySeason[0]){
        arrayContainer[0].classList.toggle('active');
      } else if(event.target === arraySeason[1]) {
        arrayContainer[1].classList.toggle('active');
      } else if(event.target === arraySeason[2]) {
        arrayContainer[2].classList.toggle('active');
      } else if(event.target === arraySeason[3]) {
        arrayContainer[3].classList.toggle('active');
      } else if(event.target === arraySeason[4]) {
        arrayContainer[4].classList.toggle('active');
      } else if(event.target === arraySeason[5]) {
        arrayContainer[5].classList.toggle('active');
      } else if(event.target === arraySeason[6]) {
        arrayContainer[6].classList.toggle('active');
      } else if(event.target === arraySeason[7]) {
        arrayContainer[7].classList.toggle('active');
      } else if(event.target === arraySeason[8]) {
        arrayContainer[8].classList.toggle('active');
      } else if(event.target === arraySeason[9]) {
        arrayContainer[9].classList.toggle('active');
      } else if(event.target === arraySeason[10]) {
        arrayContainer[10].classList.toggle('active');
      } else if(event.target === arraySeason[11]) {
        arrayContainer[11].classList.toggle('active');
      } else if(event.target === arraySeason[12]) {
        arrayContainer[12].classList.toggle('active');
      } else if(event.target === arraySeason[13]) {
        arrayContainer[13].classList.toggle('active');
      } else if(event.target === arraySeason[14]) {
        arrayContainer[14].classList.toggle('active');
      } else if(event.target === arraySeason[15]) {
        arrayContainer[15].classList.toggle('active');
      } else if(event.target === arraySeason[16]) {
        arrayContainer[16].classList.toggle('active');
      } else if(event.target === arraySeason[17]) {
        arrayContainer[17].classList.toggle('active');
      } else if(event.target === arraySeason[18]) {
        arrayContainer[18].classList.toggle('active');
      } 
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