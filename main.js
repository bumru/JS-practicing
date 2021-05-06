const form = document.querySelector('.js-form');
const text = document.querySelector('.text-js');
const change = "change-js";
function changetext(){
    text.classList.add(change);
};

function init(){
    form.addEventListener('submit' , changetext);
};
init();

