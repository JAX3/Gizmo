const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
 
    let serverembed = new Discord.RichEmbed()
     .setTitle("gizmo")
     .setAuthor("Description")
     .setColor(0xAF0F67)
     .setDescription("Welcome to YaLLa esports Below are a few usefull links and information.")
     .setFooter("Made by JAX for Yalla esports")
     .setThumbnail(message.guild.iconURL)
     .setTimestamp()
     .addField("Commands","Do !help for the list of commands.")
     .addField("Social","below are the important social media links.")
     .addField(`Discord`,`Here's our discord invite link <:yalla:247970940472918017> .\n http://discord.yallaesports.com/`,true)
     .addField(`Website`,`Here's our Website  link <:yalla:247970940472918017> .\n https://www.yallaesports.com/`,true)
     .addField(`Twitter`,`Here's our Twitter link  <:yalla:247970940472918017>. \n https://twitter.com/YaLLaEsports`,true)
   


    message.channel.send(serverembed);
}

module.exports.help = {
  name:"info"
}
