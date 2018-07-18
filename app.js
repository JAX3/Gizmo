
const fs = require("fs");
const Discord = require('discord.js');
const client = new Discord.Client();
const commandFiles = fs.readdirSync('./command');
const config = require ("./config.json");
const embed = new Discord.RichEmbed()
client.commands = new Discord.Collection();
client.login(config.token);



//on ready stuff.
client.on("ready",() => {
	console.log("my Prefix:",config.prefix,"my id: ",config.id);
	client.user.setUsername("Gizmo");
	client.user.setPresence({ game: { name:" Yalla Esports || !help", type: 0 } });
});

// welcome new user.
client.on('guildMemberAdd', (member) => {	
let  channel =  client.channels.get(config.channel);
console.log(channel);
channel.send(`Yalla ${member}!, Welcome to YaLLa eSports ! What games do you play?! Please Read our <#267986741137244161>.<:yalla:247970940472918017>`);


}); 




//ping command very usefull

client.on('message', (message)=>{
    if(message.content.startsWith(config.prefix+"ping")) {
    
          message.channel.send(`Pong! ⏱: ${Math.round(client.ping)}ms.`);
  
  }});
  





		client.on('message', (message)=>{
			if(message.content.startsWith(config.prefix+"role")) {
			
	var role = fs.readFileSync("./role.txt","utf-8");
	message.delete().catch(O_o=>{});    
message.author.send(role)
		
		}});
		



























  
//info stuff
client.on('message', (message)=>{
  if(message.content.startsWith(config.prefix+"info")) {
	const embed = new Discord.RichEmbed()
		.setTitle("Gizmo")
		.setAuthor("Description")
		.setColor(0xAF0F67)
		.setDescription("Welcome to YaLLa esports Below are a few usefull links and information.")
		.setFooter("Made by JAX for Yalla esports")
		.setTimestamp()
		.addField("Commands","Do !help for the list of commands.")
		.addField("JAX", "The creator of this wonderful client. PLz no steal.", true)
		.addField("Social","below are the important social media links.")
		.addField(`Discord`,`Here's our discord invite link <:yalla:247970940472918017> .\n http://discord.yallaesports.com/`,true)
        .addField(`Website`,`Here's our Website  link <:yalla:247970940472918017> .\n https://www.yallaesports.com/`,true)
        .addField(`Twitter`,`Here's our Twitter link  <:yalla:247970940472918017>. \n https://twitter.com/YaLLaEsports`,true)
		message.channel.send({embed});

}});

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







/// do not touch it allows for commands to work
for (const file of commandFiles) {
	const command = require(`./command/${file}`);
	client.commands.set(command.name, command);
};

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.client) return;

	const args = message.content.slice(config.prefix.length).split(/\s+/);
  const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args,client);
	}
	catch (error) {
		console.error(error);
		message.reply(config.error);
	}


});





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











	
/*
client.on('message', (message)=>{

	var roleList = [ 
		"Call of Duty",
		"CS:GO",
		"DOTA 2",
		"Fortnite",
		"Heartstone",
		"League of Legends",
		"Overwatch",
		"PUBG",
		"Rainbow Six Siege",
		"otwitch"
	];

if (message.content.toLowerCase().startsWith(config.prefix+`role `)) { //only check for the command first
  var getRoleName = function() { //make sure the first letter of the specified role is capitalized and others aren't; return the proper role name
    return message.content.substr(9,1).toUpperCase() + message.content.substr(7).toLowerCase();
  }
  if (roleList.includes(getRoleName())) { //check that the role (capitalized properly) is somewhere in the array
    let role = message.guild.roles.find("name", getRoleName());
    let member = message.member;
    message.delete(5000);
    if (!message.member.roles.has(role.id)) {
      member.addRole(role).catch(console.error); //add role!
      message.reply("\"" + getRoleName() + "\" has been **added**.");
    }
    if (message.member.roles.has(role.id)) {
      member.removeRole(role).catch(console.error); //remove role
      message.reply("\"" + getRoleName() + "\" has been **removed**.");
    }
	} else { //if the role isn't found in the array, reply with an error

		message.reply("role not found.").catch(console.error);
		
  }
}});

*/