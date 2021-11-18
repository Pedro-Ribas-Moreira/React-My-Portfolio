import uniqid from "uniqid";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <a href={skill.link}>
            <li key={uniqid()} className="skills__list-item btn btn--plain">
              {skill.item}
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
