import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AdminDashboard.css";
// import { useCookies } from "react-cookie";

const AdminDashboard = () => {
    const [queries, setQueries] = useState([]);
    const navigate = useNavigate();

    // Check if logged in
    // const [cookies] = useCookies(["token"]);
    // useEffect(() => {
    //     if (!cookies.token) {
    //         navigate("/admin/login");
    //     } else {
    //         fetchQueries();
    //     }
    // }, [cookies.token]);

    const fetchQueries = async () => {
        try {
            const response = await axios.get(
                "https://coed-queries.onrender.com/api/queries",
                // {
                //     withCredentials: true,
                // },
            );

            setQueries(response.data);
            console.log(response.data);
        } catch (err) {
            navigate("/admin/login");
            toast.error("An error occurred. Please try refreshing the page.", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            toast.clearWaitingQueue();
            console.log(err.message);
        }
    };

    const deleteQuery = async (queryId) => {
        try {
            const response = await axios.delete(
                `https://coed-queries.onrender.com/api/queries/${queryId}`,
                {
                    withCredentials: true,
                },
            );

            if (response.data.success) {
                toast.info("Query Deleted!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                fetchQueries();
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Please try refreshing the page.", {
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
    };

    useEffect(() => {
        fetchQueries();
    }, []);

    return (
        <div className="admin-dashboard">
            <div className="spacer layer-1">
                <h1 className="p-4">
                    CoED./Admin - Your Dashboard
                </h1>
            </div>
            <div className="content p-0 m-0">
                <h1 className="text-start p-4">Queries For You</h1>
                <div className="queries row">
                    {queries.map((query) => (
                        <div className="query" key={query._id}>
                            <div className="card mx-auto my-4 p-4 w-75">
                                <div className="card-body">
                                    <p className="card-text">
                                        Name: {query.name}
                                    </p>
                                    <p className="card-text">
                                        Email: {query.email}
                                    </p>
                                    <p className="card-text">
                                        Message: {query.message}
                                    </p>
                                    <a
                                        href="#"
                                        className="btn btn-primary"
                                        onClick={() => {
                                            deleteQuery(query._id);
                                        }}
                                    >
                                        Delete
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="spacer layer-2"></div>
            <ToastContainer limit={1} />
        </div>
    );
};

export default AdminDashboard;
