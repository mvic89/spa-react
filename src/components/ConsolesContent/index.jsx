import { getImageUrl } from '../../utils/functions'
import styles from './consoles-content.module.css'

const ConsoleContent = ({consolesParagraph}) => {
    return (
        <div className={styles.consoleContainer}>
            <div className={styles.consoleImage}>
                <img src={getImageUrl('sega-megadrive.jpg')} alt="Sega Megadrive"/>
                <img src={getImageUrl('sega-genesis.jpg')} alt="Sega Genesis"/>
            </div>
            <p className={styles.textStyling}>{consolesParagraph}</p>
        </div>
    )
}

export default ConsoleContent