import './style.css'
import backgroundUrl from './images/waben001.png';
import bee01Url from './images/bee01.png';
import bee02Url from './images/bee02.png';
import bee03Url from './images/bee03.png';

function loadAssets() {
  const images = [
    { name: 'bee01', url: bee01Url },
    { name: 'bee02', url: bee02Url },
    { name: 'bee03', url: bee03Url },
  ];

  return Promise.all(images.map((image) => loadImage(image.name, image.url)));
}

function loadImage(name, url) {
  return new Promise((resolve) => {   
        const asset = new Image();
        asset.src = url;
        asset.onload = () => resolve({ name, asset });  
  });
}

async function main() {
  const canvas = document.getElementById('app');
  const context = canvas.getContext("2d");

  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  canvas.style.backgroundImage = `url(${backgroundUrl})`;
  canvas.style.backgroundRepeat = 'no-repeat';
  canvas.style.backgroundSize = 'cover'

  const assets = await loadAssets();

  const bee01 = assets.find(asset => asset.name === 'bee01')

  context.drawImage(bee01.asset, 100, 100, bee01.asset.width / 4, bee01.asset.height / 4);
}

main();
