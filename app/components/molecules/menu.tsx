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
      <div className="container">
        <div className={styles.humburger} onClick={() => menuFunction()}>
          <span className={openMenu ? "open" : undefined}></span>
          <span className={openMenu ? "open" : undefined}></span>
          <p className={openMenu ? "open" : undefined}>Menu</p>
        </div>
      </div>
    </>
  );
}
