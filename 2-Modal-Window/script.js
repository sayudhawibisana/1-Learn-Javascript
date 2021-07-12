'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  // console.log(`Button ${i} clicked`);
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  // -------
  // my way to hide modal using esc key
  // if (document.querySelector('.hidden') !== 0) {
  //   e.key === 'Escape' ? closeModal() : undefined;
  // }
  // -------

  // -------
  // tutor way to hide modal using esc key
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
  // -------
});
