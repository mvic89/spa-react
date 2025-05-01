import styles from './games-card.module.css'


const GamesCard = ({games}) => {
    return (
        <div>
            <h2>{games.title}</h2>
        </div>
    )
}

export default GamesCard