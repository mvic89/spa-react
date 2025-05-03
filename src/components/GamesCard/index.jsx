import { useState } from 'react';
import { getImageUrl } from '../../utils/functions'
import styles from './games-card.module.css'



const GamesCard = ({games}) => {
    
    const [showFullDescription, setShowFullDescription] = useState(false);

    let description = games.description;

    return (
        <div className={styles.gamesDiv}> 
            <img className={styles.gamesImg} src={getImageUrl(games.images)} alt={`${games.images}`} />
            <div className={styles.cardContent}>
                <h3>{games.title}</h3>
                <div>
                    {showFullDescription ? (
                        <>
                        <p>{description}</p>
                        <br/>
                        <p>{games.developer}</p>
                        <p>{games.genre}</p>
                        <p>{games.release}</p>
                        <p>{games.players}</p>
                        <p>{games.playmode}</p>
                        </>
                    ) : (
                        <p>{description = description.substring(0, 90) + '...'}</p>
                    )}
                </div>
                <button className={styles.cardBtn} onClick={ () => setShowFullDescription((prevState) => !prevState)}>{showFullDescription ? 'Less' : 'More'}</button>
            </div>
        </div>
    )
}

export default GamesCard