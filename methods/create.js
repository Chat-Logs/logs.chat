const fetch = require('node-fetch');

module.exports = async function(arg){
	if(!arg) throw Error ("logs.chat: create method first argument must be an array of messages contains atleast 1 message");
	let data = await fetch("https://logs.chat/api/chat", {
		method: "POST",
		body: JSON.stringify({"messages": arg}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res => res.json());
	if(data.error){
		throw Error(data.message);
	}else{
		return data;
	}
}