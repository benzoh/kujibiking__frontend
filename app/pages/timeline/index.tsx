import Head from 'next/head'
// import styles from '../styles/TimeLine.module.css'
import { Button } from 'react-bootstrap'

export default function TimeLine() {
  return (
    <div className='container'>
      <Head>
        <title>タイムライン | KujibiKing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={' '}>
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <div>
                <select className="custom-select">
                  <option>選択してください</option>
                  <option value="1">フィルター</option>
                  <option value="2">フィルター</option>
                </select>
              </div>
              <div>
                <select className="custom-select">
                  <option>選択してください</option>
                  <option value="1">フィルター</option>
                  <option value="2">フィルター</option>
                </select>
              </div>
              <div>
                <a href="#">🔍</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="https://placehold.jp/50x50.png?text=ICON" alt=""/>
                  <span>USERNAME</span>
                  <span className="ml-auto badge badge-primary">当たり</span>
                </div>
                <h5 className="card-title">チョコボール</h5>
                <div className="card-subtitle">銀のエンゼル</div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>
                  <img className="w-100" src="https://placehold.jp/300x100.png?text=イメージ" alt=""/>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="https://placehold.jp/50x50.png?text=ICON" alt=""/>
                  <span>USERNAME</span>
                  <span className="ml-auto badge badge-primary">当たり</span>
                </div>
                <h5 className="card-title">チョコボール</h5>
                <div className="card-subtitle">銀のエンゼル</div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>
                  <img className="w-100" src="https://placehold.jp/300x100.png?text=イメージ" alt=""/>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <img src="https://placehold.jp/50x50.png?text=ICON" alt=""/>
                  <span>USERNAME</span>
                  <span className="ml-auto badge badge-secondary">はずれ</span>
                </div>
                <h5 className="card-title">チョコボール</h5>
                <div className="card-subtitle">銀のエンゼル</div>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div>
                  <img className="w-100" src="https://placehold.jp/300x100.png?text=イメージ" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer className='mt-3'>
        <a
          href="https://www.hippohack.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          © hippohack
        </a>
      </footer>
    </div>
  )
}
