require('dotenv').config();

const express = require('express');
const app = express();
const checkoutRoutes = require('./routes/checkoutRoutes');

app.set('view engine', 'ejs');


app.use('/', checkoutRoutes);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get('/success', (req, res) => {
    res.render('payment_successfull.ejs');
})

app.get('/cancel', (req, res) => {
    res.render('payment_failed.ejs');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

