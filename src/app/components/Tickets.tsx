"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import tourGif from "../../../public/bs-tour-gif.gif";
import Script from "next/script";

export default function Tickets() {
  const [isMounted, setIsMounted] = useState(false);

  // used to only render the Klaviyo form after the component has mounted to stop hydration errors
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="grid grid-cols-2 grid-rows-3 w-full h-screen gap-10">
      <div className="row-span-3 col-span-1 w-full h-full flex  object-contain overflow-y-scroll rounded-2xl skeleton">
        <a
          href="https://www.songkick.com/artists/1084890"
          className="songkick-widget"
          data-theme="dark"
          data-track-button="on"
          data-detect-style="off"
          data-background-color="rgb(0,0,0,1)"
          data-font-color="rgb(255,255,255,1)"
          data-button-bg-color="rgb(255,255,255,1)"
          data-button-text-color="rgb(0,0,0,1)"
          data-locale="en"
          data-other-artists="on"
          data-share-button="on"
          data-country-filter="on"
          data-rsvp="on"
          data-request-show="off"
          data-past-events="off"
          data-past-events-offtour="off"
          data-remind-me="off"
        ></a>
        <Script src="//widget-app.songkick.com/injector/1084890"></Script>
      </div>
      <div className="row-span-2 col-span-1 w-full h-full flex justify-center items-center rounded-2xl skeleton">
        <Image
          src={tourGif}
          alt="An animated gif of the band and crew"
          unoptimized={true}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
      <div className="row-span-1 col-span-1 w-full h-full flex justify-center items-center overflow-hidden bg-black rounded-2xl">
        {isMounted && <div className="klaviyo-form-SvFrc8"></div>}
      </div>
    </section>
  );
}
