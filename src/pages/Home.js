import React, {useState} from "react";
// import {Link} from "react-router"

import Timer from "./../components/Timer";
import Stopwatch from "../components/Stopwatch";

const Home = (props) => {
    const [selected, set_selected] = useState("timer")
    
    return (
        <div className="home-page d-f-c justify-center">
            <div className="d-f justify-around">
                <div onClick={() => set_selected("timer")}>Timer</div>
                <div onClick={() => set_selected("stopwatch")}>Stopwatch</div>
            </div>
            <div style={{display: selected !== "timer" ? "none": "flex"}}>
                <Timer />
            </div>
            <div style={{display: selected !== "stopwatch" ? "none": "flex"}}>
                <Stopwatch />
            </div>
        </div>
    )
};

export default Home;