import { useEffect, useState } from "react";

import taskService from "../services/taskService";

import TaskCard from "../components/TaskCard";


function TaskList(){


    const [tasks,setTasks] = useState([]);



    useEffect(()=>{

        loadTasks();

    },[]);



    const loadTasks = async()=>{

        try{

            const response = await taskService.getAll();

            console.log("DATA FROM API:",response.data);

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

                    <TaskCard

                        key={task.id}

                        task={task}

                    />

                ))

            }


        </div>

    );


}


export default TaskList;