import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./AdminLogin.css";
import { toast } from "react-toastify";

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "https://coed-queries.onrender.com/api/admin/login",
                {
                    username,
                    password,
                },
                {
                    withCredentials: true,
                },
            );

            if (response.data.success) {
                toast.success("Signed in successfully!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                const token = response.data.token;

                setCookie("token", token, { maxAge: 60 * 60 * 1000 });
                navigate("/admin/dashboard");
            } else {
                toast.error("Invalid credentials", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (err) {
            toast.error("An error occurred. Please try again.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            console.error(err.message);
        }
    };

    return (
        <div className="admin-login">
            <div className="spacer layer-1">
                <h1 className="p-4">
                    <Link to="/admin/login">
                        CoED./Admin
                    </Link>
                </h1>
            </div>
            <div className="card p-5 my-3 content">
                <h1 className="p-4">Admin Log In</h1>
                <div className="form-floating m-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating m-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary m-3"
                    onClick={handleLogin}
                >
                    Log In
                </button>
            </div>
            <div className="spacer layer-2"></div>
        </div>
    );
};

export default AdminLogin;
