---
sidebar_position: 4
---

# Manipulation de tableaux

Utile pour réorganiser des tableaux de données, comme des tableaux d'objets.

## .map()
> Renvoie un nouveau tableau contenant les résultats de l'appel de la fonction passée en argument sur chaque élément du tableau.

```js
const personnages = ["Frodon","Sam","Gandalf"];
const personnagesModifies = personnages.map(perso => { `${perso} !` })
// personnagesModifies = ["Frodon !","Sam !","Gandalf !"]
```

## .filter() 

> Retourne un nouveau tableau contenant toutes les données du tableau remplissant les conditions définies dans la fonction

```js
const personnages = ["Frodon","Sam","Gandalf"];
const personnagesFiltres = personnages.filter((mot) => mot.length <= 3);
// personnages = ["Sam"]
```

## .sort()

> Trie les éléments du tableau à même le tableau et renvoie le tableau.

```js
const personnages = ["Frodon","Sam","Gandalf"];
personnages.sort();
// personnages = ["Frodon","Gandalf","Sam"]
```

On peut fournir une fonction à la méthode sort() pour préciser l'ordonnancement que l'on souhaite (**[En savoir plus](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#description)**)

## Pour aller plus loin

La **[documentation MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#m%C3%A9thodes_des_instances)** référence toutes les méthodes que l'on peut appliquer sur les tableaux en Javascript.