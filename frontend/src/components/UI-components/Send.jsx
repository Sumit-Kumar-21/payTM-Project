import axios from "axios";
import Heading from "../small-components/Heading";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Send() {
  const [searchParams] = useSearchParams();
  const [amount, setAmount] = useState(0);
  const userId = searchParams.get("Uid");
  const fullname = searchParams.get("name");
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border h-min text-card-foreground max-w-md p-4  w-96 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col  p-6">
            <Heading label={"Send Money"} />
          </div>
          <div className="">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {fullname.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{fullname}</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="amount"
                >
                  Amount (in Rs)
                </label>
                <input
                  type="number"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  id="amount"
                  placeholder="Enter amount"
                  onChange={(e) => {
                    setAmount(e.target.value);
                  }}
                />
              </div>

              <div className="flex">
                <button
                  type="button"
                  onClick={() => {
                    axios
                      .post(
                        "http://localhost:3000/api/v1/account/transfer",
                        {
                          to: userId,
                          amount: amount,
                        },
                        {
                          headers: {
                            Authorization: localStorage.getItem("token"),
                          },
                        }
                      )
                      .then(() => {
                        navigate("/success");
                      })
                      .catch(() => {
                        navigate("/fail");
                      });
                  }}
                  className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                >
                  Initiate Transfer
                </button>
                <button
                  type="button"
                  className="justify-center rounded-md ring-offset-background text-sm font-medium transition-colors bg-red-500 w-7 text-white"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Send;
