
import { useState } from "react";
import "./ChatBox.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ChatBox = () => {
    const [open, setOpen] = useState(true); 
     const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

   const sendMessage = async () => {
    if (!message) return;

    const userMsg = { role: "user", text: message };
    setChats((prev) => [...prev, userMsg]);

    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      const aiMsg = { role: "ai", text: data.reply };
      setChats((prev) => [...prev, aiMsg]);

      setMessage("");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
   <>
    
      {open && (
         <div className="chat-box">
        {chats.map((chat, index) => (
          <p key={index} className={chat.role === "user" ? "user-msg" : "ai-msg"}>
            {chat.text}
          </p>
        ))}
      </div>
      )}
      
        <div className="chat-widget">

     <div className="input-Button-main-box" >
         <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="chat-input"
        placeholder="Talk to your AI assistant…"
        
      />

      <button onClick={()=>sendMessage()} className="chat-btn">
        {loading ? "Ai" : "Send"}
      </button>
      <button onClick={()=>setOpen(!open)} className="open-box-toggle">{open ?<ArrowUpwardIcon/> :<ArrowDownwardIcon/>  }</button>
     </div>
    </div>
      
    
   </>
  )
}

export default ChatBox