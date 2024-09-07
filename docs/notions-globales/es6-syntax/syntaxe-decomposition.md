---
sidebar_position: 7
---

# Syntaxe de décomposition

`...` permet de décomposer un itérable (tableau ou objet) en chacun de ces éléments

```js
const fruits1 = ['pomme', 'kiwi'];
const fruits2 = ['ananas'];
const tousLesFruits = [...fruits1,...fruits2];
// tousLesFruits = ['pomme', 'kiwi', 'ananas']
```

## Pourquoi utiliser la syntaxe de décomposition ?

Pour créer une **copie indépendante d'un tableau ou d'un objet**.

```js
let rectangle1 = {
    longueur: 1,
    largeur: 2
}
let rectangle2 = rectangle1;
// rectangle2 = {longueur: 1,largeur: 2}
```

Maintenant, si on modifie `rectangle2` :

```js
rectangle2.longueur = 3;
// rectangle2 = {longueur: 3,largeur: 2}
// rectangle1 = {longueur: 3,largeur: 2}
```

L'objet initial, `rectangle1`, est aussi modifié : `rectangle2` est en réalité une référence qui va vers `rectangle1`, ce n'est pas un tout nouvel objet indépendant qui est créé.

L'opérateur de décomposition nous permet alors de **créer un tout nouvel objet** à partir du premier, et pas seulement une référence vers le premier objet. Ça nous évite de faire des erreurs en modifiant un objet original sans le vouloir.

```js
let rectangle1 = {
    longueur: 1,
    largeur: 2
}

let rectangle3 = {...rectangle1};
rectangle3.longueur = 3;
// rectangle3 = {longueur: 3,largeur: 2}
// rectangle1 = {longueur: 1,largeur: 2}
```