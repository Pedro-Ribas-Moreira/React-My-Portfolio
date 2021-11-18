import { useEffect, useRef } from "react";

import { contact } from "../../portfolio";
import "./Contact.css";
import MessageSvg from "../../assets/MessageSvg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector("#Letter"),
      {
        y: 220,
      },
      {
        y: 37,
        scrollTrigger: {
          trigger: element.querySelector("#Letter"),
          start: "-140px center",
          end: "bottom bottom ",
          scrub: true,
        },
      }
    );
  }, []);

  if (!contact.email) return null;

  return (
    <section className="section contact center" id="contact" ref={ref}>
      <h2 className="section__title">Contact Me</h2>
      <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
        <span type="button" className="btn btn--outline  ">
          Email me
        </span>
      </a>
      <MessageSvg width="500px" height="500px" />
    </section>
  );
};

export default Contact;
