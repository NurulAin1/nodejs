//CREATE Server

const express = require('express'); //import module express
const app = express(); //ekskul module express

//eksekusi express dgn memanggil variabel app
app.get('/', function(request, respone){//simbol / yang berarti "root" atau halaman utama, function req(request) dan res(respone)
    respone.send("abcdefgh")// mengirimkan responen dari http dan dikembalikan 
})

app.listen('1010');//definisi halaman port
