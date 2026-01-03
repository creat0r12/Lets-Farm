exports.chatWithBot = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.json({
      reply: "Please ask a farming-related question 🌱"
    });
  }

  const text = message.toLowerCase();

  const faqData = [
    {
      keywords: ["what is farming", "define farming", "farming meaning"],
      big: `Farming is the practice of cultivating land, growing crops, and raising animals to produce food, fiber, and raw materials. 
It is one of the oldest professions and plays a vital role in food security, employment, and economic development. 
Modern farming combines traditional knowledge with technology to increase productivity and sustainability.`,
      small: "Farming is the practice of growing crops and raising animals for food and raw materials."
    },

    {
      keywords: ["how farming is done", "farming process", "steps of farming"],
      big: `Farming is done through several steps such as land preparation, seed selection, sowing, irrigation, fertilization, 
pest control, and harvesting. Each step depends on soil type, climate, crop variety, and farming method.`,
      small: "Farming involves land preparation, sowing seeds, irrigation, crop care, and harvesting."
    },

    {
      keywords: ["types of farming", "farming methods", "kinds of farming"],
      big: `There are different types of farming such as subsistence farming, commercial farming, organic farming, mixed farming, 
intensive farming, and extensive farming. Each type is chosen based on land size, investment, and market demand.`,
      small: "Major types include subsistence, commercial, organic, and mixed farming."
    },

    {
      keywords: ["importance of farming", "why farming is important"],
      big: `Farming is important because it provides food, supports industries, creates employment, and strengthens the economy. 
It also plays a key role in rural development and environmental balance.`,
      small: "Farming is important for food production, jobs, and economic growth."
    },

    {
      keywords: ["impact of farming", "farming and environment", "effect of farming"],
      big: `Farming impacts society by supporting livelihoods and food security. Environmentally, sustainable farming improves soil health 
and biodiversity, while excessive chemical use can harm soil and water. Balanced practices are essential.`,
      small: "Farming affects society and the environment and should be practiced sustainably."
    },

    {
      keywords: ["modern farming challenges", "problems in farming", "agriculture challenges"],
      big: `Modern farming faces challenges such as climate change, water scarcity, soil degradation, rising input costs, 
pest resistance, and unpredictable weather. Smart farming and sustainable practices help overcome these issues.`,
      small: "Modern farming faces challenges like climate change and rising costs."
    },

    {
      keywords: ["organic farming"],
      big: `Organic farming uses natural fertilizers, compost, and biological pest control methods. 
It improves soil health, reduces pollution, and produces chemical-free food.`,
      small: "Organic farming avoids chemicals and uses natural inputs."
    },

    {
      keywords: ["black soil", "crop for black soil"],
      big: `Black soil retains moisture and is rich in nutrients. Crops like cotton, soybean, jowar, and wheat grow well in black soil.`,
      small: "Cotton and soybean are suitable for black soil."
    },

    {
      keywords: ["irrigation", "watering crops"],
      big: `Irrigation provides water essential for crop growth. Proper irrigation improves yield, 
while over-irrigation can damage crops and soil.`,
      small: "Irrigation supplies water needed for healthy crop growth."
    },

    {
      keywords: ["increase yield", "improve production"],
      big: `Farmers can increase yield by using quality seeds, balanced fertilizers, proper irrigation, 
pest control, and modern farming techniques.`,
      small: "Better seeds and proper crop care help increase yield."
    },

    {
      keywords: ["sustainable farming"],
      big: `Sustainable farming focuses on protecting soil, water, and biodiversity while maintaining long-term productivity.`,
      small: "Sustainable farming protects the environment while producing food."
    }
  ];

  // 🔍 Find best match
  const match = faqData.find(item =>
    item.keywords.some(keyword => text.includes(keyword))
  );

  // 🧠 Smart answer selection
  if (match) {
    const wantsBigAnswer =
      text.includes("explain") ||
      text.includes("detail") ||
      text.includes("what is") ||
      text.length > 40;

    return res.json({
      reply: wantsBigAnswer ? match.big : match.small
    });
  }

  // 🤝 Default intelligent fallback
  return res.json({
    reply:
      "I can help with farming basics, crop selection, soil types, irrigation, organic farming, and modern agriculture challenges 🌾. Please ask a related question."
  });
};