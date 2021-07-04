import * as http from 'http';
const server = http.createServer();
server.on('connect', event => {
    console.log(event);
});
server.on('request', event => {
    console.log(event);
});
server.listen(9999);
export default server;
