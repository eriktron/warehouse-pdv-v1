const { Client } = require('pg');

async function getConnection(){
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'admin', //user: 'erik',
        password: 'admin1234',
        database: 'warehouse1' //database: 'my_store'
     });
    await client.connect();
    return client;
}

module.exports = getConnection;
