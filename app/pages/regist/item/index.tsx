import Head from "next/head";
// import styles from '../styles/Item.module.css'
import { Button } from "react-bootstrap";
import Layout from "../../../components/templates/layout";

export default function Item() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>アイテム登録 | KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={" "}>
          <form>
            <div className="form-group">
              <label>1. アイテムを選択</label>
              <select className="custom-select">
                <option value="1">当選</option>
                <option value="2">応募</option>
                <option value="3">当たった数</option>
              </select>
            </div>
            <div className="form-group">
              <label>2. 当たりのラベル</label>
              <input list="datalist" className="form-control" />
              {/* TODO: change datalist */}
              <datalist id="datalist">
                <option value="hoge" />
                <option value="fuga" />
                <option value="piyo" />
              </datalist>
            </div>
            <div className="form-group">
              <label>3. 当たりごとの達成率（pt）</label>
              <div className="row align-item-center ">
                <div className="col-4 pr-2">
                  <input type="number" className="form-control" maxLength={3} />
                </div>
                <div className="col pl-0"> pt </div>
              </div>
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
