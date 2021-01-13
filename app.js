const express = require('express');
const mariadb = require('mariadb');



const app = express();

app.use(express.json());

mariadb.createConnection({host: 'localhost', user: 'gustavogm', password: '929305'})
    
    .then(() => {
        console.log("Conexão com MariaDb realizada com sucesso!");
    })
    .catch(err => { 
        console.log("Conexão com MariaDb não realiuzada.")
    });
    


app.get("/", (req, res) => {
    return res.json({titulo: "IRancho!"})
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/");
});