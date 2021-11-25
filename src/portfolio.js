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
    name: "React Task Manager",
    description:
      "A Task Manager to keep track of your goals and priorities, utilizing React and React Hooks couple with Material Ui for a nice design.",
    stack: ["React", "Material Ui", "Hooks"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/React-TodoList",
    livePreview: "https://react-todo-list-amber.vercel.app/",
  },
  {
    name: "React - Food Delivery App",
    description:
      "A project of a food delivery app - focus on trainning react hooks like useContext to improve my skills",
    stack: ["React", "CSS Modules", "Reac Hooks"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/React-FoodDeliveryApp",
    livePreview: "https://react-food-delivery-app.vercel.app/ ",
  },
  {
    name: "React Form Validation",
    description:
      "Playing around with Reack Hooks (useReduce, useEffects) to create a optimized form validation with Authentication",
    stack: ["React", "CSS", "Reac Hooks"],
    sourceCode:
      "https://github.com/Pedro-Ribas-Moreira/React-FormValdation-Authentication",
    livePreview: "https://react-formvalidation.vercel.app/",
  },
  {
    name: "Restaurant Web Page",
    description:
      "A personal project to pratice the skills in Javascript and CSS",
    stack: ["Javascript", "css", "HTML"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/restaurant",
    livePreview: "https://pedro-ribas-moreira.github.io/restaurant/",
  },
  {
    name: "Play Mario! Web Page",
    description:
      "A personal project to pratice the skills in Javascript and CSS",
    stack: ["React", "Material Ui", "APIs"],
    sourceCode: "https://github.com/Pedro-Ribas-Moreira/Mario",
    livePreview: "https://pedro-ribas-moreira.github.io/Mario/",
  },
  {
    name: "Productivity Tool ",
    description:
      "A Web application coded with Google Script, with the main goal to generate quick notes through diferent policies and use Local Storage to save this notes as templates",
    stack: ["CSS", "Javascript", "Google Script"],
    sourceCode: "https://github.com",
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
