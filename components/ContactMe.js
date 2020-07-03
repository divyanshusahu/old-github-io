import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "react-icons/ai";

function ContactMe() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center px-4 xl:px-0">
        <picture>
          <source srcSet="/images/contactme.webp" type="image/webp" />
          <source srcSet="/images/contactme.png" type="image/png" />
          <img alt="About Me SVG" src="/images/contactme.png" />
        </picture>
      </section>
      <section className="flex items-center justify-center">
        <a href="https://github.com/divyanshusahu">
          <figure>
            <AiOutlineGithub size="4em" />
            <figcaption className="text-center mt-2">Github</figcaption>
          </figure>
        </a>
        <a href="https://twitter.com/divyan5hu" className="ml-4 sm:ml-8">
          <figure>
            <AiOutlineTwitter size="4em" />
            <figcaption className="text-center mt-2">Twitter</figcaption>
          </figure>
        </a>
        <a href="mailto:dsahu1997@gmail.com" className="ml-4 sm:ml-8">
          <figure>
            <AiOutlineMail size="4em" />
            <figcaption className="text-center mt-2">Mail</figcaption>
          </figure>
        </a>
        <a href="https://www.linkedin.com/in/divyanshu-sahu/" className="ml-4 sm:ml-8">
          <figure>
            <AiOutlineLinkedin size="4em" />
            <figcaption className="text-center mt-2">LinkedIn</figcaption>
          </figure>
        </a>
      </section>
    </div>
  );
}

export default ContactMe;
