module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if(!interaction.isCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if(!command) return;
        try {
            await command.execute(client, interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "Il y a eu une erreur lors de l'exécution de cette command !",
                ephemeral: true
            })
        }
    }
}