const ENV_PORT: string = '3001'

export const SOCKET_TYPE = {
	UPDATE: 'update',
	RELOAD: 'reload',
}

const connet = () => {
	const ws = new WebSocket(`ws://${location.hostname}:${ENV_PORT}`)

	ws.onmessage = events => {
		const data = JSON.parse(events.data)
		switch (data.type) {
			case SOCKET_TYPE.UPDATE:
				console.log('更新代码')
				return
			case SOCKET_TYPE.RELOAD:
				console.log('重新加载')
				location.reload()
				return
		}
	}

	ws.onerror = () => {
		console.log('socket断开了')
		setTimeout(connet, 1000)
	}

	ws.onclose= () => {
		console.log('socket关闭了')
		setTimeout(connet, 1000)
	}
}

connet()