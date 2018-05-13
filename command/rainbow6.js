module.exports = {
    name: 'r6',
    description: 'Gives the user the Overwatch role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "Rainbow Six Siege");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };