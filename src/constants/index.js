import {
  asu,
  muj,
  idemia,
  thales,
  infosys,
  footballcv,
  socialdcv,
  bot,
} from "../assets";

import {
  faFutbol,
  faRobot,
  faGamepad,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const githubLink = ["https://github.com/Prabhanshu76"];
const linkediLink = ["https://linkedin.com/in/prabhanshu-singh-15261a139"];
const resumeLink = [
  "https://drive.google.com/file/d/17MrqRE3RlTLRLkFm1Vr3QcGbEvKrsm76/view?usp=sharing",
];
const address = ["Tempe, Arizona, United States"];
const email = ["psing153@asu.edu"];
const phone = ["+1 (623)-212-6786"];

const intro = [
  "Graduate Student at ASU",
  "Former Software Engineer at IDEMIA",
  "Tech Enthusiast",
  "Passionate Learner",
  "Jack of many trades, mastering some",
  // Add more texts as needed
];

const about = [
  "I'm a graduate student at Arizona State University and a Software Developer with 3 years of experience. I find joy in exploring different technologies and bringing ideas to life. My journey in Research and Development has been an exhilarating adventure, equipping me with valuable tech skills. Whether delving into Computer Vision, crafting for the web and Android, or exploring emerging technologies like Homomorphic Encryption and Confidential Computing, I'm dedicated to making tech accessible, simple, and enjoyable.",
];

const interestsData = [
  { title: "Football", description: "#Barca. 🔵🔴⚽️", icon: faFutbol },
  { title: "Innovation", description: "Invent Tomorrow.", icon: faLightbulb },
  { title: "Tech", description: "Code. Connect. Create.", icon: faRobot },
  { title: "Gaming", description: "Respawn. Retry. Conquer.", icon: faGamepad },
];

const education = [
  {
    title: "Master of Science in Computer Science",
    company_name: "Arizona State University",
    icon: asu,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Relevant Coursework: Foundations of Algorithms, Software Security, Cloud Computing, Software Testing, Software Agility, Machine Learning, Information Assurance & Security and Digital Video Processing",
    ],
  },
  {
    title: "Bachelor of Technology in Information Technology",
    company_name: "Manipal University Jaipur",
    icon: muj,
    iconBg: "#E6DEDD",
    date: "July 2016 - July 2020",
    points: [
      "Relevant Coursework:  Data Structures and Algorithms, Operating Systems, Computer Networks, Database Management Systems, Object Oriented Programming, Software Engineering, Data Mining, Computer Networks, Cryptography and Machine Learning",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "IDEMIA",
    icon: idemia,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - July 2023",
    points: [
      "Responsible for researching and developing projects to identify and adopt cutting-edge deep technologies for solving specific challenges in the domain of biometrics.",
      "Researched multiple advanced technical solutions in privacy-preserving technologies and implemented IDEMIA's first 1-to-1 face-matching system in the encrypted domain.",
      "Conducted in-depth exploration of Homomorphic Encryption, Confidential Computing, and performance testing on various open-source libraries.",
      "Conducted comprehensive technology evaluations to determine the feasibility and effectiveness of various open-source libraries, including Microsoft SEAL, Microsoft PyEVA, ZAMA TFHE, Intel SGX, Open Enclave, and Gramine, for potential use cases in IDEMIA's business domain.",
      "Developed applications for various projects utilizing IDEMIA’s biometric solutions, leveraging technologies like React and Qt for frontend development, Python and JavaScript for backend API development, SQL and MongoDB for database management, and library development using C++ and C#.",
      "Developed a virtual experience center using React and Leaflet.js, and created Progressive Web Apps (PWAs) for enhanced user experience.",
      "Developed applications for a Central Bank Digital Currency (CBDC) pilot with a Japanese client, including Android application development, utilizing various AWS services, and creating Java Card applets.",
      "Led the exploration and integration of biometrics within the Metaverse, focusing on innovative futuristic use cases in IDEMIA's business domain.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Thales Group",
    icon: thales,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - June 2020",
    points: [
      "Conducted research and developed innovative solutions to advance the applications of face detection and recognition technologies for smart city initiatives using Thales face matching algorithms.",
      "Developed desktop applications and graphical user interfaces (GUIs) using C# and WPF within the .NET framework.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Infosys Limited",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "June 2019 - July 2019",
    points: [
      "Developed a robust localized autonomous bot designed for a feasibility study on unmanned ground vehicles in open-pit mines, showcasing efficient autonomous navigation in challenging terrains.",
      "Managed bot movement by utilizing Arduino and Raspberry Pi for control and computation.",
      "Utilized OpenCV and IR sensors for lane and edge detection, ensuring accurate navigation in diverse terrains.",
      "Implemented localization using AR Tags to enable precise autonomous navigation.",
      "Employed linear regression to predict the bot's steering angle and speed based on its real-time 3D coordinates.",
      "Developed a desktop application with PyQT that allows for manual bot control, configuration editing, and real-time tracking of multiple bots.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "IDEMIA",
    icon: idemia,
    iconBg: "#E6DEDD",
    date: "June 2018 - July 2018",
    points: [
      "Designed and implemented a robust Biometric Attendance System incorporating fingerprint and facial authentication, leveraging IDEMA's proprietary biometric devices.",
      "Implemented both facial and fingerprint matching functionalities in the Biometric Attendance System.",
      "Developed a user-friendly graphical interface using the Swing Framework.",
      "Employed JDBC and SQL for efficient storage of biometric templates.",
    ],
  },
];

const projectsIntro = [
  "Following projects showcase my skills and experience through real-world examples of my work. It reflects the ability to solve complex problems, work with different technologies, and manage projects effectively.",
];

const projects = [
  {
    name: "KickIntel AI",
    description:
      "An advanced football analytics platform that leverages cutting-edge computer vision and artificial intelligence technologies to provide deep insights into football matches.",
    tags: [
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "PyTorch",
        color: "pink-text-gradient",
      },
      {
        name: "FastAPI",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: footballcv,
    source_code_link: "https://github.com/Prabhanshu76/KickIntel-AI",
  },
  {
    name: "Social Distancing CV",
    description:
      "A real-time computer vision tool designed to prevent the spread of COVID-19 by detecting adherence to social distancing rules (maintaining 6 feet apart) through video surveillance.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "YOLO V3",
        color: "green-text-gradient",
      },
    ],
    image: socialdcv,
    source_code_link: "https://github.com/Prabhanshu76/Social-Distancing-CV",
  },
  {
    name: "Pit Mine Autonomous Bot",
    description:
      "A robustly localized autonomous bot designed as a proof of concept for an unmanned ground vehicle in open-pit mines, showcasing efficient navigation in challenging terrains.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Raspberry Pi",
        color: "green-text-gradient",
      },
      {
        name: "Open CV",
        color: "pink-text-gradient",
      },
      {
        name: "PyQt5",
        color: "pink-text-gradient",
      },
    ],
    image: bot,
    source_code_link:
      "https://github.com/Prabhanshu76/Open-Pit-Mine-Autonomous-Bot",
  },
];

export {
  githubLink,
  linkediLink,
  resumeLink,
  address,
  email,
  phone,
  intro,
  about,
  interestsData,
  experiences,
  projectsIntro,
  projects,
  education,
};
