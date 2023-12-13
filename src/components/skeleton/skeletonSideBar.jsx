import React from 'react';
import './skeleton.css';
import '../sideBar.css';

export function SkeletonSideBar () {
	return (
		<div className="main__sidebar sidebar">
		<div className="sidebar__personal">
		  <p className="sidebar__personal-name">Sergey.Ivanov</p>
		  <div className="sidebar__icon">
			 <svg alt="logout">
				<use xlinkHref="img/icon/sprite.svg#logout"></use>
			 </svg>
		  </div>
		</div>
		<div className="sidebar__block">
			
		  <div className="sidebar__list">
		  <div className="sidebar__item skeleton__sidebar-item blink">
		</div>
		<div className="sidebar__item skeleton__sidebar-item blink">
		</div>
		<div className="sidebar__item skeleton__sidebar-item blink">
		</div>

		  </div>
		</div>
	 </div>


	)
}