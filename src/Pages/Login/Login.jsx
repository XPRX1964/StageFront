import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import EyeSee from "../Register/EyeSee";
import Eye from "../Register/Eye";
import axiosInstance from "./axiosInstance";
function Login({ setIsAuthenticated }) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      const token = response.data.token;
      const refreshToken = response.data.refreshToken;

      if (token && refreshToken) {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", response.data.data.user.role);

        setAuthenticated(true);
        alert("Successfully logged in!");
        navigate("/");
      } else {
        console.error("Missing tokens in the response");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      console.error(err);
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
        <div className="flex justify-center items-center font-poppins w-full tablet:py-[100px] py-[60px] ">
          <div className="flex flex-col w-full laptopl:w-[1200px] laptop:w-[960px] tablet:w-[720px] ">
            <div className="justify-center laptop:mx-[200px] laptopl:mx-[250px] px-3">
              <div className="flex w-full items-start justify-center mb-10 gap-4">
                <div className="text-red-600 text-[25px] font-bold ">Login</div>
                <div className="text-[25px] text-stone-500">|</div>
                <div className="text-[25px] font-bold hover:text-red-500 transition-colors duration-300">
                  <button>
                    <Link to="/register">Register</Link>
                  </button>
                </div>
              </div>

              <div className="shadow-lg tablet:p-20 py-10 px-[15px] flex justify-center items-center w-full">
                <form
                  className="w-full flex flex-col items-center"
                  onSubmit={handleLogin}
                >
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
                      className="transition  max-h-fit mx-2"
                    >
                      <div
                        className={`${
                          showPassword ? "text-[#333]" : "text-[#9d9d9d]"
                        }`}
                      >
                        {showPassword == false && <Eye />}
                        {showPassword == true && <EyeSee />}
                      </div>
                    </button>
                  </div>
                  {error && <div className="text-red-500 mb-2">{error}</div>}{" "}
                  <div className="pt-[10px] pb-[19px] flex justify-between items-center w-full">
                    <div className="flex justify-between w-full">
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="appearance-none h-5 w-5 border border-gray-300 rounded-md checked:bg-red-500"
                          />
                          <span className="ml-2 text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>
                      <div className="text-gray-400 hover:text-gray-700 transition-colors">
                        <button>forgot password?</button>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start flex w-full">
                    <button
                      type="submit"
                      className="bg-[#f2f2f2] py-[11px] px-[30px] group hover:bg-red-600 transition-colors duration-300"
                    >
                      <span className="text-[14px] font-medium ease-in-out duration-700 group-hover:text-white">
                        LOGIN
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

export default Login;
