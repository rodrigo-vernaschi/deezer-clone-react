import styles from "./Menu.module.css";
import logo from "../assets/logo.png";

const Menu = () => {
    return (
        <div id={styles.menu_content}>
            <img
                src={logo}
                alt="Deezer"
                id={styles.logo}
            />
            <ul>
                <li className={styles.main_menu}>
                    <i className={"bi bi-music-note-beamed " + styles.active}></i>
                    <span className={styles.main_menu + " " + styles.active}>Música</span>
                </li>
                <li className={styles.main_menu}>
                    <i className="bi bi-mic"></i>
                    <span className={styles.main_menu}>Podcasts</span>
                </li>
                <li className={styles.main_menu}>
                    <i className="bi bi-broadcast"></i>
                    <span className={styles.main_menu}>Rádios</span>
                </li>
                <li className={styles.main_menu}>
                    <i className="bi bi-collection-play"></i>
                    <span className={styles.main_menu}>Explorar</span>
                </li>
                <li className={styles.main_menu}>
                    <i className="bi bi-suit-heart"></i>
                    <span className={styles.main_menu}>Favoritos</span>
                </li>

                <li>
                    <span className={styles.sub_menu}>Mais Queridas</span>
                </li>
                <li>
                    <span className={styles.sub_menu}>Downloads</span>
                </li>
                <li>
                    <span className={styles.sub_menu}>Playlists</span>
                </li>
                <li>
                    <span className={styles.sub_menu}>Álbuns</span>
                </li>
                <li>
                    <span className={styles.sub_menu}>Artistas</span>
                </li>
                <li>
                    <span className={styles.sub_menu}>Podcasts</span>
                </li>
            </ul>
        </div>
    );
};
export default Menu;
