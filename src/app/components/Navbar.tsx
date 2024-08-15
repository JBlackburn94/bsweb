"use client";
import Link from "next/link";
import {
  FaHome,
  FaEnvelope,
  FaSpotify,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoTicket, IoShirt } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";
import logo from "/public/bs-logo.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className=" mx-4 mt-10 fixed z-50">
      <Image src={logo} alt="The Beauty School logo" className="w-20 my-2" />
      <nav className="flex flex-col gap-20">
        <ul className="menu bg-white/50 rounded-box">
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="Home">
              <FaHome className="icon text-2xl text-white hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="Tickets">
              <IoTicket className="icon text-2xl text-white hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="Merch">
              <IoShirt className="icon text-2xl text-white hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="Contact">
              <MdAlternateEmail className="icon text-2xl text-white hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="Spotify">
              <FaSpotify className="icon text-2xl text-accent hover:text-info" />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="tooltip tooltip-right"
              data-tip="Instagram"
            >
              <FaInstagram className="icon text-2xl text-pink-400 hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="TikTok">
              <FaTiktok className="icon text-2xl text-black hover:text-info" />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="tooltip tooltip-right"
              data-tip="Apple Music"
            >
              <SiApplemusic className="icon text-2xl text-red-400 hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="X">
              <FaSquareXTwitter className="icon text-2xl text-black bg-gray-400 hover:text-info" />
            </Link>
          </li>
          <li>
            <Link href="/" className="tooltip tooltip-right" data-tip="YouTube">
              <FaYoutube className="icon text-2xl text-red-800 hover:text-info" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
