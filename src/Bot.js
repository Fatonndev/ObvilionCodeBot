const { Client } = require('discord.js');
const load = require('./utils/loader');

module.exports = class Bot {
    /**
     * Launches a bot
     * @param {string} token
     * @param {{language: "en" | "ru"=, prefix: string, status: string=, statusType: "STREAMING" | "PLAYING" | "WATCHING" | "LISTENING"=}=} options
     */
    static run(token, options) {
        if (!token) throw new Error('Token value is empty');

        Bot.token = token;
        Bot.language = options.language || 'en';
        Bot.prefix = options.prefix || '#';
        Bot.status = options.status || '';
        Bot.statusType = options.statusType || 'NONE';

        Bot.client = new Client();

        load(this);
    }

    /** @type {string} A discord bot token */
    static token;

    /** @type {"en"|"ru"} */
    static language;

    /** @type {string} */
    static prefix;

    /** @type {string} */
    static status;

    /** @type {"STREAMING" | "PLAYING" | "WATCHING" | "LISTENING" | "NONE"} */
    static statusType;

    /** @type {module:"discord.js".Client} */
    static client;
}
