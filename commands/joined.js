
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}` + "#"+ `${message.author.discriminator}`)
    .setThumbnail(`${message.author.avatarURL}`)
    .setColor(0xAF0F67)
    .addField("Joined Date",`${message.member.joinedAt.toUTCString()}`)
    .setTimestamp()
    message.channel.send({embed});	
}

module.exports.help = {
  name:"joined"
}