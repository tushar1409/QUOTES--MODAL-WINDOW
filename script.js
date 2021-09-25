'use strict';

//STORING ALL THE SELECTORS IN AVARIABLES TO AVOID REPETITION

const modal = document.querySelector('.modal');
const overshadow = document.querySelector('.overlay');
const close = document.querySelector('.close-modal');

//.QUERYSELECTORALL IS USED BECAUSE THERE ARE MULTIPLE SELECTORS OF THE SAME NAME THEREFORE THEY CAN BE ACCESSED AS AN ARRAY

const openbtn = document.querySelectorAll('.show-modal');

for (let i = 0; i < openbtn.length; i++) {
  console.log(openbtn[i].textContent);
}

//ADDING EVENTLISTENER FOR ALL THREE BUTTONS

for (let i = 0; i < openbtn.length; i++) {
  openbtn[i].addEventListener('click', function () {
    console.log('A button is clicked');

    //REMOVING HIDDEN CLASS IN CASE A BUTTON IS CLICKED
    modal.classList.remove('hidden');

    //ADDING OVERLAY
    overshadow.classList.remove('hidden');
  });
}

//FUNCTION TO REMOVE MODAL AND CLOSE THE OVERLAY

const closeModal = function () {
  modal.classList.add('hidden');
  overshadow.classList.add('hidden');
};
//ADDING THE FUNCTIONALITY OF CLOSE BUTTON
close.addEventListener('click', closeModal);

//ADDING A FUNCTIONALITY OF CLOSING A MODAL WINDOW WHEN ANY AREA OUTSIDE MODAL WINDOW IS CLICKED

overshadow.addEventListener('click', closeModal);

//ADDING KEYPRESS EVENT TO CLOSE THE MODAL WHEN ESCAPE KEY IS PRESSED

//SINCE KEYPRESS IS A GLOBAL EVENT ,THAT IS, IT HAPPENS IRRESPECTIVE OF WHAT HAPPENS WHEN THE KEY IS PRESSED,THEREFORE WE CONSIDER AN ENTIRE DOCUMENT INSTEAD OF A SPECIFIC SELECTOR/ELEMENT
document.addEventListener('keydown', function (event) {
  console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
