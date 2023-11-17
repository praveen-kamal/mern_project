import "./ContactPage.css";
import React, { useState } from "react";
import Header from "../HeaderComponents/Header";
import axios from "axios";
import { toast } from "react-toastify";

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your logic to handle the form submission here
        const name = fname + " " + lname;
        console.log(name);
        console.log("Email:", email);
        console.log("Query:", query);
        // You can send the data to your backend or perform any other necessary actions

        try {
            const response = await axios.post(
                "https://coed-queries.onrender.com/api/queries",
                {
                    name: name,
                    email: email,
                    message: query,
                },
                {
                    withCredentials: true,
                },
            );

            if (response.data.success) {
                toast.info(
                    "Your query has been submitted! We will get back to you shortly.",
                    {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    },
                );
                setEmail("");
                setQuery("");
                setFname("");
                setLname("");
            }
        } catch (err) {
            console.log(err);
            toast.error("An error occurred. Please sign in again.", {
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

    return (
        <div className="contact-page spacer layer-1">
            <Header />
            <div className="contact">
                <div className="contact-header-text">
                    <h4>GOT A QUESTION?</h4>
                    <h1>Contact CoED</h1>
                    <p>
                        We're here to help and answer any question you might
                        have. We look forward to hearing from you.
                    </p>
                </div>
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div className="name">
                            <div>
                                <label>
                                    <b>FIRST NAME</b>
                                </label>
                                <input
                                    type="text"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>
                                    <b>LAST NAME</b>
                                </label>
                                <input
                                    type="text"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label>
                                <b>EMAIL</b>
                            </label>
                            <br></br>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>
                                <b>QUERY</b>
                            </label>
                            <br></br>
                            <textarea
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
