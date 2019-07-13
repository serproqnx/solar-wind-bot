const axios = require('axios')
const Telegraf = require('telegraf')
const TOKENS = require('./api/telegram')
const URLS = require('./api/swpcnoaagov')

const bot = new Telegraf(TOKENS.telegramBotAPI)

bot.start((ctx) => ctx.reply('type data'))
bot.hears('data', async (ctx) => {
  const data = await getdata()
  ctx.reply(data)
})
bot.launch()


const getdata = async () => {
  try {
    const response = await axios.get(`${URLS.mag1day}`)
    return response.data[2]
  } catch (error) {
    console.error(error);
  }
}