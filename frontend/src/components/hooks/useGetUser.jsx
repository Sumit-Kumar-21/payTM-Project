import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

const useGetUser= ()=>{
  const [user, setUser] = useState({});
  const [verify, setVerify] = useState(undefined);
  const [error, setError]= useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/user/get", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        });
        setUser(response.data.user);
        setVerify(true);
      } catch (error) {
        setVerify(false);
        setError(error);
        return {user, verify};
      }
    };

    fetchData();
  }, []);

  return { user, verify};
}

export default useGetUser;
