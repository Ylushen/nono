const ENV_PORT: string = '3001'

export const SOCKET_TYPE = {
	UPDATE: 'update',
	RELOAD: 'reload',
}

const connet = () => {
	const ws = new WebSocket(`ws://${location.hostname}:${ENV_PORT}`)

	ws.onmessage = events => {
		console.log(events)
		switch (events.data) {
			case 'upload':
		}
	}
}

connet()