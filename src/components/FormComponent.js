import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormComponent=()=>{
    const [state, setState] = useState({
        title:"",
        content:"",
        author:""
    })
    const {title, content, author} = state
    const inputValue=name=>(event)=>{
        setState({...state,[name]:event.target.value});
    }

    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ", process.env.REACT_APP_API)
        axios
        .post(`${process.env.REACT_APP_API}/create`,{title, content, author})
        .then(response=>{
            Swal.fire(
                'Good job!',
                'Your content has been saved.',
                'success'
              )
              setState({...state,title:"", content:"", author:""})
        }).catch(err=>{
            Swal.fire(
                'Oops...',
                err.response.data.error,
                'error'
              )
        })
    }

    return (
        <div className="container p-5">
            <h1>Start to write a content.</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Title :</label>
                    <input type="text" className="form-control" value={title} 
                    onChange={inputValue("title")}/>
                </div>
                <div className="form-group">
                    <label>Content :</label>
                    <textarea className="form-control" value={content}
                    onChange={inputValue("content")}/>
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control" value={author}
                    onChange={inputValue("author")}/>
                </div>
                <br></br>
                <input type="submit" value="Create" className="btn btn-primary"/>
                &nbsp; &nbsp;
                <a className="btn btn-outline-secondary" href="/">Go Back</a>
            </form>
        </div>
    );
}

export default FormComponent