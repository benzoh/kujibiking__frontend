import Head from "next/head";
// import styles from '../styles/Account.module.css'
import { Button } from "react-bootstrap";
import Layout from "../../components/templates/layout";

export default function Account() {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>アカウント管理 | KujibiKing</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={" "}>
          <form>
            <div className="form-group">
              <label>ユーザ名</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>メールアドレス</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>SNSアカウント</label>
              <div className="d-flex align-items-center">
                <img src="https://placehold.jp/50x50.png?text=ICON" alt="" />
                <span>USERNAME</span>
                <a className="ml-auto" href="#">
                  解除
                </a>
              </div>
            </div>
            <div className="form-group">
              <label>パスワード</label>
              <input type="text" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">
              更新
            </button>
          </form>

          <div className="row mt-5">
            <div className="col">
              <div className="d-flex">
                <div>退会する</div>
                <a className="ml-auto" href="#">
                  退会する
                </a>
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
