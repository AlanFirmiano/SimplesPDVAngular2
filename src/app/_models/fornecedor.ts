import {Endereco} from "./endereco";
import {Contato} from "./contato";

export class Fornecedor {
  id: number;
  nome: string;
  razao: string;
  cnpj: string;
  endereco: Endereco = new Endereco();
  contato: Contato = new Contato();
}
