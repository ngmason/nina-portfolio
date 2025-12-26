export default function AnimatedBanner() {
  const bannerSrc = process.env.NEXT_PUBLIC_BANNER_URL;
  return (
    <div className="relative w-full h-24 sm:h-32 md:h-40 overflow-hidden">
      {bannerSrc ? (
        <video
          className="w-full h-full object-cover object-center"
          src={bannerSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src="/images/mountain-banner.jpg"
          alt="Mountain landscape"
          className="w-full h-full object-cover object-[center_35%]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
    </div>
  );
}