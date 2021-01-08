let config;
try {
	config = require('./config.json');
}
catch {
	return console.log("You need to copy 'config.example.json' to 'config.json'");
}
const RichPresence = require('discord-rich-presence');

const {
	clientID,
	state,
	details,
	largeImageKey,
	largeImageText,
	smallImageKey,
	smallImageText
} = config;

const client = RichPresence(clientID);

client.updatePresence({
	state,
	details,
	startTimestamp: new Date(),
	largeImageKey,
	largeImageText,
	smallImageKey,
	smallImageText,
	instance: true,
});
console.log("Rich presence running...");