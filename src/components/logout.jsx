import React from 'react';
import { useAtom } from 'jotai';
import { userAtom } from '../atom';

function LogoutButton() {
  const [, setUser] = useAtom(userAtom);

  const handleLogout = () => {
    // Supprimer le token de l'atom user
    setUser({
      isLoggedIn: false,
      token: '',
    });

    // Supprimer le token des cookies
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Supprimer le token du localStorage
    localStorage.removeItem('token');
  };

  return (
    <button onClick={handleLogout}>Déconnexion</button>
  );
}

export default LogoutButton;
