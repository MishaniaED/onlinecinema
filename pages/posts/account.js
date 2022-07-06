import Head from "next/head";

export default function Account(){
    return(
        <>
            <Head>
                <title>Account</title>
            </Head>
            <div className="account-menu">
                <h4 className="account-header">Личный кабинет</h4>
                <div className="account-body">
                    <div className="form-group">
                        <label><b>Имя пользователя</b></label>
                        <input name="username" type="text" placeholder="Текущее имя пользователя" required/>

                    </div>
                    <div className="form-group">
                        <label><b>Пароль</b></label>
                        <input name="password" type="password" placeholder="Текущий пароль" required/>
                    </div>
                    <button id ="UpdateDataBtn" className="btn-primary">
                        Обновить
                    </button>
                </div>
            </div>
        </>
    )
}