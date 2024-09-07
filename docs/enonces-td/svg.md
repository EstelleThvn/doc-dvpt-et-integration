---
sidebar_position: 1
---

# SVG

Modification en JS d'une image vectorielle.

## Présentation

Le format vectoriel (svg) possède la même structure que le format html : on utilise des balises pour ajouter des éléments à notre image.

## L'élément `<svg>`

La balise `<svg>` englobe tous les éléments de l’image.

C'est `<svg></svg>` qui est responsable de la taille de l'image et de ses proportions.

```html
<svg width="100vw" height="100vh" viewbox="0 0 100 100">
    <!-- (...) -->
</svg>
```

### Dimensions et coordonnées

#### Dimensions et coordonnées à l'intérieur du svg

**`viewbox`** définit la position et les dimensions de la partie visible d'un SVG. Il détermine la taille relative des éléments qui l'occupent.

`viewbox="0 0 100 100"` indique que l'image démarre en haut à gauche au point de coordonnées [`0`,`0`], et que le viewport fait `100` de large et de hauteur.
- `0` → position en x du coin en haut à gauche
- `0` → position en y du coin en haut à gauche
- `100` → largeur du viewport
- `100` → hauteur du viewport

> Les éléments dessinés à l'extérieur de l'espace de la viewBox seront coupés.

#### Dimensions dans la fenêtre

**`width`** et **`height`** fixe la taille de l'élément SVG rendu sur la page.

:::tip
[`preserveAspectRatio`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) permet de garder les proportions de l'image si le ratio width:height est différent du ratio de la viewbox.

```html
<svg width="200px" height="100px" viewbox="0 0 100 100" preserveAspectRatio="xMinYMid meet">
    <!-- (...) -->
</svg>
```

:::

## Balises possibles

- `<svg>` à la racine de l’image
- `<rect>`, `<path>`, `<circle>`, `<line>`, `<image>` pour les éléments du dessin : **[Voir les formes de bases](https://igm.univ-mlv.fr/~bulteau/mmi/notes.html#formes-de-base)**
- `<g>` pour grouper des éléments : **[Voir les groupes et transformations](https://igm.univ-mlv.fr/~bulteau/mmi/notes.html#groupes-et-transformations)**
- `<use>` pour recopier une partie du dessin : **[Voir les réutilisation d’éléments](https://igm.univ-mlv.fr/~bulteau/mmi/notes.html#r%C3%A9utilisation-d%C3%A9l%C3%A9ments)**
- `<marker>` pour les pointes de flèches : **[Voir les pointes de flèches](https://igm.univ-mlv.fr/~bulteau/mmi/notes.html#pointes-de-fl%C3%A8ches)**

## Interactions en JS

```html title="index.html"
<svg width="100px" height="100px" viewbox="0 0 100 100">
</svg>
```

```js title="script.js"
const svgElement = document.querySelector("svg");

// ajout d'un élément <path> dans le svg
svgElement.innerHTML += `<path style="fill:blue;" d="M 0 0 L 10 0 L 10 100 L 0 100 L 0 0" />`;

// comme sur des balises html, on peut prévoir des évènements sur les éléments SVG
svgElement.querySelectorAll("path").forEach(path => {
    path.addEventListener("mouseenter", function(event) {
        this.style.fill = "red";
    });
});

// La propriété CSS transform peut être utile pour facilement positionner des éléments SVG ou paramétrer des animations
svgElement.innerHTML += `<rect style="fill:blue;transform:translateY(100%)scale(1,-1);" x="0" y="0" width="10" height="50" />`;
// Ici, scale(1,-1) retourne verticalement le rectangle
```