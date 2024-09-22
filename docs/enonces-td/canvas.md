---
sidebar_position: 2
---

# Canvas

Création de graphiques en JS à l'aide de la balise HTML canvas

## Présentation

la balise HTML `<canvas>` nous permet de créer des images matricielles (composées de pixels) avec l'aide de l'API Canvas en Javascript. On peut alors y dessiner des graphiques et y ajouter des animations.

## L'élément `<canvas>`

La balise `<canvas>` contiendra tous les éléments de l'image, ajoutés en Javascript.

La balise possède les attributs `width` et `height` pour définir les dimensions du canvas. Par défaut, 1 unité = 1 pixel.

```html title="HTML"
<canvas id="canvas" width="100" height="100"></canvas>
```

## Dessiner sur le canvas en Javascript

```js title="Javascript"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 80, 80);
```

## Animer le canvas

On utilise `requestAnimationFrame()` pour animer le canvas. Pour plus d'informations, voir la **[section sur requestAnimationFrame()](/doc-dvpt-et-integration/docs/notions-globales/misc/animations#requestanimationframe)**.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let rectangleHeight = 0;

//On crée une fonction d'initialisation
// Cette fonction est utile si on a des éléments à initialiser avant de lancer l'animation
function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    //On réinitialise/nettoie le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // dessine un rectangle et le fait grandir
    ctx.fillRect(0, 0, 10, rectangleHeight);
    rectangleHeight += 1;
  
    //on appelle requestAnimationFrame pour dessiner la prochaine frame
    window.requestAnimationFrame(draw);
}

init();
```

Pour savoir comment arrêter l'animation, regarder la section sur les **[animations avec arrêt](/doc-dvpt-et-integration/docs/notions-globales/misc/animations#animation-avec-arrêt-1)**.

## Divers

### Manipulation des pixels pour changer les couleurs de l'image

**[Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)**