// src/main.js
import { createServer, socket } from './server';

const SOCKET_TYPE = {
	UPDATE: 'update',
	RELOAD: 'reload',
}

const { close, sendMessage, wss } : socket = createServer(3000)

setTimeout(() => {
	sendMessage(JSON.stringify({
		type: SOCKET_TYPE.UPDATE,
	}))
}, 3000)