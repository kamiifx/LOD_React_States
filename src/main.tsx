import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TodoContextProvider from "./store/TodoContext";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
{/*
      React Context
      The "TodoContextProvider" must be used at the top level of where ever you want the states to reach, this is to help with re-renders
*/}
      <TodoContextProvider>
{/*       Recoil
          Just as Context Recoil needs a provider, but does not need to be made by you, Recoil makes one for you called "RecoilRoot"
*/}
          <RecoilRoot>
              <App />
          </RecoilRoot>
      </TodoContextProvider>
  </React.StrictMode>
)
