const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()


const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))


const channelUsername = '@makhmuddebtestbot';

// Command to post a message to the channel
bot.command('post', async (ctx) => {
  const buttons = Markup.inlineKeyboard([
    Markup.button.url('Open Telegraph Post', 'google.com'),
    Markup.button.callback('Click Me', 'button_clicked'),
  ]);

  // Send a post with buttons
  ctx.telegram.sendMessage(channelUsername, 'Check out our Telegraph post!', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'Like', url: 'google.com' },
          // { text: 'Dislike', callback_data: 'dislike' }
        ]
      
      ]
    }
}
)});


bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

