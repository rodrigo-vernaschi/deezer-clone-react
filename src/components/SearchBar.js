import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div id={styles.search_bar}>
            <i
                className="bi bi-search"
                id={styles.search_icon}
            ></i>
            <input
                type="text"
                className="form-control"
                id={styles.search_input}
                placeholder="Buscar"
            />
            <i
                className="bi bi-bell-fill"
                id={styles.notifications_icon}
            ></i>
            <div id={styles.user_img}></div>
        </div>
    );
};
export default SearchBar;
