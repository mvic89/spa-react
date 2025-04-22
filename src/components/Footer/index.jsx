import { SocialLogo } from "social-logos"
import styles from './footer.module.css'

const Footer = () => {
    return(
        <>
        <footer className={styles.footerContainer}>
            <div className={styles.footerLinks}>
                <a className={styles.socialIcons} href="/"><SocialLogo icon="facebook" size={24}/></a>
                <a className={styles.socialIcons} href="/"><SocialLogo icon="twitter" size={24}/></a>
                <a className={styles.socialIcons} href="/"><SocialLogo icon="instagram" size={24}/></a>
            </div>
            <div className={styles.footerBottom}>
                <p>Copyright &copy; 2025; Victor</p>
            </div>
        </footer>
        </>
    )
}

export default Footer