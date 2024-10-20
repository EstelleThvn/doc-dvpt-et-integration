---
sidebar_position: 3
---

# Audio

Manipulation de fichiers audio en Javascript.

## Présentation

L'API Audio de Javascript `HTMLMediaElement` donne accès aux propriétés et méthodes de l'élément `<audio>`.

### Utilisation simple 

```html title="index.html"
<audio id="audio" src="audio.mp3"></audio>
<button id="play">lancer l'audio</button>
```

```js title="script.js"
const audio = document.getElementById("audio");

document.getElementById('play').addEventListener('click', function() {
    audio.play();
});
```

### Méthodes utiles

```js
// Lance l'audio
audio.play();

// Pause l'audio
audio.pause();
```

### Propriétés utiles

```js
// Pour récupérer ou modifier la source de l'audio, booléen
console.log(audio.src);
audio.src = "audio.mp3";

// Afficher les controles de l'audio, booléen
console.log(audio.controls);
audio.controls = true;

// Pour récupérer ou définir si l'audio est lu en boucle ou non, booléen
console.log(audio.loop);
audio.loop = true;

// Pour savoir ou indiquer si l'audio est mute, booléen
console.log(audio.muted);
audio.muted = true;

// Pour savoir si l'audio est en train de jouer ou est en pause, booléen
console.log(audio.paused);

// Récupère la durée totale de l'audio, en secondes
console.log(audio.duration);

// Pour récupérer ou modifier le moment courant dans l'audio, en secondes
console.log(audio.currentTime);
audio.currentTime = 10;

// Pour récupérerou changer le volume de l'audio, entre 0 et 1
console.log(audio.volume);
audio.volume = 1;
```

## Aller plus loin

**[Voir toutes les propriétés et méthodes](https://www.w3schools.com/jsref/dom_obj_audio.asp)** de l'élément `<audio>`

**[Tous les évènements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#events)** de l'élément `<audio>` (Documentation MDN)

**[Documentation MDN sur l'API HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)** (API Audio et Vidéo)
