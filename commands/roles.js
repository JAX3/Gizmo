const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    var role = fs.readFileSync("../role.txt","utf-8");
    message.delete().catch(O_o=>{});    
message.author.send(role)
}

module.exports.help = {
  name:"roles"
}