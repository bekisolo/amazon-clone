import React, { useState, useContext } from "react";
import classes from "./signUp.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({ signIn: false, signUP: false });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(navStateData)

  // console.log(user);

  const authHandler = async (e) => {
    e.preventDefault();

    // console.log(e.target.name)
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          setLoading({ ...loading, signUP: true });
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signUP: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUP: false });
        });
    }
  };

  // console.log(password,email)
  return (
    <div>
      <section className={classes.login}>
        {/* logo */}
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/019/766/240/small/amazon-logo-amazon-icon-transparent-free-png.png"
            alt=""
          />
        </Link>
        {/* form */}
        <div className={classes.login_container}>
          <h1>Sign In</h1>
          {navStateData?.state?.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {navStateData?.state?.msg}
            </small>
          )}
          <form action="">
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              name="signin"
              onClick={authHandler}
              className={classes.login_signInButton}
            >
              {loading.signIn ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          {/* agreement */}
          <p>
            By signing-in youagree to the AMAZON FAKE CLONE Condition of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          {/* account crat */}
          <button
            type="submit"
            name="signup"
            onClick={authHandler}
            className={classes.login_rgb}
          >
            {loading.signUP ? (
              <ClipLoader color="#000" size={15} />
            ) : (
              "Create your Amazon Account In"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </div>
  );
};

export default Auth;
