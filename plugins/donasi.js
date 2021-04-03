let handler = async m => m.reply(`
╭─「 Donasi • SpongeStar 」
│ • Gopay [081515860089]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
