import Link from "next/link";
import Image from "next/image";

function ChangeVisibility2(id1, id2){
    document.getElementById(id2).style.display = 'block';
    document.getElementById(id1).style.display = 'none';
}

export default function Header() {
    return (
        <header>
            <div>
                <Image src="/logo.png" alt="" role="presentation" width={70} height={70}/>
                <div>Cinema 813</div>
            </div>
            <nav>
                <Link href="/">
                    <a>Главная</a>
                </Link>
                {' '}
                <div className='not-auth-ref' id='not-auth-ref'>
                    <Link href="/posts/login" className='first-refs'>
                        <a>Войти</a>
                    </Link>
                    {' '}
                    <Link href="/posts/registration" className='first-refs'>
                    <a>Регистрация</a>
                </Link>
                </div>

               <div className='auth-ref' style = {{display: "none"}} id='auth-ref'>
                   <Link href="/posts/account" className='second-refs'>
                       <a>Личный кабинет</a>
                   </Link>
                   {' '}
                   <Link href="/posts/library" className='second-refs'>
                        <a>Библиотека</a>
                   </Link>
                   {' '}
                   <Link href='/'>
                       <a>
                           <button onClick={()=>ChangeVisibility2('auth-ref', 'not-auth-ref')} id='LogoutBtn' className="logout-btn">
                               Выйти
                           </button>
                       </a>
                   </Link>

               </div>

                <Link href="/posts/about">
                    <a>О нас</a>
                </Link>

            </nav>
        </header>
    )
}