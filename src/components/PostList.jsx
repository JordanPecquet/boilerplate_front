import React, { useEffect, useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      fetch("http://localhost:1337/api/posts?populate=*", {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((responseData) => {
          setPosts(responseData.data);
          console.log(responseData.data);
        });
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Liste des posts :</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.attributes.content}</p>
          <p>Posté par: {post.attributes.user_id.data.attributes.username}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;


