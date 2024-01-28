const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки при відправці форми

  // Отримуємо значення полів форми
  const emailValue = loginForm.elements.email.value.trim();
  const passwordValue = loginForm.elements.password.value.trim();

  // Перевірка на заповненість полів
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return; // Зупиняємо виконання функції, якщо є незаповнені поля
  }

  // Створюємо об'єкт із введеними даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // Виводимо об'єкт в консоль
  console.log(formData);

  // Очищаємо значення полів форми
  loginForm.reset();
});

