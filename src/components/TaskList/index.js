import React from "react";

const TaskList = props => {
    const {
        tasks,
        drag_start,
        drag_end,
        edit_task,
        remove_task,
    } = props;

    return (
        <div className="task-list">
            {
                tasks.length > 0 && tasks.map((task, index) => (
                    <div task={index} id={`task-${index}`} draggable="true" onDragStart={e => {e.persist(); drag_start(e);}} onDragEnd={e => {e.persist(); drag_end(e);}} className="d-f description tasks" key={`task-${index}`}>
                        <div task={index} className="d-f actions mt-3">
                            <span task={index} id="drag" className="action-buttons"></span>
                            <span task={index} id="indent-left" onClick={() => edit_task("left", index)} className="action-buttons indent"></span>
                            <span task={index} id="indent-right" onClick={() => edit_task("right", index)} className="action-buttons indent"></span>
                            <span task={index} id="delete" onClick={() => remove_task(index)} className="action-buttons"></span>
                        </div>
                        <div className="d-f-c indent-levels mt-3">
                            <span className={`indent-block indent-${task.indent}`}></span>
                        </div>
                        <div className={`d-f-c justify-center standard mt-3 indent-${task.indent} text-indent-${task.indent}`}>
                            <span>
                                {
                                    task.text
                                }
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default TaskList;