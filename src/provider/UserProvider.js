import {createContext, useState, useEffect} from 'react'
import {auth, firestore} from "../services/firebase";

export const UserContext = createContext();

const createUser = async (user) => {
    if (!user) return;
    const userRef = firestore.collection('users').doc(user.uid);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const {email, displayName, uid} = user;
        await userRef.set({
            email,
            displayName,
            uid
        });
    }

};

const UserProvider = ({children}) => {

    const [user, setUser] = useState("")
    const [admin, setAdmin] = useState("")

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            await createUser(user);
            setUser(user);
            if (user) {
                const userRef = await firestore.collection('users').doc(user.uid);
                const snapshot = await userRef.get();
                const adminState = await snapshot.data().isAdmin
                setAdmin(adminState)
            }
        })
    }, [])

    return <UserContext.Provider value={{user, admin}}>{children}</UserContext.Provider>
}

export default UserProvider
