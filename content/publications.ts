export type Publication = {
  title: string;
  venue: string;
  date: string;
  authorsNote?: string;
  summary: string;
  link?: string;
};

export const publications: Publication[] = [
  {
    title:
      "Towards Automation of Reference Data Generation for ADAS/AD Functions Development — ALiVA Framework",
    venue: "SAEINDIA · Road to Virtual World Conference 2024",
    date: "Oct 17, 2024",
    summary:
      "Presents the ALiVA framework: an end-to-end pipeline that fuses image, video, and LiDAR data from test vehicles to generate validated reference data used in ADAS/AD function development. Covers schema design, validation hooks, and the regression-style test suite that maintains correctness across pipeline stages.",
    link: "/Towards_Automation_of_Reference_Data_Generation_for_ADAS.pdf",
  },
  {
    title:
      "Comparative Analysis of GenAI Models for Extensions and Validation of EV Battery Characterization Data",
    venue: "SAEINDIA · Road to Virtual World Conference 2024",
    date: "Oct 17, 2024",
    summary:
      "Benchmarks several generative AI architectures for extending and validating EV battery characterization datasets, comparing statistical fidelity, distribution alignment, and downstream-task accuracy across candidate methods.",
    link: "/Comparative_Analysis_of_GenAI_Models_for_Extensions_and_Validation_of_EV_Battery_Characterization_Data.pdf",
  },
];
