"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

export default function Tickets() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 grid-rows-10 lg:grid-rows-3 w-full h-screen gap-10">
      <div className="row-span-6 lg:row-span-3 col-span-1 w-full h-full flex  object-contain overflow-y-scroll rounded-2xl skeleton">
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
      <div className="hidden lg:block col-span-1 row-span-2 order-2 rounded-2xl overflow-hidden">
        <iframe
          className="w-full h-full object-cover"
          src="https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="block lg:hidden col-span-1 row-span-2 order-2 rounded-2xl overflow-hidden">
        <iframe
          src="https://open.spotify.com/embed/artist/46yPZXaKNR5nkEqMzhifG6?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <div className="row-span-4 lg:row-span-1 col-span-1 w-full h-full flex justify-center items-center overflow-hidden rounded-2xl">
        {isMounted && <div className="klaviyo-form-SvFrc8"></div>}
      </div>
    </section>
  );
}
