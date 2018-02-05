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
    bot.user.setGame("b-1886 | ,help");
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
    //if (message.content == "."){
    //    message.channel.sendMessage("stop");
    //}
    // if (message.content == "ok"){
    //  message.channel.sendMessage("hehexd");
    //}
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
            ("__Non OP Classes__", "`low, mid, high, classpool`")
            .addField
            ("__Non OP Rules__", "`general, gwar`")
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

case "low":
                var embed = new Discord.RichEmbed()
                .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .setTitle(":crossed_swords: Low Tier Classes :crossed_swords: ")
                .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .addField
                (":white_small_square: No Class", "Literally No Class. *Is a Seasonal Class from Harvest.* ")
                .addField
                (":white_small_square: Enforcer", "**AKA** Rustbucket, Protosatorium. *Found at /crashsite.*")
                .addField
                (":white_small_square: Dragonslayer", "Rawr I'm a dragon slayer xdd!!! *Found at /dragoncon!!!*",true)
                .addField
                (":white_small_square: Undeadslayer", "Is like Classic Pally!!! I actually don't know!!! *Found at /lightguard Rank 10 Doomwood and is Member only.*",true)
                .addField
                (":white_small_square: Bard", "Seldom used in 1v1s but slightly buffs classes in 3v3s. *Found at /mythsong Rank 4 Mythsong and is Member only.*",true)
                .addField
                (":white_small_square: Clawsuit", "IDK WHAT THIS IS BUT IT'S RARE",true)
                .addField
                (":white_small_square: Evolved/Prismatic Clawsuit", "NOT TO BE CONFUSED WITH CLAWSUIT. *Is Seasonal Member released during Frostvale.*",true)
                .setFooter
                ("1886 Community | Accurate as of the 14th of January, 2018", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .setColor
                ("RANDOM");
            message.channel.sendEmbed(embed);
        break;
case "mid":
                var embed = new Discord.RichEmbed()
                .setTitle(":crossed_swords: Mid Tier Classes :crossed_swords: ")
                .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .addField
                (":sparkles: Guardian :sparkles:", "Tower Class",true)
                .addField
                (":white_small_square: Bard", "Seldom used in 1v1s but slightly buffs classes in 3v3s. *Found at /mythsong Rank 4 Mythsong and is Member only.*",true)
                .addField
                (":white_small_square: Mechajouster", "RARE non-mem *from Wheel of Doom/Destiny Merge shop.*",true)
                //.addField
                //(":white_small_square: Clawsuit", "IDK WHAT THIS IS BUT IT'S RARE",true)
                //.addField
                //(":white_small_square: Evolved/Prismatic Clawsuit", "NOT TO BE CONFUSED WITH CLAWSUIT. Is Seasonal Member released during Frostvale.",true)
                .addField
                (":white_small_square: Classic DoomKnight", "*Found at /shadowfall in the DoomKnight Shop. Requires, Rank 10 Warrior and Healer AND Rank 5 Evil reputation. Is member only too.*",true) 
                .addField
                (":white_small_square: Classic Paladin", "*Found at /lightguard in the old lady's Shop. Requires, Rank 10 Warrior and Healer. Is member only too.*",true)
                .addField
                (":white_small_square: Beastmaster", "Underused class *found at /northpointe in Faiths Beastmaster shop buyable for 2kacs or Rank 10 Beastmaster. Is member only.*",true) 
                //.addField
                //(":white_small_square: Master Ranger", "Seldom used due to the lag it causes. Found at /sandsea in the Rep Shop. Requires Rank 10 Sandsea.",true)  
                .setFooter
                ("1886 Community | Accurate as of the 14th of January, 2018", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .setColor
            ("RANDOM");
        message.channel.sendEmbed(embed);
    break;
case "high":
                var embed = new Discord.RichEmbed()
                .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .setTitle(":crossed_swords: High Tier Classes :crossed_swords: ")
                .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .addField
                (":sparkles: DragonLord :sparkles: ", "Tower Class",true)
                .addField
                (":sparkles: StarLord :sparkles:", "Tower Class",true)
                .addField
                (":sparkles: Defender :sparkles:", "Tower Class",true)
                //.addField
                //(":sparkles: Guardian :sparkles:", "Tower Class",true)
                .addField
                (":sparkles: CardClasher :sparkles:", "Rare at the moment. *From HeroMart.*",true) 
                .addField
                (":white_small_square: Warrior", "Starters class *found at /trainers.* **AKA** Warlord (Member), Pumpkin Lord (Member), Void HighLord and Legion DoomKnight TESTER (Rare), Beast Warrior (Member)",true)
                .addField
                (":white_small_square: Ninja", "*Found at /greenguardwest from Mayumi or Mazumi some Japanese sounding named chick.* **AKA** Assassin (Member) and NinjaWarrior (Member/Non-mem is Rare) ",true) 
                .addField
                (":white_small_square: Healer", "Banned in 1v1s and 2v2s. Starters class *found at /trainers.* **AKA** Witch (rare) and Acolyte (Member)",true)
                .addField
                (":white_small_square: Evolved Leprechuan", "Farmable *at /luck during St. Patricks event.* Can be bought with ACs.",true) 
                .addField
                (":white_small_square: Rogue", "Previously banned, now ONLY allowed in 3v3s and 4v4s. Starter class *found at /trainers.* **AKA** Renegade (Member) and Classic Pirate (Non Member)",true)
                .addField
                (":white_small_square: Mage", "Previously banned, now ONLY allowed in 3v3s and 4v4s. Starter class *found at /trainers.* **AKA** Sorcerer (Member).",true) 
                .addField
                (":white_small_square: Berserker", "It's funnnn!!! *Found at /trainers from Thok without the wok.* Is member only.",true)   
                .addField
                (":white_small_square: Bard", "Seldom used in 1v1s is banned in 2v2s but massively buffs classes in 3v3s. *Found at /mythsong Rank 4 Mythsong and is Member only.*",true)
                .addField
                (":white_small_square: Master Ranger", "Seldom used due to the lag it causes. *Found at /sandsea in the Rep Shop. Requires Rank 10 Sandsea.*",true)  
                .setFooter
                ("1886 Community | Accurate as of the 14th of January, 2018", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
                .setColor
            ("RANDOM");
        message.channel.sendEmbed(embed);
    break;
case "classpool":
        var embed = new Discord.RichEmbed()
        .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
        .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")       
        .setTitle(":crossed_swords: NON-OP CLASS POOL:crossed_swords: ")
        .addField
        (":sparkles: DragonLord :sparkles: ", "**HIGH-TIER** Tower Class",)
        .addField
        (":sparkles: StarLord :sparkles:", "**HIGH-TIER** Tower Class",)
        .addField
        (":sparkles: Defender :sparkles:", "**HIGH-TIER** Tower Class",)
        .addField
        (":sparkles: Guardian :sparkles:", "**HIGH/MID-TIER** Tower Class",)
        .addField
        (":sparkles: CardClasher :sparkles:", "**HIGH-TIER** Rare at the moment. From HeroMart.",true) 
        .addField
        (":white_small_square: Warrior", "**HIGH-TIER** Starters class found at /trainers. AKA Warlord (Member), Pumpkin Lord (Member), Void HighLord and Legion DoomKnight TESTER (Rare), Beast Warrior (Member)",true)
        .addField
        (":white_small_square: Ninja", "**HIGH-TIER** Found at /greenguardwest from Mayumi or Mazumi some Japanese sounding named chick. AKA Assassin (Member) and NinjaWarrior (Member/Non-mem is Rare) ",true) 
        .addField
        (":white_small_square: Healer", "**HIGH-TIER** Banned in 2v2s and 1v1s Starters class found at /trainers. AKA Witch (rare) and Acolyte (Member)",true)
        .addField
        (":white_small_square: Evolved Leprechuan", "**HIGH-TIER** Farmable at /luck during St. Patricks event. Can be bought with ACs.",true) 
        .addField
        (":white_small_square: Rogue", "**HIGH-TIERr** Previously banned, now ONLY allowed in 3v3s and 4v4s. Starter class founded at /trainers. AKA Renegade (Member) and Classic Pirate (Non Member)",true)
        .addField
        (":white_small_square: Mage", "**HIGH-TIER** Previously banned, now ONLY allowed in 3v3s and 4v4s. Starter class found at /trainers. AKA Sorcerer (Member).",true) 
        .addField
        (":white_small_square: Berserker", "**HIGH-TIER** It's funnnn!!! Found at /trainers from Thok without the wok. Is member only.",true) 
        .addField
        (":white_small_square: Mechajouster", "**MID-TIER** RARE non-mem from Wheel of Doom/Destiny Merge shop.",true)
        .addField
        (":white_small_square: Clawsuit", "**LOW-TIER** IDK WHAT THIS IS BUT IT'S RARE",true)
        .addField
        (":white_small_square: Evolved/Prismatic Clawsuit", "**LOW-TIER** NOT TO BE CONFUSED WITH CLAWSUIT. Is Seasonal Member released during Frostvale.",true)
        .addField
        (":white_small_square: Classic DoomKnight", "**MID-TIER** Found at /shadowfall in the DoomKnight Shop. Requires, Rank 10 Warrior and Healer AND Rank 5 Evil reputation. Is member only too.",true) 
        .addField
        (":white_small_square: Classic Paladin", "**MID-TIER** Found at /lightguard in the old lady's Shop. Requires, Rank 10 Warrior and Healer. Is member only too.",true)
        .addField
        (":white_small_square: Beastmaster", "**MID-TIER** Underused class found at /northpointe in Faiths Beastmaster shop buyable for 2kacs or Rank 10 Beastmaster. Is member only. ",true) 
        .addField
        (":white_small_square: Master Ranger", "**HIGH-TIER** Seldom used due to the lag it causes. Found at /sandsea in the Rep Shop. Requires Rank 10 Sandsea.",true)  
        .addField
        (":white_small_square: No Class", "**LOW-TIER** Literally No Class. Is a Seasonal Class from Harvest. ")
        .addField
        (":white_small_square: Enforcer", "**LOW-TIER** AKA Rustbucket, Protosatorium. Found at /crashsite.")
        .addField
        (":white_small_square: Dragonslayer", "**LOW-TIER** Rawr I'm a dragon slayer xdd!!! Found at /dragoncon!!!",true)
        .addField
        (":white_small_square: Undeadslayer", "**LOW-TIER** Is like Classic Pally!!! I actually don't know!!! Found at /lightguard Rank 10 Doomwood and is Member only.",true)
        .addField
        (":white_small_square: Bard", "**CROSS-TIER** Seldom used in 1v1s is banned in 2v2s but massively buffs classes in 3v3s. Found at /mythsong Rank 4 Mythsong and is Member only.",true)
        .setFooter
        ("1886 Community | Accurate as of the 14th of January, 2018", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
        .setColor
        ("RANDOM");
    message.channel.sendEmbed(embed);
    break;
    

case "general": 
    var embed = new Discord.RichEmbed()
    .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
    .setTitle(":crossed_swords: General NON-OP Rules :crossed_swords: ")
    .setDescription("Below listed are all the General non-op rules that are applied to **all casual** 1v1s, 2v2s, 3v3s etc.")
    .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
    .addField
    ("Amulets", "5k Amulet is the standard amulet unless specified otherwise *( e.g. both teams* ***must*** *agree if using a different amulet such as 1.5k).*  ")
    .addField
    ("NPCs", "**Don't kill NPCs**, if done on accident scores will be taken from the last wave before the NPC was killed. ")
    .addField
    ("Suicides", "Any suicides **before the death of a player on either team** is a +1 for the opposite team, *however if someone has died then the suicide is allowed.*")
    .addField
    ("Performance enhancements", "**STRICTLY** no potions, awe enhancements, damage boosting items **AND** *esc’ing* to any degree is in grounds for a -1. Use of **ANY** 3rd Party applications to enhance your performance is not tolerable *(eg. Carbon, Macros, Bots)*.")
    .addField
    ("Glitches", "STGs when done obviously, on purpose would be counted as a +1 for the other player/team. When a room has been DOT/respawn glitched- restart the match in a new room. ")
    .addField
    ("Safezone", "You may not safezone once a wave has begun until at least one player from either team has died. ")
    .addField
    ("Roofing", "If you have roofed during any format of pvp, *you should house and inform both teams that you have done so*, this will not have any penalties. **If there are multiple roofs in one game, then points will start to be deducted.**")
    .addField
    ("Mirrors", "If you have agreed to mirror classes before the pvp has started, regardless of format, you may not change class without permission from both parties. ")
    .addField
    ("Disconnections", "Disconnections mid-wave will cause no penalties unless this occurs more than twice in a game, or if the disconnect can be proven to be because of esc, or another illegal abuse. ")
    .addField
    ("Housing", "Housing mid-wave automatically counts as a +1 for the other team ( +1 for each player that housed), however housing before the wave has started ( E.g. if a player is glitched) no points shall be deducted.  ")
    .addField
    ("Camping", "During a 1v12v2/3v3/4v4 camping in your **own** teams NPCs **for more than 5 seconds** can result in a penalty.")
    .addField
    ("'Lines'", "Any line up of classes are allowed unless noted Banned in a specific line *(e.g Healer, Rogue, Mage banned in 2v2s and 1v1s)*. **STRICTLY** no double ups of the same class per team- unless agreed on beforehand by **BOTH** teams.")
    .setFooter
    ("1886 Community", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
    .setColor
    ("RANDOM");
    message.channel.sendEmbed(embed);
    break;

case "gwar": 
    var embed = new Discord.RichEmbed()
    .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
    .setTitle(":crossed_swords: GUILD WAR NON-OP Rules :crossed_swords: ")
    .setDescription("Below listed are all the rules for non-op Guild Wars. **ALL RULES LISTED IN ,general STILL APPLY UNLESS STATED OTHERWISE**")
    .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
    .addField
    ("ESC'ing", "Escing in a war this could be grounds for a void, but this is up to the guild leader in questions.") 
    .addField
    ("Fillers", "No fillers **UNLESS** both guilds allow it.") 
    .addField
    ("War Validation", "Any wars **must be validated** with both a recording of the war in question, and proof of it being a war *( A screenshot of both guild leaders/ officers agreeing to the war will suffice)*.")
    .addField
    ("Cancelling a Guild-War", "If you have asked for a war, but decide to opt out, your guild will be penalised with a -1 on the Guild Leaderboard, this is to prevent time wasting and avoiding wars. **However** if the Guild being offered a war cancels before the war occurs, this is a forfeit and rewards the other Guild with a technical win.")
    .addField
    ("Guild Leaderboard", "All guild wars as of December 2017, will be recorded with all 1886 Participating guilds. Including: Penalities, Wins, Losses and number of kills. See #guild-leaderboard in the b-1886 server.")
    .addField
    ("GWAR Format", "For a while it's been formatted as a either a 3v3 or 4v4 :smile: ")
    .setFooter
    ("1886 Community", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
    .setColor
    ("RANDOM");
    message.channel.sendEmbed(embed);
    break;


case "invite":
    var embed = new Discord.RichEmbed()
        .setAuthor("b-1886", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
        .setThumbnail("https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
        .addField
        ("Invite me!", "Click [this link](https://discordapp.com/api/oauth2/authorize?client_id=401250383776710656&permissions=116737&scope=bot)  to add me to your Guilds' Server!")
        .addField
        ("Join b-1886!", "Click [this link](https://discord.gg/SG4bCd7) to join the B-1886 Community Server!")
        .setFooter
        ("1886 Community", "https://media.discordapp.net/attachments/401935441823006731/401945316066066433/nobackgroundnoglow.png?width=1277&height=1282")
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

