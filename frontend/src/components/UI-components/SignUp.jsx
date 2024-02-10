import Buttom from '../small-components/Button'
import Heading from '../small-components/Heading'
import SubHeading from '../small-components/SubHeading'
import InputBox from '../small-components/InputBox'
import ButtonWarning from '../small-components/ButtonWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function SignUp() {

    const [firstname, setFirstname]= useState('');
    const [lastname, setLastname]= useState('');
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const navigate = useNavigate();



    return <div className="flex justify-center bg-zinc-500 bg-auto h-screen">
        <div className="flex flex-col rounded-lg bg-white mb-auto mt-auto shadow-lg shadow-black pt-7 pb-7 w-80 gap-4 pl-5 pr-5">
            <div className="flex gap-2 flex-col">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your infromation to create an account"} />
            </div>

            <InputBox type={"text"} onChange={(e)=>{
                setFirstname(e.target.value);
            }} label={"First Name"} placeholder={"Enter first name here"}/>

            <InputBox type={"text"} onChange={(e)=>{
                setLastname(e.target.value)
            }} label={"Last Name"} placeholder={"Enter last name here"}/>

            <InputBox type={email} onChange={(e)=>{
                setUsername(e.target.value)
            }} label={"Email"} placeholder={"Enter e-mail here"}/>

            <InputBox type={"password"} onChange={(e)=>{
                setPassword(e.target.value)
            }} label={"Password"} placeholder={"Enter password here"}/>
            
            <div>
                <Buttom onClick={async()=>{
                    await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username: username,
                        password: password,
                        firstname: firstname,
                        lastname: lastname
                    }).then(function (res) {
                        localStorage.setItem("token", `Bearer ${res.data.token}`);
                        navigate('/dashboard');
                    })
                    .catch(function () {
                        alert("Error 400:Invalid UserName/Password or Email already exist");
                    });
                    
                }} label={"Sign Up"} />
                <ButtonWarning label={"Already have an account?"} buttonText={"Sign Up"} to={'/signin'}/>
            </div>
        </div>
    </div>;
}

export default SignUp;