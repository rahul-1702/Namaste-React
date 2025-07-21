const Home = () => {
    return <div className={'absolute top-3/12 left-6/12 -translate-x-6/12 flex flex-col items-center justify-center gap-6 w-full'}>
        <h2 className={'text-6xl font-extrabold max-w-200 text-center'}>Unlimited movies, TV shows and more</h2>
        <p className={'text-2xl font-bold max-w-200 text-center'}>Starts at ₹149. Cancel at any time.</p>
        <p className={'mt-2 text-xl max-w-200 text-center'}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className={'flex items-center justify-center gap-4 w-180'}>
            <input type={'text'} name={'email'} placeholder={'Email Address'} className={'w-8/12 rounded-sm text-3xl py-3 px-5 bg-gr outline-1 outline-white bg-gray-950'} />
            <button className={'w-4/12 flex items-center justify-center rounded-sm bg-red-600 cursor-pointer py-2 px-5 text-3xl outline-red-600 outline-3 font-bold gap-3'}><span>Get Started</span><span className={'mb-1'}>›</span></button>
        </div>
    </div>
}

export default Home;