import React from "react";

const NewTask = props => {
    const {
        indent,
        text,
        input_change,
        add_new_task,
        move_indent_left,
        move_indent_right,
    } = props;
    
    return (
        <>
            <div className="d-f description new-task">
                <div className="d-f actions mt-3">
                    <span id="drag" className="action-buttons"></span>
                    <span id="indent-left" onClick={move_indent_left} className="action-buttons indent"></span>
                    <span id="indent-right" onClick={move_indent_right} className="action-buttons indent"></span>
                    <span id="delete" className="action-buttons"></span>
                </div>
                <div className="d-f-c indent-levels mt-3">
                    <span className="indent-block" style={{
                        marginLeft: `${indent*20}px`
                    }}></span>
                </div>
                <div className="d-f-c standard mt-3">
                    <input className="input" placeholder="Type standard here (e.g. Numbers)" value={text} onChange={input_change} />
                </div>
            </div>
            <button class="d-f justify-center align-center add-button mt-4" onClick={add_new_task}>
                <img alt="add a standard" src="https://www.freeiconspng.com/uploads/add-icon--line-iconset--iconsmind-29.png" /> Add a standard
            </button>
        </>
    )
}

export default NewTask;