import { getImageUrl } from '../../utils/functions'
import styles from './games-card.module.css'


const GamesCard = ({games}) => {
    return (
        <div className={styles.gamesDiv}> 
            <h3>{games.title}</h3>
            <img className={styles.gamesImg} src={getImageUrl(games.images)} alt={`${games.images}`} />
        </div>
    )
}

export default GamesCard