---
sidebar_position: 2
---

# Let et Const

Utiliser `let` et `const` au lieu de `var`.

Une variable constante ne peut pas être réassignée.

```js
// ✗ Ne pas écrire
var x = 5;

// ✓ Mais écrire plutôt
// highlight-next-line
const x = 5;
x = 6; //renverra une erreur

// highlight-next-line
let y = 6;
y = "hello world"; //la valeur de let peut être modifiée
```

:::tip[Astuce]

Par défaut, déclarez une constante. Cela vous permettra d'éviter des erreurs compliquées à débogguer si votre variable est modifiée sans que vous vous en soyez rendu compte. Si vous vous apercevez par la suite que vous avez besoin que votre variable change (ou que vous savez dès le début que votre variable sera menée à changer), alors modifiez-là en `let`.

:::