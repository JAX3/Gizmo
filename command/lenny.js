
    module.exports = {
      name: 'lenny',
      description: 'sends help message.',
      execute(message) {
        message.channel.send("( ͡° ͜ʖ ͡°)");
        message.delete();
       
      },
    };