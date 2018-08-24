const Discord = require("discord.js");

let role = require ("../help.txt");
module.exports.run = async (client, message, args) => {
    
    message.delete().catch(O_o=>{});    
message.author.send(help)
}

module.exports.help = {
  name:"help"
}