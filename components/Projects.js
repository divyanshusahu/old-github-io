import { AiOutlineArrowRight } from "react-icons/ai";

import DescriptionCard from "./DescriptionCard";

function Projects() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center lg:order-last px-4 xl:px-0">
        <picture>
          <source srcSet="/images/projects.webp" type="image/webp" />
          <source srcSet="/images/projects.png" type="image/png" />
          <img alt="About Me SVG" src="/images/projects.png" />
        </picture>
      </section>
      <section className="flex flex-col justify-around px-4 xl:px-0">
        <div className="mb-8">
          <DescriptionCard
            avatar="/images/ron.png"
            avataralt="Ron Weasleyb"
            title="Ron Weasley"
            description="A Ron Weasley(Harry Potter character) appreciation website build using React, Next, and Flask.
            The project is deployed using Amazon Web Services."
            extra="ReactJS, NextJS, Flask, AWS"
            previewlink="https://www.ronweasley.co"
          />
        </div>
        <div className="mb-8">
          <DescriptionCard
            avatar="/images/minictf.png"
            avataralt="MiniCTF"
            title="MiniCTF"
            description="A Django based platform for hosting Capture the Flag(CTF) events.
            The platform supports the live-time scoreboard along with tie-breakers."
            extra="Python, Django, MySQL"
            previewlink="https://github.com/divyanshusahu/miniCTF"
          />
        </div>
        <div className="mb-8">
          <DescriptionCard
            avatar="/images/ebook.png"
            avataralt="Ebook Downloader"
            title="EBook Downloader"
            description="A python-based web scraping tool using Beautiful Soup library,
            which downloads ebooks from gen.lib.rus.ec"
            extra="Web Scraping, Python"
            previewlink="https://github.com/divyanshusahu/EBook-Downloader"
          />
        </div>
        <a
          href="https://github.com/divyanshusahu?tab=repositories"
          className="text-gray-800 hover:underline"
        >
          More at Github{" "}
          <AiOutlineArrowRight className="inline-block" size="1em" />
        </a>
      </section>
    </div>
  );
}

export default Projects;
