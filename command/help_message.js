
    module.exports = {
      name: 'help',
      description: 'sends help message.',
      execute(message) {
        const fs = require('fs');
        var help = fs.readFileSync("./help.txt","utf-8");
        message.delete().catch(O_o=>{});    
      message.author.send(help)
       
      },
    };