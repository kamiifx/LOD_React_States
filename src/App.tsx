import {BrowserRouter, Routes, Route} from "react-router-dom";
import StateMain from "./Routes/StateMain";
import TodosWithContext from "./Routes/TodosWithContext";
import TodoContextProvider from "./store/TodoContext";

function App() {
  return (
    <BrowserRouter>
        <div className="m-5">
            <h1 className="font-nunito text-3xl">LOD - React Modern State Management</h1>
            <Routes>
                <Route path="/" element={<StateMain/>}/>
                <Route path="context" element={<TodosWithContext/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
