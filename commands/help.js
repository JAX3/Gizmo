const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    var help = fs.readFileSync("../help.txt","utf-8");
    message.delete().catch(O_o=>{});    
message.author.send(help)
}

module.exports.help = {
  name:"help"
}