import { Telegraf, Markup } from "telegraf";

const token = '7624930736:AAEyan1uww8n920ALJunVM080f7BfJfDFzQ';
const webAppUrl = 'https://likelizzard.web.app/';

const bot = new Telegraf(token);

bot.command('start', ctx => {
    ctx.reply(`${webAppUrl}?ref=${ctx.payload}`, Markup.inlineKeyboard([
        Markup.button.webApp(
            'open mini app',
            `${webAppUrl}?ref=${ctx.payload}`
        )
    ]))
});
bot.launch();