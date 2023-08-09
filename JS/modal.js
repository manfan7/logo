const modalAll=document.querySelector('.modalFull');

function openModal () {
  document.body.style='padding-right: 17px;'
  document.body.style.overflow = 'hidden';
  modalAll.style.opacity = '1';
  modalAll.style.pointerEvents = 'auto';
  modalAll.style.overflowY = 'auto';
  modalAll.style.background='rgba(0, 0, 0, 0.5)';
}
function closeModal () {
  document.body.style='padding-right: 0;'
  document.body.style.overflow = 'visible';
  modalAll.style.opacity='0';
  modalAll.style.pointerEvents = 'none';
  modalAll.style.background='none';
}