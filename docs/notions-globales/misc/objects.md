---
sidebar_position: 1
---

# Les objets

Un objet est un type de donnée Javascript. 

Un objet contient des `entrées` (aussi appelés `propriétés`) : chaque `entrée` est une association entre une `clé` et une `valeur`.

```js
const personnage = {
    prenom: "Frodon",
    nom: "Sacquet",
    peuple: "Hobbit",
    age: 21
};
```

Dans l'exemple : 
- `prenom: "Frodon"` est une entrée
- `prenom` est la clé
- `"Frodon"` est la valeur

## Créer un objet

```js
const prenom = "Frodon";

const personnage = {
    prenom: prenom,
    nom: "Sacquet",
    peuple: "Hobbit",
    age: 21
};

const objetvide = {};
```

## Lire les entrées

```js
let personnage = {
    prenom: "Frodon",
    nom: "Sacquet",
    peuple: "Hobbit",
    age: 21
};

// highlight-next-line
const age = personnage.age; 
// age = 21
```

## Modifier les entrées

```js
let personnage = {
    prenom: "Frodon",
    nom: "Sacquet",
    peuple: "Hobbit",
    age: 21
};

// highlight-next-line
personnage.prenom = "Bilbon";
// personnage = {prenom:"Bilbon", nom:"Sacquet", peuple:"Hobbit", age:21}

// highlight-next-line
personnage.possedeAnneau = true;
// personnage = {prenom:"Bilbon", nom:"Sacquet", peuple:"Hobbit", age:21, possedeAnneau:true}
```

Si la clé existe, alors la **valeur est remplacée**.

Si la clé n'existe pas encore, alors elle est **créé et la valeur lui est affectée**.

## Objets plus complexes

On peut impriquer tout type de données dans un objet : un autre objet, un tableau, un tableau d'objets...

```js
let personnage = {
    prenom: "Frodon",
    nom: "Sacquet",
    apparitionFilms: [
        {
            date: 2001,
            titre: "La Communauté de l'anneau"
        },
        {
            date: 2002,
            titre: "Les Deux Tours"
        }
        {
            date: 2003,
            titre: "Le Retour du roi"
        }
    ]
};
```

## Copier un objet

On peut utiliser l'opérateur de décomposition (introduit par ES6) pour facilement dupliquer un objet.

```js
const personnage = {
    prenom: "Frodon",
    nom: "Sacquet",
    peuple: "Hobbit",
    age: 21
};

const copie = {...personnage};
```

Voir la partie sur **[l'opérateur de décomposition](../es6-syntax/syntaxe-decomposition.md)**.

## Pour aller plus loin

**[Documentation MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Working_with_objects)** 