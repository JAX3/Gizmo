
const fs = require("fs");
const Discord = require('discord.js');
const config = require ("./config.json");
const weather = require('weather-js'); 
client.login(config.token);
const client = new Discord.Client({disableEveryone: true});
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;

client.commands = new Discord.Collection();
//command handler.
fs.readdir("./commands/", (err, files) => {

	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
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
	

//on ready stuff.
client.on("ready",async() => {
	console.log("my Prefix:",config.prefix,"my id: ",config.id);
	client.user.setUsername("Gizmo");
	client.user.setPresence({ game: { name:" Yalla Esports || !help", type: 0 } });
	

});

// welcome new user
	client.on('guildMemberAdd',async (member) => {
		let  channel =  client.channels.get("386858696023605248");
		channel.send(`Yalla ${member}!, Welcome to YaLLa eSports ! What games do you play?! Please Read our <#267986741137244161>.<:yalla:247970940472918017>`);
		console.log(`${member.user.username} has joined`);
	  }); 


//roles
client.on('message', async message =>{
if(message.content.toLocaleLowerCase().startsWith(config.prefix+'role'))
{
	var args = message.content.toLocaleLowerCase().split(" ");
	console.log(args);
	if(args[1] ==='ow')
	{
		addrole('Overwatch',message);
		
}

else if (args[1] === 'dota')
{
	addrole('Dota 2',message);
	
}
	else if (args[1] === 'csgo')
{
	addrole('CS:GO',message);
	
}

else if (args[1] === 'hs')
{
	addrole('Hearthstone',message);
;
}
else if (args[1] === 'pubg')
{
	addrole('PUBG',message);
	
}

else if (args[1] === 'league')
{
	addrole('League of Legends',message);
	
}
else if (args[1] === 'r6')
{
	addrole('Rainbow Six Siege',message);
	
}

else if (args[1] === 'cod')
{
	addrole('Call of Duty',message);
	
}

else if (args[1] === 'fortnite')
{
	addrole('Fortnite',message);
	
}

}});



function addrole(roleName,  message)
{
	var role = message.guild.roles.find('name', roleName);

	message.member.addRole(role.id);
	message.reply(role.id + `Added`);
	console.log("role found");
	return;
}



//xp 
client.on('message', (message)=>{
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	
	let xpAdd = Math.floor(Math.random() * 4) + 6; //xp generator
	console.log(xpAdd);
  
	if(!xp[message.author.id]){
	  xp[message.author.id] = {
		xp: 0,
		level: 1
	  };
	}
  
  
	let curxp = xp[message.author.id].xp;
	let curlvl = xp[message.author.id].level;
	let nxtLvl = xp[message.author.id].level *300 *curlvl;//level gap

	xp[message.author.id].xp =  curxp + xpAdd;
	if(nxtLvl <= xp[message.author.id].xp){
	  xp[message.author.id].level = curlvl + 1;
	  let lvlup = new Discord.RichEmbed()
	  .setTitle("Level Up!")
	  .setColor(0xAF0F67)
	  .addField("New Level", curlvl + 1);
  
	  message.channel.send(lvlup).then(msg => {msg.delete(5000)});
	}
	fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
	  if(err) console.log(err)
	});

	if(!message.content.startsWith(config.prefix)) return;
	if(cooldown.has(message.author.id)){
	  message.delete();
	  return message.reply("You have to wait 5 seconds between commands.")
	}
	if(!message.member.hasPermission("ADMINISTRATOR")){
	  cooldown.add(message.author.id);
	}
  
  
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);
  
	let commandfile = client.commands.get(cmd.slice(config.prefix.length));
	if(commandfile) commandfile.run(client,message,args);
  
	setTimeout(() => {
	  cooldown.delete(message.author.id)
	}, cdseconds * 1000)
  
  });
  











	





	  

