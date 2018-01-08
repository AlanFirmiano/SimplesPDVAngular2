import {Produto} from "./produto";

export class Item {
  id: number;
  produto: Produto = new Produto();
  quantidade: number;
  precoProduto: number;
  precoTotal: number;
}
