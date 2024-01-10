import styled from "styled-components";

export const PlayListItem = styled.div`
  width: 100%;
  display: block;
  margin-bottom: 12px;
`;
export const PlayListTrack = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
export const TrackTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 447px;
  cursor: pointer;
`;
export const TrackAuthor = styled.div`
  width: 321px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  cursor: pointer;
`;
export const TrackAlbum = styled.div`
  width: 245px;
  cursor: pointer;
`;
export const TrackTime = styled.div``;
export const TrackTitleImg = styled.div`
  width: 51px;
  height: 51px;
  padding: 16px;
  background: #313131;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: 17px;
`;
export const TrackTitleText = styled.div``;
export const TrackTitleSvg = styled.div`
  width: 18px;
  height: 17px;
  fill: transparent;
  stroke: #4e4e4e;
`;
export const TrackTitleLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
export const TrackTitleSpan = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4e4e4e;
`;
export const TrackAuthorLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
`;
export const TrackAlbumLink = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #696969;
`;
export const TrackTimeSvg = styled.div`
  width: 14px;
  height: 12px;
  margin-right: 17px;
  fill: transparent;
  stroke: #696969;
`;
export const TrackTimeText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #696969;
`;

export const BlinkingDot = styled.div`
  width: 150px;
  height: 15px;
  background-color: purple;
  border-radius: 50%;
  animation: dot 1s infinite;
  @keyframes dot {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
`;
