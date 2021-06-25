import { Client } from "discord.js";
import Command from "../command";

export default class UsersCommand implements Command {
    name;
    aliases;
    permissions;
    client: Client;
    devOnly;

    constructor(client: Client) {
        this.name = "users";
        this.aliases = [];
        this.permissions = [];
        this.client = client;
        this.devOnly = true;
    }

    run(message) {
        message.channel.send(`I currently have ${this.client.users.cache.size} users in cache`)        
    }

}