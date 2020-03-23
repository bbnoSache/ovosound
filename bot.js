const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
let activated = '0'

bot.on('ready', ()=>{
    console.log('Isla Nerva Support Bot #2 is now online!')
    bot.user.setActivity(`${bot.users.size} Users ✔ Server #1`, {type: ("WATCHING")})
    var Channel = bot.channels.get("687013128709603361");
    Channel.fetchMessage("687031350049374372");
})

bot.on("messageUpdate", async(oldMessage, newMessage) =>{
    if(oldMessage.content === newMessage.content){
        return;
    }
        let logEmbed = new RichEmbed()
        .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
        .setThumbnail(oldMessage.author.avatarurl)
        .setColor("Random")
        .setDescription("**Message Edited**:")
        .addField("**Previous**", oldMessage.content, true)
        .addField("**After**", newMessage.content, true)
        .addField("**Deleted at:**", message.createdAt)
        .setTimestamp()

        let loggingChannel = newMessage.guild.channels.find(ch => ch.name === "otherlogs")
        if(!loggingChannel) return;

        loggingChannel.send(logEmbed);

})

bot.on("messageDelete", async message =>{
    
        let deleteEmbed = new RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setThumbnail(message.author.avatarurl)
        .setColor("Random")
        .setDescription("**Message Deleted**:")
        .addField("**Message:**", message.content, true)
        .addField("**Deleted by:**", message.author.tag, true)
        .addField("**Deleted in:**", message.channel, true)
        .addField("**Deleted at:**", message.createdAt)
        .setTimestamp()

        let loggingChannel = message.guild.channels.find(ch => ch.name === "otherlogs")
        if(!loggingChannel) return;

        loggingChannel.send(deleteEmbed);

})


bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.tag + ' has joined the server!');
  
    var role = member.guild.roles.find('name', 'Islander ✔');
    member.addRole(role);
    console.log('Islander role added to ' + member.user.tag + '')
})

bot.on('raw', event =>{
    const eventname = event.t
    if(eventname === 'MESSAGE_REACTION_ADD')
    {
        var reactionChannel = bot.channels.get(event.d.channel_id);
        if(event.d.message_id === '687031350049374372')
        {
            reactionChannel.fetchMessage(event.d.message_id)
            .then(msg => {
            var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
            var user = bot.users.get(event.d.user_id)
            })
            .catch(err => console.log(err))
        }
        else {
            reactionChannel.fetchMessage(event.d.message_id)
            .then(msg => {
            var msgReaction = msg.reactions.get(event.d.emoji.name + ":" + event.d.emoji.id);
            var user = bot.users.get(event.d.user_id)
            })
            .catch(err => console.log(err))
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role2 = messageReaction.message.guild.roles.find("name", "Content Creator");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'Youtube'){
            member.addRole(role2.id)
            console.log('Added Content Creator role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role3 = messageReaction.message.guild.roles.find("name", "Streamer");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'Twitch'){
            member.addRole(role3.id)
            console.log('Added Streamer role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role4 = messageReaction.message.guild.roles.find("name", "Artist");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'NervaPalmTreeHeart'){
            member.addRole(role4.id)
            console.log('Added Artist role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role5 = messageReaction.message.guild.roles.find("name", "Event 🎫");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'NervaEvent'){
            member.addRole(role5.id)
            console.log('Added Event role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role6 = messageReaction.message.guild.roles.find("name", "Herbivore");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'Nerva'){
            member.addRole(role6.id)
            console.log('Added Event role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role7 = messageReaction.message.guild.roles.find("name", "Carnivore");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'IslaNerva'){
            member.addRole(role7.id)
            console.log('Added Event role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role8 = messageReaction.message.guild.roles.find("name", "Omnivore");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'NervaPremiumCredits'){
            member.addRole(role8.id)
            console.log('Added Event role to ' + member.user.tag + '')
        }
    }
});


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

bot.on('guildMemberAdd', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "681403062598107162")
    const embed = new RichEmbed()
    .setFooter(`You are user #${member.guild.memberCount}`, bot.user.displayAvatarURL)
    .setAuthor(`Welcome to Isla Nerva's Discord!`, `https://cdn.discordapp.com/attachments/601538154591420428/686773906601672733/Paradise.png`, ``)
    .setThumbnail(`https://cdn.discordapp.com/attachments/612985420350750733/686087362618720278/MOSHED-2020-3-8-0-45-41.jpg`)
    .setImage(`https://cdn.discordapp.com/attachments/686056415143657500/686058196938522654/bobofet.png`)
    .setDescription(`**Thank you for joining, ${member}! We hope you enjoy your stay!** <a:NervaVerified:688654927643541534> **Please** be sure to check out the <#686319320489656331> channel.`)
    .addField("**Server Name:**", `${member.guild.name}`, true)
    .addField("**Server Owners:**", `<@588977246744608778>, <@435158112480133121>`, true)
    .addField("**Total Users:**", `${member.guild.memberCount}`, true)
    .setColor(0xFFFFFF);

    channel.sendEmbed(embed);
})

bot.on('message', msg =>{
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    if(msg.author.id === '588977246744608778')
    {
        if(msg.content === '-Activate')
        {
            activated = '1'
        }
        if(msg.content === '-Deactivate')
        {
            activated = '0'
        }
    }
    if(msg.author.id === '588977246744608778')
    {
        if(activated === '1')
        {
            console.log('wtf')
            let content = msg.content
            msg.channel.bulkDelete('1')
            msg.channel.send(content)
        }
    }
});


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
        .setFooter(`Nerva Support`, bot.user.displayAvatarURL);
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
    if (message.content === '!ReportHelp') {
        let member = message.author
        message.channel.send(`<a:NervaVerified:688654927643541534> ${member}, Here is the template for making a **Report**:

> <:NervaWhiteArrow:686281746245091410> **Discord Name: **
> <:NervaWhiteArrow:686281746245091410> **Steam Name & Unique ID:**
> <:NervaWhiteArrow:686281746245091410> **Rule/s Broken:**
> <:NervaWhiteArrow:686281746245091410> **Short Description of what happened:**
> <:NervaWhiteArrow:686281746245091410> **Proof:**`);
    }
});

bot.on('message', message => {
    if (message.content === '!DepositHelp') {
        let member = message.author
        message.channel.send(`<a:NervaVerified:688654927643541534> ${member}, Here is the template for requesting a **Deposit**:

> <:NervaCredits:681369350992953364> **Discord Name: **
> <:NervaCredits:681369350992953364> **Steam Name & Unique ID:**
> <:NervaCredits:681369350992953364> **Dinosaur:**`);
    }
});

bot.on('message', message => {
    if (message.content === '!RequestHelp') {
        let member = message.author
        message.channel.send(`<a:NervaVerified:688654927643541534> ${member}, Here is the template for requesting a **Grow or Non-Survival**:

> <:NervaWhiteArrow:686281746245091410> **Steam Name & Unique ID:**
> <:NervaWhiteArrow:686281746245091410> **Dinosaur:**
> <:NervaWhiteArrow:686281746245091410> **Growth Stage**
> <:NervaWhiteArrow:686281746245091410> **Payment**`);
    }
});


bot.on('message', message => {
    if (message.content === '!FindServer') {
        let member = message.author
        message.channel.send(`${member}, Can't find the Server or having trouble finding others as well?
> **Open Steam
> Click on Steam in the Top Left
> Click on Settings
> Then Click In-Game
> Change the "In-Game server browser: Max pings / Minute" to 1000
> Restart The Isle.**`);
    }
});

bot.login(process.env.BOT_TOKEN)
