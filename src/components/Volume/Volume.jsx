import React from "react";
import * as Styled from "./Volume.styled";
export function VolumeContent({ currentTrack, volume, setVolume }) {
  return (
    <>
      {currentTrack ? (
        <Styled.VolumeContent>
          <Styled.VolumeImage>
            <Styled.VolumeSvg alt="volume">
              <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
            </Styled.VolumeSvg>
          </Styled.VolumeImage>
          <Styled.VolumeProgress className="_btn">
            <Styled.VolumeProgressLine
              className="_btn"
              type="range"
              name="range"
              min={0}
              max={1}
              value={volume}
              step={0.01}
              onChange={(event) => setVolume(event.target.value)}
            />
          </Styled.VolumeProgress>
        </Styled.VolumeContent>
      ) : null}
    </>
  );
}
