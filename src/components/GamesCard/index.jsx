import { useState } from 'react';
import { getImageUrl } from '../../utils/functions'
import styles from './games-card.module.css'



const GamesCard = ({games}) => {
    
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = games.description;

    if (!showFullDescription ) {
        description = description.substring(0, 90) + '...';
    }


    return (
        <div className={styles.gamesDiv}> 
            <img className={styles.gamesImg} src={getImageUrl(games.images)} alt={`${games.images}`} />
            <div className={styles.cardContent}>
                <h3>{games.title}</h3>
                <div>
                    <p>{description}</p>
                </div>
                <button onClick={ () => setShowFullDescription((prevState) => !prevState)}>{showFullDescription ? 'Less' : 'More'}</button>
            </div>
        </div>
    )
}

export default GamesCard