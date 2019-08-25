import React from "react";
// import {Link} from "react-router"

import Timer from "./../components/Timer";

const Home = (props) => {
    return (
        <div className="home-page d-f-c justify-center">
            <div className="d-f justify-around">
                <div>Timer</div>
                <div>Stopwatch</div>
            </div>
            <div>
                <Timer />
            </div>
        </div>
    )
};

export default Home;