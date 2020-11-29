const express = require('express');
const expressLayouts = require('express-ejs-layouts');  
const {
    toArray,
    somaConjunto,
    Numprimo,
    fibonacci,
    mdc,
    contador,
    ordenar} = require('./calculos.js');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts); 
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({extended:true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('pages/home', {
        saida: 'Desenvolvedores do Projeto ',
        user1: 'Emanuelle Neves', 
        user2: 'Alberto Rebouças', 
    }); 
});

app.get('/soma', (req, res) => {
    res.render('pages/soma', {resultado: null, });
});
app.post('/soma', (req, res) => {
    const {array} = req.body;
    const entrada = toArray(array); 
    const resultado = somaConjunto(entrada).map(numero => ` ${numero}`); 

    return res.render('pages/soma', {entrada, resultado,});

});

app.get('/mdc', (req, res) => {
    res.render('pages/mdc', {resultado: null, });
});
app.post('/mdc', (req, res) => {
    const {a} = req.body;
    const {b} = req.body;
    const entrada1 = a; 
    const entrada2 = b; 
    const resultado = mdc(entrada1, entrada2);

    return res.render('pages/mdc', {entrada1, entrada2, resultado,});
}); 

app.get('/Numprimo', (req, res) => {
    res.render('pages/Numprimo', {resultado: null, });
});
app.post('/Numprimo', (req, res) => {
    const {n} = req.body;
    const entrada = n; 
    const resultado = Numprimo(entrada);

    return res.render('pages/Numprimo', {entrada, resultado,});

}); 

app.get('/fibonacci', (req, res) => {
    res.render('pages/fibonacci', {resultado: null, });
});
app.post('/fibonacci', (req, res) => {
    const {base} = req.body;
    const entrada = base; 
    const resultado = fibonacci(entrada).map(numero => ` ${numero}`);

    return res.render('pages/fibonacci', {entrada, resultado,});

}); 

app.get('/ordenar', (req, res) => {
    res.render('pages/ordenar', { resultado: null });
});
app.post('/ordenar', (req, res) => {
    const {array} = req.body;
    const entrada = toArray(array);
    const resultado = ordenar(entrada);

    return res.render('pages/ordenar', { resultado, entrada: array} );
});

app.get('/contador', (req, res) => {
    res.render('pages/contador', { resultado: null });
});
app.post('/contador', (req, res) => {
    const {num} = req.body;
    const resultado = contador(num);

    return res.render('pages/contador', {resultado, num});
});

app.listen(process.env.PORT || 3000);