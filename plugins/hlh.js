let handler = async (m, { command, text }) => {
  let ter = command[1].toLowerCase()
  let txt = m.quoted ? m.quoted.text ? m.quoted.text : text ? text : m.text : text ? text : m.text
  await conn.reply(m.chat, txt.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()), m)
}
handler.help = [...'aiueo'].map(v => `h${v}l${v}h *<teks>*`)
handler.tags = ['fun']
handler.command = /^h([aiueo])l\1h/i
handler.limit = true

module.exports = handler
