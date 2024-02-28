let express = require('express'),
app = express();

app
.get('/', (req,res) => {
    res.end('<h1>Hola mundo desde Express!!</h1>')
})
.get('/contact',(req,res) => {
    res.send("Contacto");
})
.listen(3000)

console.log("iniciando Express en el puerto 3000")