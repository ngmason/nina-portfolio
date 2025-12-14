import Image from "next/image";
import EmailButton from "./components/EmailButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      
      {/* Home Section */}
      <section
        id="home"
        className="w-full bg-light-sage"
      >
        <div className="max-w-5xl mx-auto min-h-[80vh] flex flex-col justify-center px-6">
          
          <div className="max-w-2xl space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl text-forest leading-tight">
              Hi, I'm Nina
            </h1>

            <p className="font-body text-lg md:text-xl text-forest/80">
              A software engineer passionate about building thoughtful,
              human-centered web experiences.
            </p>

          <div className="flex gap-4 pt-6">

            <a
              href="/resume/Nina_Mason_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-forest text-cream font-medium hover:bg-forest/90 transition"
            >
              Resume
            </a>

            <a
              href="/#contact"
              className="px-6 py-3 rounded-xl border border-forest text-forest font-medium hover:bg-forest/10 transition"
            >
              Contact Me
            </a>

          </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full min-h-screen bg-cream flex items-center justify-center"
      >
        <h2 className="font-heading text-4xl text-forest">
          About Section (Coming Soon 🌿)
        </h2>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full min-h-screen bg-sage flex items-center justify-center"
      >
        <h2 className="font-heading text-4xl text-forest">
          Projects Section (Coming Soon ✨)
        </h2>
      </section>

      {/* Contact / Links Section */}
      <section
        id="contact"
        className="w-full min-h-screen bg-light-sage flex items-center justify-center"
      >
        <div className="bg-cream rounded-2xl shadow-lg p-10 w-full max-w-md text-center space-y-6">
          <h2 className="font-heading text-3xl text-forest">
            Let's Connect
          </h2>

          <p className="font-body text-forest/80">
            I'd love to chat - whether it's about opportunities,
            projects, or just saying hi 🌿
          </p>

          <div className="space-y-4 pt-4">

            <a
              href="https://github.com/ngmason"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-forest py-3 text-center text-cream font-medium hover:bg-forest/90 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/nina-mason-25b5b332b/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl bg-forest py-3 text-center text-cream font-medium hover:bg-forest/90 transition"
            >
              LinkedIn
            </a>

            <EmailButton/>
          </div>
        </div>
      </section>

    </main>
  );
}