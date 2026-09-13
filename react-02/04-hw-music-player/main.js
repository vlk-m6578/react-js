import { showPlaylist, showSong } from './modules/display.js';
// import { play, pause, stop } from './player.js';
import songs from './modules/songs.js'
import {showSong as showSong2} from './modules/player.js';
import * as playerModule from './modules/player.js';
import './styles/theme.js';

console.log("🎶 Добро пожаловать в музыкальный плеер!")

// Показываем весь плейлист
showPlaylist(songs)

// Включаем первую песню
showSong(songs[0])
showSong2(songs[0])
playerModule.play()

// Пауза
playerModule.pause()

// Включаем вторую песню
showSong(songs[1])
showSong2(songs[1])
playerModule.play()

// Останавливаем
playerModule.stop()