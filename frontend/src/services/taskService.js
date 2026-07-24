import axiosClient from "../api/axiosClient";



const taskService = {


    getAll(){

        return axiosClient.get("/tasks");

    },


    getById(id){

        return axiosClient.get(`/tasks/${id}`);

    },


    create(data){

        return axiosClient.post("/tasks", data);

    },


    update(id,data){

        return axiosClient.put(
            `/tasks/${id}`,
            data
        );

    },


    remove(id){

        return axiosClient.delete(
            `/tasks/${id}`
        );

    },


    updateStatus(id,status){

        return axiosClient.patch(
            `/tasks/${id}/status`,
            {
                status
            }
        );

    },


    updatePriority(id,priority){

        return axiosClient.patch(
            `/tasks/${id}/priority`,
            {
                priority
            }
        );

    }


};


export default taskService;