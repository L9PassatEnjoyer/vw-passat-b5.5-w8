const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pauza")
        .setDescription("dai pauza la muzica"),
    execute: async ({client, interaction}) => {

        const queue = client.player.getQueue(interaction.guild);

        if (!queue) {
            await interaction.reply("Nu ai la ce sa dai pauza");
            return;
        }

        queue.setPaused(true);

        await interaction.reply("STOP")
    }  
}