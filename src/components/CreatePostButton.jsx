import React, { useState } from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

function CreatePostButton() {
  const [content, setContent] = useState('');
  const [user] = useAtom(userAtom);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      data: {
        text: content,
        user: user.id,
      } 
    };

    try {
      const response = await fetch('http://localhost:1337/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        console.log('Le post a été créé avec succès');
      } else {
        console.error('Erreur lors de la création du post');
      }
    } catch (error) {
      console.error('Erreur lors de la création du post :', error);
    }
  };

  return (
    <div>
      <h2>Création d'un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="content">Contenu :</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <button type="submit">Créer le post</button>
      </form>
    </div>
  );
}

export default CreatePostButton;

