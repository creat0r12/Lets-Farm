import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

type Message = {
  sender: "user" | "bot";
  text: string;
};

function Chatbot({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  // 🔽 Auto-scroll reference
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // 🔽 Auto-scroll when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "No response from assistant." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Please try again." },
      ]);
    }
  };

  return (
    <>
      {open && (
        <div className="chat-overlay">
          <div className="chat-glass">
            <div className="chat-header">
              <span>Let’s Farm Assistant 🌱</span>
              <button onClick={onClose}>×</button>
            </div>

            <div className="chat-body">
              {messages.map((m, i) => (
                <div key={i} className={`msg ${m.sender}`}>
                  {m.text}
                </div>
              ))}

              {/* 🔽 Auto-scroll anchor */}
              <div ref={bottomRef} />
            </div>

            <div className="chat-input">
              <input
                placeholder="Ask about crops, soil, or organic farming..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>➤</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
