module.exports = {
    name: 'cod',
    description: 'Gives the user the Overwatch role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "Call of Duty");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };