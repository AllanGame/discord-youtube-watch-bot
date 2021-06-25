import { Client, Message } from "discord.js";
import helpEmbed from "../../embeds/help.embed";
import Command from "../command";

export default class HelpCommand implements Command {
    name;
    aliases;
    permissions;
    client;
    devOnly;

    constructor(client: Client) {
        this.name = "help";
        this.aliases = ["ayuda", "commands", "comandos", "faq"];
        this.permissions = [];
        this.client = client;
        this.devOnly = false;
    }

    run(message) {
        message.channel.send(helpEmbed)
    }

}