const CONSTANTS = {
  colors: {
    black: "000000",
    FFFFFFF: "white",
  },
  navItems: [
    {
      id: 1,
      itemName: "Home",
      itemUrl: "/",
    },
    {
      id: 2,
      itemName: "About",
      itemUrl: "/about",
    },
    {
      id: 3,
      itemName: "Projects",
      itemUrl: "/projects",
    },
    {
      id: 4,
      itemName: "Contact me",
      itemUrl: "/contact",
    },
  ],
  resume: "Resume",
  downloading: "Downloading...",
  abhinavanRoy: "Abhinavan Roy",
  shortDetail:
    "A software engineer crafting seamless user experiences with creativity and precision.",
  copyright: "Copyright",
  skills: "SKILLS",
  allRightsReserved: "All rights reserved",
  myDescription: `A passionate self-taught Frontend Software engineer and a freelance developer. My passion for software lies 
    with dreaming up ideas and making them come true 
    with elegant interfaces. I take great care in the experience, 
    architecture, and code quality of the things I build. I am 
    self-motivated and a quick learner. I believe that maintaining discipline at work helps both me and my 
    work more effective. I am also an open-source enthusiast.`,
  myJourney: "MY JOURNEY",
  educationHeading: "EDUCATION",
  experienceHeading: "WORK EXPERIENCE",
  defaultSkill: "Default skill",
  languages: "LANGUAGES",
  languageList: [
    { name: "English", level: "C1" },
    { name: "German", level: "A2" },
    { name: "Hindi", level: "Native" },
    { name: "Bengali", level: "Mother tongue" },
  ],
  timelineEvents: [
    {
      id: 1,
      category: "education",
      title: "Master of Technology in Computer Science",
      organization: "University of Freiburg",
      location: "Germany",
      startDate: "October 2024",
      endDate: "Present",
      description:
        "Strengthening core foundations in systems, algorithms, and modern software engineering practices.",
    },
    {
      id: 3,
      category: "education",
      title: "Bachelor of Technology in Computer Science",
      organization: "SRM University of Technology",
      location: "Chennai, India",
      startDate: "July 2018",
      endDate: "May 2022",
      description:
        "Built a strong foundation in computer science, algorithms, and software development.",
    },
    {
      id: 2,
      category: "experience",
      title: "Software Engineer",
      organization: "Airtel Africa Digital Labs",
      location: "Gurugram, India",
      startDate: "June 2022",
      endDate: "October 2023",
      description:
        "Built user interfaces for agent-facing web apps, integrated REST APIs, and developed a token management system for in-store queue handling.",
    },
    {
      id: 4,
      category: "experience",
      title: "Technical Associate",
      organization: "Sutherland Global Services",
      location: "Bangalore, India",
      startDate: "February 2021",
      endDate: "April 2021",
      description:
        "Handled remote troubleshooting, guided customers through solutions, and managed multiple support cases in a fast-paced support environment.",
    },
  ],
  skillList: [
    {
      skillGroupId: 1,
      skillGroupName: "Markup and Programming Languages",
      skillGroupItems: ["HTML", "Javascript", "Typescript", "C++", "Python"],
    },
    {
      skillGroupId: 2,
      skillGroupName: "Styling",
      skillGroupItems: ["CSS", "SCSS", "Tailwind"],
    },
    {
      skillGroupId: 3,
      skillGroupName: "Libraries",
      skillGroupItems: ["React"],
    },
    {
      skillGroupId: 4,
      skillGroupName: "Others",
      skillGroupItems: ["Git", "REST", "Figma"],
    },
  ],
  loveToHear: "I would love to hear from you! 😄 ",
  leaveMessage: "Leave a message below, and I'll get back to you as soon as possible",
  connectWithMe: "Connect with me",
  web3FormsEndpoint: "https://api.web3forms.com/submit",
  web3FormsAccessKey: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || "",
  sending: "Sending...",
  sent: "Sent!",
  contactFormError: "Something went wrong while sending your message. Please try again.",
  missingContactConfig:
    "The contact form is not configured yet. Add your Web3Forms access key to enable it.",
  profileLinks: [ {
      linkedIn: {
        head: "https://www.",
        body: "linkedin.com/",
        tail: "in/abhinavanRoy"
      }
    },
      {
        twitter: {
          head: "https://x",
          body: ".com/",
          tail: "AbhinavanR"
        },
      },
      {
        gitHub: {
          head: "https://github",
          body: ".com/",
          tail: "abhinavanRoy"
        }
      }

    

  ],
  profilePic: "Portrait of Abhinavan Roy",
  send:"Send"
};
export default CONSTANTS;
