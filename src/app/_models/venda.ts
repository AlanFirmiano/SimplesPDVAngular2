import {Item} from "./item";
import {Vendedor} from "./vendedor";
import {Cliente} from "./cliente";

export class Venda {

  id: number;
  data: Date = new Date();
  itens: Item[];
  valorProdutos: number;
  desconto: number;
  valorTotal: number;
  vendedor: Vendedor = new Vendedor();
  cliente: Cliente = new Cliente();

}
