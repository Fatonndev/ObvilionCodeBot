const Bot = require('./Bot');
const { token } = require('../config.json');

Bot.run(token, {
    language: 'ru'
});
