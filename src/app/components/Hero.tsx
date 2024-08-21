import Link from "next/link";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 grid-rows-1 w-full mt-16 h-screen gap-5 lg:gap-10">
      <div className="row-span-1 col-span-1 order-1 relative flex justify-center items-center rounded-2xl skeleton overflow-hidden">
        <div className="absolute text-white z-20 object-cover flex flex-col h-full justify-center items-center gap-10">
          <span>
            <h2 className="text-3xl font-bold">New Single</h2>
            <h1 className="text-5xl font-black">Cowboy Milk</h1>
            <h3 className="text-3xl text-right">Out Now</h3>
          </span>
          <span className="flex flex-wrap justify-center items-center gap-5">
            <Link
              href={"https://www.youtube.com/watch?v=w0jkDCzSkRI"}
              target="_blank"
            >
              <button className="btn btn-primary">YouTube</button>
            </Link>
            <Link
              href={"https://open.spotify.com/album/4xLDL7CGdXugh9oxsQA5dV"}
              target="_blank"
            >
              <button className="btn btn-accent">Spotify</button>
            </Link>
            <Link
              href={
                "https://music.apple.com/mx/album/cowboy-milk-single/1754335374"
              }
              target="_blank"
            >
              <button className="btn btn-error">Apple Music</button>
            </Link>
          </span>
        </div>
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover scale-125 lg:scale-100 z-10"
        >
          <source src="/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
