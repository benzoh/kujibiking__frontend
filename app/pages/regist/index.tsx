import Head from "next/head";
// import styles from '../styles/Regist.module.css'
import { Button } from "react-bootstrap";
import Layout from "../../components/templates/layout";

export default function Regist() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>登録 | KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={" "}>
          <Button variant="primary" size="lg" block>
            結果登録
          </Button>
          <Button variant="secondary" size="lg" block>
            アイテム登録
          </Button>
        </main>

        <footer className="mt-3">
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
