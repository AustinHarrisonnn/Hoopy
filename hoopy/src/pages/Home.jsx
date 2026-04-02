import { useState } from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/HoopyBackground.png'
import logo from '../assets/hoopyWords.png'
import ball from '../assets/ball.png'

function Home() {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Top */}
            <div className='grid grid-cols-2'>
                {/* Top Left */}
                <div className='rounded-lg min-h-[50px] pl-10'>
                    <img src={logo} alt="Hoopy logo" className='w-130' />
                    
                    <div className='flex flex-col items-left mr-25 pl-20'>
                        <h1 className='text-white pb-5'>Already have account? Sign in!</h1>
                        <div className='flex items-center pb-3'>
                            <p className='text-white'>Username</p>
                            <input
                                type='text'
                                placeholder='enter username'
                                className='bg-gray-300 text-black placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-950 ml-4 w-full'
                            />
                        </div>
                        <div className='flex items-center'>
                            <p className='text-white'>Password</p>
                            <input
                                type='text'
                                placeholder='enter password'
                                className='bg-gray-300 text-black placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-950 ml-4 w-full'
                            />
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors mt-4">
                            Sign In
                        </button>
                        <p className='text-white'>Or, <Link to='/signup' className='text-blue-500 hover:underline'>sign up</Link></p>
                    </div>
                </div>
                {/* Top Right */}
                <div className='rounded-lg min-h-[50px] flex items-center justify-center px-8 py-12'>
                    <img src={ball} alt='Basketball Image' className='w-140 ml-50' />
                </div>
            </div>
            {/* Bottom half */}
            <div className='flex flex-col items-center justify-center text-center pt-10'>
                <h1 className='text-white text-3xl font-bold mb-4'>What is Hoopy?</h1>
                <h2 className='text-gray-300 text-lg max-w-2xl'>Hoopy is an AI powered sports dashboard showing live scores & stats while leveraging AI to generate real-time game analysis and predictions. The user is able to create an account and select a favorite NBA team or teams to follow that will be displayed on the users dashboard.</h2>
            </div>
        </div>
    )
}

export default Home