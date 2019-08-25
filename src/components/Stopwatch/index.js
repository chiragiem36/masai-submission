import React, {useState} from "react";
import {connect} from "react-redux";
import {set_watch as set_watch_action} from "./../../actions/";

const Timer = (props) => {

    let i = 0, new_interval = null;

    const [interval, set_interval] = useState(null)
    const [watch, set_watch] = useState(0)

    const stop_watch = () => {
        clearInterval(interval)
        clearInterval(new_interval)
        set_interval(null)
    }

    const start_watch = () => {
        if (interval) {
            return
        }

        i = 0;
        set_watch(0);

        new_interval = setInterval(() => {
            i++;
            const new_time = i;
            set_watch(new_time)
        }, 1000);
        set_interval(new_interval)
    }

    const reset_watch = () => {
        i = 0;
        set_watch(0)
    }
    
    return (
        <div className="d-f-c">
            <div>
                {watch}s
            </div>
            <div>
                {
                    !interval && <button onClick={start_watch}>start</button>
                }
                <button onClick={stop_watch}>stop</button>
                {
                    !interval && <button onClick={reset_watch}>reset</button>
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({stopwatch}) => {
    return stopwatch
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_watch: (time) => dispatch(set_watch_action(time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);