const { transports } = require('winston');
const winston = require('winston');
require('winston-daily-rotate-file');

let transport = new winston.transports.DailyRotateFile({
    filename: './logs/daily_query_log',
    datePattern: 'yyyy-MM-dd.',
    prepend: true,
    level: process.env.ENV === 'development' ? 'debug' : 'all'
});

let logger = winston.createLogger({
    transports : [transport]
});

module.exports = {
    'sessionSecret': 'kc2021!@#',
    'algorithm' : 'aes-256-ctr',
    'local': 'http://localhost:4200',
    'undefined': 'http://localhost:4200',
    'localDB': {
        connectionLimit: 100,
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'institutions-search',
        dialect:'mysql',
        logger:logger,
        logging:true
    },
    'localport': 6500,
}