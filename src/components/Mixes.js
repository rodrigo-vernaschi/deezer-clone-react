import styles from "./Mixes.module.css";
import { MusicAPI } from "./MusicAPI";

const Mixes = () => {
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
                                    {/* component */}
                                    <MusicAPI id={"2135931"} mixID={"1"} />
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"2150147"} mixID={"2"} />
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"1611595482"} mixID={"3"} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"108636950"} mixID={"4"} />
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"949355232"} mixID={"5"} />
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"1646356392"} mixID={"6"} />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"388894601"} mixID={"7"} />
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"404183102"} mixID={"8"} />
                                </div>
                            </td>
                            <td>
                                <div className={styles.mix_panel_container}>
                                    {/* component */}
                                    <MusicAPI id={"1913390567"} mixID={"9"} />
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
