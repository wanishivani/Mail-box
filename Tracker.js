// import Login from "./Login";
import { useEffect,useState } from "react";
// import Signup from "./Signup";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Page/Homepage";
import "./App.css";
// import Logout from "./Logout";
export default function Tracker() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
          <Route path="homepage" element={<Homepage name={userName} />} />
          {/* <Route path="/logout" element={<Logout/>} /> */}

        </Routes>
      </Router>
    </div>
  );
}

