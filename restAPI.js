const express = require('express');
const app = express();
const bodyParser = require('body-parser');//import body-parser

app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/siswa', (request, response)=>{ // :nama merupakan parameter
    response.end("menampilkan nama siswa ")
});
app.get('/siswa', (req, res)=>{
    let namaSiswa = req.params.nama;
    res.end("Menanmpilkan siswa dengan nama: "+ namaSiswa)
})

app.post('/siswa/', (request, response)=>{
    let namaSiswa = request.body.name;
    let alamat = request.body.address;
    response.end('menampilkan siswa baru ' +namaSiswa + ', yang beralamat di ' +alamat);
});

//endpoinnt delete, data yang diakses secara spesifik dengan menggunakan parameter
app.delete('/siswa/:id', (request, response)=>{ 
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    response.end('id '+id + ' telah dihapus, dengan nama: '+namaSiswa);
});

//endpoint update
app.put('/siswa/:id', (request, response)=>{
    let id = request.params.id; 
    let namaSiswa = request.body.nama;
    let alamat = request.body.alamat;
    response.end('siswa dengan id: '+id+ 'telah diupdate')
});
app.listen('8080', (e)=>{
    console.log(e)
})
