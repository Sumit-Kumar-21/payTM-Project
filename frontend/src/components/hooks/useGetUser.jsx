import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";

const useGetUser= ()=>{
  const [user, setUser] = useState({});
  const [verify, setVerify] = useState(false);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/v1/user/get", {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setUser(res.data.user);
          setVerify(true);
        });
    } catch (error) {
        return {user, verify}
    }
  }, []);
  return { user, verify};
}

export default useGetUser;
