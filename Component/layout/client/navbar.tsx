import ImageLoader from "@/Component/ImageLoader";
import c from "./navbar.module.css";
import Link from "next/link";
import { List } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [popupIndex, setPopupIndex] = useState(0);
  const [popupIndexM, setPopupIndexM] = useState(0);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setPopupIndex(0);
      setPopupIndexM(0);
      setIsActive(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={c.nav_root}>
      <div className={c.nav}>
        <div>
          <Link href="/">
            <ImageLoader cssClass={c.logo} src="logo.png" width={190} height={70} />
          </Link>
        </div>
        <div className={c.navMenus}>
          <ul className={c.link}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Music</Link>
            </li>
            <li
              onMouseEnter={() => setPopupIndex(2)}
              onMouseLeave={() => setPopupIndex(0)}
            >
              <a href="#">Celebrity</a>
              <ul
                className={`${c.submenu} ${
                  popupIndex === 2 ? c.submenu_show : ""
                }`}
              >
                <li>
                  <Link href="#">Local</Link>
                </li>
                <li>
                  <Link href="#">International</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="#">Politics</Link>
            </li>
            <li>
              <Link href="#">Food</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <div className={c.btn}>
            <List
              width={30}
              height={30}
              onClick={() => setIsActive(!isActive)}
            />
          </div>
        </div>
      </div>
      <div className={c.mobileNav} aria-expanded={isActive}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#">Music</Link>
          </li>
          <li onClick={() => setPopupIndexM(popupIndexM === 2 ? 0 : 2)}>
            <a href="#">Celebrity</a>
            <ul
              className={`${c.mobileSub} ${
                popupIndexM === 2 ? c.mobileSubShow : ""
              }`}
            >
              <li>
                <Link href="#">Local</Link>
              </li>
              <li>
                <Link href="#">International</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}