"use client";
import { InstagramEmbed } from "react-social-media-embed";
import Script from "next/script";

export default function Merch() {
  return (
    <section className="grid grid-cols-3 grid-rows-3 w-full h-screen gap-10 p-5 border-2 border-green-400">
      <div className="col-span-1 row-span-3 flex justify-center items-center border-2 border-white overflow-hidden rounded-2xl">
        <h2 className="text-4xl font-black uppercase text-primary">Merch</h2>
      </div>
      <InstagramEmbed
        url="https://www.instagram.com/beautyschooluk"
        className="col-span-1 row-span-2 rounded-2xl"
      />
      <blockquote
        className="tiktok-embed overflow-x-hidden col-span-1 row-span-2"
        cite="https://www.tiktok.com/@beautyschool.band"
        data-unique-id="beautyschool.band"
        data-embed-type="creator"
      >
        {" "}
        <section>
          {" "}
          <a
            target="_blank"
            href="https://www.tiktok.com/@beautyschool.band?refer=creator_embed"
            className="text-accent font-thin"
          >
            @beautyschool.band
          </a>{" "}
        </section>{" "}
      </blockquote>{" "}
      <Script async src="https://www.tiktok.com/embed.js"></Script>
      <div className="col-span-2 row-span-1 p-1 flex flex-col justify-start items-start overflow-hidden rounded-2xl">
        <h3 className="text-3xl font-bold text-primary uppercase">
          Merch Info
        </h3>
        <p className="text-white">
          <span className="font-semibold">Please Note</span> - All merch orders
          are shipped once a week. If placed whilst we are on tour, items will
          be dispatched upon our return.
        </p>
      </div>
    </section>
  );
}
