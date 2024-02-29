import React from 'react'
import { useState, useEffect} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'primeicons/primeicons.css';

export default function Inputs() {
  

// this is pars of the open ai api
  const[ value, setValue] = useState(null)
  const[ message, setMessage] = useState(null)
  const[ previousChats, setPreviousChats] = useState([])
  const[ currentTitle, setCurrentTitle] = useState(null)

  const createNewChat = () =>{
    setMessage(null)
    setValue("")
    setCurrentTitle(null)
  }

  const getMessages = async () => {
    const options = {
      method: "POST",
      body : JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try{
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      setMessage(data.choices[0].message)
    }catch(error){
       console.error(error)
    }
  }

useEffect(() => {
  console.log(currentTitle, value, message)
  if(!currentTitle && value && message){
    setCurrentTitle(value)
  }
  if(currentTitle && value && message){
    setPreviousChats(prevChats => (
      [...prevChats,
      {
        title: currentTitle,
        content: value
      }, 
      {
        title: currentTitle,
        content: message.content

      }
    ]
    ))
  }
},[message, currentTitle])


const currentChat = previousChats.filter(previousChat => previousChat.title === currentTitle)

// this is the end of the open ai api

  return (
    <>
{/* This is our message */}
    <div className='inputs'>
     <div className='chat'>
        <div className='message_window'>
         {message && (
           <SyntaxHighlighter language='jsx' style= {atomOneDark} wrapLongLines={true} customStyle={{width:'800px', background:'none'}}>
            {message.content}
           </SyntaxHighlighter>
         )}
        </div>
     

{/* this is the user input  */}

        <div className='user_input' >
       <input type='text'
       className='user_textarea'
       placeholder='How can I help you...'
       value={value || ''}
       onChange={(e) => setValue(e.target.value)}
       />
       <button onClick={getMessages} className='send'><i className="pi pi-arrow-up"></i></button>
       <button onClick={createNewChat} className='newchat'> <i className="pi pi-plus" style={{fontSize:'14px'}}></i> New Chat</button>
       </div>
       <div className='warning'>
        <p>This is fully based on AI so it can't be always right<br/>
        please recheck important information
        </p>
       </div>
       </div>
      
    </div>

    </>
  )
}
