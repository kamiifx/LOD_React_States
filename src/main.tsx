import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import TodoContextProvider from "./store/TodoContext";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
{/*
      React Context
      The "TodoContextProvider" must be used at the top level of where ever you want the states to reach, this is to help with re-renders
*/}
      <TodoContextProvider>
          <App />
      </TodoContextProvider>
  </React.StrictMode>
)
