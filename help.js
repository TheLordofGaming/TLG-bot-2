exports.run = (client, msg){
  message.channel.send(config.prefix + "help <------ Returns this list \n" +config.prefix + "asl <------ Flirt with the client :smile: \n" + config.prefix + "ping <------ Pings the client \n Made in node.js by TheLordofGaming");
}

exports.info = {
  perms:0,
  aliases:['h']
}
