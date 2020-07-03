function Home() {
  return (
    <div
      className="grid gird-cols-1 md:grid-cols-2 gap-16"
      style={{ minHeight: "480px" }}
    >
      <section className="flex items-center justify-center">
        <img
          alt="Profile Image"
          src="/images/profile.png"
          style={{ width: "480px" }}
        />
      </section>
      <section className="flex items-center">
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
