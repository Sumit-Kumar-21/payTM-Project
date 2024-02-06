import Buttom from '../small-components/Button'
import Heading from '../small-components/Heading'
import SubHeading from '../small-components/SubHeading'
import InputBox from '../small-components/InputBox'
import ButtonWarning from '../small-components/ButtonWarning'
import { useState } from 'react'
import axios from 'axios'

function SignUp() {

    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]= useState('');
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');



    return <div className="flex justify-center bg-zinc-500 bg-auto h-screen">
        <div className="flex flex-col rounded-lg bg-white mb-auto mt-auto shadow-lg shadow-black pt-7 pb-7 w-80 gap-4 pl-5 pr-5">
            <div className="flex gap-2 flex-col">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your infromation to create an account"} />
            </div>

            <InputBox onChange={(e)=>{
                setFirstname(e.target.value);
            }} label={"First Name"} placeholder={"Enter first name here"}/>

            <InputBox onChange={(e)=>{
                setLastname(e.target.value)
            }} label={"Last Name"} placeholder={"Enter last name here"}/>

            <InputBox onChange={(e)=>{
                setUsername(e.target.value)
            }} label={"Email"} placeholder={"Enter e-mail here"}/>

            <InputBox onChange={(e)=>{
                setPassword(e.target.value)
            }} label={"Password"} placeholder={"Enter password here"}/>
            
            <div>
                <Buttom onClick={async()=>{
                    const res = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username: username,
                        password: password,
                        firstname: firstname,
                        lastname: lastname
                    });
                    localStorage.setItem("token", `Barear ${res.data.token}`)
                }} label={"Sign Up"} />
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign Up"} to={'/signin'}/>
            </div>
        </div>
    </div>;
}

export default SignUp;