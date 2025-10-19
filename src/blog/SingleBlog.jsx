import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
const SingleBlog = () => {
    const [blog, setBlog]=useState(blogList);
    const {id}=useParams();
    const result = blog.filter((b)=> b.id === Number(id));

    
  return (
    <div>
      Single Blog
    </div>
  )
}

export default SingleBlog
