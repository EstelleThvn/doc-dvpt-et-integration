---
sidebar_position: 2
---

# Canvas

Création de graphiques en JS à l'aide de la balise HTML canvas

## Présentation

la balise HTML `<canvas>` nous permet de créer des images matricielles (composées de pixels) avec l'aide de l'API Canvas en Javascript. On peut alors y dessiner des graphiques et y ajouter des animations.

## L'élément `<canvas>`

La balise `<canvas>` contiendra tous les éléments de l'image, ajoutés en Javascript.

```html title="HTML"
<canvas id="canvas" width="100" height="100"></canvas>
```

### Système de coordonnées

Comme le format `<svg>`, le `<canvas>` possède un système de coordonnées.

La balise possède les attributs `width` et `height` pour définir les dimensions du canvas. Par défaut, 1 unité = 1 pixel.

Le point de coordonnées (0,0) se situe en haut à gauche du canvas. 

```html title="index.html"
<canvas id="canvas" width="100" height="100" style="width:400px;height:400px"></canvas>
```
```js title="script.js"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillRect(50, 20, 10, 10);
```

![Système de coordonnées](/assets/svg-canvas-coordinates-system.svg)

> Les éléments dessinés à l'extérieur de l'espace du système de coordonnées seront coupés.


## Dessiner sur le canvas en Javascript

> Pour afficher quelque chose, un script doit commencer par accéder au contexte de rendu pour pouvoir dessiner dessus.

Pour dessiner sur le canvas, on utilise un contexte de rendu en Javascript. C'est ensuite sur ce contexte que l'on va dessiner des formes. 

```js title="Javascript"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 80, 80);
```

### Formes de base

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Rectangle
ctx.fillRect(10, 10, 80, 80);

//Path
ctx.beginPath();
ctx.moveTo(125, 125);
ctx.lineTo(125, 45);
ctx.lineTo(45, 125);
ctx.closePath();
ctx.fill(); // ou ctx.stroke();

// Cercle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// Texte
ctx.font = "30px Arial";
ctx.fillText("Hello World", 10, 50); // ou ctx.strokeText("Hello World", 10, 50);
```

**[Voir la documentation complète](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)**

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

Pour en savoir plus sur les animations en canvas : voir la documentation **[basique](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations)** ou **[avancée](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)**.

## Divers

### Manipulation des pixels pour changer les couleurs de l'image

**[Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)**