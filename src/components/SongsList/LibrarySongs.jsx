import { FiSearch } from "react-icons/fi";
import ActiveSong from "./ActiveSong";
import { useState } from "react";

// Define the LibrarySongs component which takes in several props
const LibrarySongs = ({
  songs, // Array of all available songs
  setCurrentSong, // Function to update the current song
  audioRef, // Reference to the audio element
  isPlaying, // Boolean indicating if a song is currently playing
  setSongs, // Function to update the list of songs
  libraryStatus, // Boolean indicating if the library sidebar is open
}) => {
  // State to manage the search input
  const [searchSong, setSearchSong] = useState("");

  // Function to filter songs based on the search input
  const filteredSongs = (songs) => {
    if (searchSong) {
      return songs.filter(
        (song) =>
          song.name.toLowerCase().includes(searchSong.toLowerCase()) ||
          song.artist.toLowerCase().includes(searchSong.toLowerCase())
      ); // Return songs whose name or artist matches the search input (case-insensitive)
    } else return songs; // If no search input, return all songs
  };

  // JSX to render the LibrarySongs component UI
  return (
    <div className={`library-container ${libraryStatus && "open"}`}>
      <h2 className="library-h1">Library</h2>
      {/* Search Bar for filtering songs */}
      <div className="search-bar">
        <FiSearch className="search-icon" /> {/* Display search icon */}
        <input
          type="text"
          value={searchSong} // Value of the search input field
          onChange={(e) => setSearchSong(e.target.value)} // Update search state on input change
          placeholder="Search by song or author..." // Placeholder text for the search input field
          className="search-input"
        />
      </div>
      {/* Display filtered songs or message if no results found */}
      <div style={{ marginTop: 28 }}>
        {filteredSongs(songs).length === 0 ? (
          <p>No results found.</p> // Display message if no matching songs are found
        ) : (
          <>
            {/* Map over the filtered songs and render each as an ActiveSong component */}
            {filteredSongs(songs).map((song) => (
              <ActiveSong
                song={song} // The song object to display
                songs={songs} // List of all available songs
                setCurrentSong={setCurrentSong} // Function to set the current song
                key={song.id} // Unique key for each song
                audioRef={audioRef} // Reference to the audio element
                isPlaying={isPlaying} // Boolean indicating if a song is currently playing
                setSongs={setSongs} // Function to update the list of songs
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default LibrarySongs;
