import React from "react";
import './skeleton.css';
import '../cntrContent.css';

export function SkeletonTrack () {

	return (
		<div className="playlist__item">
		<div className="playlist__track track">
		  <div className="track__title">
			 <div className="track__title-image skeleton__title-image blink">
			 </div>
			 <div className= "skeleton__title-text  blink">	
			 </div>
		  </div>
		  <div className="track__author skeleton__track-author blink">
			</div>
		  <div className="track__album skeleton__track-album blink">
		  </div>
		  <div className="track__time">
			 <svg className="track__time-svg" alt="time">
				<use xlinkHref="img/icon/sprite.svg#icon-like"></use>
			 </svg>
			 
		  </div>
		</div>
	 </div>
	)

}