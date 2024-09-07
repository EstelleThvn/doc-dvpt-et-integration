---
sidebar_position: 2
---

# Animations

Il existe plusieurs méthodes pour faire des animations en Javascript.

## .animate()

`animate()` permet d'animer un élément jusqu'à une valeur finale.

```js
const elementDOM = document.querySelector(".element-a-animer"); // width=0px par défaut

const valeurFinale = '200px';

let redimensionnementProgressif = elementDOM.animate({width:valeurFinale},1000);

//Une fois l'animation terminée, on affecte la valeur finale de l'animation pour ne pas retrouver la valeur du début
redimensionnementProgressif.addEventListener('finish', function(){
    elementDOM.style.width = valeurFinale;
});
```

## JS + Utilisation de transition en CSS

Assez simple à mettre en place, comme `.animate()`, mais utiliser les transitions CSS nous permet de gérer l'easing de la transition pour un meilleur rendu visuel, en utilisant des transitions css avec cubic-bezier par exemple.

```js
const elementDOM = document.querySelector(".element-a-animer"); // width=0px par défaut

const valeurFinale = '200px';

elementDOM.style.transition = '2s cubic-bezier(.4,0,.2,1)';
elementDOM.style.width = valeurFinale;
```

## .setInterval()

`setInterval()` permet d'exécuter une fonction à interval régulier, d'après le temps indiqué (en ms).
On peut donc lui indiquer un temps d'exécuter le code 24x/sec, pour avoir une animation fluide

### Animation infinie

```js
const elementDOM = document.querySelector(".element-a-animer");

setInterval(function () {
    elementDOM.style.width = `${valeurFinale}px`;
}, 1000/24);
```

### Animation avec arrêt

`setInterval()` renvoie un id. On peut l'utiliser pour lancer l'animation, puis utiliser clearInterval pour arrêter l'animation correspondant à cet id.

```js
const elementDOM = document.querySelector(".element-a-animer");

let nombreDeFrames = 0;

const intervalId = setInterval(function () {
    nombreDeFrames++;
    elementDOM.style.width = `${nombreDeFrames}px`;

    //après 2 secondes, on arrête l'animation
    if(nombreDeFrames >= 2*24) {
        clearInterval(intervalId);
    }
}, 1000/24);
```

:::warning[Attention]
    `setInterval()` peut rapidement devenir gourmand en ressources, surtout si plusieurs sont utilisés en même temps. Si vous souhaitez en utiliser plusieurs, utilisez `.requestAnimationFrame()` à la place pour améliorer les performances.
:::

## requestAnimationFrame()

> `requestAnimationFrame()` indique au navigateur qu'on souhaite exécuter une animation et demande que celui-ci exécute une fonction spécifique de mise à jour de l'animation, avant le prochain rafraîchissement à l'écran du navigateur. 

Contrairement à `setInterval()`, ici, c'est le navigateur qui a la main sur quand la prochaine mise à jour sera effectuée (en fonction du framerate de l'ordinateur et des ressources disponibles au moment de la demande de mise à jour).

- Le navigateur peut optimiser l'animation, elle sera donc plus fluide
- Dans les onglets inactifs, l'animation est mise en pause

C'est pour ces raisons de performance que `requestAnimationFrame()` est la méthode à privilégier par rapport à setInterval(). **Pour animer le `<canvas>`** par exemple, on utilise `requestAnimationFrame()` plutôt que `setInterval()`.

### Animation infinie

```js
const elementDOM = document.querySelector(".element-a-animer");

let width = 0;

function animation() {
    width++;
    elementDOM.style.width = `${width}px`;

    // Demande à exécuter de nouveau la fonction au prochain rafraîchissement de l'écran
    window.requestAnimationFrame(animation);
}

window.requestAnimationFrame(animation);
```

### Animation avec arrêt

Comme avec `setInterval()`, on peut utiliser l'id que renvoie `window.requestAnimationFrame()` pour stopper l'animation avec `window.cancelAnimationFrame(id)`.

```js
const elementDOM = document.querySelector(".element-a-animer");

let animationId;
let width = 0;

function animation() {
    width++;
    elementDOM.style.width = `${width}px`;

    // Si l'élément a atteint 200px, on arrête l'animation
    if(width >= 200) {
        window.cancelAnimationFrame(animationId);
    }
    else {
        animationId = window.requestAnimationFrame(animation);
    }
}

animationId = window.requestAnimationFrame(animation);
```