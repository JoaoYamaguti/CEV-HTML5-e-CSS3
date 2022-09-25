const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    const items = [
        {
            title: "D",
            message:"esenvolvendo aplicações de forma facil"    
        },
        {
            title: 'E',
            message:'JS usa Javascript para renderizar HTML'
        },
        {
            title: 'M',
            message: 'Muito Facil de usar!!!'
        },
        {
            title: 'A',
            message: 'morzinho'
        },
        {
            title: 'I',
            message: 'nstall EJS'
        },
        {
            title: 'S',
            message: 'uper!!!'
        }
    ]

    subtitle = 'Uma linguagem de modelagem para criação de página HTML'

    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get('/sobre', (req, res) => {
    res.render('pages/about');
})

app.listen(8080);
console.log('Rodando')