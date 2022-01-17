const path = require("path");

console.log(path.dirname(__filename)); // возвращает абсолютный путь до директории где сейчас находимся
console.log(path.basename(__filename)); // возвращает только название файла
console.log(path.extname(__filename)); // возвращает расширение файла (.js)
console.log(path.extname(__filename).slice(1)); // возвращает расширение файла без точки (js)
console.log(path.parse(__filename)); // возвращает полную инфу по файлу
console.log(path.resolve(__dirname, "..", "index.js")); // возвращает путь до указанной папки
console.log(path.join(__dirname, "..", "index.js")); // возвращает путь до указанной папки
