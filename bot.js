////////////////////////////  Discord Library  ////////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();
///////////////////////////////////////////////////////////////////////////////
const tool = require('./tool.js');
const chalk = require('chalk');
const fs = require('fs');
const cfg = require('./config.js');
///////////////////////////////////////////////////////////////////////////////
const token = cfg.config.BOT_TOKEN;
const prefix = cfg.config.PREFIX;
///////////////////////////////////////////////////////////////////////////////

client.config = {
    TOKEN: cfg.config.BOT_TOKEN,
    OWNER_ID: cfg.config.OWNER_ID,
    PREFIX: cfg.config.PREFIX
};

exports.config = () => {
    return client.config;
}


client.commands = [];
fs.readdir("./commands/", function(err, files){
    files.forEach(f => {
        const cmd = require(`./commands/${f}`);
        client.commands.push(cmd);
    });
});

///////////////////////////////////////////////////////////////////////////////

client.on("ready", () => {

 var CreatorOfBot = "TonPseudo"
 var memberCount = client.users.size;
 var servercount = client.guilds.size;
 var memberNumber = client.users.size;
 var serverNumber = client.guilds.size;
  
 var servers = client.guilds.array().map(g => g.name).join(',');

console.log("--------------------------------------");
console.log('--> ' + (chalk.yellow('Robot Par ' + CreatorOfBot)) +' \n--> ' + (chalk.green('Connecté avec succès  ')) + ' \n--> ' + (chalk.magenta('Client Naùe:              '))+ `[ ${client.user.tag} ]` + ' \n--> ' + (chalk.magenta('Commands:              '))+ `[ ${client.commands.length} ]` + ' \n--> '+(chalk.magenta('Default Prefix:      ')) +  `[ ${prefix} ]`  + '\n--> '+ (chalk.magenta('Users: ')) + `[ ${client.users.size} ]` + '\n--> '+ (chalk.magenta('Channels:          ')) + `[ ${client.channels.size} ]` + '\n--> '+ (chalk.magenta('Guilds:    ')) + `[ ${client.guilds.size} ]`);
console.log("--------------------------------------");
console.log('--> ' + (chalk.green('Ready !')));
console.log('______________________________________');

const activities_list = [
    client.config.PREFIX + "help • " + client.users.size + " utilisateurs",
    client.config.PREFIX + "help • " + client.guilds.size + " serveurs", 
    client.config.PREFIX + "help • " + client.channels.size + " salons",
    client.config.PREFIX + "help • " + client.commands.length + " commandes"
    ];
    
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);

  client.user.setPresence({
    game: {
      name: activities_list[index],
      type: "streaming",
      url: "https://www.twitch.tv/monstercat"
    }
  });
}, 5000);
  
});

///////////////////////////////////////////////////////////////////////////////

client.on ("message", msg => {
	if (msg.author.client || msg.channel.type != 'text')
      return;
});

client.on ("message", async msg => {

    if(!msg.content.startsWith(client.config.PREFIX)) return;
    var args = msg.content.substring(client.config.PREFIX.length).split(" ");
    var cmdName = args[0].toLowerCase();

    client.commands.forEach(command => {
        if(cmdName === command.info.name || command.info.alias.includes(cmdName)){

            if(command.info.permission == "owner"
                    && msg.author.id != client.config.OWNER_ID){
                msg.channel.send("Commande réservée a l'**Owner** du bot");
            }else{
                command.execute(client, msg, args);
            }
          
        }
      
    });

  
});

///////////////////////////////////////////////////////////////////////////////

client.login(client.config.TOKEN);