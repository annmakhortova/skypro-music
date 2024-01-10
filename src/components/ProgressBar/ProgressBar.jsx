import { React } from "react";
import * as Styled from "./ProgressBar.styled";

export function ProgressBar({ currentTime, audioRef, duration }) {
  const onChangeCurrentTime = (newTime) => {
    audioRef.current.currentTime = newTime;
    console.log(`audioRef ${audioRef.current.currentTime}`);
  };

  return (
    <Styled.ProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
      step={0.01}
      onChange={(event) => {
        onChangeCurrentTime(event.target.value);
        console.log(`event ${event.target.value}`);
      }}
      $color="#b672ff"
    />
  );
}
