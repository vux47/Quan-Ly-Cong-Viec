import React from "react";
import { useNavigate } from "react-router-dom";


function TaskCard({ task }) {


    const navigate = useNavigate();



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
                    {
                        task.deadline
                        ?
                        new Date(task.deadline).toLocaleDateString()
                        :
                        "Chưa có"
                    }
                </p>



                <button

                    className="btn btn-warning"

                    onClick={()=>navigate(`/edit/${task.id}`)}

                >

                    Sửa

                </button>


            </div>


        </div>

    );


}


export default TaskCard;