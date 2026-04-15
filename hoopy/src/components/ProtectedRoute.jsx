import { useEffect, useState } from 'react'
import { auth } from '../lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const [user, setUser] = useState(undefined)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    if (user === undefined) {
        return <div className='min-h-screen bg-gray-950' />
    }

    if (!user) {
        return <Navigate to='/' />
    }

    return children
}

export default ProtectedRoute