function AboutMe() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center md:order-last">
        <img alt="About Me SVG" src="/images/aboutme.svg" />
      </section>
      <section className="flex items-center text-lg">
        <p>
          I am Divyanshu Sahu. My interest lies in Full Stack Development and
          Information Security. I am a fourth year student of Indian Institute
          of Technology (IIT) Roorkee in Computer Science. I was a member of
          InfoSecIITR (a group of security enthusiasts from IIT Roorkee). I like
          participating in various Capture the Flag (CTF) events. I spend my
          free time reading novels (preferably fiction).
        </p>
      </section>
    </div>
  );
}

export default AboutMe;
