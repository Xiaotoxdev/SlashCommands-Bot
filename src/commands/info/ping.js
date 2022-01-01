const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, client } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription('Replies with pong !'),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setDescription(`pong`)
        await interaction.reply({embeds: [embed]})
    }
}