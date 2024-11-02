import FavoriteSongs from "./FavoriteSongs";
import LibrarySongs from "./LibrarySongs";
import "./SongsList.css";

// Define the SongsList component which takes in several props
const SongsList = ({
  songs, // Array of all available songs
  setCurrentSong, // Function to update the current song
  favoriteSongs, // Array of favorite songs
  setFavoriteSongs, // Function to update the list of favorite songs
  audioRef, // Reference to the audio element
  isPlaying, // Boolean indicating if a song is currently playing
  setSongs, // Function to update the list of songs
  libraryStatus, // Boolean indicating if the library sidebar is open
  favoriteStatus, // Boolean indicating if the favorite songs sidebar is open
}) => {
  // JSX to render either the library or favorite songs list based on status
  return (
    <div>
      {libraryStatus ? (
        // If the library is open, render LibrarySongs component
        <LibrarySongs
          songs={songs} // Pass the list of all songs to LibrarySongs
          setCurrentSong={setCurrentSong} // Function to set the current song
          audioRef={audioRef} // Reference to the audio element for controlling playback
          isPlaying={isPlaying} // Boolean indicating if a song is currently playing
          setSongs={setSongs} // Function to update the list of songs
          libraryStatus={libraryStatus} // Boolean to indicate the library status
        />
      ) : (
        // If the library is not open, render FavoriteSongs component
        <FavoriteSongs
          songs={favoriteSongs} // Pass the list of favorite songs to FavoriteSongs
          setCurrentSong={setCurrentSong} // Function to set the current song
          audioRef={audioRef} // Reference to the audio element for controlling playback
          isPlaying={isPlaying} // Boolean indicating if a song is currently playing
          setSongs={setFavoriteSongs} // Function to update the list of favorite songs
          favoriteStatus={favoriteStatus} // Boolean to indicate the favorite status
        />
      )}
    </div>
  );
};

export default SongsList;
