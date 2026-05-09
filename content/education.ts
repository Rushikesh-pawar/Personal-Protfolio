export type Education = {
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  grade?: string;
  notes?: string[];
};

export const education: Education[] = [
  {
    school: "Northeastern University",
    degree: "Master of Science",
    field: "Computer Science",
    start: "Jan 2025",
    end: "May 2027",
    notes: ["Khoury College of Computer Sciences, Boston"],
  },
  {
    school: "Institute for Advanced Computing and Software Development (IACSD)",
    degree: "CDAC PG Diploma",
    field: "Big Data Analysis",
    start: "Sep 2021",
    end: "Apr 2022",
    grade: "Grade A",
  },
  {
    school: "KIT's College of Engineering Kolhapur",
    degree: "Bachelor of Technology",
    field: "Electronics and Communications Engineering",
    start: "2017",
    end: "2021",
    grade: "8.62 / 10 CGPI",
    notes: [
      "President — IETE Students Chapter (organized guest lectures and workshops across engineering colleges)",
      "President — ASSETS (Association of Electronics & Telecommunications Engineering Students)",
    ],
  },
];
