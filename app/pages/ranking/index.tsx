import Head from "next/head";
// import styles from '../styles/Ranking.module.css'
import { Button } from "react-bootstrap";
import Layout from "../../components/templates/layout";

export default function Ranking() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>ランキング | KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={" "}>
          <div className="d-flex">
            <h2>チョコボール</h2>
          </div>
          <div className="d-flex">
            <select className="custom-select">
              <option value="1">当選</option>
              <option value="2">応募</option>
              <option value="3">当たった数</option>
            </select>
          </div>
          <div className="d-flex">
            <ul className="list-group w-100 mt-3">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                NAME
                <span className="badge badge-primary badge-pill">14</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                NAME
                <span className="badge badge-primary badge-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                NAME
                <span className="badge badge-primary badge-pill">1</span>
              </li>
            </ul>
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
