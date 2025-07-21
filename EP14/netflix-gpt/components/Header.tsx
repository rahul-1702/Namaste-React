import Image from "next/image";
import logo from "@/public/Netflix_Logo.png";
import Link from "next/link";

const Header = () => {
    return <nav className={'absolute top-0 w-full flex items-center justify-center max-w-6xl'}>
        <div className={'w-6/12 left-0'}>
            <Link href={'/'}><Image src={logo} alt={'Netflix'} width={200} height={200}/></Link>
        </div>
        <div className={'flex gap-2 items-center justify-end w-6/12 right-0'}>
            <button className={'flex items-center justify-center rounded-sm bg-transparent cursor-pointer py-1 px-6 outline-1 outline-white'}>English</button>
            <Link href="/login"><button className={'flex items-center justify-center rounded-sm bg-red-600 cursor-pointer py-1 px-6 font-bold outline-1 outline-red-600'}>Sign In - User</button></Link>
        </div>
    </nav>
}

export default Header;