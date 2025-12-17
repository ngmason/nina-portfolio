import Image from "next/image";
import EmailButton from "./components/EmailButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      
      {/* Home Section */}
      <section
        id="home"
        className="w-full bg-light-sage scroll-mt-40"
      >
        <div className="max-w-5xl mx-auto min-h-[80vh] px-6 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-heading text-5xl md:text-5xl text-forest leading-tight">
                Hi, I'm Nina Mason
              </h1>

              <p className="font-body text-lg md:text-xl text-forest/80 max-w-xl mx-auto md:mx-0">
                A software engineer who builds intuitive, full-stack applications with care for both users and code.
              </p>

              <div className="flex gap-4 pt-6 justify-center md:justify-start">
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
            <div className="rounded-full border-4 border-cream shadow-xl ring-4 ring-forest/40 hover:scale-105 transition">
              <Image
                src="/images/profile.jpg"
                alt="Photo of Nina Mason"
                width={280}
                height={280}
                className="rounded-full border-4 border-cream shadow-lg hover:scale-105 transition"
                priority
              />
            </div>

          </div>

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-cream py-24 px-6 scroll-mt-40"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="flex justify-center">
            <Image
              src="/images/about-me.png"
              alt="Photo of Nina Mason"
              width={300}
              height={400}
              className="rounded-3xl shadow-xl ring-4 ring-forest/10 object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="font-heading text-4xl text-forest">
              About Me
            </h2>

            <div className="bg-light-sage rounded-3xl p-8 shadow-md">
              <p className="font-body text-forest/80 leading-relaxed text-md">
                I'm a software engineer who loves building thoughtful,
                human-centered applications — the kind that feel intuitive,
                accessible, and genuinely enjoyable to use.
                <br /><br />
                My experience spans full-stack development, UI design,
                and collaborative team projects. I care deeply about
                writing clean, maintainable code while also crafting
                interfaces that feel warm and intentional.
                <br /><br />
                Outside of tech, I enjoy crocheting, caring for my plants,
                hiking, and spending time with my family and my chihuahua, 
                Igby.
                <br /><br />
                <i>Technologies I work with:</i> Java, Python, JavaScript, 
                React, Next.js, JavaFX, MongoDB, REST APIs, Git.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="w-full min-h-screen bg-sage flex items-center justify-center scroll-mt-40"
      >
        <h2 className="font-heading text-4xl text-forest">
          Projects Section (Coming Soon ✨)
        </h2>
      </section>

      {/* Contact / Links Section */}
      <section
        id="contact"
        className="w-full min-h-screen bg-light-sage flex items-center justify-center scroll-mt-32"
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