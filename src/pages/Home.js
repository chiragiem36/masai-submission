import React, {useState} from "react";
// import {Link} from "react-router"

import Timer from "./../components/Timer";
import Stopwatch from "../components/Stopwatch";
import { timer } from "rxjs";

const Home = (props) => {
    const [selected, set_selected] = useState("timer")

    const is_timer = selected === "timer"
    const is_watch = selected === "stopwatch"
    
    const style = (type) => {
        return {
            display: selected === type ? "flex" : "none",
            color: "red"
        }
    }

    const style_tab = type => ({
        color: selected === type ? "red" : "white"
    })

    return (
        <div className="home-page d-f-c align-center">
            <div className="d-f justify-around">
                <div className="tab" style={style_tab("timer")} onClick={() => set_selected("timer")}>Timer</div>
                <div className="tab" style={style_tab("stopwatch")} onClick={() => set_selected("stopwatch")}>Stopwatch</div>
            </div>
            <div className="justify-center" style={style("timer")}>
                <Timer />
            </div>
            <div className="justify-center" style={style("stopwatch")}>
                <Stopwatch />
            </div>
        </div>
    )
};

export default Home;