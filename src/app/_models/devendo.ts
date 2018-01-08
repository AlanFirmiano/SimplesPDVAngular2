import {Cliente} from "./cliente";
import {Venda} from "./venda";

export class Devendo {
  id: number;
  cliente: Cliente = new Cliente();
  venda: Venda = new Venda();
  valorEntrada: number;
  status: boolean;
}
