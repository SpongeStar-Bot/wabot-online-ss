let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(rules|peraturan)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.rules = text
      conn.reply(m.chat, 'Rules berhasil diatur\n' + info, m)
    } else {
      conn.rules = {}
      conn.reply(m.chat, 'Rules direset', m)
    }
  } else {
    conn.rules = typeof conn.rules == 'object' ? conn.rules : {}
    if (text) {
      conn.rules[type] = text
      conn.reply(m.chat, 'Rules ' + type + ' berhasil diatur\n' + info, m)
    } else {
      delete conn.rules[type]
      conn.reply(m.chat, 'Rules ' + type + ' direset', m)
    }
  }
}
handler.help = ['', 'befores','afters'].map(v => 'setrules' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(rules|peraturan)(befores|afters)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
okeys
`.trim()
