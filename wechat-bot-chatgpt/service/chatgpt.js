/**
 * Author: johnson
 * Date: 2022/12/9
 * Desc: chatgpt 库
 **/
const config = require("../config")
let chatApi = null;

async function init() {
    const { ChatGPTAPI } = await import('chatgpt')
    // sessionToken is required; see below for details
    const api = new ChatGPTAPI({
        sessionToken: config.SessionToken
    })

    // ensure the API is properly authenticated
    await api.ensureAuth()

    chatApi = api;
}

async function sendMsg(text){
    // send a message and wait for the response
    if(!chatApi){
        return;
    }
    const response = await chatApi.sendMessage(text)
    return response;
}

init().then( async () => {
    console.log("初始化ChatGpt成功")
})


exports.sendMsg = sendMsg;