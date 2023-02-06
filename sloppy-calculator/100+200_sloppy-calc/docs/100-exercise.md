# Ekino Live Coding : The Sloppy Calculator

## Règles de l'exercice

- Expliquez à voix haute votre raisonnement, même s'il n'est pas mûr.
- Google autorisé uniquement pour des recherches sur de la syntaxe liée à HTML / CSS / JS / TS. C'est-à-dire qu'il n'est pas possible de rechercher : "JavaScript calculator".
- N'hésitez pas à poser des questions à votre examinateur plutôt que de rester bloqué(e).

## Objectif

On vous a remis une archive contenant une base de code HTML/CSS/TS. Le tout fonctionne avec Vite.

Votre but est de faire en sorte que la calculatrice fonctionne comme une calculatrice "normale". Pour vous guider dans cette tâche, une série d'instructions (facultatives) vous attend ci-dessous.

### Bonus

S'il vous reste du temps et que la calculatrice fonctionne normalement, voici des pistes bonus :

- Embellir la calculatrice avec du CSS
  - Remplacer le tableau HTML par une grille CSS
- Afficher un historique des oprérations
- Améliorer le code
  - Utiliser des classes...

## Aide

Les fichiers importants sont :

``` shell
src/main.ts
src/style.css
index.html
```

Pour la résolution de cet exercice, vous n'avez pas besoin de créer de fichier supplémentaire.

Vous pouvez lancer l'environnement de développement avec la commande `npm run dev`.

## Instructions

> Tout au long de l'exercice, faite part de vos observations et de votre réflexion à votre examinateur.

1. Avant de commencer à coder, faite un état des lieux. Lancez l'application et testez là. Qu'est-ce qui fonctionne ou ne fonctionne pas ?
2. Analysez le code dans le fichier `main.ts`. Est-il suffisant pour faire fonctionner la calculatrice ? Sinon, que manque-t-il ?
   1. Est-ce que `btn.value` renvoit bien la valeur du bouton ?
   2. Comment afficher le résultat de l'opération ?
3. Maintenant que vous arrivez à afficher un résultat, comment faire pour réinitialiser la calculatrice et enchaîner les opérations ?
4. Félicitations ! Si vous êtes arrivé jusqu'ici c'est que la calculatrice fonctionne. S'il vous reste du temps, lancez vous dans les bonus !
