const fetch = require('node-fetch');

module.exports = async function(arg){
	if(!arg && !isNaN(arg)) throw Error ("logs.chat: exists method first argument must be a Chat ID");
	let data = await fetch(`https://logs.chat/api/chat/${arg}/exists`).then(res => res.json());
	return data;
}