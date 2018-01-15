const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");


const config = require("./config.json");
bot.on("ready", () => {
  console.log("I am ready!");
});
/*let word1 = args[0];
let word2 = args[1];
let word3 = args[2]; */
bot.on("message", (message) => {
  if(message.author.equals(bot.user)) return;
  let prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send("pong!");

  }else
  if (command === 'help') {
    message.channel.send(config.prefix + "help <------ Returns this list \n" + config.prefix + "ping <------ Pings the bot \n Made in node.js by TheLordofGaming");
  
  }
  if (command === 'modhelp') {
    message.channel.send(config.prefix + "modhelp <------ Returns this list \n" + config.prefix + "prefix <------ Changes the prefix \n"+config.prefix+"kick <------ Kicks a user \n Made in node.js by TheLordofGaming");
  
  }
  /*if(message.content.startsWith("%say")){
  let text = args.slice(1).join(" ");
  message.delete();
  message.channel.send(text);
  }*/
  if(message.author.id === config.ownerID) return;
  if(message.content.startsWith(config.prefix + "prefix")) {
  // Gets the prefix from the command (eg. "!prefix +" it will take the "+" from it)
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  // change the configuration in memory
  config.prefix = newPrefix;

  // Now we have to save the file.
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
  }
  if (command === "asl") {
  let age = args[0]; // Remember arrays are 0-based!.
  let sex = args[1];
  let location = args[2];
  message.reply(`Hello ${message.author.username}, I see you're a ${age} year old ${sex} from ${location}. Wanna date?`);
  }
  if(message.author.id === config.ownerID) return;
  if(command === "kick") {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
  }

});
bot.login(config.token);
