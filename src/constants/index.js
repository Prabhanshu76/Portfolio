import {
    asu,
    muj,
    idemia,
    thales,
    infosys,
    footballcv,
    socialdcv,
    bot
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
  const githubLink=["https://github.com/Prabhanshu76"]
  const linkediLink=["https://linkedin.com/in/prabhanshu-singh-15261a139"]
  const resumeLink=["https://drive.google.com/file/d/1CGNaAMTAh6gZdDvoAW4UGpxTYRwN0QSv/view?usp=sharing"]
  const address=["Tempe, Arizona, United States"]
  const email=["psing153@asu.edu"]
  const phone=["+1 (623)-212-6786"]


  
  const intro = [
    "Graduate Student at ASU",
    "Former Software Engineer at IDEMIA",
    "Tech Enthusiast",
    "Passionate Learner",
    "Jack of many trades, mastering some",
    // Add more texts as needed
  ];

  const about=[
    "I'm a graduate student at Arizona State University and a Software Developer with 3 years of experience. I find joy in exploring different technologies and bringing ideas to life. My journey in Research and Development has been an exhilarating adventure, equipping me with valuable tech skills. Whether delving into Computer Vision, crafting for the web and Android, or exploring emerging technologies like Homomorphic Encryption and Confidential Computing, I'm dedicated to making tech accessible, simple, and enjoyable."
  ]

  const interestsData = [
    { title: "Football", description: "#Barca 🔵🔴⚽️", icon: faFutbol },
    { title: "Innovation", description: "Invent Tomorrow", icon: faLightbulb },
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
        "Relevant Coursework: Foundations of Algorithms,  Information Assurance & Security, Digital Video Processing, Knowledge Representation and Reasoning, Software Agility and Statistical Machine Learning"
        
      ],
    },
    {
      title: "Bachelor of Technology in Information Technology",
      company_name: "Manipal University Jaipur",
      icon: muj,
      iconBg: "#E6DEDD",
      date: "July 2016 - July 2020",
      points: [
        "Relevant Coursework: Design & Analysis of Algorithm, Operating Systems, Database Management Systems, Object Oriented Programming, Data Mining, Computer Networks, Cryptography and Machine Learning",
      ],
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "IDEMIA",
      icon: idemia,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - July 2023",
      points: [
        "Research and exploration on early use cases of privacy-preserving technologies, specifically Homomorphic Encryption and Trusted Execution Environment.",
        "Worked on implementation of IDEMIA’s proprietary face-matching Algorithm in FHE domain using Microsoft SEAL open source library in C++.",
        "Worked on Metaverse exploration and POC development in Decentraland and Spatial.io.",
        "Application development for IDEMIA biometric devices.",
        "Developed Android applications and personalized JAVA cards for CBDC Proof of Concept (POC) with a Japanese client."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Thales Group",
      icon: thales,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - June 2020",
      points: [
        "Worked on Proof of Concepts (POCs) centered around the applications of face detection and recognition for smart city.",
        "Worked on a project for Tailgate Detection using Thales Facial Detection and Recognition APIs.",
        "Implemented Face Detection using Retinanet object detection in Python and Google’s FaceNet Model in Python.",
        "Worked on Face Liveness Detection using Eye and Face Movement.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Infosys Limited",
      icon: infosys,
      iconBg: "#E6DEDD",
      date: "June 2019 - July 2019",
      points: [
        "Worked on a project titled ‘Open Pit Mine Autonomous Bot’.",
        "Operated with Arduino and Raspberry Pi.",
        "Implemented lane and edge detection using Computer Vision (OpenCV).",
        "Implemented localization using April Tags for autonomous movement of the bot.",
        "Designed a user interface (GUI) using PyQt."

      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "IDEMIA",
      icon: idemia,
      iconBg: "#E6DEDD",
      date: "June 2018 - July 2018",
      points: [
        "Worked on a project for the development of a Biometric Attendance System using fingerprint and facial authentication.",
        "Learned basics of the face and fingerprint matching.",
        "Learned to work on fingerprint devices and their APIs, developed by IDEMIA.",
        "Implemented JAVA-based GUI and JDBC.",
        "Learned basics of OpenCV and AES Encryption and its implementation in JAVA."
      ],
    },
  ];
  
const projectsIntro=[
  "Following projects showcase my skills and experience through real-world examples of my work. It reflects the ability to solve complex problems, work with different technologies, and manage projects effectively."
]
  
  const projects = [
    {
      name: "Football Analytics CV",
      description:
        "A real-time football analytics app using computer vision. It identifies players, tracks passes, and monitors possession for both teams, offering comprehensive match insights.",
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
          name: "YOLO V5",
          color: "pink-text-gradient",
        },
        {
          name: "ByteTrack",
          color: "pink-text-gradient",
        },
      ],
      image: footballcv,
      source_code_link: "https://github.com/Prabhanshu76/Football-Analytics-CV",
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
       tags:[ 
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
      source_code_link: "https://github.com/Prabhanshu76/Open-Pit-Mine-Autonomous-Bot",
    },
  ];
  
  export {githubLink, linkediLink, resumeLink, address, email, phone, intro, about, interestsData, experiences, projectsIntro,projects, education };
