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
handler.help = ['', 'before','after'].map(v => 'setrules' + v + ' <teks>')
handler.tags = ['owner']
handler.command = /^set(rules|peraturan)(before|after)?$/i
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
Universal:
%% (%)
%p (Prefix)
%exp (Exp)
%limit (Limit)
%name (Nama)
%weton (Weton Hari ini)
%week (Hari)
%date (Tanggal)
%time (Jam)
%uptime (Uptime Bot)
%totalreg (Jumlah User yang ada di database)
%npmname
%npmdesc
%version
%github

Bagian Menu Header & Footer:
%category (Kategori)

Bagian Menu Body:
%cmd (Command)
%islimit (Jika command di limit)
`.trim()
