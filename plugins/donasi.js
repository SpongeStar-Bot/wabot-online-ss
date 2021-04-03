let handler = async m => m.reply(`
╭─「 Donasi • SpongeStar 」
│ • Gopay []
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
