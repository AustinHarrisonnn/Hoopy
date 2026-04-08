import { useState } from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/bg2.png'
import logo from '../assets/realHoopy.png'
import ball from '../assets/ball.png'

function Home() {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Top */}
            <div className='grid grid-cols-5'>
                {/* Top Left */}
                <div className='rounded-lg min-h-[50px] pl-10 col-span-2'>
                    <img src={logo} alt="Hoopy logo" className='w-100 pb-10 pl-10' /> 
                    {/* Sign in box */}
                    <div className='bg-[#008EFF] flex flex-col items-center mr-10 p-10 rounded-xl'>
                        <h1 className='text-white text-xl mb-10'>Already have account? Sign in!</h1>
                        {/* Username box */}
                        <div className='mb-3 w-full'>
                            <input
                                type='text'
                                placeholder='Username'
                                className='bg-gray-300 text-black placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-950 w-full'
                            />
                        </div>
                        {/* Password box */}
                        <div className='w-full'>
                            <input
                                type='text'
                                placeholder='Password'
                                className='bg-gray-300 text-black placeholder-gray-500 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-950 w-full'
                            />
                        </div>
                        {/* Button and sign up link */}
                        <button className="bg-blue-900 hover:bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors mt-4 w-full">
                            Sign In
                        </button>
                        <p className='text-white mt-3'>Or, <Link to='/signup' className='text-blue-900 hover:underline'>sign up</Link></p>
                    </div>
                </div>
                {/* Top Right */}
                <div className='rounded-lg min-h-[50px] flex items-center justify-center px-8 py-12'>
                    <p>Image carrossel will go here at some point</p>
                </div>
            </div>
            {/* Bottom half */}
            <div className='flex flex-col items-center'>
                <div className='bg-[#008EFF] flex flex-col items-center justify-center text-center p-10 mt-20 max-w-6/10 rounded-xl'>
                    <h1 className='text-white text-3xl font-bold mb-4'>What is Hoopy?</h1>
                    <h2 className='text-gray-300 text-lg max-w-2xl'>Hoopy is an AI powered sports dashboard showing live scores & stats while leveraging AI to generate real-time game analysis and predictions. The user is able to create an account and select a favorite NBA team or teams to follow that will be displayed on the users dashboard.</h2>
                </div>
            </div>
        </div>
    )
}

export default Home