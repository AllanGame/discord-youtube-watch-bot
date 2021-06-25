import { Client, Message } from "discord.js";
import helpEmbed from "../../embeds/help.embed";
import Command from "../command";

export default class HelpCommand implements Command {
    name;
    aliases;
    permissions;
    client;

    constructor(client: Client) {
        this.name = "help";
        this.aliases = ["ayuda", "commands", "comandos", "faq"];
        this.permissions = [];
        this.client = client;
    }

    run(message) {
        message.channel.send(helpEmbed)
    }

}