import Resume from "./assets/resume.pdf";
const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "http://localhost:3000/",
  title: "PM.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Pedro Moreira.",
  role: "Web Developer and React Front-End Engineer",
  description:
    "I’m a Web Developer with expertise in React for Front-End Development, I like to code things from scratch, and enjoy bringing ideas to life, I focus on responsive aplications built for an optimal user experience",
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
    name: "React Project - Task Manager",
    description:
      "A personal project with React, applying the latest hook features and Material Ui library for style.",
    stack: ["React", "Material Ui", "Hooks"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/React-TodoList",
    livePreview: "https://react-todo-list-amber.vercel.app/",
  },
  {
    name: "React Project - Food Delivery App",
    description:
      "A personal project with React, applying the latest hook features, with useContext to globally manage the Cart state. Also, I choose to use Firebase as database and CSS modules for style.",
    stack: ["React", "CSS Modules", "React Hooks", "Firebase"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/React-FoodDeliveryApp",
    livePreview: "https://react-food-delivery-app.vercel.app/ ",
  },
  {
    name: "React Project - Form Validation",
    description:
      "A personal project with React, applying the latest hook features, with useReduce and useEffects to create an optimized form validation. Also, I used CSS modules for style.",
    stack: ["React", "CSS", "React Hooks"],
    sourceCode:
      "https://github.com/Pedro-Ribas-Moreira/React-FormValdation-Authentication",
    livePreview: "https://react-formvalidation.vercel.app/",
  },
  {
    name: "Website Project - Restaurant Web Page",
    description:
      " A project with vanilla JS and CSS, utilizing keyframes and javascript animations to deliver a modern and responsive website for a restaurant. ",
    stack: ["Javascript", "CSS", "HTML"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/restaurant",
    livePreview: "https://pedro-ribas-moreira.github.io/restaurant/",
  },
  {
    name: "Website Project - Play Mario! Web Page",
    description:
      "A project for my Web Development Diploma, with vanilla JS and CSS, I developed an animated website with a game thematic.",
    stack: ["Javacript", "CSS", "HTML"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/Mario",
    livePreview: "https://pedro-ribas-moreira.github.io/Mario/",
  },
  {
    name: "AppScrit Project - Productivity Tool ",
    description:
      "A Web App developed for my previous project in Accenture. Built with Google AppScripts, Javascript, and CSS. It is a tool to generate quick notes and can save these notes as templates",
    stack: ["CSS", "Javascript", "Google Script"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/Productivity-Tool",
    livePreview:
      "https://script.google.com/macros/s/AKfycbwuaEyLBckkGhqt6v3p839KrQZlvJfpJ9Dn7uNztTqRfKj4mSeQu90FOyMAiKqDMOCt/exec",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  { item: "HTML", link: "https://www.w3schools.com/html/" },
  { item: "CSS", link: "https://www.w3schools.com/css/" },
  { item: "JavaScript", link: "https://www.w3schools.com/js/DEFAULT.asp" },
  { item: "TypeScript", link: "https://www.typescriptlang.org/" },
  { item: "Gsap", link: "https://greensock.com/react/" },
  { item: "React", link: "https://reactjs.org/" },
  { item: "Redux", link: "https://redux.js.org/" },
  { item: "React Hooks", link: "https://reactjs.org/docs/hooks-intro.html" },
  { item: "SASS", link: "https://sass-lang.com/" },
  { item: "Material UI", link: "https://mui.com/pt/" },
  { item: "Bootstrap", link: "https://getbootstrap.com/" },
  { item: "Firebase", link: "https://firebase.google.com/" },
  { item: "Vercel", link: "https://vercel.com/" },
  { item: "Mongo DB", link: "https://www.mongodb.com/" },
  { item: "MySql", link: "https://www.mysql.com/ " },
  {
    item: "Google App Script",
    link: "https://developers.google.com/apps-script",
  },
  { item: "Source Control", link: "https://github.com/" },
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "pedrohenryque.rm@mail.com",
};

export { header, about, projects, skills, contact };
