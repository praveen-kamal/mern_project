import React from "react";
import Header from "./HeaderComponents/Header";
import "./Home.css";
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    Switch,
} from "react-router-dom";
import Homepage from "./HomeComponents/Homepage";
function Home() {
    return (
        <div>
            <Header />
            <Homepage />
        </div>
    );
}

export default Home;
