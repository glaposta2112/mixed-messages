const bandList = [
    {
        band: "Rush",
        suggestedAlbums: ["Moving Pictures", "2112", "A Farewell to Kings"],
        suggestedSongs: ["Tom Sawyer", "2112", "Closer to the Heart"]
    },
    {
        band: "Metallica",
        suggestedAlbums: ["...And Justice For All", "Master of Puppets", "Load"],
        suggestedSongs: ["One", "Orion", "King Nothing"]
    },
    {
        band: "Fates Warning",
        suggestedAlbums: ["No Exit", "Awaken the Guardian", "X"],
        suggestedSongs: ["Ivory Gate of Dreams", "Guardian", "River Wide, Ocean Deep"]
    }
];

const getRandomNumber = maxNumber => {
    const randomNumber = Math.floor(Math.random() * maxNumber);
    return randomNumber;
}

const getRandomBandOfTheDay = () => {
    const randomNumber = getRandomNumber(bandList.length);
    const randomAlbumNumber = getRandomNumber(bandList[randomNumber].suggestedAlbums.length);
    const randomSongNumber = getRandomNumber(bandList[randomNumber].suggestedSongs.length);

    const bandOfTheDay = {
        band: bandList[randomNumber].band,
        suggestedAlbum: bandList[randomNumber].suggestedAlbums[randomAlbumNumber],
        suggestedSong: bandList[randomNumber].suggestedSongs[randomSongNumber]
    };

    return bandOfTheDay;
}

const printBandOfTheDay = () => {
    const bandOfTheDay = getRandomBandOfTheDay();

    console.log(`Band of the day is: ${bandOfTheDay.band}\nSuggested Album is: ${bandOfTheDay.suggestedAlbum}\nSuggested Song is: ${bandOfTheDay.suggestedSong}`);
}

printBandOfTheDay();