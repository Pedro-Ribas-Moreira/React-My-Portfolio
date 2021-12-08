import uniqid from "uniqid";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import "./ProjectContainer.css";

const ProjectContainer = (props) => {
  return (
    <div className="project box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>

      <h3>{props.project.name}</h3>

      <p className="project__description">{props.project.description}</p>
      {props.project.stack && (
        <ul className="project__stack">
          {props.project.stack.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {props.project.sourceCode && (
        <a
          href={props.project.sourceCode}
          aria-label="source code"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
      )}

      {props.project.livePreview && (
        <a
          href={props.project.livePreview}
          aria-label="live preview"
          className="link link--icon"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );
};
// const ProjectContainer = ({ project }) => (
// <div className="project">
//   <h3>{pprops.roject.name}</h3>

//   <p className="project__description">{project.description}</p>
//   {project.stack && (
//     <ul className="project__stack">
//       {project.stack.map((item) => (
//         <li key={uniqid()} className="project__stack-item">
//           {item}
//         </li>
//       ))}
//     </ul>
//   )}

//   {project.sourceCode && (
//     <a
//       href={project.sourceCode}
//       aria-label="source code"
//       className="link link--icon"
//     >
//       <GitHubIcon />
//     </a>
//   )}

//   {project.livePreview && (
//     <a
//       href={project.livePreview}
//       aria-label="live preview"
//       className="link link--icon"
//     >
//       <LaunchIcon />
//     </a>
//   )}
// </div>
// );

export default ProjectContainer;
