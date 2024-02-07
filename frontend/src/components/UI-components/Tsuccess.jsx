import { useNavigate } from "react-router-dom";


function Tsuccess() {

    const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="h-60 w-96 shadow-black shadow-lg bg-green-600 flex flex-col items-center justify-center">
        <div className="text-2xl ">
            Transection Successful
        </div>
        <button type="button" className="mt-10 text-white hover:bg-purple-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black" onClick={()=>{
            navigate('/dashboard')
        }}>Home</button>
      </div>
    </div>
  );
}

export default Tsuccess;
