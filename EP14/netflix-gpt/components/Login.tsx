"use client";

import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {FormEvent} from "react";

const Login = () => {
    const router = useRouter();
    const params = useSearchParams();
    const mode = params.get('mode');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/browse');
    }

    return <div className={'absolute top-3/12 left-6/12 -translate-x-6/12 flex flex-col items-center justify-center gap-6 w-full'}>
        <section className={'p-8 bg-black rounded-sm flex flex-col items-center justify-center gap-4 w-100'}>
            <h2 className={'text-4xl font-extrabold text-center mb-4'}>{mode === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={(e) => handleSubmit(e)} className={'flex flex-col gap-3 items-center justify-center w-full'}>
                {mode === 'signup' && <input type={'text'} name={'name'} placeholder={'Enter Your Full Name'} className={'px-4 py-2 bg-gray-700 outline-0 w-10/12'}/>}
                <input type={'text'} name={'email'} placeholder={'Enter Your Email'} className={'px-4 py-2 bg-gray-700 outline-0 w-10/12'}/>
                <input type={'text'} name={'password'} placeholder={'Enter Your Password'} className={'px-4 py-2 bg-gray-700 outline-0 w-10/12'} />
                <button type={'submit'} className={'bg-red-600 px-4 py-2 w-10/12 mt-1 cursor-pointer font-bold'}>Submit</button>
                <p className={'flex gap-2 items-center justify-center w-full pt-6'}>
                    {mode === 'signup' ? <span>Already have account?</span> : <span>Don&#39;t have account?</span>}
                     <Link href={mode === 'signup' ? '/login?mode=signin' : '/login?mode=signup'} className={'text-red-500 cursor-pointer '}>Sign {mode === 'signup' ? 'In' : 'Up'}</Link>
                </p>
            </form>
        </section>
    </div>
}

export default Login;