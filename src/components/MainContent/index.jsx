import styles from './main-content.module.css'
import { getImageUrl } from '../../utils/functions'

const MainContent = ({paragraphText}) => {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.contentImage} src={getImageUrl('megadrive.png')} />
            <p className={styles.textStyling}>{paragraphText}</p>
        </div>
    )
}

export default MainContent