import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const SingleComponent = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState('')

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/blog/${slug}`)
            .then(response => {
                setBlog(response.data)
            })
            .catch(err => alert(err))
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="container p-5">
            <div className="card border-dark mb-3">
                <div className="card-body">
                <h1>{blog.title}</h1>
                    <h5 className="text-muted">Author: {blog.author}</h5>
                    <p>{blog.content}</p>
                    <p className="card-text"><small className="text-muted">Created: {new Date(blog.createdAt).toLocaleString()}</small></p>
                </div>
            </div>
            <a className="btn btn-outline-secondary" href="/">Go Back</a>
        </div>
    )
}

export default SingleComponent