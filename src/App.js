import "./App.css"
import axios from "axios"
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

function App() {
  const [blogs, setBlogs] = useState([])

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API}/blogs`)
      .then(response => {
        setBlogs(response.data)
      })
      .catch(err => alert(err));
  }

  useEffect(() => {
    fetchData()
  }, [])

  const confirmDelete=(slug)=>{
    Swal.fire({
      title: "Are you prefer to delete your content ?",
      icon:"warning",
      showCancelButton:true
    }).then((result)=>{
      if(result.isConfirmed){
        deleteBlog(slug)
      }
    })
  }

  const deleteBlog=(slug)=>{
    axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`)
    .then(response=>{
      Swal.fire(
        "Deleted !",
        response.data.message,
        "success"
      )
      fetchData()
    }).catch(err=>console.log(err))
  }

  return (
    <div className="container p-3">
      <div className="p-2"><a className="btn btn-outline-success" href="/create">Create Content</a></div>
      {blogs.map((blog, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            Author: {blog.author}
          </div>
          <div className="card-body">
            <Link to={`/blog/${blog.slug}`}>
            <h5>{blog.title}</h5>
            </Link>
            <p>{blog.content.substring(0, 300)}</p>
            <p className="card-text"><small className="text-muted">Created: {new Date(blog.createdAt).toLocaleString()}</small></p>
            <Link className="btn btn-outline-warning" to={`/blog/edit/${blog.slug}`}>Edit</Link>
            &nbsp; &nbsp;
            <button className="btn btn-danger" onClick={()=>confirmDelete(blog.slug)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
