const validationInput = document.getElementById('validation-input');
const dataLength = parseInt(validationInput.getAttribute('data-length'), 10);

validationInput.addEventListener('blur', () => {
  const inputValue = validationInput.value.trim();
  
  if (inputValue.length === dataLength) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});