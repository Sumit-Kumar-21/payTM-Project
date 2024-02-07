import Button from "../small-components/Button";
import { useNavigate } from "react-router-dom"

function Welcome() {
    const navigate = useNavigate();
    return <div className=" bg-zinc-500 h-screen flex justify-center items-center">
        <div className="flex flex-col rounded-lg bg-white mb-auto mt-auto shadow-lg shadow-black pt-7 pb-7 w-80 gap-4 pl-5 pr-5">
            <div className="text-center">
                Welcome to Payment Bank
            </div>
            <div className="flex justify-evenly">
                <Button onClick={()=>{
                    navigate('/signin')
                }} label={"Sign In"}/>
                <Button onClick={()=>{
                    navigate('/signup')
                }} label={"Sign UP"}/>
            </div>
        </div>
    </div>;
}

export default Welcome;