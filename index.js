const axios = require('axios')
const Telegraf = require('telegraf')
const TOKENS = require('./api/telegram')
const URLS = require('./api/swpcnoaagov')

// console.log(TOKENS.telegramBotAPI)
const bot = new Telegraf(TOKENS.telegramBotAPI)
bot.start((ctx) => ctx.reply('Нопешы data'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('data', async (ctx) => {
  const data = await getdata()
  ctx.reply(data)
})
bot.launch()


const getdata = async () => {
  try {
    const response = await axios.get(`${URLS.mag1day}`)
    // console.log(response.data[1])
    return response.data[2]
  } catch (error) {
    console.error(error);
  }
}
getdata()