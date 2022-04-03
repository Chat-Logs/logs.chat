const fetch = require('node-fetch');

module.exports = async function(arg){
	if(!arg && !isNaN(arg)) throw Error ("logs.chat: get method first argument must be a Chat ID");
	let data = await fetch(`https://logs.chat/api/chat/${arg}`).then(res => res.json());
	if(data.error) return false;
	return data.chat;
}