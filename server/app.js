import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!');                 
});

//ab ek new server start karenge
const server =createServer(app);

//ap server create kr liya hi to ek connection etablish krna hoga
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"]
    }   
});
app.use(cors());

io.on('connection', (socket) => {
    //iske ander jo socket hi hi wo indiuvidual client ko represent krta h
    //yha pr bhi event apne bahut sare bana skte hi 
    console.log('a user connected');
    console.log("socket.id:-1",socket.id);
})


//yha pr app .lissten nhi kr rha hoga balki ab server .listen kr rha hoga kyuki app.listen se wo http server start hoga na ki socket io server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 
