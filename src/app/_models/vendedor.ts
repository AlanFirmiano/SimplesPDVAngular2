import {Endereco} from "./endereco";
import {Contato} from "./contato";

export class Vendedor {
  id: number;
  nome: string;
  endereco: Endereco = new Endereco();
  contato: Contato = new Contato();

}
