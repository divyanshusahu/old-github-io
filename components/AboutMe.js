function AboutMe() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center lg:order-last px-4 xl:px-0">
        <picture>
          <source srcSet="/images/aboutme.webp" type="image/webp" />
          <source srcSet="/images/aboutme.png" type="image/png" />
          <img alt="About Me SVG" src="/images/aboutme.png" />
        </picture>
      </section>
      <section className="flex items-center text-lg px-4 xl:px-0">
        <p>
          I am Divyanshu Sahu. My interest lies in Full Stack Development and
          Information Security. I am a fourth-year student at the Indian
          Institute of Technology (IIT) Roorkee in Computer Science. I was a
          member of InfoSecIITR (a group of security enthusiasts from IIT
          Roorkee). I like participating in many Capture the Flag (CTF) events.
          During my free time, I love reading novels (preferably fiction).
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
