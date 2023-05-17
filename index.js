require("dotenv").config()
const express=require("express")
app=express()
const TelegramBot = require('node-telegram-bot-api');
const token=process.env.BOT_TOKEN;


app.use(express.static("./public"))



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

    bot.sendMessage(msg.chat.id,"courses available",{
        "reply_markup":{
   "keyboard":[["Python"],["html/css"],["Javascript"],["Python for Machine Learning"],["Javascript for frontend"],["git"],["Linux/Unix"]]
        }
    })
}

if (msg.text.toString().toLowerCase().indexOf("status") === 0) {
bot.sendMessage(msg.chat.id,"status");
}


if (msg.text.toString().toLowerCase().indexOf("git") === 0 || msg.text.toString().toLowerCase().indexOf("Linux/Unix") === 0 ) {
bot.sendMessage(msg.chat.id,"https://t.me/+eb360SlsDkFjYmY0");
}

if (msg.text.toString().toLowerCase().indexOf("Javascript") === 0 || msg.text.toString().toLowerCase().indexOf("Javascript for frontend") === 0 ) {
bot.sendMessage(msg.chat.id,"https://t.me/+9m5HeT6FzhRhMGVk");
}

if (msg.text.toString().toLowerCase().indexOf("html/css") === 0) {
bot.sendMessage(msg.chat.id,"https://t.me/+QX9-Y_DZzCExNmVk");
}

if (msg.text.toString().toLowerCase().indexOf("Python") === 0 || msg.text.toString().toLowerCase().indexOf("Python for Machine Learning") === 0 ) {
bot.sendMessage(msg.chat.id,"https://t.me/+DLuvA3c5p0YxMDI0");
}

});





app.listen(process.env.PORT || 8000,()=>{
    console.log("server is runing")
})
