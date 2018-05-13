module.exports = {
    name: 'hearthstone',
    description: 'Gives the user the Hearthstone role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "Hearthstone");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };