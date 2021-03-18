const readline = require ("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})


const Chalk = require ("chalk");

const figlet = require('figlet');
 
figlet('hey', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(Chalk.grey(data))


console.log(Chalk.yellow("credit"))

console.log(Chalk.blue("créateur NoHoX"))

console.log(Chalk.blue("discord: NoHoX_nhx#0001"))

console.log(Chalk.red("Youtube: NoHoX_nhx"))

console.log(Chalk.blueBright("Twitter: NoHoX_nhx"))

console.log(Chalk.white("lunche bot= 1"))

rl.question('selct your number : ',(reponse) => {
if (reponse === "1"){
    bot.login(token)
}
})
});

const Discord = require("discord.js");

const bot = new Discord.Client();


const token = require ("./config.json").token
const image    = "https://cdn.discordapp.com/attachments/769538047372951563/821809612914688060/NoHox.png"
const prefix   = "!"
const color    = "#00FFEC"


bot.on('ready', () => {
    console.log("ready")
});

bot.on('message', message => {
    if(message.author.id === bot.user.id){




















if(message.content.startsWith(prefix + "hey")){
message.delete()
message.channel.send("yoche les gens :)")
}





if(message.content.startsWith(prefix + "help")){
message.delete()
const embed = new Discord.RichEmbed()
.setColor(color)
.setTitle("MENU HELP")
.setDescription("c'est le menu help regardez !!")
.addField("hey", "bah ta pas le droit de le dire")
.addField("fun", "toute les commande fun")
.addField("spam", "vazy écrit")
.addField("ddos", "the best ddos")
.addField("credit", "credit")
.setImage(image)
.setFooter('by the best NoHoX_nhx')
message.channel.send(embed)
}





if(message.content.startsWith(prefix + "fun")){
    message.delete()
    const embed = new Discord.RichEmbed()  
    .setColor(color)
.setTitle("MENU FUN")
.setDescription("c'est le menu fun regardez !!")
.addField("EZlesMamies", "ez les gens")
.setImage(image)
.setFooter('lol ces fun')
message.channel.send(embed)
}

if(message.content.startsWith(prefix + "ezlesmamies")){
    message.delete()
    const embed = new Discord.RichEmbed()
    .setColor(color)
.setTitle("MENU EZ")
.setDescription("EZ gang bang")
.addField("EZ")
.setFooter('EZ EZ EZ EZ')
message.channel.send(embed)
}


if(message.content.startsWith(prefix + "ddos")){
    message.delete()
    message.channel.send("!1%")
    }

    if(message.content.startsWith(prefix + "1%")){
        message.delete()
        message.channel.send("!10%")
        }

        if(message.content.startsWith(prefix + "10%")){
            message.delete()
            message.channel.send("!30%")
            }

            if(message.content.startsWith(prefix + "30%")){
                message.delete()
                message.channel.send("!50%")
                }

                if(message.content.startsWith(prefix + "50%")){
                    message.delete()
                    message.channel.send("!80%")
                    }

                    if(message.content.startsWith(prefix + "80%")){
                        message.delete()
                        message.channel.send("!90%")
                        }

                        if(message.content.startsWith(prefix + "90%")){
                            message.delete()
                            message.channel.send("!99%")
                            }

                            if(message.content.startsWith(prefix + "99%")){
                                message.delete()
                                message.channel.send("!100%")
                                }

                                if(message.content.startsWith(prefix + "100%")){
                                    message.channel.send("you are trolled")
                                    }




if(message.content.startsWith(prefix + "spam")){
    message.delete()
    const embed = new Discord.RichEmbed()  
    .setColor(color)
.setTitle("MENU SPAM")
.setDescription("c'est le menu spam regardez !!")
.addField("aller", "bah sa fait spam le bot")
.addField("stop" , "stop le bot")
.setImage(image)
.setFooter('fait pas troups de bétise')
message.channel.send(embed)
}






if(message.content.startsWith(prefix + "aller")){
    message.delete()
    const embed = new Discord.RichEmbed()  
    .setColor(color)
.setTitle("MENU ALLER")
.setDescription("c'est le menu aller regardez !!")
.addField("yes or no", "continue stp")
.setFooter('aller dis yes on va rigoller')
message.channel.send(embed)
}







if(message.content.startsWith(prefix + "yes")){
    message.delete()
    var embed = new Discord.RichEmbed()
    .setColor(color)
.setTitle("MENU YES")
.setDescription("aller c'est parti!!")
.addField("1...2...3", "go go go")
.setFooter("gg tu a bien fait")
message.channel.send(embed)
message.channel.send("za wurdo")
message.channel.send("za wurdo")
message.channel.send("za wurdo")
message.channel.send("za wurdo")
message.channel.send("za wurdo")
message.channel.send("za wurdo")
}






if(message.content.startsWith(prefix + "no")){
    message.delete()
    const embed = new Discord.RichEmbed()
    .setColor(color)
.setTitle("MENU NO")
.setDescription("au non...")
.addField("mince")
.setFooter("l'aisse tombé")
message.channel.send(embed)
}

if(message.content.startsWith(prefix +"credit")){
    message.delete()
    const embed = new Discord.RichEmbed()
    .setColor(color)
.setTitle("MENU YTB")
.setDescription("by the creator")
.addField("BY NoHoX_nhx", "By the best")
.setImage(image)
.setFooter("YTB chanel")
message.channel.send(embed)
}







if(message.content.includes("<@" + bot.user.id + ">")){
message.channel.send("wshhhh me ping pas !! tu t'es cru ou toi ??")
}






























//tu touche plus rien a partir de la 
    }
});
