let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await m.reply('Byeee kak...', m.chat) 
        await  conn.groupLeave(group)
        }
handler.help = ['leavegc', 'out']
handler.tags = ['owner']
handler.command = /^(out|leavegc)$/i

handler.rowner = true

module.exports = handler
