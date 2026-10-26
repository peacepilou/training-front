// Staging (ng build --configuration staging) : remplace environment.ts, voir fileReplacements dans angular.json.
// Chez Camille, les trois environnements visent DummyJSON ; sur le projet d'une équipe, ce serait le back de staging.
export const environment = {
  apiUrl: 'https://dummyjson.com',
};
