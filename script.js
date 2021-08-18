const buttonLogin = document.getElementById('button-login');
const inputLogin = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const buttonForm = document.getElementById('submit-btn');
const agreementSelect = document.getElementById('agreement');
buttonForm.disabled = true;

function validLogin() {
  if (inputLogin.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

function login() {
  buttonLogin.addEventListener('click', validLogin);
}

function validForm() {
  if (agreementSelect.checked === true) {
    buttonForm.disabled = false;
    console.log(agreementSelect.checked);
  } else {
    buttonForm.disabled = true;
    console.log(agreementSelect.checked);
  }
}

function ableClick() {
  agreementSelect.addEventListener('click', validForm);
}

login();
ableClick();
