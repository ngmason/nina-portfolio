export default function AnimatedBanner() {
  return (
    <div className="relative w-full h-32 md:h-40 overflow-hidden">
      <video
        className="w-full h-full object-cover object-center"
        src="/video/cozy-banner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
    </div>
  );
}