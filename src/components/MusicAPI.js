import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./Mixes.module.css";

export function MusicAPI({ id, mixID }) {
    let coverArtURL;
    let trackName;
    let artistName;

    // eslint-disable-next-line no-unused-vars
    let options = [];
    let mixIconPlay = `mix${mixID}`;
    let coverArt = `cover${mixID}`;
    const showElements = () => {
        document.getElementById(coverArt).style.opacity = "0.5";
        document.getElementById(mixIconPlay).style.display = "block";
    };
    const hideElements = () => {
        document.getElementById(coverArt).style.opacity = "1";
        document.getElementById(mixIconPlay).style.display = "none";
    };

    const [returnData, setReturnData] = useState("");

    const APIoptions = {
        method: "GET",
        url: "https://deezerdevs-deezer.p.rapidapi.com/track/" + id,
        headers: {
            "X-RapidAPI-Key": "a27e682713msh0f433b72cdc4f9ep156bf5jsne42859a9b845",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
    };

    // acesso a API usando o "axios" para receber as informações
    useEffect(() => {
        axios
            .request(APIoptions)
            .then(function (response) {
                setData(response.data);
            })
            .catch((error) => console.error(`Erro: ${error}`));
    }, []);

    const setData = (responseData) => {
        coverArtURL = responseData.album.cover_medium;
        trackName = responseData.title;
        artistName = responseData.artist.name;

        let content = (
            <>
                <div
                    className={styles.mix_img_container}
                    id={coverArt}
                    style={{ backgroundImage: `url(${coverArtURL})` }}
                ></div>
                <div
                    id={styles.mix_icon_play_container}
                    onMouseEnter={() => {
                        showElements();
                    }}
                    onMouseLeave={() => {
                        hideElements();
                    }}
                >
                    <i id={mixIconPlay} className={"bi bi-play-circle-fill " + styles.mix_icon_play}></i>
                </div>

                <div className={styles.mix_text}>
                    <a href="#music" className={styles.mix_links}>
                        <span className={styles.mix_title}>{trackName}</span>
                    </a>
                    <a href="#music" className={styles.mix_links}>
                        <span className={styles.mix_label}>por {artistName}</span>
                    </a>
                </div>
            </>
        );
        return setReturnData(content);
    };

    return returnData;
}
