const Discord = require("discord.js");
const bot = new Discord.Client();
//const config = require("./config.json");
const PREFIX = ","


var fortunes = [
    "Yes :smirk:",
    "Hell no bitch azzz nignog",
    "i think so owo!!!",
    "Fuck off idk",
    "Shhh",
    ];



bot.on("ready", function(){
    console.log("Ready");
    bot.user.setGame("Fortnite | ,help");
    })

bot.on("message", (message) => {
    // our new check:
    if (message.content.startsWith(PREFIX) || message.author.bot) return;
    })

//BOT CHAT//
bot.on("message", function(message){ 
    if (message.author.equals(bot.user))return;
    if (message.content == "Hello"){
        message.channel.sendMessage("Shut up");
    }
    if (message.content == "."){
        message.channel.sendMessage("stop");
    
    if (message.content == "ok"){
        message.channel.sendMessage("hehexd");
    
    if (message.content == "hello"){
        message.channel.sendMessage("Shut up");
    }
    if (message.content == "hi"){
        message.channel.sendMessage("hi dweeb");
    }
    if (message.content == "do you know de wey"){
        message.channel.sendMessage("i do not kno de wey brada");
    }
    if (message.content == "HELLO"){
        message.channel.sendMessage("HI HOOMAN");
    }
    if (message.content == "HI"){
        message.channel.sendMessage("WHAT DO YOU WANT");
    }
    if (message.content == "vbucks pls"){
        message.channel.sendMessage("wins pls");
    }
    if (message.content == "wanna play"){
        message.channel.sendMessage("CMERE BOI");
    }
    if (message.content == "join"){
        message.channel.sendMessage("no ty");
    }
    

//COMMANDS with prefix
if (!message.content.startsWith(PREFIX))return; 

    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLowerCase()){
case "ping": 
            message.channel.sendMessage("pong mother fucker");
            break;
case "8ball":
            if (args[1])message.channel.sendMessage(fortunes[Math.floor(Math.random()* fortunes.length)]);
            else message.channel.sendMessage("idk");
        break;
        
case "help": 
            var embed = new Discord.RichEmbed()
            .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
            .setTitle(" :zap: Commands :zap:  ")
            .setDescription("**Prefix:** ,")
            .setDescription("Hi there, I'm a bot made specifically for the **b-1886** community server! Use the prefix below infront of any triggers listed underneath. If there are any problems just ask Quera ;-;")
            .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
            .addField
            ("__**Prefix:**__", ",")
            .addField
            (" I HAVE NO PURPOSE RIGHT NOW ")
            //.addField
            //("__Non OP Classes__", "`low, mid, high, classpool`")
            //.addField
            //("__Non OP Rules__", "`general, gwar, ban` ban = banned classes")
            .addField
            ("__Random shit__", "`8ball`",)
            .addField
            ("__Info__", "`ping, invite`",true)
            .setFooter
            ("QUERA IS MY MAKER AHAHAHAHAHAHAHAHAH", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
            .setColor
            ("BLUE");
        message.channel.sendEmbed(embed);

        break;

case "invite":
    var embed = new Discord.RichEmbed()
        .setAuthor("teehee xd", /*image here*/)
        .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
        .addField
        ("Invite me!", "Click [this link](https://discordapp.com/api/oauth2/authorize?client_id=401250383776710656&permissions=116737&scope=bot)  to add me to your Guilds' Server!")
        .addField
        ("Join T7!", "Click [this link](https://discord.gg/SG4bCd7) to join the T7 Community Server!")
        .setColor
        ("RANDOM");
        
        message.channel.sendEmbed(embed);
    break;
//wrong commands//
default:
            message.channel.sendMessage("dis iz not de wae please try again");
        break;
    }
    //console.log(message.content);
});

bot.login(process.env.BOT_TOKEN);

