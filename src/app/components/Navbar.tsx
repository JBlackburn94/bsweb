"use client";
import React from "react";
import { navLinks } from "../constants";
import Link from "next/link";
import Image from "next/image";
import navLogo from "../../../public/bs-logo.svg";
import { FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Twirl as Hamburger } from "hamburger-react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    gsap.to("#mobile-nav", {
      x: nav ? "-100%" : 0,
      opacity: nav ? 0 : 1,
      duration: 0.2,
    });

    const navLink = document.querySelectorAll("#nav-link");
    navLink.forEach((link) => {
      link.addEventListener("click", () => {
        setNav(false);
        gsap.to("#mobile-nav", {
          x: "-100%",
          opacity: 0,
          duration: 0.2,
        });
      });
    });
  };
  return (
    <nav className="flex items-center justify-between w-full h-20 fixed bg-neutral z-50">
      <div className="hidden md:flex items-center justify-center gap-5 w-1/3">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="text-white link link-hover"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-start md:justify-center w-1/2 md:w-1/3 ml-1 md:ml-0">
        <Image src={navLogo} alt="logo" width={100} height={100} />
      </div>
      <div className="hidden md:flex items-center justify-center gap-5 w-1/3">
        <Link
          href="https://open.spotify.com/artist/46yPZXaKNR5nkEqMzhifG6"
          target="_blank"
        >
          <FaSpotify className="text-white text-2xl" />
        </Link>
        <Link
          href="https://www.instagram.com/beautyschooluk/?hl=en-gb"
          target="_blank"
        >
          <FaInstagram className="text-white text-2xl" />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCwkFeK8zVScddmxWbjwcfAg"
          target="_blank"
        >
          <FaYoutube className="text-white text-2xl" />
        </Link>
        <Link href="https://x.com/btyschl" target="_blank">
          <FaSquareXTwitter className="text-white text-2xl" />
        </Link>
        <Link href="https://www.tiktok.com/@beautyschool.band" target="_blank">
          <AiFillTikTok className="text-white text-2xl" />
        </Link>
      </div>
      <div
        className="flex w-1/2 justify-end items-center md:hidden z-30 text-white"
        onClick={handleNav}
      >
        <Hamburger toggled={nav} toggle={setNav} />
      </div>
      <div
        className="absolute flex flex-col items-center justify-center gap-10 text-5xl uppercase font-black h-screen w-full bg-neutral top-0 left-0 z-10 translate-x-[-100%] opacity-0"
        id="mobile-nav"
      >
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href} id="nav-link">
            {link.name}
          </Link>
        ))}
        <div className="flex gap-[35px]">
          <Link
            href="https://open.spotify.com/artist/46yPZXaKNR5nkEqMzhifG6"
            target="_blank"
          >
            <FaSpotify className="text-white text-2xl" />
          </Link>
          <Link
            href="https://www.instagram.com/beautyschooluk/?hl=en-gb"
            target="_blank"
          >
            <FaInstagram className="text-white text-2xl" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCwkFeK8zVScddmxWbjwcfAg"
            target="_blank"
          >
            <FaYoutube className="text-white text-2xl" />
          </Link>
          <Link href="https://x.com/btyschl" target="_blank">
            <FaSquareXTwitter className="text-white text-2xl" />
          </Link>
          <Link
            href="https://www.tiktok.com/@beautyschool.band"
            target="_blank"
          >
            <AiFillTikTok className="text-white text-2xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
