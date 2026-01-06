import { useState } from "react";
import "./Contact.css";

const faqData = [
  {
    question: "What is Lets-Farm?",
    answer:
      "Lets-Farm is a smart agriculture platform that helps farmers with crop guidance, products, and modern farming techniques.",
  },
  {
    question: "Is Lets-Farm free to use?",
    answer:
      "Yes, Lets-Farm is completely free for farmers and users to explore farming guidance and tools.",
  },
  {
    question: "How does Smart Crop Advisor work?",
    answer:
      "Smart Crop Advisor suggests crops based on soil type, location, and farming conditions using intelligent logic.",
  },
  {
    question: "Can I give feedback about the website?",
    answer:
      "Yes, you can submit feedback and rate the website using the feedback form below.",
  },
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  /* ===== Feedback state (unchanged) ===== */
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message, rating }),
    });

    if (res.ok) {
      alert("Thank you for your feedback ❤️");
      setName("");
      setMessage("");
      setRating(5);
    } else {
      alert("Something went wrong!");
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </section>

      {/* ===== FEEDBACK SECTION (UNCHANGED) ===== */}
      <section className="feedback">
        <h2>Send Us Your Feedback</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Your Feedback"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />

          <label>Rate the Website:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            <option value={5}>⭐⭐⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={1}>⭐</option>
          </select>

          <button type="submit">Submit Feedback</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
