import { Client, Message } from "discord.js";

export default interface Command {
    name: string;
    aliases: string[];
    permissions: string[];
    client: Client;

    run(message: Message):void;
}