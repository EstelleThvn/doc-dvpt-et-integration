---
sidebar_position: 4
---

# Les fonctions fléchées

> Les fonctions fléchées permettent d'avoir une syntaxe plus courte que les fonctions traditionelles.

Elles sont utilisées pour les fonctions courtes, avec peu d'instructions.

```js
// Fonction traditionelle
function addition(a,b) {
    return a + b;
}

// Fonction fléchée
const additionFlechee = (a,b) => {
    return a + b;
}
// Ici, (a,b) => {return a + b;} est la fonction flechée.

console.log(additionFlechee(1,2));
```

:::note[Info]
Une fonction fléchée peut être encore plus raccourcie avec différentes syntaxes : 

```js
// Les accolades et le mot return peuvent être enlevés si la fonction n'a pas d'instructions autre que le return
(a,b) => a+b;
// équivalent à
(a,b) => {
    return a+b;
};

// Parenthèses non nécessaires quand il n'y a qu'un seul paramètre
a => a*a;

// Parenthèses vides quand il n'y a aucun paramètre
() => {return "rien";}
```
:::

## Exemple

```js
const fruits = ['pomme', 'kiwi', 'ananas', 'poire'];

// ✗ Ne pas écrire
const fruitsNombresLettres = mfruits.map(function(fruit) {
    return fruit.length;
});

// ✓ Mais écrire plutôt
const totalLettres = fruits.map((fruit) => fruit.length);
```