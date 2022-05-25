const express = require("express");

const app = express();

app.use(require('./routes/brands.js'));
app.use(require('./routes/products.js'));


app.listen(4000, () => {
    console.log("Сервер успешно запущен");
});


