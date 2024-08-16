"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   // This code will run only on the client side
  //   setIsMounted(true);
  // }, []);

  return (
    <section className="grid grid-cols-2 grid-rows-3 w-full h-screen gap-10 p-5">
      <div className="row-span-3 col-span-1 relative flex justify-center items-center rounded-2xl skeleton overflow-hidden">
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
          className="object-cover h-full w-full z-10"
        >
          <source src="/hero-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="row-span-1 col-span-1 flex flex-col justify-center items-start text-white rounded-2xl gap-4 p-4">
        <span>
          <h1 className="text-4xl uppercase font-black text-primary">
            Beauty School
          </h1>
          <p className="text-sm">Leeds, UK</p>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          obcaecati molestias reprehenderit incidunt vitae inventore fugiat
          fugit dolore eum eius. Quam, rem suscipit possimus blanditiis unde
          sint autem quisquam provident!
        </p>
      </div>
      <div className="row-span-2 col-span-1 flex justify-center items-center  rounded-2xl skeleton">
        <iframe
          src="https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen={false}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-2xl h-full w-full"
        ></iframe>
      </div>
    </section>
  );
}
