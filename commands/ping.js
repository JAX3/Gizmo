
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let ayy = client.emojis.get("480294147698327552");
		  message.channel.send(`Pong! ⏱: ${Math.round(client.ping)}ms.`);
		  message.react(ayy)
}

module.exports.help = {
  name:"ping"
}