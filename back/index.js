const http = require('http')
const {Server}=require('socket.io');

const app=require('./app')

const port=8888;
const server=http.createServer(app);
const io=new Server(server,{
    cors: {
        origin: "*"
        //origin: "http://localhost:3000"
    }
});

io.on('connection',(socket)=>{
    console.log('a user is connected');
    socket.on('message',(msg)=>{
        console.log(msg)
        console.log(`sender: ${msg.name}, new message: ${msg.text}`);
        socket.broadcast.emit('response',msg);
        //io.emit('response',msg);
    })
})

server.listen(port)
.on('listening',()=>{
    console.log(`server running on http://127.0.0.1:${port}`)
})
.on('error',(err)=>{
    console.log(`Error: \n${err}\n`);
    process.exit(1);
})
