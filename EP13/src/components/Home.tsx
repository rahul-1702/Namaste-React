import { Link } from "react-router";

export default function Home() {
  return (
      <div className={'flex flex-col items-center justify-center gap-4 h-dvh'}>
        <h2 className={'text-2xl'}>Welcome To</h2>
        <Link to={'/dashboard'} className={'bg-cyan-800 hover:bg-cyan-700 ease-in-out transition-all text-white px-12 py-6 rounded-md text-4xl'}>Redux Food Store</Link>
      </div>
  );
}
