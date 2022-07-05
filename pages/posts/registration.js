import Link from 'next/link';
import Head from "next/head";

export default function Registr() {
    return (
        <>
            <Head>
                <title>Registration</title>
            </Head>
            <div className="card">
                <h4 className="card-header">Регистрация</h4>
                <div className="card-body">
                    <p>Заполните форму, чтобы создать аккаунт.</p>
                    <hr/>
                    <form className="form-registr">
                        <div className="form-group">
                            <label>Имя</label>
                            <input name="firstName" type="text" placeholder="Введите Имя" required/>
                        </div>
                        {' '}
                        <div className="form-group">
                            <label>Фамилия</label>
                            <input name="lastName" type="text"  placeholder="Введите Фамилию" required/>
                        </div>
                        {' '}
                        <div className="form-group">
                            <label>Имя пользователя</label>
                            <input name="username" type="text"  placeholder="Введите имя пользователя" required/>
                        </div>
                        {' '}
                        <div className="form-group">
                            <label>Пароль</label>
                            <input name="password" type="password"  placeholder="Введите пароль" required/>
                        </div>
                        {' '}
                        <button className="btn-primary" >
                            Зарегистрироваться
                        </button>
                        {' '}
                        <Link href="/posts/login" className="btn-link">Перейти на страницу для входа</Link>
                    </form>
                </div>
            </div>
        </>
    );
}