import { useEffect, useState } from "react";

import taskService from "../services/taskService";


function TaskList(){


    const [tasks,setTasks] = useState([]);



    useEffect(()=>{

        loadTasks();

    },[]);



    const loadTasks = async ()=>{

        try{

            const response = await taskService.getAll();

    console.log("DATA FROM API:", response.data);

    setTasks(response.data);

        }
        catch(error){

            console.log(error);

        }

    };



    return (

        <div className="container mt-4">

            <h2>
                Danh sách công việc
            </h2>


            {
                tasks.map((task)=>(

                    <div 
                    className="card mt-3"
                    key={task.id}
                    >

                        <div className="card-body">


                            <h5>
                                {task.title}
                            </h5>


                            <p>
                                {task.description}
                            </p>


                            <p>
                                Trạng thái:
                                {" "}
                                {task.status}
                            </p>


                            <p>
                                Ưu tiên:
                                {" "}
                                {task.priority}
                            </p>


                            <p>
                                Deadline:
                                {" "}
                                {task.deadline}
                            </p>


                        </div>


                    </div>


                ))
            }


        </div>

    );


}


export default TaskList;