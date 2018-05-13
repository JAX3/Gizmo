module.exports = {
    name: 'dota',
    description: 'Gives the user the Hearthstone role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "DOTA 2");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };