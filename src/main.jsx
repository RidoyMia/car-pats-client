import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './components/store/store.jsx'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx'
import Home from './page/Home/Home.jsx'
import { router } from './components/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
  
  </Provider>
)
