const form = document.getElementById('form');
const name = document.getElementById('name');
const input = document.getElementById('input');
const outputname = document.getElementById('OutputName');

form.addEventListener('submit', e => {
e.preventDefault();

checkInputs();
getName()
});

function checkInputs() {

const inputValue = input.value.trim();

function containsNumber(str) {
    return /\d/.test(str);
  }

if(inputValue === '' || containsNumber(inputValue)===false) {
setErrorFor(input, 'Input format is wrong');
} else {
setSuccessFor(input);


const close_btn = document.querySelector('.close-btn');
const panel_container = document.querySelector('.panel-container');

panel_container.classList.toggle('visible')

close_btn.addEventListener('click', () => {
panel_container.classList.remove('visible')
});

}

}

function setErrorFor(input, message) {
const formControl = input.parentElement;
const small = formControl.querySelector('small');
formControl.className = 'form-control error';
small.innerText = message;
}

function setSuccessFor(input) {
const formControl = input.parentElement;
formControl.className = 'form-control success';
}



function getName(){
    outputname.innerHTML = name.value
}