const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("resume")
        .setDescription("resume"),
    execute: async ({client, interaction}) => {

        const queue = client.player.getQueue(interaction.guild);

        if (!queue) {
            await interaction.reply("Nu ai la ce");
            return;
        }

        queue.setPaused(false);

        await interaction.reply("HAIDEEE")
    }  
}