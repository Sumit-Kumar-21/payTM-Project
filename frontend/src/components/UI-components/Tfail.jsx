import { useNavigate } from "react-router-dom";

function Tfail() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-slate-300 justify-center items-center h-screen ">
      <div className="h-60 w-96 shadow-black shadow-lg bg-slate-200 flex flex-col items-center justify-center">
        
        <div className="flex justify-center items-center gap-2">
            <div className="rounded-full text-red-700 outline font-bold text-2xl h-12 w-12 flex justify-center items-center">X</div>
            <div className="text-2xl ">Transection Failed !</div>
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="text-white hover:bg-purple-500 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Home
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Tfail;
