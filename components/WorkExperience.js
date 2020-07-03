import DescriptionCard from "./DescriptionCard";

function WorkExperience() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center px-4 xl:px-0">
        <picture>
          <source srcSet="/images/work.webp" type="image/webp" />
          <source srcSet="/images/work.png" type="image/png" />
          <img alt="About Me SVG" src="/images/work.png" />
        </picture>
      </section>
      <section className="flex items-center px-4 xl:px-0">
        <DescriptionCard
          avatar="/images/zeus-logo.png"
          avataralt="Zeus Numerix Logo"
          title="Zeus Numerix"
          subtitle="Full Stack Developer, Internship"
          extra="VueJS, Vtkjs, Flask, Docker, AWS"
          description="My work was to deploy their C++ based offline software to the cloud.
          I created a web interface using VueJs and VtkJs.
          Used Flask for the server and DynaboDB as NoSQL based database.
          Finally deployed using AWS ECR AWS Fargate."
          previewlink="https://test.zeusnumerix.com"
        />
      </section>
    </div>
  );
}

export default WorkExperience;
