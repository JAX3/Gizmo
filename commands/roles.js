const Discord = require("discord.js");

let role = require ("../role.txt");
module.exports.run = async (client, message, args) => {
  
    message.delete().catch(O_o=>{});    
message.author.send(role)
}

module.exports.help = {
  name:"roles"
}