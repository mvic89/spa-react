import styles from './main-content.module.css'
import { getImageUrl } from '../../utils/functions'

const MainContent = ({textTitle, paragraphText}) => {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.contentImage} src={getImageUrl('megadrive.png')} />
            <h1>{textTitle}</h1>
            <p>{paragraphText}</p>
        </div>
    )
}

export default MainContent