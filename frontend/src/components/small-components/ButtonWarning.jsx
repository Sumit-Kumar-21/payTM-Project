import { Link } from "react-router-dom"

function ButtonWarning({ label, buttonText, to }) {
    return <div className="text-xs font-bold text-center text-black">{label}<Link className="pointer underline pl-1 cursor-pointer" to={to}>
    {buttonText}</Link>
    </div>;
}

export default ButtonWarning;