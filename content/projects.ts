export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  context: string;
  stack: string[];
  highlights: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "smart-prescription-management",
    title: "Smart Prescription Management",
    tagline: "Doctor-facing web app with Claude-powered clinical assistance and WhatsApp delivery",
    description:
      "End-to-end prescription system that lets doctors dictate diagnoses by voice, get AI-assisted ICD-10 codes and drug-interaction warnings, generate a PDF, and deliver it to patients over WhatsApp. Built as a single full-stack project across React, Node, and serverless infra — and deployed on entirely free tiers.",
    context: "Personal project · 2025",
    stack: [
      "React",
      "Vite",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Cloudflare Workers",
      "Anthropic SDK",
      "Whisper",
      "Twilio",
    ],
    highlights: [
      "Integrated Claude (Anthropic SDK with prompt caching) for ICD-10 code suggestions, drug-interaction severity grading, and patient-friendly summaries.",
      "Voice dictation pipeline: browser MediaRecorder → HuggingFace Inference API running OpenAI Whisper, transcribed back into the form in real time.",
      "PDF generation with pdfkit and WhatsApp delivery via Twilio; analytics dashboard (Recharts) for demographics, top diagnoses, BMI/age distributions.",
      "Frontend on Cloudflare Workers, API on Render, MongoDB Atlas for persistence — entire stack runs on free tiers.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Rushikesh-pawar/Smart-Prescription-Management",
      },
      {
        label: "Live demo",
        href: "https://smart-prescription.rushikesh-pawar100.workers.dev",
      },
    ],
    featured: true,
  },
  {
    slug: "automatic-music-transcription",
    title: "Automatic Music Transcription",
    tagline: "Deep-learning pipeline that converts piano audio into MIDI notation",
    description:
      "End-to-end pipeline that takes raw piano audio and produces symbolic notation — frame-level polyphonic transcription across all 88 keys. Compares a traditional signal-processing baseline (pYIN) against CNN+BiLSTM and CNN+Transformer architectures on the MAESTRO v3 dataset.",
    context: "Personal project · Deep Learning · 2024",
    stack: ["PyTorch", "Transformers", "CNN", "BiLSTM", "Mel Spectrogram", "MIDI", "TensorBoard"],
    highlights: [
      "CNN+Transformer model (2.0M params) reached 0.816 ± 0.037 F1 on held-out validation — vs. 0.050 F1 for the pYIN signal-processing baseline.",
      "Beat the CNN+BiLSTM variant with fewer parameters; self-attention captured long-range harmonic dependencies more effectively than sequential gates.",
      "Trained on ~200 hours of paired audio/MIDI from MAESTRO v3 (Yamaha Disklavier) with precise temporal alignment; 2.2M frames in the development split.",
      "Full reproducible pipeline: audio → mel spectrogram → piano roll, file-level 80/20 split with seeded shuffling, checkpointing, and MIDI export.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Rushikesh-pawar/Automatic-Music-Transcription",
      },
    ],
    featured: true,
  },
  {
    slug: "contextual-threat-detection",
    title: "Contextual Threat Detection on Twitter",
    tagline: "Fine-tuned BERT classifier that separates real disasters from figurative language",
    description:
      "NLP system that classifies tweets as disaster vs. non-disaster — designed to help first responders cut through false positives where phrases like \"on fire\" are figurative rather than literal. Compares classical (TF-IDF + Naive Bayes) and transformer (BERT) approaches on the Kaggle disaster-tweets dataset.",
    context: "Personal project · NLP · 2024",
    stack: ["TensorFlow", "TF Hub", "BERT", "TF-IDF", "AdamW", "Pandas"],
    highlights: [
      "Fine-tuned BERT (bert_en_uncased_L-12_H-768_A-12) reached 97% validation accuracy and 0.97 F1 — vs. 81% / 0.80 F1 for the Naive Bayes baseline.",
      "Preprocessing pipeline handles URLs, emoji tokenization, lemmatization, stopword removal, and deduplication before feeding the encoder.",
      "AdamW optimizer with warmup, dropout + sigmoid head, 5 epochs on a stratified 95/5 split for honest evaluation.",
      "Output is a configurable-threshold submission CSV — designed to plug into a live Twitter pipeline for real-time disaster alerting.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Rushikesh-pawar/Contextual-Threat-Detection",
      },
    ],
    featured: true,
  },
  {
    slug: "yolov12-object-detection",
    title: "Real-Time Object Detection & Tracking",
    tagline: "YOLOv12 + ByteTrack with ONNX export and a Streamlit demo",
    description:
      "Production-shaped object detection and tracking project built on YOLOv12 (Ultralytics 2025) with persistent multi-object tracking via ByteTrack. Runs on webcam, image, or video; exports to ONNX so it deploys without PyTorch; ships with a Streamlit interface and CLI benchmarks.",
    context: "Personal project · Computer Vision · 2025",
    stack: ["PyTorch", "YOLOv12", "ByteTrack", "ONNX Runtime", "Streamlit", "OpenCV"],
    highlights: [
      "Benchmarked on an Apple M4 MacBook Air: YOLOv12n at ~55 FPS (18.3 ms avg) and YOLOv12s at ~39 FPS — real-time on consumer hardware.",
      "ByteTrack integration gives persistent IDs across frames for true multi-object tracking, not just per-frame detection.",
      "ONNX export targets CPU, CUDA, CoreML, DirectML, and OpenVINO via ONNX Runtime — same model, multiple deployment targets.",
      "Refactored from a 70-line OpenCV-DNN/YOLOv3 script into a typed Python package with pytest, CLI benchmarking, and a Streamlit UI.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Rushikesh-pawar/ObjectDetection",
      },
    ],
    featured: true,
  },
  {
    slug: "kambaz-lms",
    title: "Kambaz — Canvas-Style LMS",
    tagline: "Full-stack Next.js learning management platform",
    description:
      "A Canvas-inspired learning management system built end-to-end in Next.js with TypeScript — covers the LMS surface area students actually use day to day. Deployed on Vercel with continuous integration from GitHub.",
    context: "Personal project · Full Stack · 2025",
    stack: ["Next.js", "TypeScript", "React", "Tailwind", "Vercel"],
    highlights: [
      "Built in Next.js App Router with TypeScript across 96%+ of the codebase.",
      "Continuous deployment on Vercel with the standard GitHub integration.",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Rushikesh-pawar/kambaz-next-js",
      },
      {
        label: "Live demo",
        href: "https://kambaz-next-js-blue-alpha.vercel.app",
      },
    ],
  },
];
