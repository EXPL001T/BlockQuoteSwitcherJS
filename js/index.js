// Записываем в переменную кнопку, чтобы потом повесить на неё обработчик
const btn = document.querySelector(".btn");

// Создаём массив с цитатами
let quotes = [
  "Программисты не говорят 'привет', они говорят 'Hello World!'",
  "Что говорит программист, когда он уходит с работы? Ctrl + Alt + Delete.",
  "Если ваш код работает с первого раза, это не значит, что вы гений. Это значит, что код написан слишком просто.",
  "Есть два вида программистов: те, кто делает резервные копии, и те, кто еще будет делать.",
  "Программист – это тот, кто пишет на языке, который его босс тоже не знает.",
  "Если бы я был багом, я был бы необнаруженным багом.",
  "Программисты не верят в страшилки на Хэллоуин, они верят в бэкапы.",
];

// Весим на кнопку обработчик событий, реагирующий на клики
btn.addEventListener("click", changeQuote);
