import { FaRegHeart } from "react-icons/fa6";
import "./Song.css";

// Define the Song component which takes in several props
const Song = ({
  currentSong, // Object representing the current song being displayed
  setFavoriteStatus, // Function to toggle the favorite songs sidebar
  setLibraryStatus, // Function to toggle the library sidebar
  favoriteSongs, // Array of favorite songs
  setFavoriteSongs, // Function to update the list of favorite songs
}) => {
  // Event handler for adding/removing the current song to/from favorites
  const addToFavoriteHandler = () => {
    setLibraryStatus(false); // Close the library sidebar
    setFavoriteStatus(true); // Open the favorites sidebar

    // Check if the current song is already in the list of favorite songs
    const findSong = favoriteSongs.find((song) => song.id === currentSong.id);
    if (findSong) {
      // If the song is already in favorites, remove it from the list
      setFavoriteSongs(
        favoriteSongs.filter((song) => song.id !== currentSong.id)
      );
    } else {
      // If the song is not in favorites, add it to the list
      setFavoriteSongs([...favoriteSongs, currentSong]);
    }
  };

  // JSX to render the Song component UI
  return (
    <div className="song-container">
      <img
        className="current-song-img"
        src={currentSong.cover} // Display the cover image of the current song
        alt={currentSong.name} // Use the song's name as the alt text
      />
      <h2 className="current-song-h1">{currentSong.name}</h2> {/* Display the name of the current song */}
      <h3 className="current-song-h2">{currentSong.artist}</h3> {/* Display the artist of the current song */}
      <button className="add-to-fav-button" onClick={addToFavoriteHandler}>
        Add to favorite
        <FaRegHeart /> {/* Display the heart icon for adding to favorites */}
      </button>
    </div>
  );
};

export default Song;
