const Botkit = require("botkit");
const bot = Botkit.slackbot({
    debug: true
    clientSigningSecret: "token"
});

bot.spawn({token: "token"}).startRTM();
//bot.spawn().startRTM();

bot.hears("(.*)",["ambient","mention"], (bot, message) => {
    bot.reply(message, message.text);
});
