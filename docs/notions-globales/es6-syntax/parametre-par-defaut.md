---
sidebar_position: 6
---

# Paramètre par défaut dans une fonction

Par défaut, la valeur des paramètres d'une fonction est `undefined`. Avec l'arrivée d'ES6, on peut désormais **définir une autre valeur par défaut à prendre en compte** pour un paramètre s'il n'a **pas de valeur fournie lors de l'appel d'une fonction**.

:::tip[utilité]
Utiliser des valeurs par défaut permet de prévenir les bugs si l'on oublie un paramètre dans l'appel d'une fonction, notamment si la fonction fait des calculs.
:::

Pour définir une valeur par défaut : dans la définition de la fonction, ajouter la valeur par défaut après un `=` au niveau du paramètre voulu, comme lors de l'affectation d'une valeur à une variable

```js
// ici, on donne une valeur par défaut de 1 à b. 
// b vaudra donc 1 si b n'est pas précisé dans l'appel de la fonction
// highlight-next-line
function multiplier(a, b = 1) {
  return a * b;
}

console.log(multiplier(5, 2));
// a = 5 et b = 2
// Affiche 10

console.log(multiplier(5));
// a = 5 et b = 1
// Affiche 5
```