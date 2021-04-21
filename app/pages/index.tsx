import Head from "next/head";
import { Button } from "react-bootstrap";

import styles from "../styles/Home.module.css";
import Layout from "../components/templates/layout";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}> "KujibiKing" </h1>

          <div>
            <img src="https://placehold.jp/250x250.png?text=DUMMY" alt="" />
          </div>

          <div className="d-flex flex-column">
            <div>
              <Button href="#">ログイン</Button>
            </div>
            <div>
              <Button variant="outline-primary" href="#">
                サインイン
              </Button>
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://www.hippohack.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            © hippohack
          </a>
        </footer>
      </div>
    </Layout>
  );
}
