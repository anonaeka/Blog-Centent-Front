import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Swal from "sweetalert2";

const EditComponent=()=>{
    const [state, setState] = useState({
        title:"",
        content:"",
        author:"",
        slug:""
    })
    const {title, content, author} = state

    const inputValue=name=>(event)=>{
        setState({...state, [name]:event.target.value});
    }

    const { slug } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/blog/${slug}`)
            .then(response => {
                const {title, content, author, slug} = response.data
                setState({...state, title, content, author, slug})
            })
            .catch(err => alert(err))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const showUpdateForm = () => (
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>Title :</label>
                <input type="text" className="form-control" value={title}
                    onChange={inputValue("title")} />
            </div>
            <div className="form-group">
                <label>Content :</label>
                <textarea className="form-control" value={content}
                    onChange={inputValue("content")} />
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" value={author}
                    onChange={inputValue("author")} />
            </div>
            <br></br>
            <input type="submit" value="Update" className="btn btn-outline-success" />
            &nbsp; &nbsp;
            <a className="btn btn-outline-secondary" href="/">Go Back</a>
        </form>
    )

    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ", process.env.REACT_APP_API)
        axios
        .put(`${process.env.REACT_APP_API}/blog/${slug}`,{title, content, author})
        .then(response=>{
            Swal.fire(
                'Successful!',
                'Your content has been updated already.',
                'success'
              )
              const {title, content, author, slug} = response.data
              setState({...state, title, author, content, slug})
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
            <h1>Edit your content.</h1>
            {showUpdateForm()}
        </div>
    );
}

export default EditComponent