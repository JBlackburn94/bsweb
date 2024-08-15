"use client";
import { useEffect, useState } from "react";
import "../globals.css";

export default function Hero() {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   // This code will run only on the client side
  //   setIsMounted(true);
  // }, []);

  return (
    <section></section>

    // <section className="flex justify-center items-start w-full gap-10">
    //   <div className="w-[60%] h-[80%] relative flex justify-center items-center rounded-2xl overflow-hidden">
    //     <div className="absolute text-white z-20 object-cover flex flex-col h-full justify-center items-center gap-10">
    //       <span className="flex flex-col">
    //         <h4 className="text-2xl font-thin">Listen to</h4>
    //         <h2 className="text-5xl font-black">Cowboy Milk</h2>
    //       </span>
    //       <span className="flex flex-wrap justify-center items-center gap-5">
    //         <button className="btn btn-primary">YouTube</button>
    //         <button className="btn btn-accent">Spotify</button>
    //         <button className="btn btn-error">Apple Music</button>
    //       </span>
    //     </div>
    //     <video
    //       autoPlay
    //       muted
    //       loop
    //       preload="none"
    //       className="object-cover h-full w-full z-10"
    //     >
    //       <source src="/hero-vid.mp4" type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </div>
    //   <div className="flex flex-col gap-10 w-[40%] h-[80%] justify-between items-center">
    //     <div className="rounded-2xl w-full h-[50%]">
    //       <iframe
    //         src="https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?utm_source=generator"
    //         width="100%"
    //         height="352"
    //         frameBorder="0"
    //         allowFullScreen={false}
    //         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    //         loading="lazy"
    //         className="rounded-2xl"
    //       ></iframe>
    //     </div>
    //     <div className="skeleton h-[30%] w-full">
    //       {isMounted && <div className="klaviyo-form-SvFrc8"></div>}
    //     </div>
    //   </div>
    // </section>
  );
}
