import { useState } from "react";
import "./KnowFarming.css";

const topics = [
  {
    title: "What is Farming?",
    content:
      "Farming is the practice of cultivating land, growing crops, and raising animals to produce food, fiber, and other essential products used by humans.",
  },
  {
    title: "How Farming is Done",
    content:
      "Farming involves preparing the soil, sowing seeds, providing water and nutrients, protecting crops from pests, and harvesting when crops are fully grown.",
  },
  {
    title: "Types of Farming",
    content:
      "There are various types of farming such as subsistence farming, commercial farming, organic farming, mixed farming, and modern smart farming.",
  },
  {
    title: "Importance of Farming",
    content:
      "Farming is important because it provides food, raw materials for industries, employment to millions of people, and supports the overall economy.",
  },
  {
    title: "Impact of Farming on Society & Environment",
    content:
      "Farming supports rural development and food security. However, improper farming can cause soil degradation, water pollution, and environmental imbalance.",
  },
  {
    title: "Modern Farming Challenges",
    content:
      "Modern farming faces challenges such as climate change, water scarcity, soil fertility loss, rising costs, and lack of access to modern technology.",
  },
];

const KnowFarming = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleTopic = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="know-farming">
      <div className="know-container">
        <h1>Know About Farming</h1>

        <p className="intro">
          This page gives a basic understanding of farming for beginners.
          Detailed guidance will be added step by step.
        </p>

        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="topic-title"
              onClick={() => toggleTopic(index)}
            >
              {topic.title}
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>

            {activeIndex === index && (
              <p className="topic-content">{topic.content}</p>
            )}
          </div>
        ))}

        <div className="note">
          Content for each section will be expanded in future updates.
        </div>
      </div>
    </section>
  );
};

export default KnowFarming;
