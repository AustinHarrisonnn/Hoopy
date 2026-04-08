


function TeamCard({ teamName, logo, isSelected, onSelect }) {
    return (
        <div
            onClick={onSelect}
            className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer border-2 transition-all
                ${isSelected
                    ? 'border-[#005395] bg-[#008EFF]/60'
                    : 'border-[#3C3C3C] bg-[#000000]/90 hover:border-gray-500'
                }`}
        >
            <img src={logo} alt={teamName} className='w-16 h-16 object-contain mb-2' />
            <p className='text-white text-sm font-semibold text-center'>{teamName}</p>
            {isSelected && (
                <span className='text-gray-950 text-xs mt-1'>✓ Selected</span>
            )}
        </div>
    )
}

export default TeamCard