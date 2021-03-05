import React, { createContext, useEffect } from 'react';
import { auth, firestore } from '../services/firebase';
import useLocalStorage from '../hooks/useLocalStorage';

export const UserContext = createContext();

const createUser = async (user) => {
  if (!user) return;
  const userRef = firestore.collection('users').doc(user.uid);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, uid } = user;
    await userRef.set({
      email,
      displayName,
      uid,
    });
  }
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage('user', null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      await createUser(userAuth);
      setUser(userAuth);
    });
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export default UserProvider;
