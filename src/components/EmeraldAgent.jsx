import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const EmeraldAgent = ({ isOpen, setIsOpen }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Hello! I am Emerald, your AI Executive Assistant. I don't just answer questions—I execute tasks. Try asking me to 'Take me to my results', 'Show me the broadsheet', or 'Lock the JSS1 cohort'." }
  ]);
  const [input, setInput] = useState('');
  const[isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Send the request to your Render Backend
      const response = await fetch("https://your-emerald-backend.onrender.com/api/copilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [{ role: "user", content: input }],
          userRole: "Admin", // In Phase 3, we will pull this from your Supabase Auth
          context: location.pathname
        })
      });

      const data = await response.json();
      
      // If the AI returned a JSON command to navigate
      try {
        const command = JSON.parse(data.reply);
        if (command.action === 'navigate') {
          navigate(command.path);
        }
      } catch (e) {
        // Not a JSON command, just a normal text reply
      }

      setMessages((prev) => [...prev, { role: 'assistant', text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'assistant', text: "I'm having trouble connecting to the backend. Please check your Render logs." }]);
    }
    setIsTyping(false);
  };
    const userMessage = { role: 'user', text: input };
    setMessages((prev) =>[...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // MOCK FUNCTION CALLING LOGIC
    setTimeout(() => {
      setIsTyping(false);
      const lowerInput = userMessage.text.toLowerCase();
      
      if (lowerInput.includes('teacher') || lowerInput.includes('staff')) {
        navigate('/admin');
        setMessages((prev) =>[...prev, { role: 'assistant', text: "Executing navigation: Taking you to the Teachers & Staff module." }]);
      } 
      else if (lowerInput.includes('result') || lowerInput.includes('broadsheet')) {
        navigate('/admin');
        setMessages((prev) =>[...prev, { role: 'assistant', text: "Executing navigation: Opening the Exam Broadsheet Collation module." }]);
      }
      else {
        setMessages((prev) =>[...prev, { role: 'assistant', text: "Command received. Once my backend is fully connected, I will execute this action directly in the database for you." }]);
      }
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button (Only shows if closed) */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-emeraldGreen text-white rounded-full shadow-2xl flex items-center justify-center text-2xl hover:scale-110 transition-transform z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        ✨
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden transition-colors animate-fade-in">
          
          <div className="bg-gradient-to-r from-emeraldGreen to-green-700 p-4 text-white flex justify-between items-center shadow-md z-10">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-emeraldGreen font-bold text-sm">E</div>
              <div>
                <h3 className="font-bold text-sm font-display tracking-widest uppercase">Emerald Copilot</h3>
                <p className="text-[10px] opacity-90 flex items-center"><span className="w-2 h-2 bg-emeraldYellow rounded-full mr-1 animate-pulse"></span> Ready to execute</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 font-bold text-xl">✕</button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#0a0a0a] space-y-4">
            <div className="text-center text-xs text-gray-400 dark:text-gray-500 mb-4 border-b border-gray-200 dark:border-darkBorder pb-2">
              System Context: You are on {location.pathname === '/' ? 'the Home Page' : location.pathname}
            </div>

            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-emeraldGreen text-white rounded-br-none shadow-md' : 'bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[80%] p-4 bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder rounded-2xl rounded-bl-none shadow-sm flex space-x-1">
                  <div className="w-2 h-2 bg-emeraldGreen rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emeraldGreen rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-emeraldGreen rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white dark:bg-darkSurface border-t border-gray-200 dark:border-darkBorder">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Command Emerald to do something..."
                className="flex-1 bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-darkBorder text-gray-900 dark:text-white p-3 rounded-xl text-sm outline-none focus:border-emeraldGreen transition-colors"
              />
              <button type="submit" disabled={!input.trim()} className="bg-emeraldGreen text-white p-3 rounded-xl shadow hover:opacity-80 disabled:opacity-50 transition-opacity">
                ➤
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EmeraldAgent;
