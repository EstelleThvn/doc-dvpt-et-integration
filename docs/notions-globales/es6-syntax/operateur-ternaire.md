---
sidebar_position: 5
---

# Condition avec l'opérateur ternaire conditionnel

L'opérateur conditionnel permet d'écrire une condition if...else de marnière raccourcie.

Il renvoie l'une ou l'autre des deux valeurs en fonction de la condition qui précède le point d'interrogation :

`condition ? expressionSiVrai : expressionSiFaux;`

```js
// highlight-next-line
const prixEntree = entreeEstEnReduction ? '4.00 €' : '10.00 €';

//fait la même chose que 
function donnePrixEntree(estEnReduction) {
    if(estEnReduction == true) {
        return '4.00 €';
    }
    else {
        return '10.00 €';
    }
};
const prixEntreeReduite = donnePrixEntree(true);
```

## Compléments

Comme la condition retourne forcément une valeur, on l'utilise souvent en affectation d'une variable ou en valeur de retour d'une fonction.

```js
// affectation
const timerEstFini = temps === 0 ? true : false;

// valeur de retour
function timerEstFini(temps){
    return temps === 0 ? true : false;
};
```

:::warning[Attention]

Ne l'utiliser que dans des cas simples. La lecture du code devient vite compliquée si l'on imbrique des opérateurs ternaires dans des opérateurs ternaires...

```js
// ✗ À ne pas faire
const afficherMenu = utilisateurEstSurAccueil ? nombreDeLiens > 1 ? true : false : false;
```

:::