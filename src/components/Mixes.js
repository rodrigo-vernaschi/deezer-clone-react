import styles from "./Mixes.module.css";

const Mixes = () => {
    // eslint-disable-next-line no-unused-vars
    let options = [];
    const showElements = (options) => {
        if (options[0] === true) {
            document.getElementById(options[1]).style.opacity = "0.5";
            document.getElementById(options[2]).style.display = "block";
        } else {
            document.getElementById(options[1]).style.opacity = "1";
            document.getElementById(options[2]).style.display = "none";
        }
    };
    return (
        <div>
            <h1 id={styles.h1_mixes}>Mixes inspirados por</h1>
            <span id={styles.h1_label}>Descubra faixas similares aos seus hits favoritos</span>

            <div id={styles.mixes_panel_container}>
                <table id={styles.mixes_table}>
                    <tbody>
                        <tr>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix1"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix1", styles.mix_icon_play_1]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix1", styles.mix_icon_play_1]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_1}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix2"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix2", styles.mix_icon_play_2]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix2", styles.mix_icon_play_2]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_2}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix3"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix3", styles.mix_icon_play_3]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix3", styles.mix_icon_play_3]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_3}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix4"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix4", styles.mix_icon_play_4]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix4", styles.mix_icon_play_4]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_4}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix5"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix5", styles.mix_icon_play_5]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix5", styles.mix_icon_play_5]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_5}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix6"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix6", styles.mix_icon_play_6]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix6", styles.mix_icon_play_6]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_6}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix7"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix7", styles.mix_icon_play_7]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix7", styles.mix_icon_play_7]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_7}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix8"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix8", styles.mix_icon_play_8]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix8", styles.mix_icon_play_8]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_8}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix9"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix9", styles.mix_icon_play_9]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix9", styles.mix_icon_play_9]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_9}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix10"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix10", styles.mix_icon_play_10]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix10", styles.mix_icon_play_10]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_10}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix11"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix11", styles.mix_icon_play_11]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix11", styles.mix_icon_play_11]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_11}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    <div
                                        className={styles.mix_img_container}
                                        id="mix12"
                                    ></div>
                                    <div
                                        id={styles.mix_icon_play_container}
                                        onMouseEnter={() => {
                                            showElements((options = [true, "mix12", styles.mix_icon_play_12]));
                                        }}
                                        onMouseLeave={() => {
                                            showElements((options = [false, "mix12", styles.mix_icon_play_12]));
                                        }}
                                    >
                                        <i
                                            id={styles.mix_icon_play_12}
                                            className={"bi bi-play-circle-fill " + styles.mix_icon_play}
                                        ></i>
                                    </div>
                                    <div className={styles.mix_text}>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_title}>Música</span>
                                        </a>
                                        <a
                                            href="#music"
                                            className={styles.mix_links}
                                        >
                                            <span className={styles.mix_label}>por Banda</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Mixes;
