// Define the ActiveSong component which takes in several props
const ActiveSong = ({
  song, // The song object to be displayed
  setCurrentSong, // Function to update the current song
  audioRef, // Reference to the audio element
  isPlaying, // Boolean indicating if a song is currently playing
  songs, // Array of all available songs
  setSongs, // Function to update the list of songs
}) => {
  // Function to handle selecting a song
  const songSelectHandler = async () => {
    await setCurrentSong(song); // Set the selected song as the current song
    const curSong = song; // Store the currently selected song
    const songList = songs; // Store the list of all songs

    // Update the list of songs to mark the current song as active
    const newSongs = songList.map((song) => {
      if (song.id === curSong.id) {
        return {
          ...song,
          active: true, // Set the selected song as active
        };
      } else {
        return {
          ...song,
          active: false, // Set all other songs as inactive
        };
      }
    });
    setSongs(newSongs); // Update the state with the new list of songs

    // Check if the song is playing and play the selected song
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // JSX to render the ActiveSong component UI
  return (
    <div
      className={`library-song-container ${song.active && "active"}`} // Conditionally apply the 'active' class if the song is currently active
      onClick={songSelectHandler} // Call the songSelectHandler when the song is clicked
    >
      <img className="library-img" src={song.cover} alt={song.name} /> {/* Display the cover image of the song */}
      <div>
        <h3 className="library-h1">{song.name}</h3> {/* Display the name of the song */}
        <h4 className="library-h2">{song.artist}</h4> {/* Display the artist of the song */}
      </div>
    </div>
  );
};

export default ActiveSong;
