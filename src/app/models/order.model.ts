// POST /carts/add : une ligne de commande
export type OrderLine = {
  id: number;
  quantity: number;
};

// La commande créée, avec le total calculé par le serveur
export type Order = {
  id: number;
  total: number;
  totalQuantity: number;
};
