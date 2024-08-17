import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="footer bg-neutral text-neutral-content p-10 mb-20 rounded-2xl"
      id="contact"
    >
      <nav>
        <h6 className="footer-title">Find Us!</h6>
        <Link
          href="https://open.spotify.com/search"
          target="_blank"
          className="link link-hover"
        >
          Spotify
        </Link>
        <Link
          href="https://instagram.com/beautyschooluk"
          target="_blank"
          className="link link-hover"
        >
          Instagram
        </Link>
        <Link
          href="https://www.tiktok.com/@beautyschool.band"
          target="_blank"
          className="link link-hover"
        >
          TikTok
        </Link>
        <Link
          href="https://music.apple.com/us/artist/beauty-school/1449064123"
          target="_blank"
          className="link link-hover"
        >
          Apple Music
        </Link>
        <Link
          href="https://x.com/btyschl?lang=en-GB"
          target="_blank"
          className="link link-hover"
        >
          X
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCwkFeK8zVScddmxWbjwcfAg"
          target="_blank"
          className="link link-hover"
        >
          YouTube
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <p>
          <span className="font-semibold">Booking/Management:</span>{" "}
          jd@slamdunkrecords.com
        </p>
        <p>
          <span className="font-semibold">General Enquiries:</span>{" "}
          beautyschoolleeds@gmail.com
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">Website built by</h6>
        <p>Jason Blackburn</p>
        <Link
          href="https://www.instagram.com/jblackburn.creates"
          target="_blank"
          className="link link-hover"
        >
          <span className="font-semibold">Instagram:</span> @jblackburn.creates
        </Link>
        <p>
          <span className="font-semibold">Email:</span>{" "}
          jblackburndeveloper@gmail.com
        </p>
      </nav>
    </footer>
  );
}
