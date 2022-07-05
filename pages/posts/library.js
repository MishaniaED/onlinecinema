import Head from "next/head";


export default function Account(){
    return(
        <>
            <Head>
                <title>Library</title>
            </Head>
            <div className="library-menu">
                <h4 className="library-header">Библиотека пользователя</h4>
                <div className="library-body">
                    <button>Просмотренные</button>
                    <button>Посмотреть позже</button>
                    <button>Оценки</button>
                    <button>Отзывы</button>
                </div>
            </div>
        </>
    )
}