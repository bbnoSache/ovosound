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

function duderesponses() {
    var rand = ['**No**', '**Busy**', '**No thank you**', '**That bitch Carole Baskin**'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function monthz() {
    var rand = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function yearz() {
    var rand = [' 2021', ' 2022', ' 2023', ' 2024', ' 2025', ' 2026', ' 2027', ' 2028', ' 2029', ' 2030', ' 2031', ' 2032'];

    return rand[Math.floor(Math.random()*rand.length)];
}

function dayz() {
    var rand = [' 1st,', ' 2nd,', ' 3rd,', ' 4th,', ' 5th,', ' 6th,', ' 7th,', ' 8th,', ' 9th,', ' 10th,', ' 11th,', ' 12th,', ' 13th,', ' 14th,', ' 15th,', ' 16th,', ' 17th,', ' 18th,', ' 19th,', ' 20th,', ' 21st,', ' 22nd,', ' 23rd,', ' 24th,', ' 25th,', ' 26th,', ' 27th,', ' 28th,', ' 29th,', ' 30th,', ' 31st,'];

    return rand[Math.floor(Math.random()*rand.length)];
}

bot.on('message', message=> {
    if (message.isMentioned(bot.user)) {
    message.reply(duderesponses());
}
});

bot.on('message', message=> {
    if (message.content === 'Abduct Me') {
    message.reply('You will be abducted on ' + monthz()  + dayz() + yearz());
}
});

bot.on('message', message=> {
    if (message.content === 'Dude') {
    message.channel.send('What');
}
});

/*bot.on('message', message=> {
    if (message.content === 'Simp') {
    message.channel.send('<@144857093940183041> someones asking for you');
}
});*/

bot.on('message', message=> {
    if (message.content === 'Probe someone') {
        var user = message.guild.members.random();
        message.channel.send(`Looks like you're next to be probed, ${user} <:SluccSus:697634234277429278>`);
    }
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
    let args = msg.content.split(' ')
    switch(args[0]){
        case '!DM':
            if(msg.author.id === "588977246744608778"){
                let mentioned = msg.mentions.users.first()
                let message = args.join(' ').slice(26)
                msg.channel.bulkDelete('1')
                mentioned.send(message)   
            }
            if(msg.author.id === "435158112480133121"){
                let mentioned = msg.mentions.users.first()
                let message = args.join(' ').slice(26)
                msg.channel.bulkDelete('1')
                mentioned.send(message)   
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

bot.on('message', message => {
    if (message.content === 'Dude join the VC') {
      var voiceChannel = message.member.voiceChannel
      voiceChannel.join().then(connection => {
        const dispatcher = connection.playFile('E:\Sache\Music\Better L\prima - Jin.mp3')
      }).catch(err => console.log(err))
    }
});

bot.login(process.env.BOT_TOKEN)
