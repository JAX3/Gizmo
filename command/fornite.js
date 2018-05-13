module.exports = {
    name: 'fornite',
    description: 'Gives the user the Overwatch role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "Fornite");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };