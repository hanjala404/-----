const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
‎┌────────────────────────┐
‎│   ┌───────────────┐         
‎│   🌼𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢🌼
‎│   └───────────────┘                      
‎│┌───────────────┐                                                        
‎│ ηαмє : 🅷🅰🅽🅹🅰🅻🅰                                                           
‎│└───────────────┘                                                         
‎│┌───────────────┐                                                        
‎│ ɢᴇɴᴅᴇʀ : 🅼🅰🅻🅴                                                                    
‎│└───────────────┘                                                     
‎│┌───────────────┐                                                         
‎│ ʀᴇʟᴀᴛɪᴏɴ : 🅼🅰🆁🆁🅸🅴🅳                                                            
‎│└───────────────┘                                                         
‎│┌───────────────┐                                                    
‎│  ᴀɢᴇ : ②⓪                                                             
‎│└───────────────┘                                                      
‎│┌───────────────┐                                                          
‎│ ʀᴇʟɪɢɪᴏɴ :🅸🆂🅻🅰🅼                                                              
‎│└───────────────┘                                               
‎│┌──────────────────┐                                                 
‎│ ᴇᴅᴜᴄᴀᴛɪᴏɴ : 🆂🆃🆄🅳🅴🅽🆃🆂                                                            
‎│└──────────────────┘                                      
‎│┌─────────────────┐                                                   
‎│ ᴀᴅᴅʀᴇꜱꜱ : ᴋᴜʟɴᴀ.ʙᴀɴɢʟᴀᴅᴇꜱʜ                                                    
‎│└─────────────────┘                                                
‎└─────────────────────────┘
‎┌─────────────────────────┐
‎│    ┌───────────┐                                                       
‎│     𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦                                                             
‎│    └───────────┘                                                         
‎│┌───────────────┐                                                      
‎│ ᴛɪᴋᴛᴏᴋ ❥─🦋 to_love123                                                       
‎│└───────────────┘     
‎│┌────────────────────────┐
‎│  ᴍᴇꜱꜱᴇɴɢᴇʀ : m.me/100087468194829
‎│└────────────────────────┘
‎│┌──────────────────────────┐
‎│ ᴡʜᴀᴛꜱᴀᴘᴘ : https://wa.me/+8801972446473
‎│└──────────────────────────┘                    
‎│┌───────────────┐                                                     
‎│ ꜰᴀᴄᴇʙᴏᴏᴋ ❥─🦋                                                                        │https://www.facebook.com/100087468194829      └────────────────┘                            
‎└───────────────────────────┘
‎┌──────────────────────────────┐
‎ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
‎└──────────────────────────────┘
‎
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://graph.facebook.com/100087468194829/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
        
