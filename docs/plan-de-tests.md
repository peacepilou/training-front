# Plan de tests de training-front

| Fonctionnalité | Scénario | Entrée (jeu d'essai) | Attendu | Obtenu | Statut | Écart |
|---|---|---|---|---|---|---|
| Ajout d'un produit | Un produit faux est refusé | nom « Ta », prix 0, stock 2.5 | erreurs `minLength`, `min`, `wholeNumber` ; formulaire invalide | les trois erreurs ; invalide | OK · ProductForm › refuse un nom trop court, un prix nul et un stock décimal | — |
| Ajout d'un produit | Un produit juste passe | nom « Tacos al pastor », prix 6.5, stock 40 | formulaire valide | valide | OK · ProductForm › accepte un produit juste | — |
| Panier | La carte produit se fabrique | spec du CLI, sans `setInput` | le composant se crée | `NG0950: Input "product" is required` | KO, corrigé · ProductCard › should create | le spec ne donnait pas l'input obligatoire : `setInput('product', …)` ajouté avant `whenStable`, puis vert |
| Panier | Ajouter le mascara depuis sa carte | Essence Mascara Lash Princess, stock 99, un clic sur « Ajouter au panier » | 1 article ; « Dans ton panier : 1 » | 1 article ; « Dans ton panier : 1 » | OK · ProductCard › ajoute le produit au panier au clic | — |
| Connexion | Mauvais mot de passe | emilys / faux ; DummyJSON répond 400 | « Identifiant ou mot de passe incorrect. » | le message s'affiche | OK · Login › affiche le refus quand DummyJSON répond 400 | — |
| Connexion (sécurité) | Le token part vers un autre site | token « un-token » ; GET https://exemple.com/pixel | aucun en-tête `Authorization` | aucun | OK · authInterceptor › ne livre jamais le token à un autre site | — |
| Mon compte (sécurité) | Le token a expiré | token « le-token-d-hier » ; /auth/me répond 401 « Token Expired! » | déconnexion, redirection vers `/login` | token effacé ; `/login` | OK · Account › déconnecte et renvoie vers /login quand le token a expiré | — |
| Mon compte (sécurité) | Entrer sans être connecté | token absent | redirection vers `/login` | `/login` | OK · authGuard › renvoie vers /login sans token | — |
