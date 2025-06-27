import * as React from "react";
import {useNavigate} from "react-router-dom";

interface SimpleButtonProps {
    link?: string | 'back';
    text: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({link, text}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link === 'back') navigate(-1);
        else if (link) navigate(link);
    }

    return (
        <button onClick={handleClick} className={'text-center w-40 hover:scale-102 bg-cyan-800 hover:bg-cyan-700 ease-in-out transition-all text-white px-6 py-2 rounded-md cursor-pointer'}>{text}</button>
    )
}

export default SimpleButton;