// Production (ng build) : l'adresse de l'API est figée dans le code au moment du build.
// Chez Camille, les trois environnements visent DummyJSON ; sur le projet d'une équipe, chacun vise son propre back.
export const environment = {
  apiUrl: 'https://dummyjson.com',
};
