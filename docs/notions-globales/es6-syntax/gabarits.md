---
sidebar_position: 3
---

# Gabarits

```js
`Pour insérez une ${variable} à l'intérieur d'une chaine de caractère`
```

Les gabarits permettent d'inclurent des variables ou expressions à l'intérieur d'une chaine de caractère.

Comment l'utiliser : 
- on utilise des *backticks* ``` `` ``` à la place des guillemets simples `''` ou doubles `""` pour écrire sa chaine de caractères. 
- à l'intérieur des backticks, on utilise `${}` pour imbriquer ses expressions.

Pour construire la chaine finale, tous les éléments présents à l'intérieur des backticks sont concaténés. Les gabarits permettent donc de faire de la concaténation très facilement et en rendant le code plus lisible : 

```js
const a = 5;
const b = 8;

// ✗ Ne pas écrire
const resultatAddition = a + ' + ' + b + ' vaut ' + (a + b) + '.';

// ✓ Mais plutôt
// highlight-next-line
const resultatAdditionGabarit = `${a} + ${b} vaut ${a+b}.`;
// 5 + 8 vaut 13.
```

## Compléments

Exemples en ajoutant des fonctions et opérateurs dans les gabarits : 

```js
const addition = (a,b) => {
    return a + b;
}
console.log(`Le résultat de l'addition est ${addition(1,2)}.`);

const nombreDeVies = 3;
console.log(`Vous ${nombreDeVie > 0 ? 'êtes toujours vivant !' : 'avez perdu.'}`);
// Vous êtes toujours vivant !
```

:::tip[Info]

Les gabarits acceptent les retours à la ligne.

```js
const texte = `Ceci est un texte
avec un retour à la ligne`;
// Ceci est un texte
// avec un retour à la ligne
```

:::