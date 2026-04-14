import generic from '../assets/Genbg.png'
import logo from '../assets/realHoopy.png'

function Dashboard() {


    return (
        <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${generic})` }}>
            <div className='grid grid-rows-2'>
                {/* Top 2 rows */}
                <div className='grid grid-cols-2'>
                    {/* Logo image */}
                    <div>
                        <img src={logo} alt="Hoopy logo" className='w-100 pb-10 pl-10' /> 
                    </div>
                    <div className='grid grid-flow-col justify-items-end content-center'>
                        <button className="bg-blue-900 hover:bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors mr-30 max-h-30">Sign Out</button>
                    </div>
                </div>
                {/* Middle 2 rows */}
                <div className='grid grid-cols-2'>
                    <div className='bg-sky-500'>
                        <p>Score Feed</p>
                    </div>
                    <div className='bg-indigo-600'>
                        <p>Game Stats</p>
                    </div>
                </div>
                {/* Bottom 2 rows */}
                <div className='grid grid-cols-2'>
                    <div className='bg-sky-800'>
                        <p>Ask AI Analyst</p>
                    </div>
                    <div className='bg-indigo-200'>
                        <p>AI Game Analysis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard