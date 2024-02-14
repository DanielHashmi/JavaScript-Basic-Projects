function make_album(artist, title, number = 1) {
    return {
        name: artist,
        album: title,
        track: number
    }
}
console.log(make_album('Justin Bieber', 'Purpose', 3))
console.log(make_album('Michael Jackson', 'Thriller'))