import { AiOutlineGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

function ContactMe() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center">
        <img alt="About Me SVG" src="/images/contactme.svg" />
      </section>
      <section className="flex items-center justify-center">
        <a href="https://github.com/divyanshusahu">
          <figure>
            <AiOutlineGithub size="4em" />
            <figcaption className="text-center mt-2">Github</figcaption>
          </figure>
        </a>
        <a href="https://twitter.com/divyan5hu" className="ml-8">
          <figure>
            <AiOutlineTwitter size="4em" />
            <figcaption className="text-center mt-2">Twitter</figcaption>
          </figure>
        </a>
        <a href="mailto:dsahu1997@gmail.com" className="ml-8">
          <figure>
            <AiOutlineMail size="4em" />
            <figcaption className="text-center mt-2">Mail</figcaption>
          </figure>
        </a>
      </section>
    </div>
  );
}

export default ContactMe;