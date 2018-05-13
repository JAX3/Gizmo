module.exports = {
    name: 'csgo',
    description: 'Gives the user the csgo role',
    execute(message) {
        let roleid = message.member.guild.roles.find("name", "CS:GO");
        message.member.addRole(roleid);
        message.reply(`Has been given a Role.`)
    },
  };