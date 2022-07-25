let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
    if (m.text.includes(thisGroup)) throw false // jika link grup itu sendiri gak dikick
      if (!isBotAdmin) m.reply(` *「 ANTILINK 」* ${isAdmin ? "𝖮𝗁 𝖠𝖽𝗆𝗂𝗇 𝗋𝗎𝗉𝖺𝗇𝗒𝖺 :'v" : `\n\nlink group terdeteksi dan ${global.namabot} bukan admin jadi tidak bisa ngekick!`}`)
    if (isBotAdmin) {
      m.reply(` *「 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 𝙒𝙆𝙒𝙆 」* \n\n𝘓𝘪𝘯𝘬 𝘨𝘳𝘶𝘱 𝘵𝘳𝘥𝘦𝘵𝘦𝘬𝘴𝘪,𝘮𝘢𝘢𝘧,𝘜𝘯𝘪 𝘢𝘬𝘢𝘯 𝘮𝘦𝘯𝘨𝘦𝘭𝘶𝘢𝘳𝘬𝘢𝘯𝘮𝘶!!`.trim())
      await this.delay(500)
      await this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
    }
  }
  return true
}

module.exports = handler
