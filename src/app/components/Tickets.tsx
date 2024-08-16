import Image from "next/image";
import tourGif from "../../../public/bs-tour-gif.gif";
import Script from "next/script";

export default function Tickets() {
  return (
    <section className="grid grid-cols-2 grid-rows-1 w-full h-screen gap-10 p-10">
      <div className="w-full h-full flex  object-contain overflow-y-scroll rounded-2xl skeleton">
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
      <div className="w-full h-full flex justify-center items-center rounded-2xl skeleton">
        <Image
          src={tourGif}
          alt="An animated gif of the band and crew"
          unoptimized={true}
          className="h-full w-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
