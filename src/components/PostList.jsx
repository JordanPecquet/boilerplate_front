import React, { useState, useEffect } from 'react';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/posts');
        const data = await response.json();
        setPosts(data.posts);
        console.log(data.posts)
      } catch (error) {
        console.error('Erreur lors de la récupération des publications :', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Liste des publications</h2>
      {posts.length === 0 ? (
        <p>Aucune publication pour le moment</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;

