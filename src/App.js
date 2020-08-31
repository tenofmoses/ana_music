import React from 'react';
import './App.css';
import applemusic from './img/applemusic.svg';
import boom from './img/boom.svg';
import spotify from './img/spotify.svg';
import tiktok from './img/tiktok.png';
import vk from './img/vk.svg';
import yandexmusic from './img/yandexmusic.svg';
import youtube from './img/youtube.png';
import album from './img/1000x1000bb-60.jpg'

function App() {
	return (
		<div className="wrap">
			<div className="music">
				<div className="album">
					<img className="imgAlbum" src={album} />
				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={applemusic} />
					</div>
					<a className="link" href="https://music.apple.com/ru/album/%D0%BD%D0%B5-%D0%BC%D0%BE%D0%B9/1529599179" target="_blank">Слушать</a>
				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={spotify} />
					</div>
					<a className="link" href="https://open.spotify.com/album/3DmPNXsP2aWiK6M94aLW2r" target="_blank">Слушать</a>

				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={tiktok} />
					</div>
					<a className="link" href="https://www.tiktok.com/music/%D0%9D%D0%B5-%D0%BC%D0%BE%D0%B9-6866093684828407810" target="_blank">Слушать</a>

				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={yandexmusic} />
					</div>
					<a className="link" href="https://music.yandex.ru/album/11944758/track/70616840" target="_blank">Слушать</a>

				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={youtube} />
					</div>
					<a className="link" href="https://www.youtube.com/watch?v=cIZEan_UWk8" target="_blank">Слушать</a>

				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={boom} />
					</div>
					<a className="link" href="#" target="_blank">Скоро релиз</a>

				</div>
				<div className="musicBlock">
					<div className="imgWrap">
						<img className="img" src={vk} />
					</div>
					<a className="link" href="#" target="_blank">Скоро релиз</a>

				</div>
			</div>
		</div>
	);
}

export default App;
