import Head from "next/head";
// import styles from '../styles/Hit.module.css'
import { Button } from "react-bootstrap";
import Layout from "../../../components/templates/layout";

export default function Hit() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>当たりの登録 | KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={" "}>
          <form>
            <div className="form-group">
              <label>1. アイテム名</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>2. ポイント</label>
              <select className="custom-select">
                <option>選択してください</option>
                <option value="1">金のエンゼル（仮）</option>
                <option value="2">銀のエンゼル（仮）</option>
              </select>
            </div>
            <div className="form-group">
              <label>3. 画像</label>
              <input type="file" className="form-control-file" />
            </div>
            <div className="form-group">
              <label>4. MEMO</label>
              <textarea className="form-control" rows={3}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              登録
            </button>
          </form>
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
