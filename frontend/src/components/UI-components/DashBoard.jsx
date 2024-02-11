import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom'
import AppBar from "../small-components/AppBar";
import Balance from "../small-components/Balance";
import Users from "../small-components/Users";
import axios from "axios";
import useGetUser from "../hooks/useGetUser";

function DashBoard() {

    const [balance, setBalance]=useState("XXXX");
    const {user, verify} =useGetUser()
    const [loading, setLoading]= useState(true)

    const fetch = async()=>{
        await axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }).then(res=>{
            setBalance(res.data.balance);
          });
    }

    useEffect(()=>{
        fetch();
    },[balance])

    useEffect(()=>{
      if (verify!==undefined) {
        setLoading(false)
      }  
    },[verify])
  
    if (loading) {
      return <div></div>
    }

  return (
    <>
    {verify? <div className="h-screen ">
      <AppBar user={user}/>
      <Balance
        value={balance}
      />
      <Users userid={user._id}/>
    </div>:<Navigate to="/"/>}
    </>
    
  );
}
export default DashBoard;
