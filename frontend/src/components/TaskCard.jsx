import React from "react";


function TaskCard({ task }) {


    return (

        <div className="card mt-3 shadow-sm">


            <div className="card-body">


                <h5 className="card-title">
                    {task.title}
                </h5>


                <p className="card-text">
                    {task.description}
                </p>


                <p>
                    <strong>Trạng thái:</strong>
                    {" "}
                    <span className="badge bg-primary">
                        {task.status}
                    </span>
                </p>


                <p>
                    <strong>Ưu tiên:</strong>
                    {" "}
                    <span className="badge bg-warning text-dark">
                        {task.priority}
                    </span>
                </p>


                <p>
                    <strong>Deadline:</strong>
                    {" "}
                    {new Date(task.deadline).toLocaleDateString()}
                </p>


            </div>


        </div>

    );


}


export default TaskCard;