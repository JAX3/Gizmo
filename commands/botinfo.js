
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor(0xAF0F67)
    .setThumbnail(bot.user.displayAvatarURL)
    .addField("Bot Name", bot.user.username)
    .addField("Created By", "JAX");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}