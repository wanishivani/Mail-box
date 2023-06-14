import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from "../firebase";
import InputControl from "../Form/InputControl";

import styles from "./Login.module.css";
import AuthContext from "../Auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
const auth=getAuth();
  

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);

        navigate("/");
      })
      .catch((err) => {
       const errorMsg = "Error Password!";

        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
         alert(errorMsg)

      });


  };
  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Enter email address"
        />
        <label>Password</label>
        <input type='password'
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />


        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission}  disabled={submitButtonDisabled} >
            Login

          </button>

          <div>
        </div>
          <p>
            Create account?{" "}
            <span>

              <Link to="/signup">Sign up</Link>
            </span>
          </p>
          <p>
            <span>
            <Link to="/product">Forgot password</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
