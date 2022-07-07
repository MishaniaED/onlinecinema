import Link from 'next/link';
import Head from "next/head";

function ChangeVisibility3(id1, id2){
    document.getElementById(id1).style.display = 'block';
    document.getElementById(id2).style.display = 'none';
}

export default function Registration() {
    return (
        <>
            <Head>
                <title>Registration</title>
            </Head>
            <div className="card">
                <h2 className="card-header">Регистрация</h2>
                <div className="card-body">
                    <p>Заполните форму, чтобы создать аккаунт.</p>
                    <hr/>
                    <form className="form-register">
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
                        <button onClick={()=>ChangeVisibility3('auth-ref', 'not-auth-ref')} id='RegistryBtn' className="btn-primary" >
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