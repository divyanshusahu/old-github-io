function Home() {
  return (
    <div
      className="grid gird-cols-1 lg:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center px-4 xl:px-0">
        <picture>
          <source srcSet="/images/profile.webp" type="image/webp" />
          <source srcSet="/images/profile.png" type="image/png" />
          <img alt="Profile Image" src="/images/profile.png" />
        </picture>
      </section>
      <section className="flex items-center px-4 xl:px-0">
        <div>
          <h1 className="font-serif text-6xl">Divyanshu Sahu</h1>
          <h2 className="font-mono text-2xl">
            Full Stack Developer and Web Application Secutiry Enthusiast
          </h2>
        </div>
      </section>
    </div>
  );
}

export default Home;
