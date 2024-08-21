export default function Hero() {
  return (
    <section className="grid grid-cols-1 grid-rows-1 w-full h-screen gap-5 lg:gap-10">
      <div className="row-span-1 col-span-1 order-1 relative flex justify-center items-center rounded-2xl skeleton overflow-hidden">
        <div className="absolute text-white z-20 object-cover flex flex-col h-full justify-center items-center gap-10">
          <span className="flex flex-col">
            <h4 className="text-2xl font-thin">Listen to</h4>
            <h2 className="text-5xl font-black">Cowboy Milk</h2>
          </span>
          <span className="flex flex-wrap justify-center items-center gap-5">
            <button className="btn btn-primary">YouTube</button>
            <button className="btn btn-accent">Spotify</button>
            <button className="btn btn-error">Apple Music</button>
          </span>
        </div>
        <video
          autoPlay
          muted
          loop
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover scale-125 lg:scale-100 z-10"
        >
          <source src="/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
