const buttonLogin = document.getElementById('logar');
function validate() {
  const fnome = document.getElementById('login');
  const fsenha = document.getElementById('senha');

  if (fnome.value === 'tryber@teste.com' && fsenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validate);

const counter = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

textarea.addEventListener('keyup', () => {
  const counterValue = 500 - textarea.value.length;
  counter.innerText = counterValue;
});

//Submit desabilitado

const fsubmitButton = document.getElementById('submit-btn');
const fagree = document.getElementById('agreement');

fsubmitButton.disabled = true;

fagree.addEventListener('change', (e) => {
  if (e.target.checked) {
    fsubmitButton.disabled = false;
  } else {
    fsubmitButton.disabled = true;
  }
});
