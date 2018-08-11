
const fs = require("fs");
const Discord = require('discord.js');
const config = require ("./config.json");
const embed = new Discord.RichEmbed()
const client = new Discord.Client({disableEveryone: true});
client.login(config.token);
client.commands = new Discord.Collection();


//on ready stuff.
client.on("ready",() => {
	console.log("my Prefix:",config.prefix,"my id: ",config.id);
	client.user.setUsername("Gizmo");
	client.user.setPresence({ game: { name:" Yalla Esports || !help", type: 0 } });
	

});

// welcome new user.
client.on('guildMemberAdd', (member) => {	
	let  channel =  message.guild.channels.find(`name`, "spawn");
	console.log(channel);
	channel.send(`Yalla ${member}!, Welcome to YaLLa eSports ! What games do you play?! Please Read our <#267986741137244161>.<:yalla:247970940472918017>`);
	
	});
	 

client.on("message", async message => {
	let messageArray = message.content.split(" ");
	let args = messageArray.slice(1);
	let cmd = messageArray[0];
	let commandfile = client.commands.get(cmd.slice(config.prefix.length));
	if(commandfile) commandfile.run(client,message,args);
});
	












//ping command very usefull

client.on('message', (message)=>{
    if(message.content.startsWith(config.prefix+"ping")) {
    
		  message.channel.send(`Pong! ⏱: ${Math.round(client.ping)}ms.`);
	};
  
		  if(message.content.startsWith(config.prefix+"roles")) {
			
			var role = fs.readFileSync("./role.txt","utf-8");
			message.delete().catch(O_o=>{});    
		message.author.send(role)
				
				};
	
				if(message.content.startsWith(config.prefix+"help")) {
					const fs = require('fs');
			var help = fs.readFileSync("./help.txt","utf-8");
			message.delete().catch(O_o=>{});    
		  message.author.send(help)
			
			};
			
  });
  


//joined embed
client.on("message", (message) => {
    if(message.content.startsWith(config.prefix+`joined`)){
		const embed = new Discord.RichEmbed()
		.setTitle(`${message.author.username}` + "#"+ `${message.author.discriminator}`)
		.setThumbnail(`${message.author.avatarURL}`)
		.setColor(0xAF0F67)
		.addField("Joined Date",`${message.member.joinedAt.toUTCString()}`)
		.setFooter("Made by JAX for Yalla esports")
		.setTimestamp()
		message.channel.send({embed});	
}});	





fs.readdir("./commands/", (err, files) => {

	if(err) console.log(err);
  
	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if(jsfile.length <= 0){
	  console.log("Couldn't find commands.");
	  return;
	}
  
	jsfile.forEach((f, i) =>{
	  let props = require(`./commands/${f}`);
	  console.log(`${f} loaded!`);
	  client.commands.set(props.help.name, props);
	});
  
  });




client.on('message', message =>{
if(message.content.toLocaleLowerCase().startsWith(config.prefix+'role'))
{
	var args = message.content.toLocaleLowerCase().split(" ");
	console.log(args);
	if(args[1] ==='ow')
	{
		addrole('Overwatch',message);
		message.reply('Role added.');
}

else if (args[1] === 'dota')
{
	addrole('Dota 2',message);
	message.reply('Role added.');
}
	else if (args[1] === 'csgo')
{
	addrole('CS:GO',message);
	message.reply('Role added.');
}

else if (args[1] === 'hs')
{
	addrole('Hearthstone',message);
	message.reply('Role added.');
}
else if (args[1] === 'pubg')
{
	addrole('PUBG',message);
	message.reply('Role added.');
}

else if (args[1] === 'league')
{
	addrole('League of Legends',message);
	message.reply('Role added.');
}
else if (args[1] === 'r6')
{
	addrole('Rainbow Six Siege',message);
	message.reply('Role added.');
}

else if (args[1] === 'cod')
{
	addrole('Call of Duty',message);
	message.reply('Role added.');
}

else if (args[1] === 'fortnite')
{
	addrole('Fortnite',message);
	message.reply('Role added.');
}

}});



function addrole(roleName,  message)
{
	var role = message.guild.roles.find('name', roleName);
	message.member.addRole(role.id);
	console.log("role found");
	return;
}


















//test functions

/*const sql = require("sqlite");
sql.open("./score.sqlite");




client.on('message', (message)=>{

  
  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.username}"`).then(row => {
	  if (!row) {
		sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
	  } else {
		let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1)/2.5);
		if (curLevel > row.level) {
		  row.level = curLevel;
		  sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
		  message.reply(`You've leveled up to level **${curLevel}**! Ain't that dandy?`);
		  
  
		}
		sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
	   
	  
	  }
	}).catch(() => {
	  console.error;
	  sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
		sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
	  });
	});
  
	if (!message.content.startsWith(config.prefix)) return;
  
	if (message.content.startsWith(config.prefix + "level")) {
	  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
		if (!row) return message.reply("Your current level is 0");
		message.reply(`Your current level is ${row.level}`);
	  });
	} else
  
	if (message.content.startsWith(config.prefix + "points")) {
	  sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
		if (!row) return message.reply("sadly you do not have any points yet!");
		message.reply(`you currently have ${row.points} points, good going!`);
	  });
	}
  
});

*/











	  

