import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import StateMain from "./Routes/StateMain";
import TodosWithContext from "./Routes/TodosWithContext";
import TodoContextProvider from "./store/TodoContext";
import TodosWithRecoil from "./Routes/TodosWithRecoil";
import TodosWithPullState from "./Routes/TodosWithPullState";

function App() {
  return (
    <BrowserRouter>
        <div className="m-2">
            <a href="/" className="no-underline">
                <span className="bg-clip-text text-transparent text-3xl bg-gradient-to-r from-pink-500 to-violet-500 font-epilogue font-semibold">
                    Learning <br/> On <br/> Demand
                </span>
            </a>

            <Routes>
                <Route path="/" element={<StateMain/>}/>
                <Route path="context" element={<TodosWithContext/>}/>
                <Route path="recoil" element={<TodosWithRecoil/>}/>
                <Route path="pullstate" element={<TodosWithPullState/>}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
