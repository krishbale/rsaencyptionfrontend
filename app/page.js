"use client"
import { useState } from "react";

import axios from "axios";
import  rsaencrypt  from './rsa';
export default function Home() {
  const [message, setMessage] = useState('');
  const [publickey,setpublickeys] = useState('');
  const getpublickeys = () => {
        axios.get('/getkeys',{
        }).then((response) =>{
          // console.log(response.data.package)
          setpublickeys(response.data.package)
          console.log(publickey);
          
          
        }).catch((error) => {
          console.error(error)
        })
      }

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  
  function sendMessage(){
    const encryptedmessage =  rsaencrypt(publickey,message);
    console.log(`Encryted message before sending to server : ${encryptedmessage}`)
    axios.post('/sendmessagewithrsa', { data:encryptedmessage} )
    .then((response) => {
      
      console.log(response.data)
    })
    .catch((error) => {
      // Handle error
      console.error(error);
    });
  } 

  return (
   
       <div>

<button
 onClick={getpublickeys}
>Get my public keys</button>

<input type="text" 
value={message} 
onChange={handleMessageChange}
 />
<button
 onClick={sendMessage}
 >Send</button>
</div>

    
  )
}
