module.exports = {
	name: 'prune',
	description: 'Prune up to 99 messages.',
	execute(message, args) {
    const fs = require("fs");
		var permissions = fs.readFileSync("./permissions.txt", "utf-8");
  if(permissions.includes(message.author.id)) {
    let number = args[0];
    if(number == null) return;
    if(number > 100) {
      message.channel.send("I can only delete 100 messages maximum").then((msg) => {
        msg.delete(3000);
      });
    } else {
      message.channel.fetchMessages({limit: number}).then((result) => {
        message.channel.bulkDelete(result).then(() => {
          message.channel.send(`Successfully purged ${number} message(s)`)
          .then((msg) => {
            msg.delete(3000);
          }); 
          let channel = client.channel.get(config.channel);
          const embed = {
            "color": 16753920,
            "timestamp": new Date(),
            "footer": {
              "text": "⚠" 
            },
            "author": {
              "name": message.author.username,
              "icon_url": message.author.avatarURL
            },
            "fields": [
              {
                "name": "Purged messages",
                "value": "I just purged `"+number+"` messages in "+message.channel+""
              }
            ]
          };
          channel.send({ embed });
        }).catch((e) => {
            message.channel.send(`There was an error deleting the messages`)
          .then((msg) => {
            msg.delete(3000);
          });
        });
      }).catch((e) => {
        log.err(e);
        message.channel.send(`I could not fetch messages to delete, try again later`)
        .then((msg) => {
          msg.delete(3000);
        });

      });
    }
  } else {
    //No permissions
  }
}
}	
