import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EmeraldAgent = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I am Emerald, your AI Executive Assistant. I can navigate the portal for you. Try saying 'Take me to the teachers module' or 'Show me the broadsheet'." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch("https://emerald-backend-c260.onrender.com/api/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: input }],
          userRole: "Admin", 
          context: location.pathname
        })
      });

      const data = await response.json();
      
      // Attempt to parse AI response for commands
      try {
        const aiReply = JSON.parse(data.reply);
        if (aiReply.action === 'navigate') {
          navigate(aiReply.path);
          setMessages((prev) => [...prev, { role: 'assistant', text: "Navigating now..." }]);
        }
      } catch (e) {
        // If not JSON, just show the text
        setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', text: "I'm offline. Check backend logs." }]);
    }
    setIsTyping(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-fade-in transition-colors">
          <div className="bg-gradient-to-r from-emeraldGreen to-green-700 p-4 text-white flex justify-between items-center z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emeraldGreen font-bold text-sm">E</div>
              <h3 className="font-bold text-sm uppercase tracking-widest">Emerald</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 font-bold">✕</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#0a0a0a] space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-emeraldGreen text-white rounded-br-none' : 'bg-white dark:bg-darkSurface border dark:border-darkBorder text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && <div className="text-xs text-gray-400">Emerald is thinking...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 border-t dark:border-darkBorder">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Emerald..."
              className="w-full bg-gray-100 dark:bg-[#111] border dark:border-darkBorder p-3 rounded-xl text-sm outline-none"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default EmeraldAgent;
