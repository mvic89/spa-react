import { getImageUrl } from '../../utils/functions'
import styles from './consoles-content.module.css'

const ConsoleContent = ({conHead,conPar1,conPar2,conPar3}) => {
    return (
        <div className={styles.consoleContainer}>
            <div className={styles.consoleImage}>
                <img src={getImageUrl('sega-megadrive.jpg')} alt="Sega Megadrive"/>
                <img src={getImageUrl('sega-genesis.jpg')} alt="Sega Genesis"/>
            </div>
            <div className={styles.consoleText}>
                <h1>{conHead}</h1>
                <p className={styles.textStyling}>{conPar1}</p>
                <p className={styles.textStyling}>{conPar2}</p>
                <p className={styles.textStyling}>{conPar3}</p>
            </div>
        </div>
    )
}

export default ConsoleContent