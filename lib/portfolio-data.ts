export type SkillCategory = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  tags: string[];
  description: string;
  github: string;
  snippet: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Agentic AI & Orchestration",
    items: ["CrewAI", "LangGraph", "Multi-Agent Orchestration", "Prompt Engineering"]
  },
  {
    title: "LLMs & GenAI",
    items: ["Groq API (Llama 3.3 70B, gpt-oss-120b)", "Serper.dev"]
  },
  {
    title: "ML/DL",
    items: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "XGBoost", "SMOTE"]
  },
  {
    title: "Deployment & Tools",
    items: ["Streamlit", "ngrok", "Google Colab", "GitHub", "Jupyter"]
  }
];

export const projects: Project[] = [
  {
    title: "Research Assistant Agent (Multi-Agent)",
    tags: ["CrewAI", "Serper.dev", "Groq"],
    description:
      "Built a 3-agent CrewAI system (Researcher, Summarizer, Citer) using a sequential pipeline with real-time web search and Groq's Llama 3.3 70B. Deployed as a public Streamlit app via ngrok.",
    github: "https://github.com/waleed-agentic/research-assistant-agent",
    snippet: [
      "agents = [Researcher(), Summarizer(), Citer()]",
      "crew = Crew(agents=agents, process='sequential')",
      "result = crew.kickoff(topic=research_query)"
    ]
  },
  {
    title: "AI Interview Prep Agent Crew (Multi-Agent)",
    tags: ["CrewAI", "5-Agent System"],
    description:
      "A 5-agent CrewAI system that analyzes resumes and job descriptions, identifies skill gaps, and generates tailored interview preparation content.",
    github: "https://github.com/waleed-agentic/ai-interview-prep-agent-crew",
    snippet: [
      "resume = ResumeParser().load(candidate_cv)",
      "job_gap = SkillAnalyzer().compare(resume, jd)",
      "prep_plan = InterviewCoach().generate(job_gap)"
    ]
  },
  {
    title: "Resume / Job-Matching Agent (Single-Agent)",
    tags: ["CrewAI"],
    description:
      "An AI agent that parses resumes and compares them against job descriptions to score fit and highlight matching/missing skills.",
    github: "https://github.com/waleed-agentic/resume-job-matching-agent",
    snippet: [
      "match_score = matcher.score(resume, jd)",
      "missing = matcher.find_skill_gaps(resume, jd)",
      "report = matcher.build_summary()"
    ]
  },
  {
    title: "AI Social Media Content Repurposer (Multi-Agent)",
    tags: ["CrewAI", "Groq", "Streamlit"],
    description:
      "A multi-agent system that repurposes blog content into platform-native social media posts, deployed as a live Streamlit app.",
    github: "https://github.com/waleed-agentic/ai-social-content-repurposer",
    snippet: [
      "draft = content_pipeline.extract_blog_sections(url)",
      "posts = repurposer.generate_platform_variants(draft)",
      "streamlit_app.render(posts)"
    ]
  },
  {
    title: "Customer Support Multi-Agent System (Multi-Agent)",
    tags: ["LangGraph"],
    description:
      "A multi-agent support system with conditional routing logic to direct queries to the correct specialized agent, deployed via Streamlit and ngrok.",
    github: "https://github.com/waleed-agentic/customer-support-multiagent-langgraph",
    snippet: [
      "graph.add_conditional_edges('router', route_ticket)",
      "answer = support_graph.invoke(customer_query)",
      "logger.info('ticket routed to specialist agent')"
    ]
  },
  {
    title: "Credit Card Fraud Detection",
    tags: ["XGBoost", "SMOTE"],
    description:
      "A fraud detection model using XGBoost with SMOTE oversampling and threshold tuning to handle class imbalance.",
    github: "https://github.com/waleed-agentic/credit-card-fraud-detection-xgboost",
    snippet: [
      "X_resampled, y_resampled = SMOTE().fit_resample(X, y)",
      "model = XGBClassifier(max_depth=6, scale_pos_weight=25)",
      "fraud_flag = predict_with_threshold(model, tx)"
    ]
  }
];