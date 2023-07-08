import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "./AuthService";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>The Login and Register Website</h1>
      <div>
        <Link to="/auth/register">
          <button>Register</button>
        </Link>
        <br />
        <br />
        <Link to="/auth/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default AuthModule;
