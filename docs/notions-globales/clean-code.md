---
sidebar_position: 3
sidebar_label: Clean Code
---

# Concepts de Clean Code

Liste non exhaustive de concepts de clean code que vous pourrez implémenter dans vos exercices.

:::tip[Objectif]

Faire du **Clean Code**, c'est écrire un code qui est clair, compréhensible, et maintenable.

> Make it work, make it right, make it fast.

Avant toute chose, il est important de rappeler qu'il est préférable d'avoir un code qui marche, que d'avoir un code propre mais qui ne marche pas. L'important est de tout d'abord faire un code qui marche, et dans un second temps d'analyser le code écrit pour le rendre plus propre : refactoriser le code dupliqué, le découper en fonctions plus petites, donner des noms plus clairs aux variables et fonctions...

:::

## Concept DRY : Don't Repeat Yourself

> ***Ne vous répétez pas.***

Ce principe permet d'**éviter la redondance** de code. Un code qui contient des morceaux dupliqués, c'est un code qui sera plus difficile à maintenir dès qu'il y aura une modification à faire.

Pour écrire un code DRY, il existe plusieurs bonnes pratiques à suivre : 
- Si une même valeur est utilisée à plusieurs endroits, ajouter une variable globale.
```js
const CalculeAire = (largeur,hauteur) => {
    return largeur * hauteur;
};

// ✗ Ne pas écrire
const AireCarre = CalculeAire(4,4);

// ✓ Mais écrire plutôt
const TAILLE = 4;
const AireCarre = CalculeAire(TAILLE,TAILLE);
```
- Si un bout de code est réutilisé à un autre endroit, il faut alors en faire une fonction.

## Principe de Séparation des préoccupations : Single Responsibility Principle

> ***Une fonction ne doit avoir qu'une seule action.***

Écrire des fonctions courtes.

Si vous écrivez une fonction qui devient de plus en plus grande, séparez-la en plus petites fonctions que l'on appelle fonctions intermédiaires.

Plus largement dans un projet, découpez vos fichiers en fonctions de leurs tâches. Un fichier ne devrait avoir qu'une responsabilité globale. Si par exemple vous commencez à accumuler plein de petites fonctions utiles (conversion, calculs mathématiques simples...), il peut être intéressant de toutes les rassembler dans un nouveau fichier `utils.js`, et d'appeler ces fonctions dans vos autres fichiers (en utilisant des [modules](https://www.w3schools.com/js/js_modules.asp)).

En plus du d'éviter la redondance (principe DRY), découper son code en plus petites fonctions rend votre code bien plus lisible (et même si cette nouvelle fonction intermédiaire n'est utilisé qu'à un seul endroit !).

:::tip[Astuce]

Si vous pensez avoir assez découpé votre code, séparez-le encore.

:::