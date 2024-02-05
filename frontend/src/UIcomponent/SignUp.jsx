function SignUp() {
    return <div className="flex justify-center bg-zinc-500 bg-auto h-screen">
        <div className="flex flex-col rounded-lg bg-white mb-auto mt-auto shadow-lg shadow-black pt-7 pb-7 w-80 gap-4 pl-5 pr-5">
            <div className="flex gap-2 flex-col">
                <div className="text-3xl font-black text-black text-center">Sign Up</div>
                <div className="text-center pl-5 pr-5 text-xs">Enter your information to create an account</div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="firstname" className="text-sm font-bold text-black">First Name</label><br />
                <input type="text" id="firstname" placeholder="Enter first name here" className="border-gray-200 border-2 h-10 w-full rounded-md"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="lastname" className="text-sm font-bold text-black">last Name</label><br />
                <input type="text" id="lastname" placeholder="Enter last name here" className="border-gray-200 border-2 h-10 w-full rounded-md"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-bold text-black">E-mail</label><br />
                <input type="text" id="email" placeholder="Enter email here" className="border-gray-200 border-2 w-full h-10 rounded-md"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-sm font-bold text-black">Password</label><br />
                <input type="text" id="password" placeholder="Enter password here"  className="border-gray-200 border-2 h-10 w-full rounded-md"/>
            </div>
            

            <div>
                <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-black  w-full">Sign Up</button>
                </div>
                <div className="text-xs font-bold text-center text-black">
                Already have an account?<a href="/signin">Login</a>
                </div>
            </div>
        </div>
    </div>;
}

export default SignUp;