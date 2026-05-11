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
    duration: "2 yrs 6 mos",
    summary:
      "Worked with ADAS and Battery management systems team in building data pipelines, LLM-based NLP and vision systems, and validation frameworks at FEV which is a German automotive engineering MNC specialized.",
    highlights: [
      "Built agentic data pipelines in Python and Airflow with orchestration logic, tool selection, step-by-step execution, validation checks, and fallback handling across multi-stage automated workflows.",
      "Developed and iterated on LLM-based NLP pipelines using HuggingFace Transformers and BERT and designing prompting strategies, structured output schemas, and evaluation frameworks to measure accuracy and reliability.",
      "Built evaluation harnesses for model quality assessment, defining benchmark tasks and measuring correctness, precision, recall, and robustness across iterative model versions before deployment.",
      "Designed and validated JSON structured data schemas across the multimodal ALiVA pipeline (image, video, LiDAR) with input validation, parameter bounds, and compatibility checks at each stage; built a regression-style test suite running automated correctness checks across all pipeline components on every code change.",
      "Built a real-time monitoring dashboard for Tata Motors fusing live multi-sensor data and reduced fault detection time by 40%.",
      "Documented prototypes, experiment results, key failure modes, and recommendations for cross-functional engineering teams.",
    ],
    skills: [
      "Python",
      "Airflow",
      "HuggingFace Transformers",
      "BERT",
      "LLMs",
      "Computer Vision",
      "Machine Learning",
      "Data Pipelines",
      "JSON Schema Validation",
      "Battery Management Systems",
    ],
  },
  {
    company: "Compserv Consultants Pvt. Ltd",
    role: "Data Analyst",
    type: "Internship",
    location: "Kolhapur, India",
    start: "May 2020",
    end: "May 2021",
    duration: "1 yr 1 mo",
    summary:
      "Year long data analytics internship covering the full analytics workflow which included collection, cleaning, statistical analysis, and dashboarding for a multi-project consulting team.",
    highlights: [
      "Analyzed customer reviews and user-preference datasets to inform targeted marketing strategies, contributing to a 20% YoY revenue increase.",
      "Managed and cleaned terabytes of enterprise data using SQL and Python including scraped JSON datasets, writing custom JSON schema validation scripts to verify structural correctness and data integrity, maintaining 99%+ data integrity.",
      "Conducted comprehensive statistical analyses on customer behavior patterns, surfacing trends and correlations that optimized product positioning and marketing campaigns.",
      "Built unified Power BI dashboards with real time KPI tracking across 4 projects, enabling cross-functional collaboration and reducing status meetings by 40%.",
      "Executed end-to-end data analytics workflows which involved collection, wrangling, visualization with Matplotlib, and presentation of actionable recommendations to stakeholders through written reports and verbal briefings.",
    ],
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Matplotlib",
      "Statistical Analysis",
      "Data Cleaning",
      "JSON Schema Validation",
    ],
  },
];
