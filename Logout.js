// import { useContext } from "react";
import {useNavigate } from "react-router-dom";

export default function Logout(){
// const logoutHandler = () => {
//   AuthCtx.logout();
// } 
const navigate = useNavigate('/homepage');
navigate("/homepage");
return(
    <> 
    


</>
)
};