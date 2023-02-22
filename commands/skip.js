const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("da skip la cantecul actual"),
    execute: async ({client, interaction}) => {

        const queue = client.player.getQueue(interaction.guild);

        if (!queue) {
            await interaction.reply("Ai schizofrenie?");
            return;
        }

        const currentSong = queue.current;

        queue.skip();

        await interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription(`Urmatoru **${currentSong.title}**`)
                    .setThumbnail(currentSong.thumbnail)
                
            ]
        })
    }  
}