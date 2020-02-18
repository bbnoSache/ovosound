const {Client, Attachment} = require('discord.js');
const bot = new Client()
const fs = require('fs')
const data = require("./data.json")
let activated = '0'

bot.on('ready', ()=>{
    console.log('Isla Indo Support bot #2 is now online!')
    bot.user.setActivity(`over ${bot.users.size} Users!`, {type: ("WATCHING")})
})

bot.on('message', message => {
    if (message.content === '!rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});

bot.on('message', message => {
    if (message.content === '!Users') {
        message.channel.send(`There are currently **${bot.users.size}** users in the server. `);
    }
});

bot.on('message', message => {
    if (message.content === '!Ping') {
        let m = message.channel.send("**Calculating**");
        message.channel.send(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }
});

client.login(process.env.BOT_TOKEN)
