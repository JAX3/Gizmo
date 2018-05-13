module.exports = {
    name: 'pubg',
    description: 'Gives the user the Hearthstone role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "PUBG");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };