import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Home</title>
        </Head>
        <h1 className = "title"> Главная </h1>

        <div className="Row">
            <div className="column">
                <div className="film-card">
                    {/*<Player/>*/}
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="menu">
                    <h2>Параметры поиска</h2>
                </div>
            </div>
        </div>

        <div className="Row">
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="Row">
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="film-card">
                    <img src="/logo.png" alt="Preview" width={200} height={200}/>
                    <div className="container">
                        <h4><b>Название фильма</b></h4>
                        <p>Возможно описание</p>
                        <Link href='/posts/player'>
                            <a>
                                <button className="btn-primary">
                                    Смотреть
                                </button></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
