// Import hooks from React
import { useState, useRef } from "react";
// Import CSS styles
import "./Home.css";

// Import components
import Player from "../../components/Player/Player";
import Song from "../../components/Song/Song";
import SongsList from "../../components/SongsList/SongsList";
import Navbar from "../../components/Navbar/Navbar";
import AccountSidebar from "../../components/AccountSidebar/AccountSidebar";
// Import songs data
import data from "../../data";

// Define the Home component which takes props 'isLogin' and 'setIsLogin'
const Home = ({ isLogin, setIsLogin }) => {
  // Ref: create a reference to the audio element that will be used for controlling audio playback
  const audioRef = useRef(null);

  // State hooks to manage various states of the component
  const [songs, setSongs] = useState(data()); // State to store the list of all songs, initialized with data from the imported 'data()' function
  const [favoriteSongs, setFavoriteSongs] = useState([]); // State to store favorite songs, initialized as an empty array
  const [currentSong, setCurrentSong] = useState(songs[0]); // State to store the currently playing song, initialized with the first song from the 'songs' array
  const [isPlaying, setIsPlaying] = useState(false); // State to track whether a song is currently playing, initialized to false
  const [libraryStatus, setLibraryStatus] = useState(false); // State to manage the visibility of the songs library, initialized to false
  const [favoriteStatus, setFavoriteStatus] = useState(false); // State to manage the visibility of the favorite songs, initialized to false
  const [accountStatus, setAccountStatus] = useState(false); // State to manage the visibility of the account sidebar, initialized to false
  const [songInfo, setSongInfo] = useState({
    currentTime: 0, // Current time of the audio being played
    duration: 0, // Total duration of the audio
  });

  // Function to update song information (currentTime and duration) when the audio is playing
  const updateTimeHandler = (e) => {
    const currentTime = e.target.currentTime; // Extract the current playback time of the audio
    const duration = e.target.duration; // Extract the total duration of the audio
    setSongInfo({ ...songInfo, currentTime, duration }); // Update the state with the current playback time and duration
  };

  // JSX to render the UI of the Home component
  return (
    <div
      // Conditionally applying CSS classes based on the status of library, favorites, or account sidebar
      className={`app-container ${
        (libraryStatus || favoriteStatus) && "library-open"
      }
      ${accountStatus && "account-open"}`}
    >
      <Navbar
        isLogin={isLogin} // Boolean value to indicate if the user is logged in
        libraryStatus={libraryStatus} // State to determine if the library is open
        setLibraryStatus={setLibraryStatus} // Function to change the library status
        favoriteStatus={favoriteStatus} // State to determine if favorites are open
        setFavoriteStatus={setFavoriteStatus} // Function to change the favorite status
        accountStatus={accountStatus} // State to determine if the account sidebar is open
        setAccountStatus={setAccountStatus} // Function to change the account sidebar status
      />
      <Song
        currentSong={currentSong} // The current song that is being played or displayed
        setLibraryStatus={setLibraryStatus} // Function to toggle library visibility
        setFavoriteStatus={setFavoriteStatus} // Function to toggle favorite songs visibility
        favoriteSongs={favoriteSongs} // List of favorite songs
        setFavoriteSongs={setFavoriteSongs} // Function to add or remove songs from favorites
      />
      <Player
        isPlaying={isPlaying} // Boolean value to check if a song is currently playing
        setIsPlaying={setIsPlaying} // Function to update play/pause state
        currentSong={currentSong} // Current song being played
        setCurrentSong={setCurrentSong} // Function to update the current song
        audioRef={audioRef} // Reference to the audio element for controlling playback
        songInfo={songInfo} // Object containing information about the current song (currentTime and duration)
        setSongInfo={setSongInfo} // Function to update song information
        songs={songs} // List of all songs
        setSongs={setSongs} // Function to update the list of songs
      />
      <SongsList
        songs={songs} // List of all songs to be displayed
        setCurrentSong={setCurrentSong} // Function to change the current song
        favoriteSongs={favoriteSongs} // List of favorite songs
        setFavoriteSongs={setFavoriteSongs} // Function to add or remove songs from favorites
        audioRef={audioRef} // Reference to the audio element for controlling playback
        isPlaying={isPlaying} // Boolean value to check if a song is currently playing
        setSongs={setSongs} // Function to update the list of songs
        libraryStatus={libraryStatus} // State to determine if the songs library is open
        favoriteStatus={favoriteStatus} // State to determine if the favorites list is open
      />
      <AccountSidebar
        accountStatus={accountStatus} // State to determine if the account sidebar is open
        setAccountStatus={setAccountStatus} // Function to toggle the visibility of the account sidebar
        setIsLogin={setIsLogin} // Function to handle login/logout
      />
      <audio
        onLoadedMetadata={updateTimeHandler} // Event handler to update song information when metadata is loaded (e.g., song duration)
        onTimeUpdate={updateTimeHandler} // Event handler to update current playback time as the song progresses
        ref={audioRef} // Reference for the audio element, allowing direct access and control of the audio
        src={currentSong.audio} // Source of the current song to be played
      />
    </div>
  );
};

export default Home;
