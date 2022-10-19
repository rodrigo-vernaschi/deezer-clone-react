import axios from "axios";
import { useState } from "react";

export function MusicAPI() {
    // ids das músicas
    const ids = [
        2135931, 2150147, 1611595482, 108636950, 949355232, 1646356392, 388894601, 404183102, 1913390567, 1745571857,
        67845584, 116348098,
    ];

    const [coverArtURL, setArray] = useState([]);

    let trackName = [];
    let artistName = [];

    // arrays que vão armazenar informações das músicas

    // puxando informações
    for (let index = 0; index < ids.length; index++) {
        // configuração do acesso a API
        const options = {
            method: "GET",
            url: "https://deezerdevs-deezer.p.rapidapi.com/track/" + ids[index],
            headers: {
                "X-RapidAPI-Key": "a27e682713msh0f433b72cdc4f9ep156bf5jsne42859a9b845",
                "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            },
        };

        // acesso a API usando o "axios" para receber as informações
        axios
            .request(options)
            .then(function (response) {
                // coverArtURL.push(response.data.album.cover_medium);
                // trackName.push(response.data.title);
                // artistName.push(response.data.artist.name);
                setArray((coverArtURL) => [...coverArtURL, response.data.album.cover_medium]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // let data = { coverArtURL, trackName, artistName };

    console.log(coverArtURL);

    return;
}
