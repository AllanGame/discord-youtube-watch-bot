import { Client, Message } from "discord.js";
import Command from "../command";
import * as config from '../../../config.json';

export default class SupportCommand implements Command {
    name;
    aliases;
    permissions;
    client;
    
    constructor(client: Client) {
        this.name = "support";
        this.aliases = ["soporte", "server"];
        this.permissions = [];
        this.client = client;
    }
    
    run(message: Message): void {
        message.channel.send("Join the support server! " + config.support_server_invite)
    }

}