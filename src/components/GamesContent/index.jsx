import GamesCard from '../GamesCard'
import styles from './games-content.module.css'
import GamesData from '../../data/gamesdata'


const GamesContent = () => {

    return (
        <div>
            {GamesData.map((games) => (
                <GamesCard key={games.id} games={games}/>
            ))}
        </div>
    )
}

export default GamesContent