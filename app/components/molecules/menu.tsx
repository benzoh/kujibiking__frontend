import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <style jsx>{`
        .container {
          margin: 0 0 0 auto;
        }
        .humburger {
          display: block;
        }
        .humburger {
          background-color: rgb(34, 35, 36);
          color: white;
          padding: 10px 5px 0 5px;
          display: none;
          cursor: pointer;
          position: fixed;
          top: 20px;
          right: 40px;
        }
        .humburger span {
          background-color: white;
          width: 30px;
          height: 1px;
          display: block;
          margin-bottom: 7px;
        }
        .humburger span:nth-child(1) {
          width: 20px;
          margin-left: 10px;
        }
        .humburger p {
          font-size: 13px;
          margin-top: -4px;
          margin-bottom: 5px;
        }
        .open {
          height: 100vh;
          opacity: 1;
          z-index: 100;
        }
      `}</style>
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
        <div className="humburger" onClick={() => menuFunction()}>
          <span className={openMenu ? "open" : undefined}></span>
          <span className={openMenu ? "open" : undefined}></span>
          <p className={openMenu ? "open" : undefined}>Menu</p>
        </div>
      </div>
    </>
  );
}
