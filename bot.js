const {Client, RichEmbed} = require('discord.js')
const bot = new Client()
let activated = '0'

bot.on('ready', ()=>{
    console.log('Dude is Alive')
    bot.user.setActivity(`Slucc Draw, as Always`, {type: ("WATCHING")})
    var Channel = bot.channels.get("697672202668998767");
    Channel.fetchMessage("699468674410479696");
})

bot.on('guildMemberAdd', member => {
    console.log('User ' + member.user.tag + ' has joined the server');
  
    var role = member.guild.roles.find('name', '★');
    member.addRole(role);
    console.log('★ added to ' + member.user.tag + '')
})

bot.on('raw', event =>{
    const eventname = event.t
    if(eventname === 'MESSAGE_REACTION_ADD')
    {
        var reactionChannel = bot.channels.get(event.d.channel_id);
        if(event.d.message_id === '699468674410479696')
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
    var role2 = messageReaction.message.guild.roles.find("name", "Movie Ping");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'SluccYes'){
            member.addRole(role2.id)
            console.log('Added Movie Ping role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionRemove', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role2 = messageReaction.message.guild.roles.find("name", "Movie Ping");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'SluccYes'){
            member.removeRole(role2.id)
            console.log('Removed Movie Ping role from ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role3 = messageReaction.message.guild.roles.find("name", "Game Ping");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'SacheYes'){
            member.addRole(role3.id)
            console.log('Added Game Ping role to ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionAdd', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role4 = messageReaction.message.guild.roles.find("name", "Artist");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'SluccStarEye'){
            member.addRole(role4.id)
            console.log('Added Artist role to ' + member.user.tag + '')
        }
    }
});

//Divider

bot.on('messageReactionRemove', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role3 = messageReaction.message.guild.roles.find("name", "Game Ping");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'SacheYes'){
            member.removeRole(role3.id)
            console.log('Removed Game Ping role from ' + member.user.tag + '')
        }
    }
});

bot.on('messageReactionRemove', (messageReaction, user) =>{
    var roleName = messageReaction.emoji.name
    var role4 = messageReaction.message.guild.roles.find("name", "Artist");
    var member = messageReaction.message.guild.members.find(member => member.id === user.id);
    if(member)
    {
        if(roleName === 'SluccStarEye'){
            member.removeRole(role4.id)
            console.log('Removed Artist role from ' + member.user.tag + '')
        }
    }
});

bot.on('guildMemberAdd', member=>{
    let channel = member.guild.channels.find(channel => channel.id === "686410560669351958")
    const embed = new RichEmbed()
    .setAuthor(`Welcome to Slucche's Discord Server!`, `https://cdn.discordapp.com/attachments/644280224120569867/697682472107900948/Dude.png`, ``)
    .setThumbnail(`https://cdn.discordapp.com/attachments/644280224120569867/697682364305899600/Purplesd.png`)
    .setImage(``)
    .setDescription(`**Thank you for joining, ${member}! Please check out the <#686410636967542815> & <#686410521729171467>** channels. <a:PurpleVerify:697649110576005127>`)
    .setColor(0xFFFFFF);

    channel.sendEmbed(embed);
});

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
        message.channel.sendMessage('Language, '+ message.author + '! Next time you might just get probed. <:AngryDude:697673947432353792>')
    }
});

bot.on('message', message => {
    if (message.content === '!Latest') {
        let sEmbed = new RichEmbed()
        .setColor(0xffffff)
        .setTitle("Slucche's Most Recent Upload 🤍")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .addField("**Title:**", `The Start Of My LDR (basically)`)
        .addField("**Link:**", `https://youtu.be/0e444Mt7_x0`)
        message.channel.send({embed: sEmbed});
    }
});

bot.login(process.env.BOT_TOKEN)
