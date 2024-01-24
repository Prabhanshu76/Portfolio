import { motion } from "framer-motion";
import { StarsCanvas } from "./index";
import { Tilt } from "react-tilt";
import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import {
  githubLink,
  linkediLink,
  resumeLink,
  email,
  phone,
  address,
  intro,
  interestsData,
  about,
  experiences,
  education,
  projectsIntro,
  projects,
} from "../constants";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { fadeIn, textVariant } from "../utils/motion";
import { github, prf } from "../assets";

import "./styles.css";

import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import TextTransition, { presets } from "react-text-transition";

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <StarsCanvas />
      <AboutSection setSection={setSection} id="section-1" />
      <About id="section-2" />
      {!isMobile && <Interests id="section-3" />}
      <Education id="section-4" />
      <WorkExperience id="section-5" />
      <div className="mt-20 flex flex-col"></div>
      <Projects id="section-6" />
      <div className="relative z-0">
        <Contact id="section-7" />
      </div>
    </div>
  );
};

{
  /*About*/
}
const ScrollDownSpinner = () => {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div id="mouse-scroll" onClick={handleScrollDown}>
      <div className="mouse">
        <div className="mouse-in"></div>
      </div>
      <div>
        <span className="down-arrow-1"></span>
        <span className="down-arrow-2"></span>
        <span className="down-arrow-3"></span>
      </div>
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  const [index, setIndex] = useState(0);
  const { id } = props;

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section mobileTop id={id}>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0 md:mb-2">
        Hi, I'm
        <br />
        <span className="bg-white px-1 italic md:mt-2 ">Prabhanshu</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        <TextTransition springConfig={presets.wobbly}>
          {intro[index % intro.length]}
        </TextTransition>
      </motion.p>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <AwesomeButtonSocial
          type="github"
          style={{ marginRight: "15px" }}
          onPress={() => {
            window.open(githubLink, "_blank");
          }}
        >
          {" "}
        </AwesomeButtonSocial>
        <AwesomeButtonSocial
          type="linkedin"
          onPress={() => {
            window.open(linkediLink, "_blank");
          }}
        >
          {" "}
        </AwesomeButtonSocial>
      </div>
      {/* <ScrollDownSpinner /> */}
    </Section>
  );
};

