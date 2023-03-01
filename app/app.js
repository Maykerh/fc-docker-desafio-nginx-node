const express = require('express');
const mysql = require('mysql');

const app = express();

const port = 3000;
const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'myDatabase'
}

const conn = mysql.createConnection(dbConfig);

conn.query("CREATE TABLE IF NOT EXISTS pessoa (nome VARCHAR(255));");

conn.end();

app.get('/', (req, res) => {
    const connection = mysql.createConnection(dbConfig);

    connection.query("INSERT INTO pessoa(nome) values('Joaozinho');");

    connection.end();

    res.send('<h1>Full Cycle Rocks!!</h1>');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
