const Discord = require('discord.js');
const chalk = require('chalk');

exports.execute = (client, message, args) => {
  message.delete().catch(O_o=>{});
  
  let online =  message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let sicon = message.guild.iconURL;
  


    var embed = new Discord.RichEmbed()
        .setColor(9955331)
		.setThumbnail(sicon)
		.setAuthor(message.guild.name, sicon)
        .addField("ID", ` \`\`\`fix\n${message.guild.id}\n\`\`\` `, true)
        .addField("Name", ` \`\`\`fix\n${message.guild.name}\n\`\`\` `, true)
        .addField("Owner", ` \`\`\`fix\n${message.guild.owner.displayName}\n\`\`\` `, true)
        .addField("Region", ` \`\`\`fix\n${message.guild.region}\n\`\`\` `, true)
		.addField("Channels",  ` \`\`\`js\n${message.guild.channels.size}\n\`\`\` `, true)
		.addField("Members", ` \`\`\`js\n${message.guild.memberCount}\n\`\`\` `, true)
		.addField("Humans", ` \`\`\`js\n${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}\n\`\`\` `, true)
		.addField("Bots", ` \`\`\`js\n${message.guild.members.filter(m => m.user.bot).size}\n\`\`\` `, true)
		.addField("Online", ` \`\`\`js\n${online.size}\n\`\`\` `, true)
		.addField("Roles", ` \`\`\`js\n${message.guild.roles.size}\n\`\`\` `, true)
		.setFooter(`Server Created • ${day}.${month}.${year}`);

    message.channel.send(embed);
  
  	    console.log(`${(chalk.green(`${message.author.username}`))}` +' sur '+ (chalk.magenta(`${message.guild.name}`)) + ' salon ' + (chalk.magenta(`${message.channel.name}`))+' : ' + ' A ouvert la fonction [' + (chalk.cyan(` SERVER-INFO `))+ ']\n--------------------------------------')     

};

exports.info = {
    name: "serverinfo",
    alias: ["si"],
    permission: "default",
    type: "info"
};
