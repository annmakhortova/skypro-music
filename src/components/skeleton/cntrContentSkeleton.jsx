import React from "react";
import '../centerBlockSearch.css';
import './skeleton.css';
import { SkeletonTrack } from './skeletonTrack';

export function SkeletonTrackList () {
	return (
		
		<div className="centerblock__content">
		  <div className="content__title playlist-title">
			 <div className="playlist-title__col col01">Трек</div>
			 <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
			 <div className="playlist-title__col col03">АЛЬБОМ</div>
			 <div className="playlist-title__col col04">
				<svg className="playlist-title__svg" alt="time">
				  <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
				</svg>
			 </div>
		  </div>
		  <div className="content__playlist playlist">
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
			{SkeletonTrack()}
		  </div>
		</div>
	)
}