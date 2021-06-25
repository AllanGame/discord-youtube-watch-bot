import { Client, GuildChannel, MessageEmbed } from "discord.js";
const client = new Client();

import * as dotenv from "dotenv";
dotenv.config();

import * as config from '../config.json';
import Command from "./commands/command";
import HelpCommand from "./commands/summary/help.command";
import InviteCommand from "./commands/summary/invite.command";
import SupportCommand from "./commands/summary/support.command";
import WatchCommand from "./commands/summary/watch.command";
import helpEmbed from "./embeds/help.embed";


client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log("logged in as " + client.user.tag);
    client.user.setActivity({
        type: "WATCHING",
        name: "YouTube | Ping me!"
    })
})
    // register commands
    const commandRegistry: Map<String, Command> = new Map();
    const commands: Command[] = [
        new WatchCommand(client),
        new InviteCommand(client),
        new HelpCommand(client),
        new SupportCommand(client),
    ]
    
    commands.forEach(command => {
        commandRegistry.set(command.name, command);
        console.log(`Registering command ${command.name}`)
    })

client.on('message', (message) => {
    if(message.author.bot || !message.guild) {
        return;
    }

    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        message.channel.send(helpEmbed);
    }

    if (message.content.indexOf(config.prefix) !== 0) {
        return;
    }

    const args = message.content.slice(config.prefix.length).trim().split(" ");
    const label = args.shift().toLowerCase();
    const command = commandRegistry.get(label);
    if(!command) {
        return;
    } 
    if(command.devOnly && 
        !config.developers
        .includes(message.author.id)) return; 
    command.run(message);

})

