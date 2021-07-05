import * as WebSocket from 'ws'

export interface socket { wss: any, close: Function, sendMessage: Function }

export const createServer = (port: number): socket  => {
	const wss = new WebSocket.Server({
		port: port || 3000,
		perMessageDeflate: {
			zlibDeflateOptions: {
				// See zlib defaults.
				chunkSize: 1024,
				memLevel: 7,
				level: 3
			},
			zlibInflateOptions: {
				chunkSize: 10 * 1024
			},
			// Other options settable:
			clientNoContextTakeover: true, // Defaults to negotiated value.
			serverNoContextTakeover: true, // Defaults to negotiated value.
			serverMaxWindowBits: 10, // Defaults to negotiated value.
			// Below options specified as default values.
			concurrencyLimit: 10, // Limits zlib concurrency for perf.
			threshold: 1024 // Size (in bytes) below which messages
			// should not be compressed.
		}
	});


	wss.on('connection', function connection(ws) {
		ws.on('message', function incoming(message) {
			console.log('received: %s', message);
		});

		ws.send('something');
	});

	wss.on('listening', () => {
		console.log('socket ready')
	})

	const close = () => {
		wss.close()
	}

	const sendMessage = (message) => {
		wss.clients.forEach(ws => {
			if (ws.isActive === false) return ws.terminate()
			ws.send(message)
		})
	}

	return { wss, close, sendMessage }
}

export default createServer