import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { OtherUserContext } from "../providers/otherUserProvider.jsx";
const useOtherUsers = () => {
  const navigate = useNavigate();
  const { setOtherUser, otherUser } = useContext(OtherUserContext);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchOtherUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/otherUsers",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        const otherUsers = response.data;
        setOtherUser(otherUsers.users);
        console.log("Other users fetched:", otherUser);
      } catch (error) {
        console.error("Error fetching other users:", error);
        if (error.response && error.response.status === 401) {
          navigate("/");
        }
      }
    };

    fetchOtherUsers();
  }, []);
};
export default useOtherUsers;
