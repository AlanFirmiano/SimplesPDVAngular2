import {Endereco} from "./endereco";
import {Contato} from "./contato";

export class Empresa {
  id: number;
  nome: string;
  endereco: Endereco = new Endereco();
  contato: Contato = new Contato();
}
