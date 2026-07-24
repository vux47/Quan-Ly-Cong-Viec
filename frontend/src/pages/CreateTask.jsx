import { useState } from "react";

import taskService from "../services/taskService";


function CreateTask(){


    const [task,setTask] = useState({

        title:"",
        description:"",
        status:"TODO",
        priority:"MEDIUM",
        deadline:""

    });



    const handleChange = (e)=>{

        setTask({

            ...task,

            [e.target.name]: e.target.value

        });

    };



    const handleSubmit = async (e)=>{

        e.preventDefault();


        try{

            await taskService.create(task);


            alert("Thêm công việc thành công");


            setTask({

                title:"",
                description:"",
                status:"TODO",
                priority:"MEDIUM",
                deadline:""

            });


        }
        catch(error){

            console.log(error);

        }


    };



    return (

        <div className="container mt-4">


            <h2>
                Thêm công việc
            </h2>



            <form onSubmit={handleSubmit}>


                <div className="mb-3">

                    <label>
                        Tên công việc
                    </label>

                    <input

                        className="form-control"

                        name="title"

                        value={task.title}

                        onChange={handleChange}

                    />

                </div>



                <div className="mb-3">

                    <label>
                        Mô tả
                    </label>


                    <textarea

                        className="form-control"

                        name="description"

                        value={task.description}

                        onChange={handleChange}

                    />

                </div>



                <div className="mb-3">

                    <label>
                        Trạng thái
                    </label>


                    <select

                        className="form-control"

                        name="status"

                        value={task.status}

                        onChange={handleChange}

                    >

                        <option value="TODO">
                            TODO
                        </option>


                        <option value="DONE">
                            DONE
                        </option>


                    </select>


                </div>



                <div className="mb-3">

                    <label>
                        Ưu tiên
                    </label>


                    <select

                        className="form-control"

                        name="priority"

                        value={task.priority}

                        onChange={handleChange}

                    >

                        <option value="LOW">
                            LOW
                        </option>


                        <option value="MEDIUM">
                            MEDIUM
                        </option>


                        <option value="HIGH">
                            HIGH
                        </option>


                    </select>


                </div>



                <div className="mb-3">

                    <label>
                        Deadline
                    </label>


                    <input

                        type="date"

                        className="form-control"

                        name="deadline"

                        value={task.deadline}

                        onChange={handleChange}

                    />

                </div>



                <button className="btn btn-primary">

                    Thêm công việc

                </button>



            </form>


        </div>

    );


}


export default CreateTask;