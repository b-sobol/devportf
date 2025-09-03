export const siteConfig = {
  name: "Bartłomiej Sobol",
  title: "Data Engineer",
  description: "Portfolio website of Bartłomiej Sobol",
  accentColor: "#1d4ed8",
  social: {
    email: "bartl.sobol@gmail.com",
    linkedin: "https://linkedin.com/in/bartłomiej-sobol",
    github: "https://github.com/RyanFitzgerald", // update with your actual GitHub if different
  },
  aboutMe:
    "Experienced Data Engineer skilled in designing and optimizing data pipelines to ensure seamless data flow. Proficient in SQL and Python with a track record of implementing scalable solutions that enhance data integrity and support informed decision-making. Experienced in ETL design, SAP migrations, and automation of workflows to improve efficiency.",
  skills: [
    "Python",
    "SQL",
    "GitHub",
    "Docker",
    "ETL",
    "Big Data Processing",
    "SAP",
    "Microsoft Office",
    "HTML/CSS",
    "VBA/VBS",
    "Power BI",
  ],
  projects: [
    {
      name: "ETL Pipeline Design & Maintenance",
      description:
        "Designed and maintained ETL processes ensuring data integrity, accuracy, and stability across multiple systems, including during SAP migrations.",
      link: "",
      skills: ["Python", "SQL", "ETL", "SAP"],
    },
    {
      name: "Data Validation & Monitoring System",
      description:
        "Implemented monitoring systems to validate large-scale data flows and ensure accuracy in global product catalog setup.",
      link: "",
      skills: ["Python", "SQL", "Data Quality", "Power BI"],
    },
    {
      name: "Automation Tools & Reporting",
      description:
        "Developed Excel-integrated automation tools and Power Automate flows, enabling faster and more reliable data processing and reporting.",
      link: "",
      skills: ["Python", "VBA", "Power Automate", "Excel"],
    },
  ],
  experience: [
    {
      company: "EssilorLuxottica",
      title: "Data Engineer",
      dateRange: "Apr 2023 - Present",
      bullets: [
        "Developed in-house software to automate workflows and improve operational efficiency.",
        "Implemented data validation and monitoring systems ensuring accuracy and reliability.",
        "Collaborated with stakeholders to gather requirements for global product catalog setup.",
        "Supported SAP system migration through data migration and validation efforts.",
        "Designed and maintained ETL processes to ensure pipeline stability and data integrity.",
      ],
    },
    {
      company: "Alstom",
      title: "Industrial Data Engineer",
      dateRange: "Jul 2021 - Apr 2023",
      bullets: [
        "Developed Excel-integrated automation tools to accelerate data flow between systems.",
        "Created Power Automate flows to automate repetitive tasks.",
        "Utilized Python for data mining and generating Excel-based reports.",
        "Created and validated SAP MM master data.",
        "Investigated and resolved SAP IDoc transfer issues across system interfaces.",
      ],
    },
    {
      company: "Doratech Czesław Baran",
      title: "CAD Designer Intern",
      dateRange: "Nov 2019 - Jan 2020",
      bullets: [
        "Assisted in the design of welded structures.",
      ],
    },
    {
      company: "Auto Design",
      title: "CAD Designer Assistant",
      dateRange: "Jul 2019 - Aug 2019",
      bullets: [
        "Assisted in the design of automotive components.",
      ],
    },
  ],
  education: [
    {
      school: "Silesian University of Technology, Gliwice, Poland",
      degree: "Bachelor of Engineering in Mechanics and Machine Design",
      dateRange: "Oct 2016 - Jan 2021",
      achievements: [],
    },
  ],
  languages: [
    { language: "Polish", level: "Native" },
    { language: "English", level: "C1 - Advanced" },
  ],
};
