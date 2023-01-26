import { Telegraf } from "telegraf";
import {BOT_TOKEN} from "./AppConfig";
import {getDocs} from "./api";
const app = require("express")();


const bot = new Telegraf(BOT_TOKEN);

const commands = '<b>Список команд:</b> \n/docst - Документация на Baikal T \n/docsm - Документация на Baikal M \n/docss - Документация на Baikal S \n/sdkarm - Ссылки на SDK-ARM64 \n/sdkmips - Ссылки на SDK-MIPS  \n/help - Список команд';
let number = 0;
bot.command('start', async(ctx) => {
    await ctx.replyWithHTML('<b>Привет!</b> \nЗдесь ты можешь найти ссылки на SDK и актуальную документацию по продуктам Baikal');
    await ctx.reply('👋');
    await ctx.replyWithHTML(commands);
})

bot.command('docsm', async (ctx) => {
    const model = 'M';
    const reply = await getDocs(model);
    // getDocs();
    for (let i = 0; i < reply.length; i++){
        ctx.replyWithHTML(reply[i]);
    }
    console.log(reply);

})

bot.command('docst', async (ctx) => {
    const model = 'T';
    const reply = await getDocs(model);
    // getDocs();
    for (let i = 0; i < reply.length; i++){
        ctx.replyWithHTML(reply[i]);
    }
    console.log(reply);
    //console.log(ctx.chat.first_name);

})

bot.command('docss', async (ctx) => {
    const model = 'S';
    const reply = await getDocs(model);
    // getDocs();
    for (let i = 0; i < reply.length; i++){
        ctx.replyWithHTML(reply[i]);
    }
    console.log(reply);
    //console.log(ctx.chat.first_name);

})

bot.command('sdkarm', async (ctx) => {
    const model = 'SDKARM';
    const reply = await getDocs(model);
    // getDocs();
    for (let i = 0; i < reply.length; i++){
        ctx.replyWithHTML(reply[i]);
    }
    console.log(reply);
    //console.log(ctx.chat.first_name);

})

bot.command('sdkmips', async (ctx) => {
    const model = 'SDKMIPS';
    const reply = await getDocs(model);
    // getDocs();
    for (let i = 0; i < reply.length; i++){
        ctx.replyWithHTML(reply[i]);
    }
    console.log(reply);
    //console.log(ctx.chat.first_name);

})

bot.command('help', async(ctx) => {
    await ctx.replyWithHTML(commands);
})


bot.launch();