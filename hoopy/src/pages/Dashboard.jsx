import generic from '../assets/Genbg.png'


function Dashboard() {


    return (
        <div className='min-h-screen bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${generic})` }}>
            <div className='bg-indigo-900 grid grid-rows-2'>
                <div className='grid grid-cols-2'>
                    <div className='bg-sky-500'>
                        <p>right</p>
                    </div>
                    <div className='bg-indigo-600'>
                        <p>left</p>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='bg-sky-800'>
                        <p>right</p>
                    </div>
                    <div className='bg-indigo-200'>
                        <p>left</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard