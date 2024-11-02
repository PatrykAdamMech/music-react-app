import ActiveSong from "./ActiveSong";

// Define the FavoriteSongs component which takes in several props
const FavoriteSongs = ({
  songs, // Array of favorite songs
  setCurrentSong, // Function to update the current song
  audioRef, // Reference to the audio element
  isPlaying, // Boolean indicating if a song is currently playing
  setSongs, // Function to update the list of favorite songs
  favoriteStatus, // Boolean indicating if the favorite sidebar is open
}) => {
  // JSX to render the FavoriteSongs component UI
  return (
    <div className={`library-container ${favoriteStatus && "open"}`}>
      <h2 className="library-h1">Favorites</h2>
      {/* Display favorite songs or a message if there are no favorite songs */}
      <div style={{ marginTop: 28 }}>
        {songs.length === 0 ? (
          <p className="fav-song-para">No Favorite songs</p> // Display message if there are no favorite songs
        ) : (
          <>
            {/* Map over the favorite songs and render each as an ActiveSong component */}
            {songs.map((song) => (
              <ActiveSong
                song={song} // The song object to display
                songs={songs} // List of favorite songs
                setCurrentSong={setCurrentSong} // Function to set the current song
                key={song.id} // Unique key for each song
                audioRef={audioRef} // Reference to the audio element
                isPlaying={isPlaying} // Boolean indicating if a song is currently playing
                setSongs={setSongs} // Function to update the list of favorite songs
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FavoriteSongs;
