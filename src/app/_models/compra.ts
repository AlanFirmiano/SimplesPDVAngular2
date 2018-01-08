import {Fornecedor} from "./fornecedor";
import {Item} from "./item";

export class Compra {
  id: number;
  fornecedor: Fornecedor = new Fornecedor();
  itens: Item[];
  valorProdutos: number;
  desconto: number;
  totalCompra: number;
}
