import {useSelector} from "react-redux";
import {type RootState} from "../Redux/Store.ts";
import { Link } from "react-router";
import type {FoodItemListType} from "./FoodItem.tsx";
import { ToastContainer, Bounce } from "react-toastify";

interface HeaderProps {
    atc: boolean
}

const Header = ({ atc }: HeaderProps) => {

    const cart: FoodItemListType[] = useSelector((state: RootState) => state.cart);

    return <div className={'p-3 px-4 fixed w-full top-2 z-10'}>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
        />
        <div className={'from-cyan-900 to-gray-900 bg-gradient-to-r py-4 border-1 border-cyan-300 rounded-2xl w-full flex justify-between px-5'}>
            <Link to={'/'}><h1 className="text-center text-4xl text-red-100">Redux - Food Store</h1></Link>
            <Link to={'/cart'} className={'flex justify-center items-center cursor-pointer bg-white hover:shadow-xl hover:shadow-cyan-800 text-2xl px-4 py-1 text-cyan-900 rounded-md ' + (!atc ? 'hidden' : '')}>
                <span>🛒</span>
                <span className={'flex justify-center items-center text-sm p-2 rounded-full bg-cyan-800 text-white ms-2 w-6 h-6'}>
                {cart && cart.length}
            </span>
            </Link>
        </div>
    </div>
}

export default Header;