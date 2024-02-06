import Button from '../small-components/Button'
import Heading from '../small-components/Heading'
import SubHeading from '../small-components/SubHeading'
import InputBox from '../small-components/InputBox'
import ButtonWarning from '../small-components/ButtonWarning'
import { useState } from 'react'
import axios from 'axios'


function SignIn() {

    const [password, setPassword]=useState('')
    const [username, setUsername]=useState('')

    return <div className="flex justify-center bg-zinc-500 bg-auto h-screen">
        <div className="flex flex-col rounded-lg bg-white mb-auto mt-auto shadow-lg shadow-black pt-7 pb-7 w-80 gap-4 pl-5 pr-5">
            <div className="flex gap-2 flex-col">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to create an account"} />
            </div>
            
            <InputBox onChange={e=>{
                setUsername(e.target.value)
            }} label={"Email"} placeholder={"Enter e-mail here"}/>
            <InputBox onChange={e=>{
                setPassword(e.target.value)
            }} label={"Password"} placeholder={"Enter password here"}/>

            <div className="flex flex-col">
                <Button onClick={async()=>{
                    const res= await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username: username,
                        password: password
                    });
                    localStorage.setItem("token", `Barear ${res.data.token}`)
                }} label={"Sign In"} />
                <ButtonWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={'/signup'}/>
            </div>
        </div>
    </div>;
}

export default SignIn;