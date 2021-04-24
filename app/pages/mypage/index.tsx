import Head from "next/head";
// import styles from '../styles/MyPage.module.css'
import { Button } from "react-bootstrap";
import Layout from "../../components/templates/layout";

export default function MyPage() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>マイページ | KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={" "}>
          <div className="row">
            <div className="col">
              <div className="d-flex align-items-center">
                <span>USERNAME</span>
                <img src="https://placehold.jp/50x50.png?text=ICON" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>最近の登録</h3>
              <ol>
                <li>hoge</li>
                <li>hoge</li>
                <li>hoge</li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>ランキング</h3>
              <div className="row">
                <div className="col">
                  <div>●●●●●</div>
                  <div className="text-right">１位</div>
                </div>
                <div className="col">
                  <div>●●●●●</div>
                  <div className="text-right">１位</div>
                </div>
                <div className="col">
                  <div>●●●●●</div>
                  <div className="text-right">１位</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <h3>グラフ？</h3>
              <div>
                <img
                  className="w-100"
                  src="https://placehold.jp/300x100.png?text=グラフ"
                  alt=""
                />
              </div>
            </div>
          </div>
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
