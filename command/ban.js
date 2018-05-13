module.exports = {
  name: 'ban',
  description: 'Banning a member',
  permissions:'BAN_MEMBERS',
  execute(message) {
    const fs = require("fs");
    var permissions = fs.readFileSync("./permissions.txt", "utf-8");
    if(permissions.includes(message.author.id)) {
      message.mentions.users.map(user => {
        message.guild.member(user).ban().catch(console.error);
      });
  }else return;
}
}