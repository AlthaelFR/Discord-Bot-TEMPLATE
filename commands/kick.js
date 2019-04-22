const Discord = require("discord.js");
const chalk = require('chalk');
const tool = require('../tool.js');
const cfg = require('../config.js');
const client = new Discord.Client();
const owner = cfg.config.OWNER_ID;
const prefix = cfg.config.PREFIX;


exports.execute = (client, message, args) => {
  message.delete().catch(O_o=>{});
  
      if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.sendMessage("Vous n'avez pas la permission **KICK** !!");
      let reason = args.slice(1).join(' ');
      let user = message.mentions.users.first();
      if (reason.length < 1) return message.reply('Vous devez fournir une raison pour **KICK**');
      if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner un utilisateur').catch(console.error);
      if (!message.guild.member(user).kickable) return message.reply('Je ne peux pas **KICK** ce membre');
      message.guild.member(user).kick();
  
      var embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('ACTION:', 'Kick')
      .addField('UTILISATEUR:', `${user.username}`)
      .addField('RAISON:', `${reason || 'Sans raison'}\n--------------------`)
      .setFooter(`KICK effectué par l'administrateur: ${message.author.username}`)
      .setTimestamp() 
      .setThumbnail(`${message.guild.iconURL}`)
      message.channel.send(embed);
      
console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` KICK `))+ ']\n--------------------------------------')

};

exports.info = {
    name: "kick",
    alias: [],
    permission: "default",
    type: "modo"
};