import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <div >
                <Image src="/logo.png" alt="" role="presentation" width={50} height={50}/>
                Cinema 813
            </div>
            <nav>
                <Link href="/">
                    <a>Главная</a>
                </Link>
                {' '}
                <div className='not-auth-ref'>
                    <Link href="/posts/login" className='first-refs'>
                        <a>Войти</a>
                    </Link>
                    {' '}
                    <Link href="/posts/registration" className='first-refs'>
                    <a>Регистрация</a>
                </Link>
                </div>

               <div className='auth-ref'>
                   <Link href="/posts/account" className='second-refs'>
                       <a>Личный кабинет</a>
                   </Link>
                   {' '}
                   <Link href="/posts/library" className='second-refs'>
                        <a>Библиотека</a>
                   </Link>
                   {' '}
                   <button className="logout-btn">Выйти</button>
               </div>

                <Link href="/posts/about">
                    <a>О нас</a>
                </Link>

            </nav>
        </header>
    )
}