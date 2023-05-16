require("dotenv").config()

const TelegramBot = require('node-telegram-bot-api');
const token=process.env.BOT_TOKEN;


const bot = new TelegramBot(token, {polling: true});



bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id,"welcome",{
"reply_markup": {
    "keyboard": [["join group"],["invite friends"],["courses"],["status"]]
    }
});

});


bot.on('message', (msg) => {

if (msg.text.toString().toLowerCase().indexOf("join group") === 0) {
bot.sendMessage(msg.chat.id,"join group");
}

if (msg.text.toString().toLowerCase().indexOf("invite friends") === 0) {
bot.sendMessage(msg.chat.id,"join group");
}

if (msg.text.toString().toLowerCase().indexOf("courses") === 0) {
bot.sendMessage(msg.chat.id,"join group");
}

if (msg.text.toString().toLowerCase().indexOf("status") === 0) {
bot.sendMessage(msg.chat.id,"status");
}

});

