module.exports = {
    name: 'announce',
    description: 'repeats the message ',
    execute(message,args,client) {
        const fs = require("fs");
        var permissions = fs.readFileSync("./permissions.txt", "utf-8");
        if(permissions.includes(message.author.id)) {
            const sayMessage = args.join(" ");
            message.delete().catch(O_o=>{}); 
            let  channel = message.guild.channels.find("name", "announcements");
            channel.send(sayMessage);
     
          
            };
    
        },
    };
  