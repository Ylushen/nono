const ENV_PORT: string = ''

const connet = () => {
	const ws = new Websocket(`ws://${location.hostname}:${ENV_PORT}`)
}

