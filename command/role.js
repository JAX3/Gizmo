module.exports = {
    name: 'role',
    description: 'sends help message.',
    execute(message) {
      const fs = require('fs');
      var role = fs.readFileSync("./roles.txt","utf-8");
      message.delete().catch(O_o=>{});    
    message.author.send(role)
     
    },
  };