---
sidebar_position: 3
---

# Boucles

## La méthode .forEach()

```js
const fruits = ['pomme', 'kiwi', 'ananas'];

fruits.forEach((fruit, index) => {
    console.log(`fruit ${index} : ${fruit}`);
})

fruits.forEach(fruit => {
    console.log(fruit);
})
```

## Boucle for...of

```js
const fruits = ['pomme', 'kiwi', 'ananas'];

for (const fruit of fruits) {
  console.log(fruit);
}
```