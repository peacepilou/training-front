# training-front

Le projet Angular d'entraînement du module Angular : le front d'une boutique, branché sur DummyJSON, l'API d'entraînement du cours. Chaque chapitre qui fait écrire du code a sa branche, et chaque branche part de la précédente.

## À quoi il te sert

Tu écris ton propre `training-front` en suivant le cours. Celui-ci est le mien, au même point, chapitre par chapitre.

À la fin d'un chapitre, ouvre la vue « Compare » de GitHub entre la branche du chapitre précédent et celle du chapitre. Elle te montre, fichier par fichier, tout ce que le chapitre change. Pour le chapitre 05 :

https://github.com/peacepilou/training-front/compare/chapitre-04...chapitre-05

Compare ensuite avec ce que tu as écrit. Une différence de nom, un type de retour oublié, un fichier en trop : tu la vois tout de suite.

Les fichiers `.spec.ts` sont ceux que génère le CLI, complétés pour que `ng test` passe à chaque chapitre. Le chapitre 13 t'apprend à faire de même chez toi, puis à écrire de vrais tests.

## Ce qu'il te faut

- Node 22.22.3, 24.15.0 ou 26.0.0 au minimum : dans ton terminal, `node --version`.
- Le CLI Angular 22 : `npm install -g @angular/cli@22`.

## Le lancer

```bash
git clone https://github.com/peacepilou/training-front.git
cd training-front
npm install
ng serve
```

L'app répond sur `http://localhost:4200`. Pour l'arrêter : `Ctrl + C`.

Les tests : `ng test`.

## Une branche par chapitre

```bash
git switch chapitre-05
```

| Branche | Chapitre |
|---|---|
| `chapitre-02` (et `main`) | Le CLI Angular : ng new, ng serve, ng build |
| `chapitre-03` | Créer des composants et leurs templates |
| `chapitre-04` | input() et output() : faire communiquer deux composants |
| `chapitre-05` | Les signals : signal, computed, effect |
| `chapitre-06` | Le Router : routes, routerLink, guards |
| `chapitre-07` | Services et injection de dépendances |
| `chapitre-08` | Formulaires et validation avec les Signal Forms |
| `chapitre-09` | HttpClient et Observables : appeler une API |
| `chapitre-10` | Authentification : token, interceptor, localStorage |
| `chapitre-11` | Coder Angular avec l'IA : skills, MCP, relecture |
| `chapitre-12` | Bonus : @defer, lazy loading, Cypress |
| `chapitre-13` | Tester un composant et un service |

Au chapitre 12, relance `npm install` : la branche ajoute Cypress. Ses tests se lancent avec `npx cypress run`, pendant que `ng serve` tourne dans un autre terminal.

## Repartir d'un chapitre

Ton chapitre précédent n'est pas fini ? Pars de sa branche, et continue sur une branche à toi :

```bash
git switch chapitre-04
git switch -c ma-suite
npm install
```

Pour envoyer ce code sur ton dépôt GitHub : `git remote set-url origin <l'adresse de ton dépôt>`, puis `git push -u origin ma-suite`.
