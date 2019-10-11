import React, {useState} from "react";
import { connect } from "react-redux";
import {
    add_new_task_to_store as add_new_task_to_store_action,
    edit_task_list_from_store as edit_task_list_from_store_action,
    remove_task_from_store as remove_task_from_store_action,
} from "./../actions/curriculam";

import TaskList from "./../components/TaskList";
import NewTask from "./../components/NewTask";
import Header from "./../components/Header";
import InputJson from "./../components/InputJson";

const Home = (props) => {

    const {
        add_new_task_to_store,
        tasks,
    } = props;

    const [text, set_text] = useState("");
    const [json_text, set_json_text] = useState("");
    const [indent, set_indent] = useState(1);
    const [start_clientX, set_start_clientX] = useState(null);

    const input_change = (e) => set_text(e.target.value);

    const get_new_indent = (indent_direction, old_indent) => {
        let new_indent = old_indent;
        
        if (indent_direction === "left" && old_indent > 1) {
            new_indent--;
        } else if (indent_direction === "right" && old_indent < 3) {
            new_indent++;
        }
        return new_indent;
    }

    const change_indent = (indent_direction) => set_indent(get_new_indent(indent_direction, indent));

    const move_indent_left = () => change_indent("left");
    const move_indent_right = () => change_indent("right");

    const add_new_task = () => {
        if (!text) {
            return;
        }
        add_new_task_to_store({
            task: {
                text,
                indent,
            }
        });
        set_text("");
    }

    const edit_task = (action, index) => {
        const new_tasks = [...tasks];

        const [task] = new_tasks.splice(index, 1);
        
        if (action === "left" || action === "right") {
            const new_indent = get_new_indent(action, task.indent);
            console.log(new_indent)
            task.indent = new_indent;
        }

        new_tasks.splice(index, 0, task);
        
        props.edit_task_list_from_store({
            tasks: new_tasks,
        })
    }

    const remove_task = (index) => {
        props.remove_task_from_store({index})
    }

    const drag_start = e => {
        set_start_clientX(e.clientX);
        console.log(e.clientX,"start")
    }

    const drag_end = e => {
        const dragged_task_index = e.target.attributes.task.value;
        const destination_index = document.elementFromPoint(start_clientX, e.clientY).getAttribute("task");
        const new_tasks = [...tasks];
        const [task] = new_tasks.splice(dragged_task_index, 1);
        new_tasks.splice(destination_index, 0, task);
        props.edit_task_list_from_store({tasks: new_tasks})
        console.log(new_tasks);
    }

    const add_tasks_from_json = () => {
        try {
            const json_data = JSON.parse(json_text);

            if (!json_data.tasks || json_data.tasks.length === 0) {
                throw Error("missing_tasks");
            }

            const all_tasks_valid = json_data.tasks.every(task => {
                if (task.text && task.indent && typeof task.indent === "number") {
                    return true
                }
                return false
            })

            if (!all_tasks_valid) {
                throw Error("invalid_task_format")
            }
            
            const new_tasks = [...tasks, ...json_data.tasks];
            props.edit_task_list_from_store({tasks: new_tasks});

        } catch (error) {
            console.error(error);
            let alert_text = "Invalid JSON. Please try again";

            if (error.message === "missing_tasks") {
                alert_text = ("Tasks missing from input json")
            } else if (error.message === "invalid_task_format") {
                alert_text = ("Some tasks are wrongly formatted")
            }

            alert(alert_text);
        }
    }

    const export_json_button = () => (<a download="tasks.json" href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify({tasks}))}`} >Export JSON</a>)

    return (
        <div className="home-page d-f-c align-center">
            <Header />
            <TaskList
                tasks={tasks}
                drag_start={drag_start}
                drag_end={drag_end}
                edit_task={edit_task}
                remove_task={remove_task}
            />
            <NewTask
                indent={indent}
                text={text}
                input_change={input_change}
                add_new_task={add_new_task}
                move_indent_left={move_indent_left}
                move_indent_right={move_indent_right}
            />
            <InputJson
                json_text={json_text}
                set_json_text={set_json_text}
                add_tasks_from_json={add_tasks_from_json}
            />
            <div>
                {
                    (tasks && tasks.length > 0) && export_json_button()
                }
            </div>
        </div>
    )
};

const mapStateToProps = ({curriculam}) => {
    return {
        ...curriculam
    }
};
const mapDispatchToProps = dispatch => {
    return {
        add_new_task_to_store: (payload) => dispatch(add_new_task_to_store_action(payload)),
        edit_task_list_from_store: (payload) => dispatch(edit_task_list_from_store_action(payload)),
        remove_task_from_store: (payload) => dispatch(remove_task_from_store_action(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);