import React, { useRef, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faPause,
  faPlay,
  faAt,
} from "@fortawesome/free-solid-svg-icons";
import LiveTime from "../liveTime";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Tabla from "../../assets/tabla.jpg";
import Music from "../../assets/Music.mp3";
import GsapMagnetic from "../gsap/gsapMagnetic";

const Mobile = () => {
  return (
    <>
    
      <div className="mobileContainer">
      <div className="mobileWrapper">
        <MobileHeader />
        <LiveTime />
        <MobileSocials />
        {/* <MusicCard /> */}
        </div>
      </div>
    
    </>
  );
};

export default Mobile;

const MobileHeader = () => {
  return (
    <>
      <div className="mobileHeader">
        <span>India</span>
        <span className="iPhoneCam"></span>
        <span>
          {" "}
          <span>5G</span>
          <FontAwesomeIcon icon={faBatteryFull} className="mobileHeaderIcons" />
        </span>
      </div>
    </>
  );
};

const MobileSocials = () => {
  return (
    <>
      <div className="mobileSocials">
        <FontAwesomeIcon className="social-option" icon={faLinkedin} />
        <FontAwesomeIcon className="social-option" icon={faGithub} />
        <FontAwesomeIcon className="social-option" icon={faInstagram} />
        <FontAwesomeIcon className="social-option" icon={faAt} />
      </div>
    </>
  );
};

const AudioPlayer = ({ toggleEffect }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleClick = () => {
    handlePlayPause();
    toggleEffect();
  };

  return (
    <div className="playButtonContainer">
      <GsapMagnetic>
        <button className="playButton" onClick={handleClick}>
          {isPlaying ? (
            <FontAwesomeIcon className="play-pauseIcon" icon={faPause} />
          ) : (
            <FontAwesomeIcon className="play-pauseIcon" icon={faPlay} />
          )}
        </button>
      </GsapMagnetic>
      <audio ref={audioRef}>
        <source src={Music} type="audio/mpeg" />
      </audio>
    </div>
  );
};

const MusicCard = () => {
  const [musicEffect, setMusicEffect] = useState(false);
  const toggleEffect = () => {
    setMusicEffect(!musicEffect);
  };
  return (
    <>
      <div className="mainCardConatiner">
        <div className="musicCardContainer">
          <img
            src={Tabla}
            alt="tabla"
            className={`music-card  ${musicEffect ? "active" : ""}`}
          />
        </div>
        <AudioPlayer toggleEffect={toggleEffect} />
      </div>
    </>
  );
};
