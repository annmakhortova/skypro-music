import "../App.css";
import * as S from "./NavMenu/NavMenu.styles";
import { StyledLink } from "./NavMenu/NavMenu.styles";
export function NavMyPlaylist() {
  return (
    <S.MenuItem>
      <StyledLink to="/myplaylist">Мой плейлист</StyledLink>
    </S.MenuItem>
  );
}
