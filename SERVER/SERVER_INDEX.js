import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';

const MYSQL_API = mysql;
const XPRES_API = express;
const APPLICATION_XPRESS = XPRES_API();
const BODYPARSER_API = bodyParser;
const CORS_API = cors;

APPLICATION_XPRESS.use(CORS_API());
APPLICATION_XPRESS.use(BODYPARSER_API.urlencoded( { extended: true } ));

const DATABASE = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '116900@@Wsu',
    connectionLimit: 10,
    database: 'maillouxinduswebsitedb',
    insecureAuth: true,
});

const CURRENT_PORT = 3002;
APPLICATION_XPRESS.get("/REST_API/USERS", (Request, Response) => {
    const SQLINSERT = `SELECT * FROM crud_db_matthewindus.user_upload;TOKENuser_up`
    DATABASE.query(SQLINSERT, (err, result) => {
        if (err) throw err;
        console.log('CONNECTED TO DB!');
    });
});

APPLICATION_XPRESS.listen(CURRENT_PORT, () => {
    console.log(`XPRES SERVER IS CURRENTLY RUNNING ON PORT ${CURRENT_PORT}`);
});


