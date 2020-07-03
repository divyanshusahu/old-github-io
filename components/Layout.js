import Home from "./Home";
import AboutMe from "./AboutMe";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Layout() {
  return (
    <div className="container mx-auto">
      <main id="home">
        <Home />
      </main>
      <main id="aboutme" className="pt-16">
        <h3 className="text-4xl text-center pb-8">About Me</h3>
        <AboutMe />
      </main>
      <main id="work" className="pt-16">
        <h3 className="text-4xl text-center pb-8">Experience</h3>
        <WorkExperience />
      </main>
      <main id="projects" className="pt-16">
        <h3 className="text-4xl text-center pb-8">Projects</h3>
        <Projects />
      </main>
      <main id="contactme" className="pt-16">
        <h3 className="text-4xl text-center pb-8">Contact Me</h3>
        <ContactMe />
      </main>
    </div>
  );
}

export default Layout;
