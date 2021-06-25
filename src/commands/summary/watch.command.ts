import { Client, GuildChannel, Message, MessageEmbed } from "discord.js";
import * as config from '../../../config.json';
import fetch from "node-fetch";
import command from "../command";

export default class WatchCommand implements command {
    name;
    aliases;
    permissions;
    client;

    constructor(client: Client) {
        this.name = "watch";
        this.aliases = ["view", "youtube"];
        this.permissions = [];
        this.client = client;
    }

    run(message): void {

        const args = message.content.slice(config.prefix.length).trim().split(" ");
        const cmd = args.shift().toLowerCase();
        
        const channel:GuildChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

            if(!channel || channel.type !== "voice") {
                message.channel.send("Invalid channel!");
                return;
            }
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                method: "POST",
                body: JSON.stringify({
                    max_age: 7200, // time in seconds, 7200 = 2 hours
                    max_uses: 0,
                    target_application_id: config.YOUTUBE_TOGETHER_APPLICATION,
                    target_type: 2,
                    temporary: false,
                    validate: null
                }),
                headers: {
                    "Authorization": `Bot ${this.client.token}`,
                    "Content-Type": "application/json"
                }
            })
            .then(res => res.json())
            .then(invite => {
                console.log(invite)
                if(invite.error || !invite.code) {
                    message.channel.send("An error has ocurred, try this command later or contact a bot developer to get help.");
                    return;
                }
        
                message.channel.send(new MessageEmbed()
                .setTitle("Done!")
                .setDescription(`Click [here to view](https://discord.gg/${invite.code}) \n if you want to share this with a friend use this invite: https://discord.gg/${invite.code}`));
          
            })
            .catch(() => {
                message.channel.send("An error has ocurred, try this command later or contact a bot developer to get help.");
            })
    }
}