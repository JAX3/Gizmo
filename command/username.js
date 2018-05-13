
    module.exports = {
        name: 'username',
        description: 'sends help message.',
        execute(message,client,fs,args) {
            var permissions = fs.readFileSync("./permissions.txt", "utf-8");
            if(permissions.includes(message.author.id)) {
              let username = args.slice(0).join(' ');
              if(!username) {
                message.channel.send("Syntax error! `!username <username>`")
                .then((msg) => {
                  msg.delete(3000);
                });
              } else {
                if(username.length > 32) {
                  message.channel.send("Sorry, but a username cannot be longer than `32` characters")
                  .then((msg) => {
                    msg.delete(3000);
                  });
                } else {
                  try {
                    client.user.setUsername(username);
                    let channel = client.channels.get("346689778651103233");
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
                          "name": "Username changed",
                          "value": "My username was just changed to `"+username+"`"
                        }
                      ]
                    };
                    channel.send({ embed });
                    message.channel.send("✅")
                    .then((msg) => {
                      msg.delete(3000);
                    });
                  } catch (e) {
                    message.channel.send(`Oops, there was an error!`)
                    .then((msg) => {
                      msg.delete(3000);
                    });
                    log.err(e);
                  }
                }
              }
            } else return;
          }
        
        
        };