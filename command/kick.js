



module.exports = {
    name: 'kick',
    description: 'kicking a member!',
    permissions:'KICK_MEMBERS',
    execute(message) {
      const fs = require("fs");
      var permissions = fs.readFileSync("./permissions.txt", "utf-8");
      if(permissions.includes(message.author.id)) {
        message.mentions.users.map(user => {
          message.guild.member(user).kick().catch(console.error);
        });
		  
    } else return;
  }
}
