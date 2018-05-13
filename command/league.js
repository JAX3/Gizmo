module.exports = {
    name: 'league',
    description: 'Gives the user the Hearthstone role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "League of Legends");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };