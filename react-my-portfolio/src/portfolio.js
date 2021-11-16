import Resume from "./assets/resume.pdf";
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "http://localhost:3000/",
  title: "PM.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Pedro Moreira",
  role: "Web Developer | React Front-End",
  description:
    "I’m a Front-End developer, with expertise in React and passion to create cool animations and resposive applications.",
  resume: { Resume },
  social: {
    linkedin: "https://www.linkedin.com/in/pedroh-moreira/",
    github: "https://github.com/Pedro-Ribas-Moreira",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "React Dashboard",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["React", "Material Ui", "APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "React Dashboard",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["React", "Material Ui", "APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "React Dashboard",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["React", "Material Ui", "APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "React Dashboard",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["React", "Material Ui", "APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Project 3",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "React Hooks",
  "SASS",
  "Material UI",
  "Git",
  //   "CI/CD",
  //   "Jest",
  //   "Enzyme",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "pedrohenryque.rm@mail.com",
};

export { header, about, projects, skills, contact };
