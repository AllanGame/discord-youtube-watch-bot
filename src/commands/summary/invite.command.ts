import { Client, Message } from "discord.js";
import Command from "../command";
import * as config from '../../../config.json';

export default class InviteCommand implements Command {
    name;
    aliases;
    permissions;
    client;

    constructor(client: Client) {
        this.name = "invite"
        this.aliases = [];
        this.permissions = [];
        this.client = client;
    }

    run(message): void {
        message.channel.send("You can invite me to another server with this invite: " + config.invite)
    }
    
}