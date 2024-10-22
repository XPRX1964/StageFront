import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Eye from "./Eye";
import EyeSee from "./EyeSee";

function Register({ setIsAuthenticated }) {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isAuthenticated, setAuthenticated] = useState({ setIsAuthenticated });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 250);

    return () => clearTimeout(timer);
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        {
          username,
          email,
          password,
          password_confirm: confirmedPassword,
        }
      );
      console.log("Registration successful", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.data.user.role);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      setIsAuthenticated(true);
      alert("Account created successfully!");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        console.error(
          "Error:",
          error.response.data.message || "Registration failed"
        );

        if (error.response.data.errors) {
          if (error.response.data.errors.password) {
            console.error(
              "Password error:",
              error.response.data.errors.password.message
            );
          }
          if (error.response.data.errors.username) {
            console.error(
              "Username error:",
              error.response.data.errors.username.message
            );
          }
          if (error.response.data.errors.email) {
            console.error(
              "Email error:",
              error.response.data.errors.email.message
            );
          }
        }
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div
      className={`animate-fadein ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div>
        <div className="py-[35px] flex justify-center gap-2 bg-[#f7f7f7] w-full text-center font-poppins font-[15px]">
          <div className="hover:scale-110 transition-all cursor-pointer text-gray-500">
            <span className="text-gray-500">
              <Link to="/"> HOME </Link>
            </span>
          </div>
          <span>/ Login-Register</span>
        </div>

        <div className="flex justify-center items-center font-poppins w-full tablet:py-[100px] py-[60px]">
          <div className="flex flex-col w-full tablet:h-[463px] laptopl:w-[1200px] laptop:w-[960px] tablet:w-[720px]">
            <div className="justify-center laptop:mx-[200px] laptopl:mx-[250px] px-3">
              <div className="flex w-full items-start justify-center mb-10 gap-4">
                <div className="text-[25px] font-bold hover:text-red-500 transition-colors duration-300">
                  <button>
                    <Link to="/login">Login</Link>
                  </button>
                </div>
                <div className="text-[25px] text-stone-500">|</div>
                <div className="text-red-600 text-[25px] font-bold">
                  Register
                </div>
              </div>

              <div className="shadow-lg tablet:p-20 py-10 px-[15px] flex justify-center items-center w-full">
                <form
                  className="w-full flex flex-col items-center"
                  onSubmit={handleRegister}
                >
                  <input
                    type="text"
                    className="px-[15px] w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <input
                    type="email"
                    className="px-[15px] w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="flex w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="px-[15px] w-full font-poppins border-[#ebebeb] border-b text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="transition max-h-fit mx-2"
                    >
                      <div
                        className={`${
                          showPassword ? "text-[#333]" : "text-[#9d9d9d]"
                        } flex justify-center items-center `}
                      >
                        {showPassword == false && <Eye />}
                        {showPassword == true && <EyeSee />}
                      </div>
                    </button>
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    className="px-[15px] w-full font-poppins border-[#ebebeb] border text-[#333] text-[14px] h-[45px] mb-[30px] outline-none"
                    placeholder="confirm password"
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                  />

                  <div className="justify-start flex w-full">
                    <button className="bg-[#f2f2f2] py-[11px] px-[30px] group hover:bg-red-600 transition-colors duration-300">
                      <span className="text-[14px] font-medium ease-in-out duration-700 group-hover:text-white">
                        Register
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
