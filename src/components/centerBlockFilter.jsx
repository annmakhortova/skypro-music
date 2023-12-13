
import React from "react";
import "./centerBlockFilter.css";
function filter() {

  function hideAllMenu(event) {
    let hideMenu = document.querySelectorAll(".filter__navi")
    console.log(hideMenu[1].id)
    console.log(event.target.id)
    for (let i = 0; i < hideMenu.length; i++) {
      if (event.target.id + "Menu" != hideMenu[i].id) {
        hideMenu[i].classList.add("hidde")
        let filterBtn = document.querySelectorAll(".filter__button")
        filterBtn[i].classList.remove("active") 
      }

    }
  }

    function handleClick(event) {
      console.log(event.target.id)
hideAllMenu(event)
      let filterMenu = document.getElementById(event.target.id + "Menu")
      event.target.classList.toggle('active')
      filterMenu.classList.toggle('hidde')
    }

    return (
        <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div onClick={handleClick} id="perfomer" className="filter__button button-author _btn-text">
                исполнителю
              </div>
              <nav className="filter__navi hidde perfomer" id="perfomerMenu">
            <ul>
            <dd><a href="#">    Eminem   </a></dd>
            <dd><a href="#">    Nero   </a></dd>
            <dd><a href="#">    Ali Bakgor   </a></dd>
            <dd><a href="#">    Баста   </a></dd>
            <dd><a href="#">    Jaded   </a></dd>
            <dd><a href="#">    Will Clarke   </a></dd>
            <dd><a href="#">    AR/CO   </a></dd>
            <dd><a href="#">    AC/DC   </a></dd>
            <dd><a href="#">    Mino   </a></dd>
            <dd><a href="#">    Nervy   </a></dd>
            </ul>
        </nav>
              <div onClick={handleClick} className="filter__button button-year _btn-text" id="year">
                году выпуска
              </div>
              <nav className="filter__navi hidde year" id="yearMenu">
            <ul>
            <dd><a href="#">    1998   </a></dd>
            <dd><a href="#">    1999   </a></dd>
            <dd><a href="#">    2000   </a></dd>
            <dd><a href="#">    2001   </a></dd>
            <dd><a href="#">    2002   </a></dd>
            <dd><a href="#">    2003   </a></dd>
            <dd><a href="#">    2004   </a></dd>
            <dd><a href="#">    2005   </a></dd>
            <dd><a href="#">    2006   </a></dd>
            <dd><a href="#">    2007   </a></dd>
            </ul>
        </nav>
              <div onClick={handleClick} className="filter__button button-genre _btn-text" id="genre">жанру
              </div>
              <nav className="filter__navi hidde genre" id="genreMenu">
            <ul>
            <dd><a href="#">    Rock   </a></dd>
            <dd><a href="#">    Hip-Hop   </a></dd>
            <dd><a href="#">    Pop   </a></dd>
            <dd><a href="#">    Rap   </a></dd>
            <dd><a href="#">    Jazz   </a></dd>
            <dd><a href="#">    Electro   </a></dd>
            <dd><a href="#">    Techno   </a></dd>
            </ul>
        </nav>
            </div>
            
    );
}
export default filter;