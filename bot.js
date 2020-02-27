const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
let activated = '0'

bot.on('ready', ()=>{
    console.log('Isla Nerva Support Bot #2 is now online!')
    bot.user.setActivity(`${bot.users.size} Users | nHelp`, {type: ("WATCHING")})
})

bot.on('message', function(message) {
    if (message.content === "$loop") { 
        var interval = setInterval (function () {
        let dEmbed = new RichEmbed()
        .setColor(0xffffff)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Server Name:**", `${message.guild.name}`, true)
        .addField("**Server Owner:**", `${message.guild.owner}`, true)
        .addField("**Total Users:**", `${message.guild.memberCount}`, true)
        .setFooter(`Nerva Support 2`, bot.user.displayAvatarURL);
        message.channel.send({embed: dEmbed})
            .catch(console.error);
            console.log(`Message is looping`)
        }, 1 * 10000); 
    }
});

/*bot.on('guildMemberAdd', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "679496344477761537")
    const embed = new RichEmbed()
    .setFooter(`You are user #${member.guild.memberCount}`, ``, ``)
    .setAuthor(`Welcome to Isla Nerva! ★ `, `https://cdn.discordapp.com/attachments/644280224120569867/681408010681319433/Yolo.png`, ``)
    .setThumbnail(`https://media.giphy.com/media/W4dGm4sLnEd5ug0SYf/giphy.gif`)
    .setImage(`https://cdn.discordapp.com/attachments/612985420350750733/681718576281157635/IslaNervaBanner.png`)
    .setDescription(`**Thank you for joining, ${member}! We hope you enjoy your stay!** <:NervaVerifyCheck:681014423581753373>`)
    .addField("**Server Name:**", `${member.guild.name}`, true)
    .addField("**Server Owner:**", `${member.guild.owner}`, true)
    .addField("**Total Users:**", `${member.guild.memberCount}`, true)
    .setColor(0xffffff);

    channel.sendEmbed(embed);
})*/

bot.on('guildMemberAdd', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "681403062598107162")
    const embed = new RichEmbed()
    .setFooter(`You are user #${member.guild.memberCount}`, bot.user.displayAvatarURL)
    .setAuthor(`Welcome to Isla Nerva's Discord!`, `https://cdn.discordapp.com/attachments/644280224120569867/681408010681319433/Yolo.png`, ``)
    .setThumbnail(`https://media.giphy.com/media/W4dGm4sLnEd5ug0SYf/giphy.gif`)
    .setImage(`https://cdn.discordapp.com/attachments/612985420350750733/681718576281157635/IslaNervaBanner.png`)
    .setDescription(`**Thank you for joining, ${member}! We hope you enjoy your stay!** <:NervaVerifyCheck:681014423581753373> **Please** be sure to check out the <#681043060834304000> channel.`)
    .addField("**Server Name:**", `${member.guild.name}`, true)
    .addField("**Server Owners:**", `<@588977246744608778>, <@435158112480133121>`, true)
    .addField("**Total Users:**", `${member.guild.memberCount}`, true)
    .setColor(0xFFFFFF);

    channel.sendEmbed(embed);
})

bot.on('message', async message => {
    let blacklisted = ['nigger', 'nigga', 'faggot', 'tiger',]
  
    
    let foundInText = false;
    for (var i in blacklisted) {
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    
  
    
      if (foundInText) {
        message.delete();
        message.channel.sendMessage('Language, '+ message.author + '!')
    }
});

bot.on('message', message => {
    if (message.content === '!ServerInfo') {
        let sEmbed = new RichEmbed()
        .setColor(0xffffff)
        .setTitle("Server Info")
        .setImage(message.author.avatarURL)
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Server Name:**", `${message.guild.name}`, true)
        .addField("**Server Owner:**", `${message.guild.owner}`, true)
        .addField("**Total Users:**", `${message.guild.memberCount}`, true)
        .setFooter(`Nerva Support 2`, bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
    }
});

bot.on('message', message => {
    if (message.content === '!Staff') {
        let sEmbed = new RichEmbed()
        .setColor(0xffffff)
        .setTitle("Current Staff")
        .addField("**Server Owners:**", `<@588977246744608778>
        <@435158112480133121>`, true)
        .addField("**Supervisors:**", `<@196386598504497152>
        <@278610754469625857>`, true)
        .addField("**Lead Admins:**", `<@326826870412935170>
        <@331493042492145665>`, true)
        .setFooter(`Isla Nerva Staff`, bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed});
    }
});

bot.on('message', message => {
    if (message.content === '!Users') {
        message.channel.send(`There are currently **${message.guild.memberCount}** users in the server. `);
    }
});

bot.on('message', message => {
    if (message.content === '!ReportTem') {
        message.channel.send(`Here is the template for making a Report:

<:PurpleArrow:679565824968622134> **Discord Name: **
<:PurpleArrow:679565824968622134> **Steam Name & Unique ID:**
<:PurpleArrow:679565824968622134> **Rule/s Broken:**
<:PurpleArrow:679565824968622134> **Short Description of what happened:**
<:PurpleArrow:679565824968622134> **Proof:**`);
    }
});

bot.on('message', message => {
    if (message.content === '!Ping') {
        let m = message.channel.send("**Calculating**");
        message.channel.send(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    }
});

bot.login(process.env.BOT_TOKEN)
