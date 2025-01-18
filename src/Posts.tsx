import React, { useEffect, useState } from 'react'

interface Post {
    title: string;
   
  }
export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([])
  const getPost = async() => {
    const post = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (post.ok){
        let data = await post.json()
        data = data.slice(0,10)
        console.log(data)
        setPosts(data)
    
    }

  }
  
  useEffect(() => {
    getPost()
    fetch("https://jsonplaceholder.typicode.com/posts").then(
        async (res) => {
            console.log(await res.json())
        }
    )
    

  }, [])
  return (
    <div>{posts.length > 0 ? (
        posts.map((post, i) => (
          <div key={i}>
            <h2>{post.title}</h2>
            
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}</div>
  )
}
