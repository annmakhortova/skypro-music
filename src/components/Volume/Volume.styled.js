import styled from "styled-components";
export const VolumeContent = styled.div`
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
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`;
export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`;
export const VolumeSvg = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
`;
export const VolumeProgress = styled.div`
  width: 109px;
`;

export const VolumeProgressLine = styled.input`
  width: 109px;
`;
