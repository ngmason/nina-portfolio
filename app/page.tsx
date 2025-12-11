import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-leaf">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-start justify-center py-20 px-10 bg-leaf">
        
        <div className="flex flex-col items-start gap-6 text-left">
          <h1 className="text-4xl font-heading text-forest">
            Hi, I'm Nina
          </h1>

          <p className="font-body text-lg text-forest/80 max-w-xl">
            A Software Engineer well-versed in full-stack development
          </p>
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row mt-10">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest text-cream px-5 transition-all hover:bg-olive md:w-[158px]"
            href="#"
          >
            Contact me
          </a>

          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-forest text-forest px-5 transition-all hover:bg-forest hover:text-cream md:w-[158px]"
            href="#"
          >
            Resume
          </a>
        </div>

      </main>
    </div>
  );
}