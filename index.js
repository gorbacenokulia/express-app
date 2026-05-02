const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('<h1>Test2 - Приложение работает!</h1>');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});