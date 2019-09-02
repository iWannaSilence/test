const tmi = require('tmi.js');

var gmessage = true;

// Define configuration options
const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();
function disabled() {
  
}
// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  if (gmessage === true) {
    // If the command is known, let's execute it
    if (commandName === '!server' || commandName === '!сервер') {
      client.say(target, `https://discord.gg/QvH6HDe`);
      gmessage=false;
    } 
    if (commandName === '!youtube' || commandName === '!ютуб' || commandName === '!хайлайт' || commandName === '!хайлайты' || commandName === 'highlights') {
      client.say(target, `Хайлайты: http://www.youtube.com/c/westmagehighlights`);
      gmessage=false;
    } 
  } else {
    setTimeout(function() {gmessage=true},5000)
  }
}




// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
