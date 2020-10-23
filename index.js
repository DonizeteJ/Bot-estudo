// https://discord.js.org/#/docs/main/stable/general/welcome

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json');

client.login(config.token);

client.on('ready', () => {
    console.log('Bot Ligado!!');
})

client.on('message', message => {
    if (message.author.bot) return
    if(!message.content.startsWith(config.prefix)) return
    
    var args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    var comando = args[0].toLowerCase()
    args.shift()
    var argumento =  args.join(' ')

    if(!comandos[comando]) return

    var fazer = comandos[comando]
    var resposta = fazer(message, args, argumento)

    if(!resposta) return
    message.channel.send(resposta)
})

//args: abertura,fatima,bernardes
//argumento: abertura fatima bernardes
var comandos = {
    ping(message, args, argumento){
        pingz(message)
    },
    pena(message, args, argumento){
        message.channel.send(`<@${message.author.id}> Gay!`)
        return '<@299330584164171777> te chamou de gay aqui ó! se fosse eu, eu nn deixava!'
    }
}

async function pingz(message) {
    const m = await message.channel.send("Ping?")
    m.edit(`Pong! A Latencia é ${m.createdTimestamp - message.createdTimestamp}ms.`)
}