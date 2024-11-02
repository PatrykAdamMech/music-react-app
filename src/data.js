import { v4 as uuidv4 } from "uuid";
import vitalCover from "./assets/images/Fortnite_Vital_Song_Image.jpg";
import vital from "./assets/audio/Fortnite  Vital Lobby Music.mp3";
import enemyCover from "./assets/images/Imagine_Dragons_Enemy_Song_Cover.jpg";
import enemy from "./assets/audio/Imagine Dragons - Enemy.mp3";
import theNightCover from "./assets/images/Lord_Huron_The_Night_We_Met_Cover.jpg";
import theNight from "./assets/audio/Lord Huron - The Night We Met.mp3";

function chillHop() {
	return [
		{
			id: uuidv4(),
			name: "Fortnite - Vital Lobby Music",
			cover: vitalCover,
			artist: "Aso, Middle School, Aviino",
			audio: vital,
			color: ["#205950", "#2ab3bf"],
			active: true,
		},
		{
			id: uuidv4(),
			name: "Enemy",
			cover: enemyCover,
			artist: "Imagine Dragons",
			audio: enemy,
			color: ["#EF8EA9", "#ab417f"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "The Night We Met",
			cover: theNightCover,
			artist: "Lord Huron",
			audio: theNight,
			color: ["#CD607D", "#c94043"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "Fortnite - Vital Lobby Music",
			cover: vitalCover,
			artist: "Aso, Middle School, Aviino",
			audio: vital,
			color: ["#205950", "#2ab3bf"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "Enemy",
			cover: enemyCover,
			artist: "Imagine Dragons",
			audio: enemy,
			color: ["#EF8EA9", "#ab417f"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "The Night We Met",
			cover: theNightCover,
			artist: "Lord Huron",
			audio: theNight,
			color: ["#CD607D", "#c94043"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "Fortnite - Vital Lobby Music",
			cover: vitalCover,
			artist: "Aso, Middle School, Aviino",
			audio: vital,
			color: ["#205950", "#2ab3bf"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "Enemy",
			cover: enemyCover,
			artist: "Imagine Dragons",
			audio: enemy,
			color: ["#EF8EA9", "#ab417f"],
			active: false,
		},
		{
			id: uuidv4(),
			name: "The Night We Met",
			cover: theNightCover,
			artist: "Lord Huron",
			audio: theNight,
			color: ["#CD607D", "#c94043"],
			active: false,
		},
		//ADD MORE HERE
	];
}

export default chillHop;
