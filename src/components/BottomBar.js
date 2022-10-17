import styles from "./BottomBar.module.css";
import album_cover from "../assets/album_cover.png";

const BottomBar = () => {
    let valuenow = 25;

    return (
        <div id={styles.bottom_bar}>
            <div id={styles.controls}>
                <i className={"bi bi-arrow-left-short " + styles.hover}></i>
                <i
                    className={"bi bi-play " + styles.hover}
                    id="play"
                ></i>
                <i className={"bi bi-arrow-right-short " + styles.hover}></i>
            </div>
            <div id={styles.music_panel}>
                <div id={styles.song_name_container}>
                    <div id={styles.song_name}>De Sade * Slipknot</div>
                    <div id={styles.song_controls}>
                        <i className={"bi bi-plus-lg " + styles.hover}></i>
                        <i className={"bi bi-suit-heart " + styles.hover}></i>
                    </div>
                </div>
                <div id={styles.song_time}>
                    <div className={styles.song_time}>01:24</div>
                    <div
                        className="progress"
                        style={{ height: "1px", width: "100%", marginTop: "12px" }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={valuenow}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "25%" }}
                        ></div>
                    </div>
                    <div className={styles.song_time}>05:39</div>
                </div>
            </div>
            <div id={styles.other_controls_queue_container}>
                <div id={styles.other_controls}>
                    <div id={styles.castTooltip}>Chromecast</div>
                    <i className={"bi bi-cast " + styles.hover}></i>
                    <i className={"bi bi-repeat " + styles.active + " " + styles.hover}></i>
                    <i className={"bi bi-shuffle " + styles.hover}></i>
                    <i className={"bi bi-volume-up " + styles.hover}></i>
                    <i className={"bi bi-sliders " + styles.hover}></i>
                </div>
                <div
                    className="d-flex"
                    style={{ height: "30px", width: "30px", justifyContent: "center", alignItems: "center" }}
                >
                    <div
                        className="vr"
                        style={{ height: "30px" }}
                    ></div>
                </div>

                <div id={styles.queue_container}>
                    <div id={styles.queue}>
                        <img
                            id={styles.queue_album_cover}
                            src={album_cover}
                            alt=""
                        />
                        <span id={styles.queue_text}>Fila de Espera</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default BottomBar;
