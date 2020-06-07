import knex from 'knex';
import path from 'path';//Biblioteca nativa do Node utilizada para organizar strings de diretórios

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;