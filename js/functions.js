// Создаём функцию, которая генерирует рандомные числа

function getRundomNumber() {
  return Math.floor(Math.random() * quotes.length);
}

// Создаём функию, которая меняет текст кнопки (цитату)

function changeQuote() {
  btn.textContent = quotes[getRundomNumber()];
}
