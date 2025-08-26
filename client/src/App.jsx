
import  react from 'react'
import { useEffect } from 'react';
import {io} from 'socket.io-client'

const App=()=>{

//ab hme ek connection banana hoga server se
const socket = io("http://localhost:3000");


useEffect(()=>{
  //jab bhi connection hoga to ye event call hoga
  socket.on('connect',()=>{
    console.log("connected to server");
    console.log("socket id:-1",socket.id);
  })    
},[]);
};
export default App;