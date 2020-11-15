/**
 * A Discord events and commands loader
 * @param {Bot} bot
 */
function load(bot) {
    const client = bot.client;

    loadEvents(client);
    client.login(bot.token);
}

/**
 * A events loader
 * @param {module:"discord.js".Client} client
 */
function loadEvents(client) {
    const eventTypes = [
        'ready', 'disconnect', 'channelPinsUpdate', 'message', 'messageUpdate', 'messageDelete',
        'messageReactionAdd', 'messageReactionRemove', 'guildMemberAdd', 'guildMemberRemove',
        'guildMemberUpdate', 'guildBanAdd', 'guildBanRemove'
    ];

    eventTypes.forEach((eventName) => {
        const event = require(`../events/${eventName}`);
        client.on(eventName, event);

    });
}

module.exports = load;
