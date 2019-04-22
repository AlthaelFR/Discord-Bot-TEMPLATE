const Discord = require('discord.js');
const chalk = require('chalk');


exports.execute = (client, message, args) => {
     message.delete().catch(O_o=>{}); 

var msg = `Commandes:     **${client.commands.length}**`;
    msg += `\nServeurs:            **${client.guilds.array().length}**`;
    msg += `\nSalons:                **${client.channels.array().length}**`;
    msg += `\nEmojis:                **${client.emojis.array().length}**`;
    msg += `\nPing:                    **${client.ping.toFixed(0)}ms**`;

    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField("Stats", msg);

    message.channel.send(embed);
  
  console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` STATS `))+ ']\n--------------------------------------')

};

exports.info = {
    name: "stats",
    alias: ['info'],
    permission: "default",
    type: "general"
};
