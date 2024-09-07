---
sidebar_position: 4
---

# Les fonctions fléchées

> Les fonctions fléchées permettent d'écrire une expression de fonction avec une syntaxe plus courte

:::tip
Elles sont à utiliser pour les fonctions courtes, avec peu d'instructions.
:::

Les fonctions fléchées sont souvent anonymes, c'est-à-dire qu'elle n'ont pas de nom associé

```js
// fonction non fléchée
const addition = function(a,b) {
    return a + b;
}

// équivalent en fonction fléchée
// highlight-start
const additionFlechee = (a,b) => {
    return a + b;
}
// highlight-end
// Ici, (a,b) => {return a + b;} est la fonction fléchée

console.log(additionFlechee(1,2));
// affiche 3
```

Une fonction fléchée peut être encore plus raccourcie avec différentes syntaxes : 

```js
// Les accolades et le mot return peuvent être enlevés si la fonction n'a pas d'instructions autre que le résultat renvoyé en sortie
(a,b) => a+b;
// équivalent à
(a,b) => {
    return a+b;
};

// Parenthèses non nécessaires quand il n'y a qu'un seul paramètre
a => a*a;

// Parenthèses vides quand il n'y a aucun paramètre
() => {return "rien"};
```

## Exemple

```js
const fruits = ['pomme', 'kiwi', 'ananas', 'poire'];

// ✗ Ne pas écrire
const fruitsNombresLettres = fruits.map(function(fruit) {
    return fruit.length;
});

// ✓ Mais écrire plutôt
const totalLettres = fruits.map((fruit) => fruit.length);
```

## Pour aller plus loin

**[Documentation MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)**

### Expression de fonction (fonction fléchée) vs. déclaration de fonction

Comme vu plus haut, une fonction fléchée est une `expression de fonction` avec une syntaxe plus courte.

La méthode plus "traditionnelle" pour définir une fonction est la `déclaration de fonction` :

```js
function maFonction(parametre1,parametre2) {
    // (...) instructions
    return expression;
}
```

Une expression de fonction permet aussi de définir une fonction, mais cette fois la fonction se retrouve affectée à une variable.

```js
const maFonction = (parametre1,parametre2) => {
    // (...) instructions
    return expression;
}
```

Déclaration de fonction et expression de fonction possèdent des différences :
- Une déclaration de fonction peut être appelée plus tôt que sa définition dans le code, sans erreur. 
- En revanche, une expression de fonction doit nécessairement être appelé après sa définition.

```js
hello(); // Hello World

function hello() {
  return "Hello World";
}
```

```js
hello(); // erreur

const hello = () => {
  return "Hello World";
}
```