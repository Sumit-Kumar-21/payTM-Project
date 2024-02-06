import { useState } from "react";
import Button from "../small-components/Button"



function Users() {
    const [users, setUser]=useState([{
    firstname:'sumit',
    lastname: 'kumar',
    _id: 1
},{
    firstname:'Vishwajeet',
    lastname: '',
    _id: 2
},{
    firstname:'Vijay',
    lastname: 'Thakur',
    _id: 3
}]);
    return <div className="pl-7 pr-7 gap-3 flex flex-col mt-3">
        <div className="font-bold text-xl">Users</div>
        <input type="text" placeholder="Search users..." className="border rounded shadow-lg w-full p-2 border-slate-200" />

        {users.map((user)=> <User user={user}/>)}

    </div>;
}

function User({user}){
    return <div className="mt-10 flex justify-between">
        <div className="flex gap-3 items-center">
            <div className="rounded-full bg-slate-500 h-12 w-12 flex justify-center items-center">U{user._id}</div>
            <div className="font-bold text-lg">{user.firstname} {user.lastname}</div>
        </div>
        <Button label={"Send Money"}/>
    </div>
}

export default Users;