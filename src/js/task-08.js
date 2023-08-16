const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email === '' || password === '') {
    alert('Будь ласка, заповніть всі поля');
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginForm.reset();
}
