// src/main.js
import { createServer, socket } from './server';

export const SOCKET_TYPE = {
	UPDATE: 'update',
	RELOAD: 'reload',
}

const { close, sendMessage, wss } : socket = createServer(3001)

setInterval(() => {
	sendMessage(JSON.stringify({
		type: SOCKET_TYPE.UPDATE,
	}))
}, 3000)