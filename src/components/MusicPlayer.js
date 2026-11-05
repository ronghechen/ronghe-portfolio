
import React, { useEffect, useRef, useState } from "react";
import "../assets/scss/MusicPlayer.scss";

import opalescent from "../assets/music/mixkit-opalescent-593.mp3";
import cyberpunk from "../assets/music/mixkit-cyberpunk-city-140.mp3";
import deepTechno from "../assets/music/mixkit-deep-techno-ambience-134.mp3";
import deepHouse from "../assets/music/mixkit-deep-house-196.mp3";

const tracks = [
  { name: "opalescent", src: opalescent },
  { name: "cyberpunk city", src: cyberpunk },
  { name: "deep techno", src: deepTechno },
  { name: "deep house", src: deepHouse },
];

function MusicPlayer() {
  const audioRef = useRef(null);
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.25;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, activeTrack]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const selectTrack = (index) => {
    setActiveTrack(index);
    setProgress(0);
    setDuration(0);
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const nextTrack = () => {
    selectTrack((activeTrack + 1) % tracks.length);
  };

  const previousTrack = () => {
    selectTrack(
      (activeTrack - 1 + tracks.length) % tracks.length
    );
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (!audio) return;

    setProgress(audio.currentTime);
    setDuration(
      Number.isFinite(audio.duration) ? audio.duration : 0
    );
  };

  const seek = (event) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const time = Number(event.target.value);
    audio.currentTime = time;
    setProgress(time);
  };

  return (
  <div
    className={`music-player
      ${isPlaying ? "playing" : ""}
      ${isCollapsed ? "collapsed" : ""}
    `}
  >
    <audio
      ref={audioRef}
      src={tracks[activeTrack].src}
      preload="metadata"
      onTimeUpdate={updateProgress}
      onLoadedMetadata={updateProgress}
      onEnded={nextTrack}
      onError={() => setIsPlaying(false)}
    />

    {isCollapsed ? (
      <button
        className="music-expand-btn"
        onClick={() => setIsCollapsed(false)}
        aria-label="Expand music player"
        title="Expand music player"
      >
        <span className="music-expand-icon">♫</span>

        {isPlaying && (
          <span className="music-playing-indicator" />
        )}
      </button>
    ) : (
      <>
        <div className="music-player-header">
          <span className="music-player-title">
            ♫ MUSIC PLAYER
          </span>

          <button
            className="music-collapse-btn"
            onClick={() => setIsCollapsed(true)}
            aria-label="Collapse music player"
            title="Minimize"
          >
            −
          </button>
        </div>

        <div className="music-player-top">
          <button
            className={`music-power ${
              isPlaying ? "active" : ""
            }`}
            onClick={togglePlay}
            aria-label={
              isPlaying ? "Turn music off" : "Turn music on"
            }
          >
            {isPlaying ? "ON" : "OFF"}
          </button>

          <div className="music-presets">
            {tracks.map((track, index) => (
              <button
                key={track.name}
                className={`music-preset ${
                  activeTrack === index && isPlaying
                    ? "active"
                    : ""
                }`}
                onClick={() => selectTrack(index)}
                aria-label={`Play ${track.name}`}
                aria-pressed={
                  activeTrack === index && isPlaying
                }
                title={track.name}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="music-track-info">
          <span>
            {isPlaying ? "NOW PLAYING" : "AUDIO OFF"}
          </span>
          <span>{tracks[activeTrack].name}</span>
        </div>

        <input
          className="music-progress"
          type="range"
          min="0"
          max={duration || 1}
          step="0.1"
          value={Math.min(progress, duration || 1)}
          onChange={seek}
          aria-label="Seek through song"
          style={{
            "--progress": `${
              duration ? (progress / duration) * 100 : 0
            }%`,
          }}
        />

        <div className="music-controls">
          <button
            onClick={previousTrack}
            aria-label="Previous track"
          >
            <span className="music-control-icon">◀</span>
          </button>

          <button
            className="music-main-control"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
                <span className="pause-icon">
                    <span />
                    <span />
                </span>
                ) : (
                "▶"
                )}
          </button>

          <button
            onClick={nextTrack}
            aria-label="Next track"
          >
            <span className="music-control-icon">▶</span>
          </button>
        </div>
      </>
    )}
  </div>
);
}

export default MusicPlayer;
