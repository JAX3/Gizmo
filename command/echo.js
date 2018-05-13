
module.exports = {
    name: 'echo',
    description: 'repeats the message ',
    permission: "224963691563581440",
    execute(message,args) {
        const sayMessage = args.join(" ");
        
        message.delete().catch(O_o=>{}); 
    
        message.send(sayMessage);
        console.log(sayMessage);
    },
  };