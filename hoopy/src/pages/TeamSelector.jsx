import { useState } from 'react'
import { db, auth } from '../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import TeamCard from '../components/TeamCard'
import generic from '../assets/Genbg.png'
import Celtics from '../assets/celticsLogo.png'

function TeamSelector() {
    const [selectedTeams, setSelectedTeams] = useState([])

    const teams = [
        { id: 1, name: 'Boston Celtics', logo: Celtics },
        { id: 2, name: 'Brooklyn Nets', logo: '...' },
        { id: 3, name: 'New York Knicks', logo: '...' },
        { id: 4, name: 'Philadelphia 76ers', logo: '...' },
        { id: 5, name: 'Toronto Raptors', logo: '...' },
        { id: 6, name: 'Golden State Warriors', logo: '...' },
        { id: 7, name: 'LA Clippers', logo: '...' },
        { id: 8, name: 'LA Lakers', logo: '...' },
        { id: 9, name: 'Phoenix Suns', logo: '...' },
        { id: 10, name: 'Sacramento Kings', logo: '...' },
        { id: 11, name: 'Chicago Bulls', logo: '...' },
        { id: 12, name: 'Cleveland Cavaliers', logo: '...' },
        { id: 13, name: 'Detroit Pisons', logo: '...' },
        { id: 14, name: 'Indiana Pacers', logo: '...' },
        { id: 15, name: 'Milwaukee Bucks', logo: '...' },
        { id: 16, name: 'Atlanta Hawks', logo: '...' },
        { id: 17, name: 'Charlotte Hornets', logo: '...' },
        { id: 18, name: 'Miami Heat', logo: '...' },
        { id: 19, name: 'Orlando Magic', logo: '...' },
        { id: 20, name: 'Washington Wizards', logo: '...' },
        { id: 21, name: 'Denver Nuggets', logo: '...' },
        { id: 22, name: 'Minnesota Timberwolves', logo: '...' },
        { id: 23, name: 'Oklahoma City Thunder', logo: '...' },
        { id: 24, name: 'Portland Trailblazers', logo: '...' },
        { id: 25, name: 'Utah Jazz', logo: '...' },
        { id: 26, name: 'Dallas Mavericks', logo: '...' },
        { id: 27, name: 'Houston Rockets', logo: '...' },
        { id: 28, name: 'Memphis Grizzlies', logo: '...' },
        { id: 29, name: 'New Orleans Pelicans', logo: '...' },
        { id: 30, name: 'San Antonio Spurs', logo: '...' },
    ]

    const handleSelect = (teamId) => {
        setSelectedTeams(prev =>
            prev.includes(teamId)
                ? prev.filter(id => id !== teamId)
                : [...prev, teamId]
        )
    }

    const navigate = useNavigate()

    const handleContinue = async () => {
        try {
            const user = auth.currentUser

            if (!user) {
                console.log('No user logged in')
                return
            }

            await setDoc(doc(db, 'users', user.uid), {
                favoriteTeams: selectedTeams
            }, { merge: true })

            console.log('Teams saved!')
            navigate('/dashboard')
        } catch (err) {
            console.error('Error saving teams:', err)
        }
    }

    return (
        <div className='min-h-screen p-8' style={{ backgroundImage: `url(${generic})`}}>
            <h1 className='text-black text-3xl font-bold mb-8 text-center'>Pick your favorite teams</h1>
            <div className='grid grid-cols-6 gap-6'>
                {teams.map(team => (
                    <TeamCard
                        key={team.id}
                        teamName={team.name}
                        logo={team.logo}
                        isSelected={selectedTeams.includes(team.id)}
                        onSelect={() => handleSelect(team.id)}
                    />
                ))}
            </div>
            <button
                onClick={handleContinue}
                className="bg-[#008EFF] hover:bg-blue-400 text-white font-semibold py-2 px-12 rounded-lg transition-colors mt-8 w-full"
                >
                    Continue
            </button>
        </div>
    )
}

export default TeamSelector