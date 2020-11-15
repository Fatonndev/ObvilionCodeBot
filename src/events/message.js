const { client, prefix } = require('../Bot');

/**
 * @param {module:"discord.js".Message} message
 */
module.exports = (message) => {
    if (!message.channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")) return;
    if (message.author.bot) return;

    const channel = message.channel;
    const user = message.author;
    const mentions = message.mentions.members.array();

    let usedPrefix;
    if (message.content.startsWith(prefix)) {
        usedPrefix = prefix;
    } else if (message.content.startsWith(`<@!${client.user.id}>`)) {
        usedPrefix = `<@!${client.user.id}>`;
    }

    if (!usedPrefix) return;

    const content = message.content.slice(usedPrefix.length);
    const messageArgs = content.split('\n').join(' ').split(' ');

    while (messageArgs.indexOf('') !== -1) {
        messageArgs.splice(messageArgs.indexOf(''), 1);
    }

    const command = messageArgs[0].toLowerCase();
    const args = messageArgs.slice(1);

    // TODO: add command listener
    if (command === 'ping') channel.send('Pong!');
}
