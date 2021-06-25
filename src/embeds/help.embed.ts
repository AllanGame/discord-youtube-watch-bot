import { MessageEmbed } from "discord.js";
import * as config from '../../config.json';

const helpEmbed = new MessageEmbed()
.setTitle("Watch YouTube Help")
.setDescription("Discord has enabled a function that allows you to watch YouTube videos on this platform, for this you need a voice channel and friends, Just kidding, you can watch videos alone but we recommend you to find friends to watch funny videos and have a good afternoon")
.addField("Does this work on mobile?", "No, for now you only can watch videos on Desktop")
.addField("How do i set a channel to view videos?", `You can copy the ID of that channel and do \`${config.prefix}watch <id>\`, or mention that channel using \`#!VoiceChannel\` it's very important the \`!\` because that is how you mention a voice channel`)
.setColor("RED");

export default helpEmbed