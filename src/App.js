import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Userdata from './Components/UsersData/Userdata';

const App =()=> {
  const[posts,setPosts] = useState([])
  const[loading,setLoading] = useState(false)
  const[currentPage,setCurrentPage] = useState(1)
  const[postsPerPage] = useState(3)
  const[clicked,setClicked]= useState(null)

  const API = "https://jsonplaceholder.typicode.com/users"

  const fetchApiData = async ()=>{
    setLoading(true)
    axios.get(API)
    .then((res)=>{
      setPosts(res.data)
    setLoading(false)
    })
    
  }
 useEffect(()=>{
   fetchApiData();
 },[]);


 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
const totalPages = Math.ceil(posts.length/postsPerPage)

  return (
    <div className="container">
       <Userdata posts={currentPosts} loading={loading} clicked={clicked} setClicked={setClicked} postsPerPage={postsPerPage} pages={totalPages} totalPosts={posts.length}  setCurrentPage={setCurrentPage}  />
       
    </div>
  );
}

export default App;
