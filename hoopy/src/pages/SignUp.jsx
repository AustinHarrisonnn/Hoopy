import { useState } from 'react'
import { auth, db } from '../lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async () => {
        try {
            // Create user in firebase auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            const user = userCredential.user

            // Save username to firestore
            await setDoc(doc(db, 'users', user.uid), {
                username: username,
                email: email,
                createdAt: new Date()
            })

            console.log('Account created successfully!')

        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="min-h-screen bg-indigo-900 flex items-center justify-center">
            <div className="bg-indigo-700/40 p-8 rounded-2xl w-full max-w-md">

                <h1 className="text-white text-3xl font-bold mb-2">Sign up for Hoopy today!</h1>
                <p className="text-gray-300 mb-8">Join Hoopy now and follow your teams</p>

                {error && (
                    <p className="text-red-400 text-sm mb-4 bg-red-950 p-3 rounded-lg">{error}</p>
                )}

                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="bg-gray-50 text-black placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 text-black placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 text-black placeholder-gray-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <button
                        onClick={handleSubmit}
                        className="bg-gray-950 hover:bg-indigo-950 text-white font-semibold py-3 rounded-lg transition-colors mt-2"
                    >
                        Sign Up
                    </button>
                </div>

                <p className="text-gray-300 text-sm text-center mt-6">
                    Already have an account? <span className="text-gray-950 cursor-pointer hover:underline">Log in</span>
                </p>

            </div>
        </div>
    )
}

export default SignUp