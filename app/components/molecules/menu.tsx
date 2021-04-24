import Link from "next/link";
import { useState } from "react";

import styles from "../../styles/components/molecules/Menu.module.scss";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>メニュー</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>メニュー</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>メニュー</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>メニュー</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>メニュー</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>メニュー</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{`
        span.open:first-child {
          transform: translateY(6px) rotate(150deg);
        }
        span.open:nth-child(2) {
          transform: translateY(-2px) rotate(-150deg);
          margin-bottom: 0;
        }
      `}</style>
      <div className="container">
        <div className={styles.humburger} onClick={() => menuFunction()}>
          <span className={openMenu ? "open" : undefined}></span>
          <span className={openMenu ? "open" : undefined}></span>
          <p className={openMenu ? "open" : undefined}>
            {!openMenu ? "Menu" : "Close"}
          </p>
        </div>
      </div>
    </>
  );
}
