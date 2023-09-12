require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${client.user.username} is online!!!`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "segs") {
    message.reply("https://i.imgur.com/Xh7OF5e.jpg");
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "gnite") {
    message.reply(
      "https://tenor.com/view/goodbye-chat-goodbye-chat-majima-majima-gif-21917631"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "pink pilled") {
    message.reply(
      "https://media.discordapp.net/attachments/1139915622696898632/1150781240736231456/20230727_204911.jpg?width=956&height=1354"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "me when loli") {
    message.reply(
      "https://tenor.com/view/genshin-impact-yakuza-yakuza0-kiryu-loli-gif-18947645"
    );
  }
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "good morning") {
    message.reply("https://tenor.com/bRRVB.gif");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "hug") {
    interaction.reply(
      "https://tenor.com/view/nekopara-chocola-vanilla-hug-gif-24202821"
    );
  }
});

client.login(process.env.token);
