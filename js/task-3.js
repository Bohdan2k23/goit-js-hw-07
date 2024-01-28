const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const inputValue = nameInput.value.trim(); // Очищення від пробілів по краях
  nameOutput.textContent = inputValue || 'Anonymous'; // Перевірка на порожній рядок
});
