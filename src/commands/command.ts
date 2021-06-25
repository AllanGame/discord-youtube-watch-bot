import { Client, Message } from "discord.js";

export default interface command {
    name: string;
    aliases: string[];
    permissions: string[];
    client: Client;

    run(message: Message):void;
}