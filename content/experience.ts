export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string;
  duration: string;
  summary: string;
  highlights: string[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    company: "FEV India Pvt Ltd",
    role: "Data Scientist",
    type: "Full-time",
    location: "Pune, India",
    start: "May 2022",
    end: "Oct 2024",
    duration: "2 yrs 5 mos",
    summary:
      "Worked across the battery management, ADAS perception, and applied LLM teams at FEV, a German automotive engineering MNC. Owned data and model pipelines feeding predictive battery models, simulation generated perception data, and the multimodal ALiVA annotation framework.",
    highlights: [
      "Led a cross functional team of 5 on large scale EV battery characterization datasets, training predictive models for Remaining Useful Life (RUL), State of Health (SOH), and State of Charge (SOC). Ran hyperparameter optimization across the model search space and lifted estimation accuracy by 18%.",
      "Built a digital twin of EV batteries for Tata Motors using deep learning models, paired with a real time monitoring dashboard that fused live multi sensor telemetry and cut fault detection time by 40%.",
      "Implemented ALiVA, an automated annotation pipeline for image, video, and LiDAR data using a multimodal approach. Designed JSON schemas across each stage with parameter bounds and compatibility checks, plus a regression style test suite that runs correctness checks on every commit. Cut manual labeling time by 40%.",
      "Designed and prototyped computer vision systems for traffic sign classification, traffic light recognition, and lane departure warning tuned for Indian road scenarios, reducing false negatives by over 50% in controlled tests.",
      "Generated diverse road scenarios in CARLA simulation to support perception model testing. Brought real world data collection costs down by 60% and saved roughly 2 months of testing time, enabling rapid preliminary algorithm validation.",
      "Built agentic data pipelines in Python and Airflow covering orchestration logic, tool selection, staged execution, validation gates, and fallback handling for multistage automated workflows.",
      "Developed LLM based NLP pipelines on HuggingFace Transformers and BERT with prompting strategies, structured output schemas, and evaluation harnesses that measured precision, recall, and robustness across model iterations before deployment.",
    ],
    skills: [
      "Python",
      "PyTorch",
      "Airflow",
      "HuggingFace Transformers",
      "BERT",
      "LLMs",
      "Computer Vision",
      "CARLA",
      "LiDAR",
      "Battery Modeling (RUL, SOH, SOC)",
      "Hyperparameter Optimization",
      "Data Pipelines",
      "Multimodal ML",
    ],
  },
  {
    company: "Compserv Consultancy",
    role: "Data Analyst",
    type: "Internship",
    location: "Kolhapur, India",
    start: "Apr 2020",
    end: "May 2021",
    duration: "1 yr 1 mo",
    summary:
      "Year long analytics internship covering the full workflow including collection, cleaning, statistical analysis, and dashboarding for a multi project consulting team.",
    highlights: [
      "Analyzed customer review and user preference datasets to derive actionable insights that informed targeted marketing strategies, contributing to a 20% year over year revenue increase.",
      "Managed and cleaned terabytes of enterprise data with SQL and Python, resolving inconsistencies, missing values, and source errors across multiple data sources to maintain over 99% data integrity.",
      "Ran comprehensive statistical analyses on customer behavior patterns, surfacing trends and correlations that optimized product positioning and marketing campaigns.",
      "Built a unified Power BI analytics dashboard spanning 4 projects with real time KPI tracking and an integrated community hub, enabling cross functional collaboration and reducing status meetings by 40%.",
      "Owned the full analytics workflow from collection across databases and surveys, through wrangling and visualization with Matplotlib, to stakeholder facing recommendations.",
    ],
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Matplotlib",
      "Statistical Analysis",
      "Data Cleaning",
      "Data Wrangling",
    ],
  },
];
