import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import FormComponent from "./components/FormComponent"
import SingleComponent from "./components/SingleComponent"
import EditComponent from "./components/EditComponent"

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App/>} />
                <Route path="/create" exact element={<FormComponent/>} />
                <Route path="/blog/:slug" exact element={<SingleComponent/>} />
                <Route path="/blog/edit/:slug" exact element={<EditComponent/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoute;