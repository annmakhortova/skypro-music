import "../App.css";
import * as S from "./NavMenu/NavMenu.styles";
import { StyledLink } from "./NavMenu/NavMenu.styles";
export function NavMain() {
  return (
    <S.MenuItem>
      <StyledLink to="/">Главное</StyledLink>
    </S.MenuItem>
  );
}
