import Link from "next/link";
import Image from "next/image";
import cowboyMilk from "../../../public/cowboy-milk.webp";
import gloom from "../../../public/gloom.webp";
import happiness from "../../../public/happiness.webp";

export default function Merch() {
  return (
    <section
      id="merch"
      className="grid grid-cols-1 lg:grid-cols-2 grid-rows-13 lg:grid-rows-3 w-full min-h-screen gap-10 text-white"
    >
      <div className="flex flex-col justify-center order-2 items-center col-span-1 row-span-10 lg:row-span-3 rounded-2xl relative z-10">
        <div className="absolute flex flex-col justify-center items-center gap-5 overflow-hidden z-20">
          <h3 className="text-4xl font-black text-primary uppercase text-center">
            Official Merch Store
          </h3>
          <Link
            href={"https://beautyschooluk.bandcamp.com/merch"}
            target="_blank"
          >
            <button className="btn btn-accent text-xl">Click Here</button>
          </Link>
        </div>
        <div className="relative w-full h-full overflow-hidden rounded-2xl">
          <video
            autoPlay
            playsInline
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover scale-125 lg:scale-100"
          >
            <source src="/merch-vid.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="col-span-1 row-span-3 order-2 p-1 rounded-2xl flex flex-col gap-5">
        <h2 className="text-3xl font-bold text-primary uppercase">
          Physical/Digital Music
        </h2>
        <div className="flex flex-col justify-center items-start gap-5 h-full">
          <div className="h-1/3 w-full flex justify-start items-center gap-10 overflow-hidden">
            <Image src={cowboyMilk} alt="Cowboy Milk Artwork" height={120} />
            <span className="flex flex-col">
              <h4 className="font-semibold text-lg">Reaper ft Dan Campbell</h4>
              <p className="text-sm">Single</p>
              <p className="text-sm font-thin">Slam Dunk Records</p>
              <p className="text-sm font-thin">2024</p>
              <Link
                href={
                  "https://beautyschooluk.bandcamp.com/track/reaper-feat-dan-campbell"
                }
                target="_blank"
                className="link-accent text-sm"
              >
                Purchase
              </Link>
            </span>
          </div>
          <div className="h-1/3 w-full flex justify-start items-center gap-10 overflow-hidden">
            <Image src={gloom} alt="Gloom Artwork" height={120} />
            <span className="flex flex-col">
              <h4 className="font-semibold text-lg">Gloom</h4>
              <p className="text-sm">Single</p>
              <p className="text-sm font-thin">Slam Dunk Records</p>
              <p className="text-sm font-thin">2024</p>
              <Link
                href={"https://beautyschooluk.bandcamp.com/track/gloom"}
                target="_blank"
                className="link-accent text-sm"
              >
                Purchase
              </Link>
            </span>
          </div>
          <div className="h-1/3 w-full flex justify-start items-center gap-10 overflow-hidden">
            <Image src={happiness} alt="Happiness Artwork" height={120} />
            <span className="flex flex-col">
              <h4 className="font-semibold text-lg">Happiness</h4>
              <p className="text-sm">Album</p>
              <p className="text-sm font-thin">Slam Dunk Records</p>
              <p className="text-sm font-thin">2022</p>
              <Link
                href={"https://beautyschooluk.bandcamp.com/album/happiness"}
                target="_blank"
                className="link-accent text-sm"
              >
                Purchase
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-1 row-span-1 order-1 rounded-2xl p-1 flex flex-col items-start justify-end">
        <div className="indicator">
          <span className="indicator-item badge badge-error">Important!</span>
          <div className="grid h-32 w-32 place-items-center">
            <h3 className="text-3xl uppercase font-bold text-primary">
              Merch Information
            </h3>
          </div>
        </div>
        <p>
          Orders will be sent out once a week. If we are on tour, items will be
          dispatched upon our return.
        </p>
      </div>
    </section>
  );
}
