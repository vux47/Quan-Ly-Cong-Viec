import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskList from "./pages/TaskList";
import CreateTask from "./pages/CreateTask";
import EditTask from "./pages/EditTask";


function App(){


  return (

    <BrowserRouter>


      <Routes>


        <Route 
          path="/"
          element={
            <>
              <CreateTask />
              <TaskList />
            </>
          }
        />


        <Route
          path="/edit/:id"
          element={
            <EditTask />
          }
        />


      </Routes>


    </BrowserRouter>

  );


}


export default App;