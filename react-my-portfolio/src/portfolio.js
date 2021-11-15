const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://rajshekhar26.github.io/cleanfolio",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Pedro Moreira",
  role: "Web Developer | React Front End",
  description:
    "Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.",
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com",
    github: "https://github.com",
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
