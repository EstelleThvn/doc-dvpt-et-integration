---
sidebar_position: 4
---

# Vidéo

Manipulation de fichiers vidéo en Javascript.

## Présentation

En plus de l'élément `<audio>` vu dans la page précédente, l'API `HTMLMediaElement` de Javascript donne accès aux propriétés et méthodes de l'élément `<video>`.

On retrouve les mêmes méthodes et propriétés disponibles que celles disponibles pour l'élément HTML `<audio>`.

### Utilisation simple 

```html title="index.html"
<video id="video" src="video.mp4" width="1920" height="1080"></video>
<button id="play">lancer la vidéo</button>
```

```js title="script.js"
const video = document.getElementById("video");

//Fonction qui lance la vidéo
const playVideo = () => {
    video.play();
};

//Évènement qui lance la vidéo si l'utilisateur clique sur play
document.getElementById('play').addEventListener('click', function() {
    playVideo();
});
```

### Méthodes utiles

```js
// Lance la vidéo
video.play();

// Pause la vidéo
video.pause();
```

### Propriétés utiles

```js
// Pour récupérer ou modifier les dimensions de la vidéo
console.log(video.width, video.height);
video.width = 560;
video.height = 320;

// Pour récupérer ou modifier la source de la vidéo, booléen
console.log(video.src);
video.src = "video.mp4";

// Afficher les controles de la vidéo, booléen
console.log(video.controls);
video.controls = true;

// Pour récupérer ou définir si la vidéo est lu en boucle ou non, booléen
console.log(video.loop);
video.loop = true;

// Pour savoir ou indiquer si la vidéo est mute, booléen
console.log(video.muted);
video.muted = true;

// Pour savoir si la vidéo est en train de jouer ou est en pause, booléen
console.log(video.paused);

// Récupère la durée totale de la vidéo, en secondes
console.log(video.duration);

// Pour récupérer ou modifier le moment courant dans la vidéo, en secondes
console.log(video.currentTime);
video.currentTime = 10;

// Pour récupérer ou changer le volume de la vidéo, entre 0 et 1
console.log(video.volume);
video.volume = 1;
```

## Aller plus loin

**[Voir toutes les propriétés et méthodes](https://www.w3schools.com/jsref/dom_obj_video.asp)** de l'élément `<video>`

**[Tous les évènements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#events)** de l'élément `<video>` (Documentation MDN)

**[Documentation MDN sur l'API HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)** (API Audio et Vidéo)