const { Client, Attachment } = require('discord.js');
const botSettings = require("./botsetings.json");
const prefix = botSettings.prefix;

const client = new Client();

client.on('message', msg => {
  if (msg.author.bot) return;

  let messageArray = msg.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;
  // const guildTag = msg.channel.type === 'text' ? `[${msg.guild.name}]` : '[DM]';
  // const channelTag = msg.channel.type === 'text' ? `[#${msg.channel.name}]` : '';
  // console.log(`${guildTag}${channelTag} ${msg.author.tag}: ${msg.content}`);

  if(command == `${prefix}연결`){
    if (msg.member.voiceChannel) {
    msg.member.voiceChannel.join()
    .then(connection => {
      msg.reply(`연결됨`);
    }).catch(console.log);
    } else {
      msg.reply(`error : 보이스채널에 없음`);
    }
  }
  if(command == `${prefix}나가`){
    msg.author.bot.voiceChannel.disconnect();
  }
  
  if(command == `${prefix}이동`){
    const channel = msg.guild.channels.find('name', 'voicechannel')
    msg.member.setVoiceChannel(channel)
    msg.reply(`이동됨`);
  }
  if(command == `${prefix}테스트`){
    //msg.author : 이름언급
    //파일전송
    // const fs = require('fs');
    // const buffer = fs.readFileSync('./memes.txt');
    // const attachment = new Attachment(buffer, 'memes.txt');
    //msg.reply(attachment);
    
  }
  
});

client.login(botSettings.token);
