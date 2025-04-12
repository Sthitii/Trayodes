const allQuestions = {
  // Initial question - Service Category
  start: {
    id: "start",
    question: "What brings you to our services today?",
    description: "Select the area that best matches your needs",
    options: [
      {
        id: "investment",
        text: "Investment & Funding",
        icon: "💰",
        nextQuestion: "investment_type",
        points: { category: "investment" },
      },
      {
        id: "business",
        text: "Business Growth & Consulting",
        icon: "📈",
        nextQuestion: "business_type",
        points: { category: "consulting" },
      },
      {
        id: "technology",
        text: "Technology Solutions",
        icon: "💻",
        nextQuestion: "tech_focus",
        points: { category: "technology" },
      },
      {
        id: "education",
        text: "Education & Academic Support",
        icon: "🎓",
        nextQuestion: "education_goal",
        points: { category: "education" },
      },

      {
        id: "unsure",
        text: "I'm not sure yet",
        icon: "🤔",
        nextQuestion: "user_role",
        points: { category: "general" },
      },
    ],
  },

  // ========== EDUCATION PATH ==========
  education_goal: {
    id: "education_goal",
    question: "What stage of education are you focusing on?",
    options: [
      {
        id: "undergrad",
        text: "Bachelor's Degree",
        icon: "🎓",
        nextQuestion: "study_location",
        points: { service: "course_selection", level: "undergraduate" },
      },
      {
        id: "grad",
        text: "Master's/PhD",
        icon: "📜",
        nextQuestion: "study_location",
        points: { service: "course_selection", level: "postgraduate" },
      },
      {
        id: "abroad",
        text: "Studying Abroad",
        icon: "✈️",
        nextQuestion: "study_location",
        points: { service: "visa", level: "international" },
      },
      {
        id: "career",
        text: "Career After Studies",
        icon: "👔",
        nextQuestion: "career_field",
        points: { service: "career" },
      },
    ],
  },
  study_location: {
    id: "study_location",
    question: "Where are you planning to study?",
    options: [
      {
        id: "uk",
        text: "United Kingdom",
        icon: "🇬🇧",
        nextQuestion: "education_support",
        points: { region: "uk" },
      },
      {
        id: "us",
        text: "United States",
        icon: "🇺🇸",
        nextQuestion: "education_support",
        points: { region: "us" },
      },
      {
        id: "europe",
        text: "Europe",
        icon: "🇪🇺",
        nextQuestion: "education_support",
        points: { region: "europe" },
      },
      {
        id: "asia",
        text: "Asia/Australia",
        icon: "🌏",
        nextQuestion: "education_support",
        points: { region: "asia" },
      },
    ],
  },
  education_support: {
    id: "education_support",
    question: "What support do you need most?",
    options: [
      {
        id: "admission",
        text: "University Admission",
        icon: "📝",
        nextQuestion: "timeframe",
        points: { service: "admission" },
      },
      {
        id: "visa",
        text: "Visa & Immigration",
        icon: "🛂",
        nextQuestion: "timeframe",
        points: { service: "visa" },
      },
      {
        id: "housing",
        text: "Accommodation",
        icon: "🏠",
        nextQuestion: "timeframe",
        points: { service: "accommodation" },
      },
      {
        id: "all",
        text: "Comprehensive Package",
        icon: "📦",
        nextQuestion: "timeframe",
        points: { service: ["admission", "visa", "accommodation"] },
      },
    ],
  },
  career_field: {
    id: "career_field",
    question: "What field are you targeting for your career?",
    options: [
      {
        id: "business",
        text: "Business/Management",
        icon: "💼",
        nextQuestion: "career_support",
        points: { field: "business" },
      },
      {
        id: "tech",
        text: "Technology",
        icon: "💻",
        nextQuestion: "career_support",
        points: { field: "technology" },
      },
      {
        id: "health",
        text: "Healthcare",
        icon: "🏥",
        nextQuestion: "career_support",
        points: { field: "healthcare" },
      },
      {
        id: "other",
        text: "Other Fields",
        icon: "🌟",
        nextQuestion: "career_support",
        points: { field: "general" },
      },
    ],
  },
  career_support: {
    id: "career_support",
    question: "What career support do you need?",
    options: [
      {
        id: "resume",
        text: "Resume & Interview Prep",
        icon: "📄",
        nextQuestion: "timeframe",
        points: { service: "career" },
      },
      {
        id: "job_search",
        text: "Job Search Strategy",
        icon: "🔍",
        nextQuestion: "timeframe",
        points: { service: "career" },
      },
      {
        id: "network",
        text: "Professional Networking",
        icon: "🤝",
        nextQuestion: "timeframe",
        points: { service: "career" },
      },
      {
        id: "visa",
        text: "Work Visa Support",
        icon: "🛂",
        nextQuestion: "timeframe",
        points: { service: "visa" },
      },
    ],
  },

  // ========== BUSINESS CONSULTING PATH ==========
  business_type: {
    id: "business_type",
    question: "What type of business do you represent?",
    options: [
      {
        id: "startup",
        text: "Startup/Early Stage",
        icon: "🚀",
        nextQuestion: "business_need",
        points: { size: "startup" },
      },
      {
        id: "sme",
        text: "Small/Medium Business",
        icon: "🏢",
        nextQuestion: "business_need",
        points: { size: "sme" },
      },
      {
        id: "enterprise",
        text: "Large Enterprise",
        icon: "🏛️",
        nextQuestion: "business_need",
        points: { size: "enterprise" },
      },
      {
        id: "nonprofit",
        text: "Non-profit/Organization",
        icon: "🤝",
        nextQuestion: "business_need",
        points: { size: "nonprofit" },
      },
    ],
  },
  business_need: {
    id: "business_need",
    question: "What's your primary business challenge?",
    options: [
      {
        id: "strategy",
        text: "Growth Strategy",
        icon: "🧠",
        nextQuestion: "business_industry",
        points: { service: "strategy" },
      },
      {
        id: "operations",
        text: "Operational Efficiency",
        icon: "⚙️",
        nextQuestion: "business_industry",
        points: { service: "operations" },
      },
      {
        id: "digital",
        text: "Digital Transformation",
        icon: "🖥️",
        nextQuestion: "tech_focus",
        points: { service: "digital" },
      },
      {
        id: "funding",
        text: "Funding/Investment",
        icon: "💸",
        nextQuestion: "investment_type",
        points: { service: "venture_capital" },
      },
    ],
  },
  business_industry: {
    id: "business_industry",
    question: "What industry are you in?",
    options: [
      {
        id: "tech",
        text: "Technology",
        icon: "💻",
        nextQuestion: "timeframe",
        points: { industry: "tech" },
      },
      {
        id: "finance",
        text: "Finance/Banking",
        icon: "🏦",
        nextQuestion: "timeframe",
        points: { industry: "finance" },
      },
      {
        id: "health",
        text: "Healthcare",
        icon: "🏥",
        nextQuestion: "timeframe",
        points: { industry: "healthcare" },
      },
      {
        id: "education",
        text: "Education",
        icon: "📚",
        nextQuestion: "timeframe",
        points: { industry: "education" },
      },
    ],
  },

  // ========== TECHNOLOGY PATH ==========
  tech_focus: {
    id: "tech_focus",
    question: "What technology area are you focused on?",
    options: [
      {
        id: "development",
        text: "Custom Development",
        icon: "👨‍💻",
        nextQuestion: "tech_stack",
        points: { service: "development" },
      },
      {
        id: "cloud",
        text: "Cloud Solutions",
        icon: "☁️",
        nextQuestion: "cloud_needs",
        points: { service: "cloud" },
      },
      {
        id: "ai",
        text: "AI/Data Solutions",
        icon: "🤖",
        nextQuestion: "data_needs",
        points: { service: "ai" },
      },
      {
        id: "security",
        text: "Cybersecurity",
        icon: "🔒",
        nextQuestion: "security_needs",
        points: { service: "cybersecurity" },
      },
    ],
  },
  tech_stack: {
    id: "tech_stack",
    question: "What's your preferred tech stack?",
    options: [
      {
        id: "web",
        text: "Web Technologies",
        icon: "🌐",
        nextQuestion: "timeframe",
        points: { stack: "web" },
      },
      {
        id: "mobile",
        text: "Mobile Development",
        icon: "📱",
        nextQuestion: "timeframe",
        points: { stack: "mobile" },
      },
      {
        id: "enterprise",
        text: "Enterprise Systems",
        icon: "🏢",
        nextQuestion: "timeframe",
        points: { stack: "enterprise" },
      },
      {
        id: "legacy",
        text: "Legacy Modernization",
        icon: "🔄",
        nextQuestion: "timeframe",
        points: { stack: "legacy" },
      },
    ],
  },
  cloud_needs: {
    id: "cloud_needs",
    question: "What are your cloud requirements?",
    options: [
      {
        id: "migration",
        text: "Cloud Migration",
        icon: "🚚",
        nextQuestion: "timeframe",
        points: { need: "migration" },
      },
      {
        id: "optimization",
        text: "Cost Optimization",
        icon: "💰",
        nextQuestion: "timeframe",
        points: { need: "optimization" },
      },
      {
        id: "architecture",
        text: "New Architecture",
        icon: "🏗️",
        nextQuestion: "timeframe",
        points: { need: "architecture" },
      },
      {
        id: "hybrid",
        text: "Hybrid Cloud Setup",
        icon: "🔀",
        nextQuestion: "timeframe",
        points: { need: "hybrid" },
      },
    ],
  },

  // ========== INVESTMENT PATH ==========
  investment_type: {
    id: "investment_type",
    question: "What type of investment support do you need?",
    options: [
      {
        id: "venture",
        text: "Venture Capital",
        icon: "🚀",
        nextQuestion: "funding_stage",
        points: { service: "venture_capital" },
      },
      {
        id: "private",
        text: "Private Equity",
        icon: "💼",
        nextQuestion: "investment_amount",
        points: { service: "private_equity" },
      },
      {
        id: "wealth",
        text: "Wealth Management",
        icon: "📊",
        nextQuestion: "investment_objective",
        points: { service: "wealth_management" },
      },
      {
        id: "startup",
        text: "Startup Funding",
        icon: "💡",
        nextQuestion: "funding_stage",
        points: { service: "entrepreneurship" },
      },
    ],
  },
  funding_stage: {
    id: "funding_stage",
    question: "What funding stage are you at?",
    options: [
      {
        id: "seed",
        text: "Seed/Pre-Seed",
        icon: "🌱",
        nextQuestion: "investment_amount",
        points: { stage: "seed" },
      },
      {
        id: "series_a",
        text: "Series A",
        icon: "🅰️",
        nextQuestion: "investment_amount",
        points: { stage: "series_a" },
      },
      {
        id: "growth",
        text: "Growth Stage",
        icon: "📈",
        nextQuestion: "investment_amount",
        points: { stage: "growth" },
      },
      {
        id: "exit",
        text: "Exit Strategy",
        icon: "🚪",
        nextQuestion: "timeframe",
        points: { stage: "exit" },
      },
    ],
  },
  investment_amount: {
    id: "investment_amount",
    question: "What investment amount range are you considering?",
    options: [
      {
        id: "small",
        text: "Under $100K",
        icon: "💵",
        nextQuestion: "timeframe",
        points: { amount: "small" },
      },
      {
        id: "medium",
        text: "$100K - $1M",
        icon: "💰",
        nextQuestion: "timeframe",
        points: { amount: "medium" },
      },
      {
        id: "large",
        text: "$1M - $10M",
        icon: "🪙",
        nextQuestion: "timeframe",
        points: { amount: "large" },
      },
      {
        id: "xlarge",
        text: "Over $10M",
        icon: "🏦",
        nextQuestion: "timeframe",
        points: { amount: "xlarge" },
      },
    ],
  },
  investment_objective: {
    id: "investment_objective",
    question: "What's your primary investment objective?",
    options: [
      {
        id: "growth",
        text: "Wealth Growth",
        icon: "📈",
        nextQuestion: "investment_horizon",
        points: { objective: "growth" },
      },
      {
        id: "income",
        text: "Passive Income",
        icon: "💸",
        nextQuestion: "investment_horizon",
        points: { objective: "income" },
      },
      {
        id: "retirement",
        text: "Retirement Planning",
        icon: "🏖️",
        nextQuestion: "investment_horizon",
        points: { objective: "retirement" },
      },
      {
        id: "preservation",
        text: "Wealth Preservation",
        icon: "🛡️",
        nextQuestion: "investment_horizon",
        points: { objective: "preservation" },
      },
    ],
  },
  investment_horizon: {
    id: "investment_horizon",
    question: "What's your investment time horizon?",
    options: [
      {
        id: "short",
        text: "Short-term (1-3 years)",
        icon: "⏱️",
        nextQuestion: "timeframe",
        points: { horizon: "short" },
      },
      {
        id: "medium",
        text: "Medium-term (3-7 years)",
        icon: "📅",
        nextQuestion: "timeframe",
        points: { horizon: "medium" },
      },
      {
        id: "long",
        text: "Long-term (7+ years)",
        icon: "🗓️",
        nextQuestion: "timeframe",
        points: { horizon: "long" },
      },
      {
        id: "flexible",
        text: "Flexible/Undefined",
        icon: "🔄",
        nextQuestion: "timeframe",
        points: { horizon: "flexible" },
      },
    ],
  },

  // ========== GENERAL PATH (for unsure users) ==========
  user_role: {
    id: "user_role",
    question: "Which best describes you?",
    options: [
      {
        id: "student",
        text: "Student/Prospective Student",
        icon: "🎓",
        nextQuestion: "education_goal",
        points: { category: "education" },
      },
      {
        id: "professional",
        text: "Business Professional",
        icon: "👔",
        nextQuestion: "business_type",
        points: { category: "consulting" },
      },
      {
        id: "tech",
        text: "Tech Professional",
        icon: "👨‍💻",
        nextQuestion: "tech_focus",
        points: { category: "technology" },
      },
      {
        id: "investor",
        text: "Investor/Entrepreneur",
        icon: "💰",
        nextQuestion: "investment_type",
        points: { category: "investment" },
      },
    ],
  },

  // ========== COMMON FINAL QUESTION ==========
  timeframe: {
    id: "timeframe",
    question: "When do you need support?",
    options: [
      {
        id: "urgent",
        text: "Immediately (within 1 month)",
        icon: "⏰",
        points: { urgency: "high" },
      },
      {
        id: "soon",
        text: "Soon (1-3 months)",
        icon: "📅",
        points: { urgency: "medium" },
      },
      {
        id: "planning",
        text: "Just planning ahead",
        icon: "🗓️",
        points: { urgency: "low" },
      },
      {
        id: "unsure",
        text: "Not sure yet",
        icon: "🤷‍♂️",
        points: { urgency: "unknown" },
      },
    ],
  },
};

export default allQuestions;
