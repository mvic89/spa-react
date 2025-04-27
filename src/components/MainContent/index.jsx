import styles from './main-content.module.css'
import { getImageUrl } from '../../utils/functions'

const MainContent = ({paragraphText}) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentImage}>
                <img src={getImageUrl('megadrive.png')} />
            </div>
            <p className={styles.textStyling}>{paragraphText}</p>
        </div>
    )
}

export default MainContent