module.exports = {
    name: 'restart',
    description: 'restarts the bot ',
    execute(message) {
        process.exit(1);
        
        message.delete().catch(O_o=>{});
    },
  };