const About = (props) => {
  const { id } = props;
  // State to store the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Event listener to update windowWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Styles based on screen width
  const imageStyles =
    windowWidth <= 767
      ? {
          width: "80%",
          marginRight: "0%",
          marginBottom: "5%",
        }
      : {
          width: "30%",
          marginRight: "20px",
        };
  return (
    <div id={id} className="flex-grow">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview</h2>
      </motion.div>
      <div className="card-container">
        <div className="float-layout">
          <div className="card-image">
            <img
              src={prf}
              style={{
                height: "auto",
                borderRadius: "4px",
                opacity: 0.8,
                ...imageStyles, // Apply the dynamic styles
              }}
              className="mobile-image"
            />

            <div
              className="card"
              style={{
                backgroundColor: "#161925",
                borderBottom: "2px solid white",
                borderRadius: "4px",
                opacity: "0.9",
              }}
            >
              {/* Replace "#YourColorHere" with your desired background color */}
              <div className="card-title">
                <div className="card-desc mt-4 text-white text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto">
                  {about}
                  <ul className="mt-4 list-disc ml-5 space-y-2">
                    <li className="text-[17px] leading-[30px]">
                      <strong>Address:</strong> {address}
                    </li>
                    <li className="text-[17px] leading-[30px]">
                      <strong>Email:</strong> {email}
                    </li>
                    <li className="text-[17px] leading-[30px]">
                      <strong>Phone:</strong> {phone}
                    </li>
                  </ul>
                </div>
              </div>

              <AwesomeButton
                size="large"
                onPress={() => {
                  window.open(resumeLink, "_blank");
                }}
                ripple={true}
                style={{
                  "--button-default-height": "55px",
                  "--button-default-font-size": "14px",
                  "--button-default-border-radius": "6px",
                  "--button-horizontal-padding": "20px",
                  "--button-raise-level": "6px",
                  "--button-hover-pressure": "1",
                  "--transform-speed": "0.185s",
                  "--button-primary-color": "#161925",
                  "--button-primary-color-dark": "#141414",
                  "--button-primary-color-light": "#fbfbfb",
                  "--button-primary-color-hover": "#161925",
                  "--button-primary-color-active": "#212121",
                  "--button-primary-border": "0px solid transparent",
                  marginBottom: "5%", // Add this line
                }}
              >
                Download my CV
              </AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//164x304

const InterestBox = ({ backgroundColor, title, description, icon }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div
        className="ed_box_animado rounded-md text-center border-b-2 border-white"
        style={{
          backgroundColor,
          width: "164px",
          height: "304px",
        }}
      >
        <FontAwesomeIcon className="fa fa-car ed_icon" icon={icon} size="4x" />
        <h3 className="ed_title">{title}</h3>
        <span className="ed_content">{description}</span>
      </div>
    </div>
  );
};

const Interests = (props) => {
  const { id } = props;

  return (
    <div id={id}>
      <h2 className={`${styles.sectionHeadText} text-center mt-10`}>
        Interests
      </h2>
      <div
        className={window.innerWidth > 767 ? "row" : "column"}
        style={{ marginRight: window.innerWidth <= 767 ? "25%" : "0" }}
      >
        {interestsData.map((interest, index) => (
          <InterestBox
            key={index}
            backgroundColor="#161925"
            title={interest.title}
            description={interest.description}
            icon={interest.icon}
          />
        ))}
        <div className="w-100 d-sm-none"></div> {/* Clearfix for mobile view */}
      </div>
    </div>
  );
};

{
  /*Experience*/
}

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#161925",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #fff" }}
      date={<span style={{ margin: "0 10px" }}>{experience.date}</span>}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[80%] h-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = (props) => {
  const { id } = props;
  return (
    <div id={id}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mt-10`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={education}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

const WorkExperience = (props) => {
  const { id } = props;
  return (
    <div id={id}>
      <motion.div variants={textVariant()} style={{ marginTop: "50px" }}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

{
  /*Projects1*/
}
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 450,
        }}
        className="p-5 rounded-md sm:w-[360px] w-full border-b-2 border-white"
        style={{ backgroundColor: "#161925" }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-transform transform hover:scale-110"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Adjust the alpha value as needed
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags && Array.isArray(tags) && tags.length > 0 ? (
            tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px]`}
                //style={{ color: tag.color || "#def71d" }}
                style={{ color: "#def71d" }}
              >
                #{tag.name}
              </p>
            ))
          ) : (
            <p className="text-[14px] text-gray-500">No tags available</p>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = (props) => {
  const { id } = props;
  return (
    <div id={id}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-7">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto text-white"
        >
          {projectsIntro}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <motion.div className="text-center mt-5">
        <AwesomeButton
          size="large"
          onPress={() => {
            window.open(githubLink + "?tab=repositories", "_blank");
          }}
          ripple={true}
          style={{
            "--button-default-height": "55px",
            "--button-default-font-size": "14px",
            "--button-default-border-radius": "6px",
            "--button-horizontal-padding": "20px",
            "--button-raise-level": "6px",
            "--button-hover-pressure": "1",
            "--transform-speed": "0.185s",
            "--button-primary-color": "#161925",
            "--button-primary-color-dark": "#141414",
            "--button-primary-color-light": "#fbfbfb",
            "--button-primary-color-hover": "#161925",
            "--button-primary-color-active": "#212121",
            "--button-primary-border": "0px solid transparent",
          }}
        >
          View More
        </AwesomeButton>
      </motion.div>
    </div>
  );
};

{
  /*Contact*/
}

const Contact = (props) => {
  const interestData = [
    { icon: faPhone, text: "", link: "tel:your-phone-number" },
    { icon: faEnvelope, text: "", link: "mailto:psing153@asu.edu" },
    {
      icon: faLinkedin,
      text: "",
      link: linkediLink,
    },
    { icon: faGithub, text: "", link: githubLink },
  ];

  const { id } = props;

  return (
    <div id={id}>
      <p
        className={`${styles.sectionSubText} text-center`}
        style={{ marginTop: "100px" }}
      >
        Let's connect
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Contact</h2>

      <div
        className="icons-container"
        style={{ fontSize: "1.5em", marginBottom: "10px" }}
      >
        {interestData.map((interest, index) => (
          <div key={index} className="block">
            <a
              href={interest.link}
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security best practice for opening links in a new tab
              className="hovicon effect-1 sub-a mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
              title={`Interest ${index + 1}`}
            >
              <b
                className="icon-camera-retro"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <FontAwesomeIcon
                  icon={interest.icon}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: "5px",
                  }}
                />
                <span className="text" style={{ textAlign: "center" }}>
                  {interest.text}
                </span>
              </b>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
