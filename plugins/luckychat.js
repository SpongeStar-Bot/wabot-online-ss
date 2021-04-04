let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*✧Selamat!◈ Anda mendapatkan❥* ${pickRandom(['baju','celana','Kaos kaki','Topi','Uang 100rb','Uang 50rb','Uang 20rb','Uang 10rb','Uang 5rb','Uang 2rb','Uang 1rb','Mesin cuci','Motor','Mobil','Sepeda','Loli','Perempuan','Laki Laki','Husbu','Waifu','Ibu baru','Ayah baru','Kucing','Anjing','Kuda','Sapi','Serigala','Singa','Beruang','Panda','Kelelawar','Burung Puyuh','Ayam','Burung Elang','Burung kakak tua','Burung Merpati','Naga','Gorilla','Monyet','Kadal','Cicak','Kecoa','Semut','Domba','Kambing','Kerbau','Banteng','Bison','Komodo','Ikan hiu','Ikan emas','Ikan mujaer','Ikan gabus','Ikan pari','Ikan cupang','Ikan teri','Ikan tongkol','Ikan arwana','Ikan lele','Ikan sapu sapu','Ikan koi','Paus biru','Paus pembunuh','Lumba lumba','Ubur ubur','Kepiting','Bulu babi','Babi','Bunglon','Iguana','Biawak','Ular','Belut','Belatung','Roti lapis','Salad','Burger','Hotdog','Kebab','Nasi goreng','Nasi kuning','Nasi uduk','Donat','Lemper','Ketoprak','pecel','Ayam goreng','Lemari','Lampu','Meja','Kipas','Kursi','Sofa','Ubin','Tembok','Rumah','Gedung','Aquarium','Taperwere','Sisir','Karang','Patung','Lukisan','Casan','Handspree','Headset','Sepatu','Sarung tangan','Masker','Kacamata','Rambut palsu','Kayu','Batu','Air','Kompor','Galon','Radio','Botol','Handphone','Komputer','Laptop','Helm','Teqo','Gelas','Piring','Sabun','Shampoo','Bantal','Kipas','Ac','Rumah'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['luckychat']
handler.tags = ['game']
handler.command = /^luckychat/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

