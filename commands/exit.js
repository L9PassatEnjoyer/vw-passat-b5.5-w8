const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("exit")
        .setDescription("exit"),
    execute: async ({client, interaction}) => {

        const queue = client.player.getQueue(interaction.guild);

        if (!queue) {
            await interaction.reply("Ce ai ma?");
            return;
        }

        queue.destroy();

        await interaction.reply("Te pwp")
    }  
}