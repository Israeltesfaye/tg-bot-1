require("dotenv").config()
const express=require("express")
app=express()
const TelegramBot = require('node-telegram-bot-api');
const token=process.env.BOT_TOKEN;



app.get('/join',(req,res)=>{
    res.send("join")
})

const bot = new TelegramBot(token, {polling: true});



bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id,"welcome",{
"reply_markup": {
    "keyboard": [["join group"],["invite friends"],["courses"],["status"]]
    }
});

});


bot.on('message', (msg) => {

//main keywords
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





app.listen(process.env.PORT || 8000,()=>{
    console.log("server is runing")
})
