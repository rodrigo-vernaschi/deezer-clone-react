import styles from "./Flow.module.css";

const Flow = () => {
    // eslint-disable-next-line no-unused-vars
    let options = [];
    const showElements = (options) => {
        if (options[0] === true) {
            document.getElementById(options[1]).style.display = "none";
            document.getElementById(options[2]).style.display = "block";
            if (options.length === 4) document.getElementById(options[3]).style.opacity = "100%";
        } else {
            document.getElementById(options[1]).style.display = "block";
            document.getElementById(options[2]).style.display = "none";
            if (options.length === 4) document.getElementById(options[3]).style.opacity = "0%";
        }
    };

    return (
        <div id={styles.flow_container}>
            <h1 className={styles.h1}>Flow: toque o que você sente</h1>
            <span id={styles.h1_label}>
                Um mix infinito e personalizado das músicas que você ama e também de novas descovertas
            </span>
            <div id={styles.flow_categories_container}>
                {/* FLOW */}
                <div
                    className={styles.flow_category_container}
                    onMouseEnter={() => {
                        showElements((options = [true, styles.flow_span, styles.flow_icon_play_flow]));
                    }}
                    onMouseLeave={() => {
                        showElements((options = [false, styles.flow_span, styles.flow_icon_play_flow]));
                    }}
                >
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        id={styles.flow_category}
                    >
                        <span id={styles.flow_span}>flow</span>
                        <i
                            id={styles.flow_icon_play_flow}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>
                    </div>

                    <span className={styles.flow_categories_label}>Flow</span>
                </div>

                {/* TREINO */}
                <div className={styles.flow_category_container}>
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        onMouseEnter={() => {
                            showElements(
                                (options = [
                                    true,
                                    styles.flow_icon_treino,
                                    styles.flow_icon_play_treino,
                                    styles.flow_bg_treino,
                                ])
                            );
                        }}
                        onMouseLeave={() => {
                            showElements(
                                (options = [
                                    false,
                                    styles.flow_icon_treino,
                                    styles.flow_icon_play_treino,
                                    styles.flow_bg_treino,
                                ])
                            );
                        }}
                    >
                        <div
                            id={styles.flow_bg_treino}
                            className={styles.flow_categories_bg}
                        ></div>
                        <i
                            id={styles.flow_icon_play_treino}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>

                        <i
                            id={styles.flow_icon_treino}
                            className={"fa-regular fa-hand-back-fist " + styles.flow_category_icon}
                        ></i>
                    </div>
                    <span className={styles.flow_categories_label}>Treino</span>
                </div>

                {/* FESTA */}
                <div className={styles.flow_category_container}>
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        onMouseEnter={() => {
                            showElements(
                                (options = [
                                    true,
                                    styles.flow_icon_festa,
                                    styles.flow_icon_play_festa,
                                    styles.flow_bg_festa,
                                ])
                            );
                        }}
                        onMouseLeave={() => {
                            showElements(
                                (options = [
                                    false,
                                    styles.flow_icon_festa,
                                    styles.flow_icon_play_festa,
                                    styles.flow_bg_festa,
                                ])
                            );
                        }}
                    >
                        <div
                            id={styles.flow_bg_festa}
                            className={styles.flow_categories_bg}
                        ></div>
                        <i
                            id={styles.flow_icon_play_festa}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>
                        <i
                            id={styles.flow_icon_festa}
                            className={"bi bi-stars " + styles.flow_category_icon}
                        ></i>
                    </div>
                    <span className={styles.flow_categories_label}>Festa</span>
                </div>

                {/* RELAX */}
                <div className={styles.flow_category_container}>
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        onMouseEnter={() => {
                            showElements(
                                (options = [
                                    true,
                                    styles.flow_icon_relax,
                                    styles.flow_icon_play_relax,
                                    styles.flow_bg_relax,
                                ])
                            );
                        }}
                        onMouseLeave={() => {
                            showElements(
                                (options = [
                                    false,
                                    styles.flow_icon_relax,
                                    styles.flow_icon_play_relax,
                                    styles.flow_bg_relax,
                                ])
                            );
                        }}
                    >
                        <div
                            id={styles.flow_bg_relax}
                            className={styles.flow_categories_bg}
                        ></div>
                        <i
                            id={styles.flow_icon_play_relax}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>
                        <i
                            id={styles.flow_icon_relax}
                            className={"fa-brands fa-pagelines " + styles.flow_category_icon}
                        ></i>
                    </div>
                    <span className={styles.flow_categories_label}>Relax</span>
                </div>

                {/* NA BAD */}
                <div className={styles.flow_category_container}>
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        onMouseEnter={() => {
                            showElements(
                                (options = [
                                    true,
                                    styles.flow_icon_na_bad,
                                    styles.flow_icon_play_na_bad,
                                    styles.flow_bg_na_bad,
                                ])
                            );
                        }}
                        onMouseLeave={() => {
                            showElements(
                                (options = [
                                    false,
                                    styles.flow_icon_na_bad,
                                    styles.flow_icon_play_na_bad,
                                    styles.flow_bg_na_bad,
                                ])
                            );
                        }}
                    >
                        <div
                            id={styles.flow_bg_na_bad}
                            className={styles.flow_categories_bg}
                        ></div>
                        <i
                            id={styles.flow_icon_play_na_bad}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>
                        <i
                            id={styles.flow_icon_na_bad}
                            className={"fa-regular fa-face-sad-cry " + styles.flow_category_icon}
                        ></i>
                    </div>
                    <span className={styles.flow_categories_label}>Na bad</span>
                </div>

                {/* VOCÊ E EU */}
                <div className={styles.flow_category_container}>
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        onMouseEnter={() => {
                            showElements(
                                (options = [
                                    true,
                                    styles.flow_icon_voce_e_eu,
                                    styles.flow_icon_play_voce_e_eu,
                                    styles.flow_bg_voce_e_eu,
                                ])
                            );
                        }}
                        onMouseLeave={() => {
                            showElements(
                                (options = [
                                    false,
                                    styles.flow_icon_voce_e_eu,
                                    styles.flow_icon_play_voce_e_eu,
                                    styles.flow_bg_voce_e_eu,
                                ])
                            );
                        }}
                    >
                        <div
                            id={styles.flow_bg_voce_e_eu}
                            className={styles.flow_categories_bg}
                        ></div>
                        <i
                            id={styles.flow_icon_play_voce_e_eu}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>
                        <i
                            id={styles.flow_icon_voce_e_eu}
                            className={"bi bi-arrow-through-heart " + styles.flow_category_icon}
                        ></i>
                    </div>
                    <span className={styles.flow_categories_label}>Você e Eu</span>
                </div>

                {/* FOCO */}
                <div className={styles.flow_category_container}>
                    <div
                        className={styles.flow_categories + " " + styles.flow_categories_bg}
                        onMouseEnter={() => {
                            showElements(
                                (options = [
                                    true,
                                    styles.flow_icon_foco,
                                    styles.flow_icon_play_foco,
                                    styles.flow_bg_foco,
                                ])
                            );
                        }}
                        onMouseLeave={() => {
                            showElements(
                                (options = [
                                    false,
                                    styles.flow_icon_foco,
                                    styles.flow_icon_play_foco,
                                    styles.flow_bg_foco,
                                ])
                            );
                        }}
                    >
                        <div
                            id={styles.flow_bg_foco}
                            className={styles.flow_categories_bg}
                        ></div>
                        <i
                            id={styles.flow_icon_play_foco}
                            className={"bi bi-play-circle-fill " + styles.flow_category_icon}
                        ></i>
                        <i
                            id={styles.flow_icon_foco}
                            className={"bi bi-flower1 " + styles.flow_category_icon}
                        ></i>
                    </div>
                    <span className={styles.flow_categories_label}>Foco</span>
                </div>
            </div>
        </div>
    );
};
export default Flow;
