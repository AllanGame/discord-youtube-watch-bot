import { Client } from "discord.js";
import Command from "../command";

export default class GuildsCommand implements Command {
    name;
    aliases;
    permissions;
    client: Client;
    devOnly;

    constructor(client: Client) {
        this.name = "guilds";
        this.aliases = [];
        this.permissions = [];
        this.client = client;
        this.devOnly = true;
    }

    run(message) {
        message.channel.send(`I currently have ${this.client.guilds.cache.size} guilds in cache`)        
    }

}