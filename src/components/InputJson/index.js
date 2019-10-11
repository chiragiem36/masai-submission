import React from "react";

const InputJson = props => {

    const {
        json_text,
        set_json_text,
        add_tasks_from_json,
    } = props;

    return (
        <div className="d-f-c justify-center align-center mt-5 json-input">
            <input
                placeholder="Paste JSON data here (e.g. {tasks: [{text: 'Text 1', indent: 1}]})"
                value={json_text}
                onChange={
                    (e) => set_json_text(e.target.value)
                }
            />
            <button onClick={add_tasks_from_json} className="add-json-button mt-3">Add tasks from JSON</button>
        </div>
    )
}

export default InputJson;