'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const clsBtn = document.querySelector('.close-modal');
const openBtn = document.querySelectorAll('.show-modal');

console.log(openBtn);

function openModalHandler(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //  modal.style.display='initial';
  // overlay.style.display = 'initial'
}
function closeModalHandler(){
    //modal.style.display = 'none';
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    //overlay.style.display = 'none'
}
for(let index = 0 ; index <openBtn.length ; index++){
    openBtn[index].addEventListener("click",openModalHandler);
};

overlay.addEventListener('click',closeModalHandler)
clsBtn.addEventListener('click',closeModalHandler)

document.addEventListener('keydown',function(e){
    console.log("key down",e);
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
      closeModalHandler();
    }
})