export type SkillGroup = {
  name: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    name: "Languages",
    items: ["Python", "SQL", "C++", "C", "Java", "JavaScript", "HTML / CSS"],
  },
  {
    name: "Machine Learning & AI",
    items: [
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "LLMs",
      "HuggingFace Transformers",
      "BERT",
      "Generative AI",
      "PyTorch",
      "Model Evaluation",
    ],
  },
  {
    name: "Data & Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Power BI",
      "Statistical Analysis",
      "Data Cleaning",
      "JSON Schema Validation",
      "Sensor Fusion",
    ],
  },
  {
    name: "Pipelines & Infra",
    items: [
      "Apache Airflow",
      "Agentic Pipelines",
      "AWS",
      "Linux",
      "Pytest",
      "Git",
    ],
  },
  {
    name: "Domain",
    items: [
      "ADAS / Autonomous Driving",
      "Battery Management Systems",
      "Multimodal Data (Image · Video · LiDAR)",
      "Time-Series",
    ],
  },
];
