import React, {useState} from "react";
import {connect} from "react-redux";
import { stop_timer } from "../../actions/index.js";
import {set_timer as set_timer_action} from "./../../actions/";

const Timer = (props) => {

    let i = 0, new_interval = null;

    const set_timer = (e) => {
        props.set_timer(e.target.value)
    }

    const [interval, set_interval] = useState(null)
    const [time_left, set_time_left] = useState(props.timer)

    const stop_timer = () => {
        clearInterval(interval)
        clearInterval(new_interval)
        set_interval(null)
    }

    const start_timer = () => {
        if (interval) {
            return
        }

        set_time_left(time_left);

        new_interval = setInterval(() => {
            i++;
            const new_time = time_left - i;
            set_time_left(new_time)
            if (time_left <= 0) {
                stop_timer()
            }
        }, 1000);
        set_interval(new_interval)
    }

    const reset_timer = () => {
        set_time_left(props.timer)
    }
    
    return (
        <div className="d-f-c">
            <div>
                {time_left}
            </div>
            <div>
                <input type="text" value={props.timer} onChange={set_timer} />
            </div>
            <div>
                {
                    !interval && <button onClick={start_timer}>start</button>
                }
                <button onClick={stop_timer}>stop</button>
                <button onClick={reset_timer}>reset</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({timer}) => {
    return timer
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_timer: (time) => dispatch(set_timer_action(time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);