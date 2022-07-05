import Link from 'next/link';
import Head from "next/head";

function ChangeVisibility1(id1, id2){
    document.getElementById(id1).style.display = 'block';
    document.getElementById(id2).style.display = 'none';
}

export default function Login() {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <div className="card">
                <h4 className="card-header">Вход в аккаунт</h4>
                <div className="card-body">
                    <form className="form-login" >
                    <div className="form-group">
                        <label><b>Имя пользователя</b></label>
                        <input name="username" type="text" placeholder="Введите имя пользователя" required/>

                    </div>
                    <div className="form-group">
                        <label><b>Пароль</b></label>
                        <input name="password" type="password" placeholder="Введите пароль" required/>
                    </div>
                    <button onClick={()=>ChangeVisibility1('auth-ref', 'not-auth-ref')} id='EntranceUserBtn' className="btn-primary">
                        Войти
                    </button>
                    {' '}
                    <Link href="/posts/Registration" className="btn-link">Перейти на страницу с регистрацией</Link>
                    </form>
                </div>
            </div>
        </>
    );
}