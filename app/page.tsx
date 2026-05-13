import Image from "next/image";
import EmailButton from "./components/EmailButton";
import ImageCarousel from "./components/ImageCarousel";

export default function Home() {
  return (
    <main className="flex flex-col">
      
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
                A software engineer building thoughtful, user-focused applications across full-stack development, AI-powered systems, and interactive software.
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
                My experience spans full-stack development, AI-powered applications, 
                interactive UI design, automated testing, and collaborative Agile  
                team development. I enjoy solving both technical and human-centered problems—whether 
                that means building adaptive learning systems, integrating APIs, designing intuitive  
                interfaces, or improving software reliability through clean architecture and testing. 
                <br /><br />
                Outside of tech, I enjoy crocheting, caring for my plants,
                hiking, and spending time with my family and my chihuahua, 
                Igby.
                <br /><br />
                <i>Technologies I work with:</i> Java, Python, JavaScript, React, 
                Next.js, JavaFX, Streamlit, MongoDB, REST APIs, Docker, Git, SQL, 
                Node.js, C, C++
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section
          id="projects"
          className="relative w-full bg-sage py-32 scroll-mt-40"
      >
        <div className="max-w-5xl mx-auto space-y-24">

          <h2 className="font-heading text-4xl text-forest text-center">
            Projects
          </h2>

          {/* Featured Project: Capstone */}
          <div className="bg-cream rounded-3xl shadow-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-2xl bg-forest/10 h-64 flex items-center justify-center">
              <ImageCarousel
                images={[
                  "/images/capstone/login-page.png",
                  "/images/capstone/learning-dashboard.png",
                  "/images/capstone/learning-dashboard-2.png",
                  "/images/capstone/learning-dashboard-3.png",
                  "/images/capstone/assess-my-understanding.png",
                  "/images/capstone/checks.png",
                  "/images/capstone/question-correct.png",
                  "/images/capstone/question-correct-feedback.png",
                  "/images/capstone/question-incorrect.png",
                  "/images/capstone/question-incorrect-feedback.png",
                  "/images/capstone/learning-assessment-summary.png",
                  "/images/capstone/learning-assessment-summary-2.png",
                  "/images/capstone/strengthen-my-understanding.png",
                  "/images/capstone/strengthen-my-understanding-2.png",
                ]}
              />
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-forest">
                Self-Learning AI Tutor
              </h3>

              <p className="font-body text-forest/80">
                Sponsored capstone project focused on building an adaptive AI-powered 
                tutoring platform that evaluates student reasoning, personalizes learning pathways, 
                and delivers structured feedback in real time.
              </p>

              <p className="text-sm text-forest/70">
                <strong>My role:</strong> Built adaptive assessment logic, enhanced reasoning analysis workflows,
                improved feedback quality, maintained MongoDB-backed data systems,
                and contributed automated testing within a remote Agile Scrum team.
              </p>

              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">Python</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">Streamlit</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">MongoDB</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">OpenAI API</span>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="/case-studies/Software-Quality-Report.pdf"
                  target="_blank"
                  className="px-5 py-2 text-sm rounded-xl bg-forest text-cream font-medium hover:bg-forest/90 transition"
                >
                  Software Quality Report
                </a>

                <a
                  href="/case-studies/Software-Quality-Plan.pdf"
                  target="_blank"
                  className="px-5 py-2 text-sm rounded-xl bg-forest text-cream font-medium hover:bg-forest/90 transition"
                >
                  Software Quality Plan
                </a>

                <span className="px-5 py-2 text-sm rounded-xl border border-forest text-forest font-medium">
                  🔒 Private Repo
                </span>
              </div>
            </div>
          </div>

          {/* Project: JavaFX GPS Distance App */}
          <div className="bg-cream rounded-3xl shadow-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image / Carousel */}
            <div className="rounded-2xl bg-forest/10 h-64 flex items-center justify-center">
              <ImageCarousel
                images={[
                  "/images/gps/enter-new-route-tab.png",
                  "/images/gps/map-preview-and-route-summary.png",
                  "/images/gps/select-previous-route-tab.png",
                  "/images/gps/select-previous-route-tab-2.png",
                  "/images/gps/cli-version.png"
                ]}
              />
            </div>

            {/* Text */}
            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-forest">
                JavaFX GPS Distance Application
              </h3>

              <p className="font-body text-forest/80">
                Desktop GPS application that calculates distances between locations
                using the Haversine formula, with both CLI and JavaFX GUI modes. Integrated 
                the Mapbox API to embed dynamic live mapping into the JavaFX interface.
              </p>

              <p className="text-sm text-forest/70">
                <strong>Highlights:</strong> Designed and implemented the JavaFX user interface, implemented
                distance calculations, persisted route data using JSON, and
                automated builds with Gradle.
              </p>

              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">Java</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">JavaFX</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">Gradle</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">JSON</span>
                <span className="px-3 py-1 rounded-full bg-forest/10 text-forest">API</span>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/ngmason/gps-distance-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl bg-forest text-cream font-medium hover:bg-forest/90 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
          {/* C Image Processor Project */}
          <div className="bg-cream rounded-3xl shadow-lg p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Image Carousel */}
            <ImageCarousel
              images={[
                "/images/c-image-processor/black-and-white-filter.png",
                "/images/c-image-processor/color-shift-filter.png",
                "/images/c-image-processor/swiss-cheese-filter.png",
                "/images/c-image-processor/blur-filter.png",
              ]}
            />

            {/* Project Content */}
            <div className="space-y-6">
              <h3 className="font-heading text-3xl text-forest">
                Multithreaded C Image Processor
              </h3>

              <p className="font-body text-forest/80">
                A command-line image processing tool written in C that applies
                multiple filters to BMP images using multithreading for performance.
              </p>

              <p className="text-sm text-forest/70">
                <strong>Highlights:</strong> Implemented custom filters 
                (blur, grayscale, color shift, and swiss-cheese effect), handled low-level 
                BMP parsing, and parallelized image processing using
                POSIX threads.
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-sage/40 text-forest text-sm">C</span>
                <span className="px-3 py-1 rounded-full bg-sage/40 text-forest text-sm">POSIX Threads</span>
                <span className="px-3 py-1 rounded-full bg-sage/40 text-forest text-sm">BMP Parsing</span>
                <span className="px-3 py-1 rounded-full bg-sage/40 text-forest text-sm">Memory Management</span>
                <span className="px-3 py-1 rounded-full bg-sage/40 text-forest text-sm">Linux / WSL</span>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <a
                  href="https://github.com/ngmason/c-image-processor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-xl bg-forest text-cream font-medium hover:bg-forest/90 transition"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Other projects will go here */}
        </div>
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
            I’d love to connect about software engineering opportunities,
            projects, or creative tech ideas 🌿
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