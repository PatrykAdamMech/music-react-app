import { FaAngleLeft, FaAngleRight, FaPlay, FaPause } from "react-icons/fa6";
import "./Player.css";

// Define the Player component which takes in several props
const Player = ({
  currentSong, // Object representing the current song being played
  setCurrentSong, // Function to update the current song
  isPlaying, // Boolean indicating if the song is currently playing
  setIsPlaying, // Function to update the play/pause state
  audioRef, // Reference to the audio element
  songInfo, // Object containing information about the song's current time and duration
  setSongInfo, // Function to update song information
  songs, // Array of all available songs
  setSongs, // Function to update the list of songs
}) => {
  // Event handler for playing or pausing the song
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the song if it is currently playing
      setIsPlaying(!isPlaying); // Update the play state to false
    } else {
      audioRef.current.play(); // Play the song if it is currently paused
      setIsPlaying(!isPlaying); // Update the play state to true
    }
  };

  // Function to toggle between play and pause icons
  const togglePlayPauseIcon = () => {
    return isPlaying ? (
      <FaPause fontSize={25} style={{ cursor: "pointer" }} /> // Display pause icon if playing
    ) : (
      <FaPlay fontSize={25} style={{ cursor: "pointer" }} /> // Display play icon if paused
    );
  };

  // Function to format time in minutes and seconds
  const getTime = (time) => {
    let minute = Math.floor(time / 60); // Calculate minutes
    let second = ("0" + Math.floor(time % 60)).slice(-2); // Calculate seconds and ensure two digits
    return `${minute}:${second}`; // Return formatted time string
  };

  // Event handler for dragging the input slider to change current playback time
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value; // Set the audio element's current time to the new value
    setSongInfo({ ...songInfo, currentTime: e.target.value }); // Update the song information state
  };

  // Event handler for skipping tracks forward or backward
  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id); // Find the index of the current song
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]); // Set the next song in the array, wrap around if at the end
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]); // Set the active song in the library
    } else if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]); // Set the last song if skipping back from the first song
        activeLibraryHandler(songs[songs.length - 1]); // Set the active song in the library
      } else {
        await setCurrentSong(songs[(currentIndex - 1) % songs.length]); // Set the previous song in the array
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length]); // Set the active song in the library
      }
    }
    if (isPlaying) {
      audioRef.current.play(); // Play the new song if the player was already playing
    }
  };

  // Function to update the library to mark the current song as active
  const activeLibraryHandler = (newSong) => {
    const newSongs = songs.map((song) => {
      return {
        ...song,
        active: song.id === newSong.id, // Set the 'active' property to true for the current song
      };
    });
    setSongs(newSongs); // Update the state with the new list of songs
  };

  // JSX to render the Player component UI
  return (
    <div className="player-container">
      <div className="time-control-container">
        <p>{getTime(songInfo.currentTime || 0)}</p>{" "}
        {/* Display current playback time */}
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }} // Style the track progress bar with a gradient based on the current song's colors
        >
          <input
            onChange={dragHandler} // Handle slider drag event to change song position
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${Math.round(
                (songInfo.currentTime * 100) / songInfo.duration
              )}%)`,
            }} // Animate the track progress based on current playback time
          ></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p> {/* Display song duration */}
      </div>

      <div className="play-control-container">
        <FaAngleLeft
          fontSize={25}
          style={{ cursor: "pointer" }}
          onClick={() => skipTrackHandler("skip-back")} // Handle skip back event
        />
        <div onClick={playSongHandler}>{togglePlayPauseIcon()}</div>{" "}
        {/* Display play/pause button */}
        <FaAngleRight
          fontSize={25}
          style={{ cursor: "pointer" }}
          onClick={() => skipTrackHandler("skip-forward")} // Handle skip forward event
        />
      </div>
    </div>
  );
};

export default Player;
