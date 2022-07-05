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
                    <p><button className='library-btn'>Просмотренные</button></p>
                    <p><button className='library-btn'>Посмотреть позже</button></p>
                    <p><button className='library-btn'>Оценки</button></p>
                    <p><button className='library-btn'>Отзывы</button></p>
                </div>
            </div>
        </>
    )
}